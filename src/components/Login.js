import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Container, Col, Row } from "react-bootstrap";
import axios from "axios";
import Alert from "react-bootstrap/Alert";

import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(null);
  const [loginError, setLoginError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();
    const body = {
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
      url: "http://localhost:5000/login",
      data: {
        email,
        password,
      },
    };

    // make the API call
    axios(configuration)
      .then((result) => {
        localStorage.setItem("User", JSON.stringify(result));
        setUser(result);
        console.log("token", result.data.token);
        console.log("name", result.data.data[0].first_name);
        setLogin(true);
        // set the cookie
        const obje = {
          TOKEN: result.data.token,
          name: result.data.data[0].first_name,
        };
        cookies.set("token", result.data.token, {
          path: "/",
        });
        navigate("/welcome");
      })
      .catch((error) => {
        console.log(error);
        setLoginError(error.response.data.message);
      });

    setEmail("");
    setPassword("");
  };

  return (
    <Container>
      {loginError && <Alert variant="danger">{loginError}</Alert>}
      <Form onSubmit={(e) => handleSubmit(e)}>
        {/* email */}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
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
            name="password"
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
          Login
        </Button>
      </Form>
      {/* display success message */}
      {login ? (
        <p className="text-success">You Are Logged in Successfully</p>
      ) : (
        <p className="text-danger">You Are Not Logged in</p>
      )}
    </Container>
  );
};

export default Login;
