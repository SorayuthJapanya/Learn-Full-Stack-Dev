import React, { useState } from "react";
import SideBar from "./components/SideBar";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  function handleToggleModal() {
    setShowModal(!showModal);
  }

  return (
    <div className="flex relative">
      <Main handleToggleModal={handleToggleModal}/>
      {showModal && <SideBar handleToggleModal={handleToggleModal} />}
      <Footer handleToggleModal={handleToggleModal}/>
    </div>
  );
};

export default App;
