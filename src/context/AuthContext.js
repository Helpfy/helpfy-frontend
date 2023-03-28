import React, { useEffect, useState } from "react";
import { googleLogout } from "@react-oauth/google";

export const AuthContext = React.createContext(null);

export const ContextProvider = (props) => {
  const [user, setUser] = useState({});
  const [token, setToken] = useState({});

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")) || undefined;
    const token = JSON.parse(localStorage.getItem("token")) || undefined;
    setStateAuth({ user, token });
  }, []);

  const setStateAuth = (info) => {
    setUser(info.user);
    setToken(info.token);
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setStateAuth({ user: undefined, token: undefined });
    googleLogout();
  };

  const login = (response) => {
    const { user, token } = response;
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", JSON.stringify(token));
    setStateAuth({ user, token });
  };

  const values = {
    user: user,
    token: token,
    logoutUser: logout,
    loginUser: login,
  };

  return (
    <AuthContext.Provider value={values}>{props.children}</AuthContext.Provider>
  );
};
