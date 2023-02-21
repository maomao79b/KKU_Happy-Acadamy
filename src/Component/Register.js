import React, { useEffect, useState } from "react";
import "./../App.css";
import { Card, Form, Button, Row, Col } from "react-bootstrap";
import "../CSS/Register.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import swal from "sweetalert";
function Register() {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [fromInput, setFormInput] = useState({
    username: "",
    name: "",
    surname: "",
    address: "",
    t_address: "",
    a_address: "",
    p_address: "",
    zipcode: "",
    tel: "",
    password: "",
    confirmPassword: "",
  });
  const handleUserInput = (name, value) => {
    setFormInput({
      ...fromInput,
      [name]: value,
    });
  };
  const validateFormInput = async (event) => {
    // prevent page reload
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      // await registerCustomer(fromInput);
      await checkRegister(fromInput, navigate);
      setValidated(false);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("loginStatus") === "true") {
      navigate("/home");
    }
  }, [navigate]);

  const formForRegister = (
    <Card className="register-card">
      <Card.Body>
        <Card.Title className="register-card-title">สมัครสมาชิก</Card.Title>
        <Form
          className="register-form"
          noValidate
          validated={validated}
          onSubmit={validateFormInput}
        >
          <Row>
            <Form.Group as={Col}>
              <Form.Label className="register-form-label">ชื่อ</Form.Label>
              <Form.Control
                className="register-form-input"
                type="text"
                pattern="^[^0-9]+$"
                required
                name="name"
                onChange={({ target }) => {
                  handleUserInput(target.name, target.value);
                }}
              />
              <Form.Control.Feedback type="invalid">
                กรุณากรอกชื่อ
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label className="register-form-label">นามสกุล</Form.Label>
              <Form.Control
                className="register-form-input"
                type="text"
                pattern="^[^0-9]+$"
                required
                name="surname"
                onChange={({ target }) => {
                  handleUserInput(target.name, target.value);
                }}
              />
              <Form.Control.Feedback type="invalid">
                กรุณากรอกนามสกุล
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col}>
              <Form.Label className="register-form-label">เบอร์โทร</Form.Label>
              <Form.Control
                className="register-form-input"
                type="text"
                pattern="[0-9]{9,10}"
                name="tel"
                required
                onChange={({ target }) => {
                  handleUserInput(target.name, target.value);
                }}
              />
              <Form.Control.Feedback type="invalid">
                กรุณากรอกเบอร์โทร
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col}></Form.Group>
          </Row>

          <Form.Group>
            <Form.Label className="register-form-label">ที่อยู่</Form.Label>
            <Form.Control
              className="register-form-input"
              type="text"
              required
              name="address"
              onChange={({ target }) => {
                handleUserInput(target.name, target.value);
              }}
            />
            <Form.Control.Feedback type="invalid">
              กรุณากรอกที่อยู่
            </Form.Control.Feedback>
          </Form.Group>

          <Row>
            <Form.Group as={Col}>
              <Form.Label className="register-form-label">ตำบล</Form.Label>
              <Form.Control
                className="register-form-input"
                type="text"
                pattern="^[^0-9]+$"
                required
                name="t_address"
                onChange={({ target }) => {
                  handleUserInput(target.name, target.value);
                }}
              />
              <Form.Control.Feedback type="invalid">
                กรุณากรอกตำบล
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label className="register-form-label">อำเภอ</Form.Label>
              <Form.Control
                className="register-form-input"
                type="text"
                pattern="^[^0-9]+$"
                required
                name="a_address"
                onChange={({ target }) => {
                  handleUserInput(target.name, target.value);
                }}
              />
              <Form.Control.Feedback type="invalid">
                กรุณากรอกอำเภอ
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col}>
              <Form.Label className="register-form-label">จังหวัด</Form.Label>
              <Form.Control
                className="register-form-input"
                type="text"
                pattern="^[^0-9]+$"
                required
                name="p_address"
                onChange={({ target }) => {
                  handleUserInput(target.name, target.value);
                }}
              />
              <Form.Control.Feedback type="invalid">
                กรุณากรอกจังหวัด
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label className="register-form-label">
                รหัสไปรษณีย์
              </Form.Label>
              <Form.Control
                className="register-form-input"
                type="text"
                pattern="[0-9]{5}"
                required
                name="zipcode"
                onChange={({ target }) => {
                  handleUserInput(target.name, target.value);
                }}
              />
              <Form.Control.Feedback type="invalid">
                กรุณากรอกรหัสไปรษณีย์
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Form.Group>
            <Form.Label className="register-form-label">ชื่อผู้ใช้</Form.Label>
            <Form.Control
              className="register-form-input"
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

          <Form.Group>
            <Form.Label className="register-form-label">รหัสผ่าน</Form.Label>
            <Form.Control
              className="register-form-input"
              type="password"
              name="password"
              required
              value={fromInput.password}
              pattern="[A-Za-z0-9_@#.!^&*%+-=()]{8,100}"
              onChange={({ target }) => {
                handleUserInput(target.name, target.value);
              }}
            />
            {fromInput.password.length < 8 ? (
              <Form.Control.Feedback type="invalid">
                รหัสผ่านต้องมีอย่างน้อย 8 อักขระ
              </Form.Control.Feedback>
            ) : null}
          </Form.Group>

          <Form.Group>
            <Form.Label className="register-form-label">
              ยืนยันรหัสผ่าน
            </Form.Label>
            <Form.Control
              className="register-form-input"
              type="password"
              required
              name="confirmPassword"
              value={fromInput.confirmPassword}
              pattern={fromInput.password}
              onChange={({ target }) => {
                handleUserInput(target.name, target.value);
              }}
            />
            <Form.Control.Feedback type="invalid">
              รหัสผ่านไม่ตรงกัน
            </Form.Control.Feedback>
          </Form.Group>

          <Row style={{ marginTop: "20px", textAlign: "center" }}>
            <Col>
              <Button variant="primary" type="submit">
                สมัครสมาชิก
              </Button>
            </Col>
          </Row>

          <Row style={{ marginTop: "20px" }}>
            <Link to="/" style={{ textDecoration: "none" }}>
              เข้าสู่ระบบ
            </Link>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );

  return <div className="register-container">{formForRegister}</div>;
}

export default Register;

async function registerCustomer(fromInput, navigate) {
  await axios
    .post("/customers", fromInput)
    .then(async (res) => {
      console.log(res.data);
      await swal({
        title: "ลงทะเบียนสำเร็จ",
        icon: "success",
        buttons: false,
        timer: 2000,
      });
      navigate("/");
    })
    .catch((error) => {
      swal(`Error ${error["request"]["status"]} - ${error["request"]["statusText"]}`, "เกิดข้อผิดพลาด", "error");

    });
}

function checkRegister(fromInput, navigate) {
  swal({
    text: "ยืนยันการลงทะเบียนใช่หรือไม่",
    // buttons: true,
    buttons: ["ยกเลิก", "ตกลง"],
  }).then((register) => {
    if (register) {
      registerCustomer(fromInput, navigate)
      
    }
  });
}
