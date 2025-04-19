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

//Routes
import AdminRoutes from "./routes/AdminRoutes";
import UserRoutes from "./routes/UserRoutes";
import HomePageAdmin from "./components/pages/admin/HomePageAdmin";

// function
import { authCurrentUser } from "./functions/Authen";

import { useDispatch } from "react-redux";
import { login } from "./store/userslice";

import Notfound404 from "./components/pages/Notfound404";
import NavBar from "./components/NavBar";
import HomePage from "./components/pages/HomePage";

const App = () => {
  const dispatch = useDispatch();

  const idToken = localStorage.getItem("token");
  // console.log("token: ", idToken);

  authCurrentUser(idToken)
    .then((res) => {
      // console.log(res);
      dispatch(
        login({
          name: res.data.name,
          role: res.data.role,
          token: idToken,
        })
      );
    })
    .catch((err) => console.log(err));

  return (
    <BrowserRouter>
      <main className="flex flex-col w-full h-screen items-center bg-slate-100">
        <NavBar />
        {/* Public */}
        <Routes>
          <Route path="/authen" element={<Authen />} />
          <Route path="/" element={<HomePage />} />
          <Route
            path="*"
            element={
              <Notfound404 text="The page you're looking for doesn't exist." />
            }
          />

          {/* User */}
          <Route
            path="/user/index"
            element={
              <UserRoutes>
                <HomePageUser />
              </UserRoutes>
            }
          />

          {/* Admin */}
          <Route
            path="/admin/index"
            element={
              <AdminRoutes>
                <HomePageAdmin />
              </AdminRoutes>
            }
          />
          <Route
            path="/admin/table"
            element={
              <AdminRoutes>
                <FormProduct />
              </AdminRoutes>
            }
          />
          <Route
            path="/edit/:id"
            element={
              <AdminRoutes>
                <FormEditProduct />
              </AdminRoutes>
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
