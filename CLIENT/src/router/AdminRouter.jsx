import { Routes, Route } from "react-router-dom";

import Header from "../views/common/Header.jsx";
import Home from "../views/common/Home.jsx";
import Login from "../views/auth/Login";
import Footer from "../views/common/Footer.jsx";

function Router() {
  console.log("Admin router");
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="informations-legales" element={<Login />} />
        <Route path="*" element={<p>NOT FOUND</p>} />
      </Routes>
      <Footer />
    </>
  );
}

export default Router;
