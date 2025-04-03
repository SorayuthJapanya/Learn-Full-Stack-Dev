import React from "react";
import NavBar from "./components/NavBar";
import Herosection from "./components/Herosection";
import FeatureSection from "./components/FeatureSection";
import WorkflowSection from "./components/WorkflowSection";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <NavBar />
      <div className="max-w-7xl mx-auto pt-20 px-6 ">
        <Herosection />
        <FeatureSection />
        <WorkflowSection />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default App;
