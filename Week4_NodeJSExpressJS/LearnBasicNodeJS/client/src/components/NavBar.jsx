import React from "react";
import logo from "/lines.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="w-full h-20 bg-slate-900 px-10 flex items-center">
      <div className="max-w-[1140px] w-full mx-auto flex items-center justify-between ">
        <div className="flex items-center">
          <a
            href="/"
            className="text-xl font-semibold flex items-center text-slate-100"
          >
            <img src={logo} alt="logo" className="w-10 h-10" />
            Euro
          </a>
        </div>
        <div>
          <ul className="flex gap-4 sm:gap-6 lg:gap-8 text-white font-semibold">
            <a
              href="/"
              className="hover:text-slate-600 cursor-pointer duration-200"
            >
              Home
            </a>
            <a
              href="#"
              className="hover:text-slate-600 cursor-pointer duration-200"
            >
              Services
            </a>
            <a
              href="#"
              className="hover:text-slate-600 cursor-pointer duration-200"
            >
              Products
            </a>
            <a
              href="#"
              className="hover:text-slate-600 cursor-pointer duration-200"
            >
              Contact Us
            </a>
          </ul>
        </div>
        <div>
          <Link to={'/authen'}>
            <div className="flex gap-4">
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-1 text-white font-semibold px-3 py-2 bg-violet-800 rounded-lg cursor-pointer hover:bg-slate-800 duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    className="w-5 h-5 fill-white"
                  >
                    <path d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z" />
                  </svg>
                  Sign In
                </button>
                <button className="flex items-center gap-1 text-white font-semibold px-3 py-2 bg-violet-800 rounded-lg cursor-pointer hover:bg-slate-800 duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    className="w-5 h-5 fill-white"
                  >
                    <path d="M720-400v-120H600v-80h120v-120h80v120h120v80H800v120h-80Zm-360-80q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm80-80h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0-80Zm0 400Z" />
                  </svg>
                  Register
                </button>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
