import { Routes, Route } from "react-router-dom";

import Header from "../components/Header.jsx";
import Home from "../components/Home.jsx";
import Footer from "../components/Footer.jsx";
import Login from "../views/auth/Login";
import Register from "../views/auth/Register.jsx";
import Tdh from "../components/Tdh.jsx";
import Person from "../components/Person.jsx";
import PersonById from "../components/PersonById.jsx";

function Router() {
  console.log("Guest router");
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="specialisations" element={<Tdh />} />
        <Route path="classes" element={<Person />} />
        <Route path="classes/:id" element={<PersonById />} />
        <Route path="*" element={<p>NOT FOUND</p>} />
      </Routes>
      <Footer />
    </>
  );
}

export default Router;
