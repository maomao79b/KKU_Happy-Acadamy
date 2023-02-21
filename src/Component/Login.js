import React, { useEffect, useState } from "react";
import "./../App.css";
import "../CSS/Login.css";
import axios from "axios";
import { Card, Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import swal from "sweetalert";

function Login() {
  const navigate = useNavigate();
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

  useEffect(() => {
    if (localStorage.getItem("loginStatus") === "true") {
      navigate("/home");
    }
  }, [navigate]);

  const handleSubmit = async (event) => {
    // prevent page reload
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      await getTokenLogin(user,setUser,setValidated);
      if (localStorage.getItem("loginStatus") === "true") {
        navigate("/home");
      }
      setValidated(false);
    }
  };

  const formForLogin = (
    <Card className="login-card">
      <Card.Body>
        <Card.Title className="login-card-title">เข้าสู่ระบบ</Card.Title>
        <Form noValidate onSubmit={handleSubmit} className="login-form">
          <Form.Group>
            <Form.Label className="login-form-label">ชื่อผู้ใช้</Form.Label>
            <Form.Control
              className="login-form-input"
              type="text"
              required
              name="username"
              value={user.username}
              isInvalid={!Boolean(user.username) && validated}
              onChange={({ target }) => {
                handleUserInput(target.name, target.value);
              }}
            />
            <Form.Control.Feedback type="invalid">
              กรุณากรอกชื่อผู้ใช้
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Label className="login-form-label">รหัสผ่าน</Form.Label>
            <Form.Control
              className="login-form-input"
              type="password"
              required
              name="password"
              value={user.password}
              isInvalid={!Boolean(user.password) && validated}
              onChange={({ target }) => {
                handleUserInput(target.name, target.value);
              }}
            />
            <Form.Control.Feedback type="invalid">
              กรุณากรอกรหัสผ่าน
            </Form.Control.Feedback>
          </Form.Group>

          <Row style={{ marginTop: "20px", textAlign: "center" }}>
            <Col>
              <Button variant="primary" type="submit" className="btn">
                เข้าสู่ระบบ
              </Button>
            </Col>
          </Row>

          <Row style={{ marginTop: "25px", textAlign: "center" }}>
            <Link to="/register" style={{ textDecoration: "none" }}>
              สมัครสมาชิก
            </Link>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );

  // return <div className="login-container">{formForLogin}</div>;
  return (
    <div>
      <div className="bg">

      <div className="login-container">{formForLogin}</div>
      </div>
    </div>
  );
}

export default Login;

let loginStatus = null;
async function getTokenLogin(user,setUser) {
  await axios
    .post("/login", { username: user.username, password: user.password })
    .then((res) => {
      let sendToken = null;
      sendToken = res.data["token"];
      loginStatus = res.status;
      console.log(loginStatus);
      localStorage.setItem("accessToken", sendToken);
      localStorage.setItem("loginStatus", "true");
    })
    .catch((error) => {
      loginStatus = error["request"]["status"];
      localStorage.setItem("loginStatus", "false");
      let errorMessage = ""
      if(loginStatus === 401){
        errorMessage = "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง"
      }else{
        errorMessage = "เกิดข้อผิดพลาด"
      }
      swal(`Error ${error["request"]["status"]} - ${error["request"]["statusText"]}`, errorMessage, "error");
    });
}
