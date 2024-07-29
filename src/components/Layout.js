import { Outlet, Link } from "react-router-dom";
import { useRef } from "react";
import Footer from "./Footer";
import Timer from "./Timer";

const Layout = () => {
  return (
    <div className="wrapper">
      <div className="tim">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
        <Timer />
      </div>

      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
