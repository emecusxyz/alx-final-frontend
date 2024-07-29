// import React from "react";
// import { Link } from "react-router-dom";

// const Home = () => {
//   const content = (
//     <section>
//       <header>
//         <h1>
//           welcome to <span className="nowrap">Exercise Metric tracker</span>
//         </h1>
//       </header>
//       <main>
//         <p>bvgjvghchgcgcgcjychvfcchfxxf</p>
//       </main>
//       <footer>
//         <Link to="/login"> Login</Link>
//       </footer>
//     </section>
//   );
//   return content;
// };

// export default Home;

import { Link } from "react-router-dom";
import React, { useRef } from "react";

let d = new Date();

const Public = () => {
  const myDivRef = useRef(null);
  const content = (
    <section className="public">
      <div className="compo">
        <header>
          <h1 className="topic">
            Welcome to <span className="nowrap">Exercise Metric tracker</span>
          </h1>
        </header>
        <main className="public__main">
          <p>
            This App is meant to help you keep record of your daily
            Exercise,remember exercise improves health,and like the saying
            goes-Health is Wealth.
          </p>

          <br />
        </main>
        <footer>
          <h6>
            &copy;Copyright <span ref={myDivRef} className="year"></span>
            {(myDivRef.current = d.getFullYear())}
          </h6>

          <div>
            <Link className="spacing" to="/login">
              {" "}
              Login
            </Link>
            |
            <Link className="spacing" to="/register">
              {" "}
              Sign up
            </Link>
          </div>

          <p>ALXSE</p>
        </footer>
      </div>
    </section>
  );
  return content;
};
export default Public;
