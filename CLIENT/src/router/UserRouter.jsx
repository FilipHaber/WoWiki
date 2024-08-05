import { Routes, Route } from "react-router-dom";

import Header from "../views/common/Header.jsx";
import Home from "../views/common/Home.jsx";
import Footer from "../views/common/Footer.jsx";
import Login from "../views/auth/Login";
import Register from "../views/auth/Register.jsx";

function Router() {
  console.log("User router");
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Router;
