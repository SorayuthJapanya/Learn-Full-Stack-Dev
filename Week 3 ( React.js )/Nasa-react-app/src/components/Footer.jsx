import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = (props) => {

  const { handleToggleModal} = props;

  return (
    <footer>
      <div className="absolute bottom-10 sm:bottom-15 lg:bottom-22 left-5 w-full h-16 text-white">
        <div className="flex justify-between items-center ">
          <div>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-semibold my-2">
              Mars Landscape
            </h2>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold my-2">
              APOS PROJECT
            </h1>
          </div>
          <div>
            <button  onClick={handleToggleModal} className="absolute right-10 border-none outline-none cursor-pointer text-xl lg:text-2xl hover:text-neutral-400">
              <i className="fa-solid fa-circle-info"></i>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
