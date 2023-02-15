import React, { useState } from "react";
import "./../App.css";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import "../CSS/Register.css";
//import GetUsers from "../Model/loadData";
// const GetUsers =  require("../Model/loadData");
function Register() {
  // const user = GetUsers.
  // console.log(user , "THIS Register")
  const [validated, setValidated] = useState(false);
  const [errorMessages, setErrorMessages] = useState({
    confirmPassword: "",
  });
  const [fromInput, setFormInput] = useState({
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
    }
    setValidated(true);
    // console.log(fromInput.password,fromInput.confirmPassword)
    // นำ email จาก register ไปตรวจสอบใน database
    // ตั้ง password 8 ตัว(ถ้าอยากจะทำ) == success
    // ตรวจ password และ confirm password ให้ตรงกัน == success

    // Variable for keep message error
    let inputError = {
      confirmPassword: "",
    };

    if (fromInput.password !== fromInput.confirmPassword) {
      setErrorMessages({
        ...inputError,
        confirmPassword: "Passwords do not match",
      });
      return;
    } else {
      // setCharactersPassword = true;
      setErrorMessages({
        ...inputError,
        confirmPassword: "",
      });
      return;
    }
  };

  // Form for login
  const formForRegister = (
    <Form noValidate validated={validated} onSubmit={validateFormInput}>
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Firstname</Form.Label>
          <Form.Control type="text" required name="firstName" />
          <Form.Control.Feedback type="invalid">
            Please enter your Firstname
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Lastname</Form.Label>
          <Form.Control type="text" required name="lastName" />
          <Form.Control.Feedback type="invalid">
            Please enter your Lastname
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" required name="email" />
          <Form.Control.Feedback type="invalid">
            Please enter your email
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" pattern="[0-9]{10}" name="phone" required/>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" required name="address" />
        <Form.Control.Feedback type="invalid">
          Please enter your Address
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          required
          value={fromInput.password}
          pattern="[A-Za-z0-9_@#.$!^&*%+-]{8,100}"
          onChange={({ target }) => {
            handleUserInput(target.name, target.value);
          }}
        />
        {fromInput.password.length < 8 ? (
          <Form.Control.Feedback type="invalid">
            Passwords length must ne atleast 8 characters
          </Form.Control.Feedback>
        ) : null}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Confirm Password</Form.Label>
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
            Passwords do not match
          </Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );

  return (
    <div className="App">
      <div className="Register__form">
        <div className="Register__title">Register</div>
        {formForRegister}
        {/* {isSubmitted ? <div>Register Success</div> : formForRegister} */}
      </div>
    </div>
  );
}

export default Register;
