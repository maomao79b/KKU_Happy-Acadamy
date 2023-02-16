import React, { useEffect, useState } from "react";
import "./../App.css";
import "../CSS/Login.css";
import axios from "axios";

function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  // const [isSubmitted, setIsSubmitted] = useState(false)
  const handleUserInput = (name, value) => {
    setUser({
      ...user,
      [name]: value,
    });
  };

  useEffect(() => {
    axios.post("/login", { username: user.username, password: user.password }).then((res) => {
      console.log(res.data['token'])
    });
  });

  const handleSubmit = (event) => {
    // prevent page reload
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    // let response = fetch("http://tsmapi.suksan.group/login", {

    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(user),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // console.log(user.username,user.password)
  };
  const formForLogin = (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="Login__container">
          <label>Username</label>
          <input
            type="text"
            name="username"
            required
            onChange={({ target }) => {
              handleUserInput(target.name, target.value);
            }}
          />
          {/* {renderErrorMessage("uname")} */}
        </div>
        <div className="Login__container">
          <label>Password</label>
          <input
            type="password"
            name="password"
            required
            onChange={({ target }) => {
              handleUserInput(target.name, target.value);
            }}
          />
          {/* {renderErrorMessage("upass")} */}
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
        <div className="Login__title">Login</div>
        {formForLogin}
        {/* {isSubmitted ? <div>Login Success</div> : formForLogin} */}
      </div>
    </div>
  );
}

export default Login;
