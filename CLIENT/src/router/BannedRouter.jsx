import { Routes, Route } from "react-router-dom";

import Banned from "../views/Banned";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

function Router() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<Banned />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Router;
