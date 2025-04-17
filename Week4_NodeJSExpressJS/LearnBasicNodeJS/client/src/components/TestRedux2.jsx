import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../store/userslice";

const TestRedux2 = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-4 w-[150px] mx-auto">
      <button
        onClick={() => dispatch(login())}
        className="px-3 py-2 bg-slate-600 rounded-lg text-white hover:bg-slate-800 cursor-pointer"
      >
        Login Redux
      </button>
      <button
        onClick={() => dispatch(logout())}
        className="px-3 py-2 bg-slate-600 rounded-lg text-white hover:bg-slate-800 cursor-pointer"
      >
        Logout Redux
      </button>
    </div>
  );
};

export default TestRedux2;
