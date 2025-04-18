import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import { authCurrentAdmin } from "../functions/Authen";
import Notfound404 from "../components/pages/Notfound404";

const AdminRoutes = ({ children }) => {
  const user = useSelector((state) => state.user);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (user && user.token) {
      authCurrentAdmin(user.token)
        .then((res) => {
          setIsAdmin(true);
        })
        .catch((error) => {
          console.log(error);
          setIsAdmin(false);
        });
    }
  }, [user]);

  // console.log("Admin Route: ", user.role);

  const text = "You are not a Admin!!"

  return isAdmin ? (


    <div className="flex flex-col mx-auto max-w-[1140px] w-full text-center">
      {children}
    </div>
  ) : (
    <Notfound404 text={text}/>
  );
};

export default AdminRoutes;
