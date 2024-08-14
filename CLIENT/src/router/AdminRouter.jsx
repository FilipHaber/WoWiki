import { Routes, Route } from "react-router-dom";

import Header from "../components/Header.jsx";
import Home from "../components/Home.jsx";
import Footer from "../components/Footer.jsx";
import Tdh from "../components/Tdh.jsx";
import Person from "../components/Person.jsx";
import PersonById from "../components/PersonById.jsx";
import UserDashboard from "../views/user/Dashboard.jsx";

function Router() {
  console.log("Admin router");
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="informations-legales" element={<p>Pas fait encore</p>} />
        <Route path="specialisations" element={<Tdh />} />
        <Route path="classes" element={<Person />} />
        <Route path="classes/:id" element={<PersonById />} />
        <Route path="dashboard" element={<UserDashboard />} />
        <Route
          path="*"
          element={
            <main>
              <p>Cette page n'existe pas</p>
            </main>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default Router;
