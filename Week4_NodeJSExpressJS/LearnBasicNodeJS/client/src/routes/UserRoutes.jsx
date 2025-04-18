import React from "react";
import { useSelector } from "react-redux";
import Notfound404 from "../components/pages/Notfound404";

const UserRoutes = ({ children }) => {

  const user = useSelector((state) => state.user);
  // console.log("User Routes", user);
  const text = "Please login first"
  return user && user.token 
  ? children
  : <Notfound404 text={text} />
};

export default UserRoutes;
