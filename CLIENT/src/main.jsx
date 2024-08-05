import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import "./assets/styles/scss/Index.scss";
import { UserProvider } from "./store/user/Context.jsx";
import { MenuProvider } from "./store/menu/Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserProvider>
      <MenuProvider>
        <App />
      </MenuProvider>
    </UserProvider>
  </BrowserRouter>
);
