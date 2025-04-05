import React from "react";

const Main = (props) => {

  const {handleToggleModal} = props;

  return (
    <div className="bg-[url(/src/assets/mars.jpg)] bg-cover bg-bottom bg-repeat w-full h-screen">
      <div onClick={handleToggleModal} className="w-full h-screen bg-gradient-to-b from-black to-neutral-800 opacity-50"></div>
    </div>
  );
};

export default Main;
