import { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import { reducer, initialState } from "./reducer";

const Context = createContext();

function UserProvider({ children }) {
  const [user, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  async function login(data) {
    dispatch({ type: "LOGIN", payload: data });
  }

  async function logout() {
    const response = await fetch("http://localhost:9000/api/auth/logout", {
      credentials: "include",
    });
    if (response.ok) {
      dispatch({ type: "LOGOUT" });
      navigate("/");
    }
  }

  async function disconnect() {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  }

  async function setUser(user) {
    dispatch({ type: "LOGIN", payload: user });
  }

  return (
    <Context.Provider value={{ user, setUser, login, logout, disconnect }}>
      {children}
    </Context.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Context, UserProvider };
