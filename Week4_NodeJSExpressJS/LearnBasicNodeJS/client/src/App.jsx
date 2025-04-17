import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import FormProduct from "./components/FormProduct";
import FormEditProduct from "./components/FormEditProduct";
import TestRedux1 from "./components/TestRedux1";
import TestRedux2 from "./components/TestRedux2";

// Pages
import Authen from "./components/pages/authen/Authen";

// User
import HomePageUser from "./components/pages/user/HomePageUser";

const App = () => {

  return (
    <BrowserRouter>
      <main className="flex flex-col w-full h-screen items-center bg-slate-100">
        <div className="flex flex-col mx-auto max-w-[1140px] w-full text-center">
          {/* <div className="flex flex-col m-6 gap-4">
              <TestRedux1 />
              <TestRedux2 />
            </div> */}
          <Routes>
            <Route path="/" element={<FormProduct />} />
            <Route path="/edit/:id" element={<FormEditProduct />} />
          </Routes>
        </div>
        {/* Public */}
        <Routes>
          <Route path="/authen" element={<Authen />} />

          {/* User */}
          <Route path="/user/index" element={<HomePageUser />} />

        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
