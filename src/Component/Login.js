import React, { useState } from "react";
import "./../App.css";
import "../CSS/Login.css";
import axios from "axios";

var sendToken;
function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleUserInput = (name, value) => {
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    // prevent page reload
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    getTokenLogin(user);
  };
  const formForLogin = (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="Login__container">
          <label>ชื่อผู้ใช้</label>
          <input
            type="text"
            name="username"
            required
            onChange={({ target }) => {
              handleUserInput(target.name, target.value);
            }}
          />
        </div>
        <div className="Login__container">
          <label>รหัสผ่าน</label>
          <input
            type="password"
            name="password"
            required
            onChange={({ target }) => {
              handleUserInput(target.name, target.value);
            }}
          />
        </div>
        <div className="Button__container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="App">
      <div className="Login__form">
        <div className="Login__title">เข้าสู่ระบบ</div>
        {formForLogin}
      </div>
    </div>
  );
}

export default Login;

export function sendLoginToken() {
  return sendToken;
}

async function getTokenLogin(user) {
  await axios
    .post("/login", { username: user.username, password: user.password })
    .then((res) => {
      sendToken = res.data["token"];
    })
    .catch((error) => {
      console.error(error);
    });
  console.log("Login Success");
}
