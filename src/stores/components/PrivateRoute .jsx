import React from "react";
import { useNavigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  // console.log(children);
  const navigate = useNavigate();

  const isAuthenticated = localStorage.getItem("isAuthenticated");
  return isAuthenticated ? children : navigate("/");
};
