import React, { useState } from "react";
import "./../App.css";
import "../CSS/Login.css";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

var sendToken;
function Login() {
  const [validated, setValidated] = useState(false);
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
    } else {
      getTokenLogin(user);
    }
    setValidated(true);
  };

  const formForLogin = (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>ชื่อผู้ใช้</Form.Label>
        <Form.Control
          type="text"
          required
          name="username"
          // isInvalid={false}
          onChange={({ target }) => {
            handleUserInput(target.name, target.value);
          }}
        />
        <Form.Control.Feedback type="invalid">
          กรุณากรอกชื่อผู้ใช้
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>รหัสผ่าน</Form.Label>
        <Form.Control
          type="password"
          required
          name="password"
          onChange={({ target }) => {
            handleUserInput(target.name, target.value);
          }}
        />
        <Form.Control.Feedback type="invalid">
          กรุณากรอกรหัสผ่าน
        </Form.Control.Feedback>
      </Form.Group>

      <Row className="justify-content-center">
        <Col xs="auto">
          <Button
            variant="primary"
            type="submit"
            style={{ height: "50px", textAlign: "center", textJustify: "auto" }}
          >
            เข้าสู่ระบบ
          </Button>
        </Col>
      </Row>
    </Form>
  );

  return (
    <div className="App">
      <div className="Login__form">
        {/* <div className="Login__title">เข้าสู่ระบบ</div> */}
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
      console.log("Login Success");
    })
    .catch((error) => {
      console.error(error);
    });
}

// function checkValidity(){

// }
