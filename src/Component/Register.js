import React, { useState } from "react";
import "./../App.css";
import { Card, Form, Button, Row, Col } from "react-bootstrap";
import "../CSS/Register.css";
import axios from "axios";

function Register() {
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
  const validateFormInput = (event) => {
    // prevent page reload
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      registerCustomer(fromInput);
    }
    setValidated(true);
  };

  // Form for login
  const formForRegister = (
    <Form noValidate validated={validated} onSubmit={validateFormInput}>
      {/* User's Detail */}
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>ชื่อ</Form.Label>
          <Form.Control
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
          <Form.Label>นามสกุล</Form.Label>
          <Form.Control
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

      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>เบอร์โทร</Form.Label>
          <Form.Control
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

      {/* User's Address  */}
      <Form.Group className="mb-3">
        <Form.Label>ที่อยู่</Form.Label>
        <Form.Control
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

      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>ตำบล</Form.Label>
          <Form.Control
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
          <Form.Label>อำเภอ</Form.Label>
          <Form.Control
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

      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>จังหวัด</Form.Label>
          <Form.Control
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
          <Form.Label>รหัสไปรษณีย์</Form.Label>
          <Form.Control
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

      <Form.Group className="mb-3">
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

      <Form.Group className="mb-3">
        <Form.Label>รหัสผ่าน</Form.Label>
        <Form.Control
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

      <Form.Group className="mb-3">
        <Form.Label>ยืนยันรหัสผ่าน</Form.Label>
        <Form.Control
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

      <Row className="justify-content-center">
        <Col xs="auto">
          <Button
            variant="primary"
            type="submit"
            style={{ height: "50px", textAlign: "center", textJustify: "auto" }}
          >
            ยืนยันการสมัครสมาชิก
          </Button>
        </Col>
      </Row>
    </Form>
  );

  return formForRegister;
}

export default Register;

async function registerCustomer(fromInput) {
  await axios
    .post("/customers", fromInput)
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.error(error);
    });
  console.log("Register Success");
  console.log(fromInput);
}


// import React from 'react';
// import {
//   MDBBtn,
//   MDBContainer,
//   MDBCard,
//   MDBCardBody,
//   MDBCol,
//   MDBRow,
//   MDBInput,
//   MDBCheckbox,
//   MDBIcon
// }
// from 'mdb-react-ui-kit';

// function Register() {
//   return (
//     <MDBContainer fluid>

//       <div className="p-5 bg-image" style={{backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height: '200px'}}></div>

//       <MDBCard className='mx-1 mb-2 shadow-5' style={{marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)',height:"600px"}}>
//         <MDBCardBody className='p-5 text-center'>

//           <h2 className="fw-bold mb-5">ลงทะเบียน</h2>

//           <MDBRow>
//             <MDBCol col='6'>
//               <MDBInput wrapperClass='mb-4' label='ชื่อ' id='form1' type='text'/>
//             </MDBCol>

//             <MDBCol col='6'>
//               <MDBInput wrapperClass='mb-4' label='นามสกุล' id='form1' type='text'/>
//             </MDBCol>
//           </MDBRow>

//           <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
//           <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/>

//           <div className='d-flex justify-content-center mb-4'>
//             <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
//           </div>

//           <MDBBtn className='w-100 mb-4' size='md'>ยืนยันลงทะเบียน</MDBBtn>

//         </MDBCardBody>
//       </MDBCard>

//     </MDBContainer>
//   );
// }

// export default Register;