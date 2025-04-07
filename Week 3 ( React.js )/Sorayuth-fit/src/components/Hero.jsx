import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[900px] mx-auto w-full p-4">
      <div className="flex flex-col gap-4">
        <p>IT'S TIME TO GET</p>
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Sora
          <span className="bg-gradient-to-r from-blue-400 to-blue-800 bg-clip-text text-transparent">
            yuthfit
          </span>
        </h1>
      </div>
      <p className="text-sm md:text-base font-light">
        Achieve your best self with a workout routine designed to build
        strength, boost endurance, and{" "}
        <span className="text-blue-400 font-medium">
          improve overall well-being.
        </span>{" "}
        This fitness journey combines effective cardio, resistance training, and
        flexibility exercises tailored for{" "}
        <span className="text-blue-400 font-medium">
          all levels—whether you're just starting or pushing past a plateau.
        </span>{" "}
        With consistency, motivation, and the right mindset, every drop of sweat
        brings you one step closer to your goals. Fuel your body, challenge your
        limits,{" "}
        <span className="text-blue-400 font-medium">
          and embrace the powerful transformation that comes from within.
        </span>
      </p>

      <Button func={() => {
        window.location.href = '#generator';
      }
      } text={"Accept & Begin"} />
    </div>
  );
};

export default Hero;
