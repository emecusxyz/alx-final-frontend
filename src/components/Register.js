import React, { useState, useContext, useCallback } from "react";
import { Form, Button } from "react-bootstrap";
import { Container, Col, Row } from "react-bootstrap";
import { MyContext } from "../AppContext";
import axios from "axios";
import Alert from "react-bootstrap/Alert";

export default function Register() {
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);
  const [registerError, setRegisterError] = useState(false);

  // const {
  //   registerUser,
  //   setIsRegisterLoading,
  //   isRegisterLoading,
  //   message,
  //   setMessage,
  //   person,
  //   setPerson,
  //   registerError,
  //   setRegisterError,
  //   body,
  //   setBody,
  //   registerInfo,
  //   updateRegisterInfo,
  // } = useContext(MyContext);

  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();
    const body = {
      first_name,
      last_name,
      email,
      password,
    };
    // make a popup alert showing the "submitted" text
    //alert("Submited", body);
    console.log("Submited=", body);

    // setBody(body);
    // registerUser();

    // set configurations
    const configuration = {
      method: "post",
      url: "https://alx-final-backend.onrender.com/register",
      data: {
        first_name,
        last_name,
        email,
        password,
      },
    };

    // make the API call
    axios(configuration)
      .then((result) => {
        console.log(result);
        setRegister(true);
      })
      .catch((error) => {
        console.log(error);
        setRegisterError(error.response.data.message);
      });

    setFirst_name("");
    setLast_name("");
    setEmail("");
    setPassword("");
  };

  return (
    <Container>
      <Row>
        <Col>Register</Col>
        <Col>
          {registerError && <Alert variant="danger">{registerError}</Alert>}
          <h2>Register</h2>
          <Form onSubmit={(e) => handleSubmit(e)}>
            {/* First_name */}
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                value={first_name}
                onChange={(e) => setFirst_name(e.target.value)}
                placeholder="Enter firstname"
              />
            </Form.Group>
            {/* Last_name */}
            <Form.Group controlId="formBasicText">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                value={last_name}
                onChange={(e) => setLast_name(e.target.value)}
                placeholder="Enter lastname"
              />
            </Form.Group>

            {/* email */}
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
              />
            </Form.Group>

            {/* password */}
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </Form.Group>

            {/* submit button */}
            <Button
              variant="primary"
              type="submit"
              onClick={(e) => handleSubmit(e)}
            >
              Register
            </Button>
          </Form>{" "}
          {/* {registerError?.error && <p> {registerError?.message}</p>}
      {isRegisterLoading ? "creating your account" : "Register"} */}
          {/* display success message */}
          {register ? (
            <p className="text-success ">You Are Registered Successfully</p>
          ) : (
            <p className="text-danger ">You Are Not Registered</p>
          )}
        </Col>
        <Col>
          <Row></Row>
        </Col>
      </Row>
    </Container>
  );
}
