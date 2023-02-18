import React, { useState } from "react";
import "./../App.css";
import "../CSS/Login.css";
import axios from "axios";
import { Card, Form, Button, Row, Col } from "react-bootstrap";

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
    <Card>
      <Card.Body>
        <Card.Title style={{textAlign:"center"}}>เข้าสู่ระบบ</Card.Title>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formUsername">
            <Form.Label>ชื่อผู้ใช้</Form.Label>
            <Form.Control
              type="text"
              required
              name="username"
              onChange={({ target }) => {
                handleUserInput(target.name, target.value);
              }}
            />
            <Form.Control.Feedback type="invalid">
              กรุณากรอกชื่อผู้ใช้
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
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
            <Col xs="12" sm="auto">
              <Button variant="primary" type="submit">
                เข้าสู่ระบบ
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );

  return formForLogin;
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

