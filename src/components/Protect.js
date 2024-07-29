import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const Protect = () => {
  // const navigate = useNavigate();
  const token = cookies.get("token");

  const content = token ? <Outlet /> : <Navigate to="/" replace />;

  return content;
};

export default Protect;
