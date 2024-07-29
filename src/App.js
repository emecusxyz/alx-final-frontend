import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Layout from "./components/Layout";
import NoPage from "./components/NoPage";
import DashLayout from "./components/DashLayout";
import Protect from "./components/Protect";
import Prevent from "./components/Prevent";
import Add from "./components/Add";
import Mydatapage from "./components/Mydatapage";
import Welcome from "./Welcome";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<Prevent />}>
            <Route index element={<Home />} />

            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Route>

          <Route element={<Protect />}>
            <Route path="welcome" element={<DashLayout />}>
              <Route index element={<Welcome />} />
            </Route>

            <Route path="add" element={<Add />} />
            <Route path="mydatapage" element={<Mydatapage />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
