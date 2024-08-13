import { Routes, Route } from "react-router-dom";

import Banned from "../components/Banned";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

function Router() {
  console.log("Guest router");
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
