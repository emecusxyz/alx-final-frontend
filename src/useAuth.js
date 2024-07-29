import React from "react";
import { jwtDecode } from "jwt-decode";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const token = cookies.get("token");

const useAuth = () => {
  if (token) {
    const decoded = jwtDecode(token);

    const { user } = decoded;
    console.log("bcbcdss", decoded);
    console.log("userrrr", user);
    const { first_name } = user;
    return { first_name };
  }
  return { first_name: "" };
};

export default useAuth;
