import React from "react";
import { useSelector } from "react-redux";

const UserRoutes = ({ children }) => {

  const { user } = useSelector((state) => ({
    ...state
  }))
  console.log("User Routes", user);
  return user && user.token 
  ? children
  : <h1>Error 404</h1>
};

export default UserRoutes;
