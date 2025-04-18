import React from "react";
import { Outlet } from "react-router-dom";

const AdminRoutes = ({ children }) => {
  return (
    <div className="flex flex-col mx-auto max-w-[1140px] w-full text-center">
      {/* <div className="flex flex-col m-6 gap-4">
        <TestRedux1 />
        <TestRedux2 />
      </div> */}

      { children }
    </div>
  );
};

export default AdminRoutes;
