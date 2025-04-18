import React, { useRef } from "react";
import { useState } from "react";
import { authRegister, authLogin } from "../../../functions/Authen";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login as loginRedux } from "../../../store/userslice";

const Authen = () => {
  const [activeButton, setActiveButton] = useState("login");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const roleRediret = (role) => {
    if (role === "ADMIN") {
      navigate("/admin/index");
    } else {
      navigate("/user/index");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      const data = {
        name: formData.get("name"),
        password: formData.get("password"),
        ...(activeButton === "register" && {
          confirmPassword: formData.get("confirmPassword"),
        }),
      };

      const res =
        activeButton === "login"
          ? await authLogin(data)
          : await authRegister(data);

      if (activeButton === "login") {
        const { name, role } = res.data.payload.user;
        dispatch(
          loginRedux({
            name,
            role,
            token: res.data.token,
          })
        );
        localStorage.setItem("token", res.data.token);
        roleRediret(role);
      }
      
      // console.log("Success: ", res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-r from-slate-900 to-violet-900 text-black">
      <div className="px-5 py-10 flex flex-col bg-white border border-gray-500 shadow-xl shadow-blue-500/50 rounded-xl inline-block max-w-[500px] w-full mx-auto text-center">
        <h2
          onClick={() => setActiveButton("login")}
          className="text-3xl md:text-5xl lg:text-6xl font-semibold"
        >
          {activeButton === "login" ? "Login" : "Register"}
        </h2>
        <div className="grid grid-cols-2 sm:grid-rows-1 mt-10 border border-gray-500 rounded-md ">
          <button
            onClick={() => setActiveButton("login")}
            className={`block font-medium px-3 py-4 text-black rounded-md cursor-pointer text-lg duration-200 ${
              activeButton === "login"
                ? "bg-gradient-to-r from-sky-500 to-fuchsia-900 text-white "
                : "text-black"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setActiveButton("register")}
            className={`block font-medium px-3 py-4 text-black rounded-md cursor-pointer text-lg duration-200 ${
              activeButton === "register"
                ? "bg-gradient-to-r from-sky-500 to-fuchsia-900 text-white "
                : "text-black"
            }`}
          >
            Regsiter
          </button>
        </div>
        <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            id="name"
            name="name"
            className="shadow-[0px_5px_15px_-3px_rgba(0,_0,_0,_0.1)] border border-gray-400 rounded-md px-3 py-3"
          ></input>
          <input
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            className="shadow-[0px_5px_15px_-3px_rgba(0,_0,_0,_0.1)] border border-gray-400 rounded-md px-3 py-3"
          ></input>
          {activeButton === "register" && (
            <input
              type="password"
              placeholder="Confirm Password"
              id="confirmPassword"
              name="confirmPassword"
              className="shadow-[0px_5px_15px_-3px_rgba(0,_0,_0,_0.1)] border border-gray-400 rounded-md px-3 py-3"
            ></input>
          )}
          {activeButton === "login" && (
            <p className="text-left text-violet-900">Forget Password?</p>
          )}
          <button
            type="submit"
            className="text-lg font-medium px-3 py-4 text-white rounded-md bg-gradient-to-r from-sky-500 to-fuchsia-900 cursor-pointer mt-4"
          >
            {activeButton === "login" ? "Login" : "Register"}
          </button>
        </form>
        <p></p>
      </div>
    </section>
  );
};

export default Authen;
