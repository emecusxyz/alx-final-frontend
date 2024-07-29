import React from "react";
import { Link } from "react-router-dom";
const DashHeader = () => {
  const content = (
    <div>
      <Link to="/user">User</Link>
    </div>
  );
  return content;
};

export default DashHeader;
