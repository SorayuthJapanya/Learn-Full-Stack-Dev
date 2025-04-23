import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-main flex justify-between items-center text-content px-4 py-4 md:px-12 md:py-6">
      <Link to="/" >
        <h1 className="font-semibold tracking-wider md:text-lg lg:text-xl cursor-pointer">
          FavLink
        </h1>
      </Link>

      <div className="flex space-x-4 items-center md:text-lg">
        <Link to="/add-book">
          <p>Add Book</p>
        </Link>
        <Link to="/login">
          <p>Log in</p>
        </Link>
        <Link to="/signup">
          <p className="px-3 py-2 bg-gray-600 rounded-md hover:bg-gray-700 duration-200">Sign up</p>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
