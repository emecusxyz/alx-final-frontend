import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const Prevent = () => {
  // const navigate = useNavigate();
  const token = cookies.get("token");

  const content = token ? <Navigate to="/welcome" replace /> : <Outlet />;

  return content;
};

export default Prevent;
