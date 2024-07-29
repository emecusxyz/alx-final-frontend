import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
// import { jwtDecode } from "jwt-decode";
import { Button } from "react-bootstrap";
import useAuth from "../useAuth";

const cookies = new Cookies();

// const token = cookies.get("token");

// // logout
// const logout = () => {
//   // destroy the cookie
//   cookies.remove("token", { path: "/" });
//   // redirect user to the landing page

// };

const DashFooter = () => {
  const { first_name } = useAuth();
  const navigate = useNavigate();

  const logout = () => {
    // destroy the cookie
    cookies.remove("token", { path: "/" });
    // redirect user to the landing page
    navigate("/");
  };

  const content = (
    <footer>
      <p>Current user:{first_name}</p>
      <Button type="submit" variant="danger" onClick={logout}>
        Logout
      </Button>
    </footer>
  );
  return content;
};

export default DashFooter;
