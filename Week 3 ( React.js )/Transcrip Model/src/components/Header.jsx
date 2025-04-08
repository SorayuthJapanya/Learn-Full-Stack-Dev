import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center gap-4 p-4">
      <a href="/"><h1 className="font-medium">
        Tran<span className="span bold">scipe</span>
      </h1></a>
      <a href="/" className="special-btn flex items-center gap-2 cursor-pointer">
        <p>New</p>
        <i className="fa-solid fa-plus"></i>
      </a>
    </header>
  );
};

export default Header;
