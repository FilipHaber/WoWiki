import { Routes, Route } from "react-router-dom";

import Header from "../components/Header.jsx";
import Home from "../views/Home.jsx";
import Footer from "../components/Footer.jsx";
import Tdh from "../views/Tdh.jsx";
import Person from "../views/Person.jsx";
import PersonById from "../views/PersonById.jsx";
import Dashboard from "../views/Dashboard.jsx";
import AdminDashboard from "../views/AdminDashboard.jsx";
import Mentions from "../views/Mentions.jsx";
import ProtectedAdminRoute from "../hoc/ProtectedAdminRoute.jsx";
import ProtectedUserRoute from "../hoc/ProtectedUserRoute.jsx";
function Router() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="specialisations" element={<Tdh />} />
        <Route path="classes" element={<Person />} />
        <Route path="classes/:id" element={<PersonById />} />
        <Route
          path="dashboard"
          element={<ProtectedUserRoute component={Dashboard} />}
        />
        <Route
          path="dashboard-admin"
          element={<ProtectedAdminRoute component={AdminDashboard} />}
        />
        <Route
          path="*"
          element={
            <main>
              <p>Cette page n'existe pas</p>
            </main>
          }
        />
        <Route path="informations-legales" element={<Mentions />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Router;
