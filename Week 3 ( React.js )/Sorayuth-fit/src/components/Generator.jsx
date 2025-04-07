import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { WORKOUTS, SCHEMES } from "../utils/sorayuthfit";
import Button from "./Button";

function Header(props) {
  const { index, title, description } = props;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-center gap-2">
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-400">
          {index}
        </p>
        <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">{title}</h4>
      </div>
      <p className="text-sm sm:text-base md:text-xl lg:text-2xl mx-auto">
        {description}
      </p>
    </div>
  );
}

const Generator = (props) => {
  const [showModal, setShowModal] = useState(false);
  const {
    poison,
    setPoinson,
    muscles,
    setMuscles,
    goals,
    setGoals,
    updateWorkout,
  } = props;

  function toggleShowModal() {
    setShowModal(!showModal);
  }

  function updateMuscles(musclesGroup) {
    if (muscles.includes(musclesGroup)) {
      setMuscles(muscles.filter((val) => val !== musclesGroup));
      return;
    }
    if (muscles.length > 2) {
      return;
    }

    if (poison !== "individual") {
      setMuscles([musclesGroup]);
      setShowModal(false);
      return;
    }

    setMuscles([...muscles, musclesGroup]);
    if (muscles.length === 2) {
      setShowModal(false);
    }
  }

  return (
    <SectionWrapper
      id={"generator"}
      header={"Workout Generator"}
      title={["It's", "Huge", "o'clock"]}
    >
      <Header
        index={"01"}
        title={"Pick Your Poison"}
        description={"Select the workout you wish to endure."}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-6 mx-20 mb-10">
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <button
              onClick={() => {
                setPoinson(type);
                setMuscles([]);
              }}
              key={typeIndex}
              className={
                "bg-slate-900 py-4 border-2 rounded-lg hover:bg-slate-800 mb-2 " +
                (type === poison ? "border-blue-400" : "border-blue-900")
              }
            >
              <p className="capitalize">{type.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>

      <Header
        index={"02"}
        title={"Lock Your targets"}
        description={"Select the muscles judged for annihilation."}
      />
      <div className="bg-slate-900 py-4 border-2 border-blue-900 rounded-lg p-8 mx-20 mb-10 relative flex flex-col">
        <button
          onClick={toggleShowModal}
          className="flex items-center justify-center cursor-pointer"
        >
          <p className="capitalize ">
            {muscles.length == 0 ? "Select Muscles Groups" : muscles.join(" ")}
          </p>
          <i className="fa-solid fa-caret-down absolute right-6 top-1/2 -translate-y-1/2 cursor-pointer"></i>
        </button>
        {showModal && (
          <div className="flex flex-col items-center mt-4 gap-4">
            {(poison === "individual"
              ? WORKOUTS[poison]
              : Object.keys(WORKOUTS[poison])
            ).map((musclesGroup, musclesGroupIndex) => {
              return (
                <button
                  onClick={() => {
                    updateMuscles(musclesGroup);
                  }}
                  key={musclesGroupIndex}
                  className={
                    "hover:text-blue-900 duration-200 cursor-pointer " +
                    (muscles.includes(musclesGroup) ? "text-blue-900" : "")
                  }
                >
                  <p className="uppercase">{musclesGroup}</p>
                </button>
              );
            })}
          </div>
        )}
      </div>

      <Header
        index={"03"}
        title={"Become Juggernaut"}
        description={"Select your ulimite objective."}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-20 mb-10">
        {Object.keys(SCHEMES).map((schemes, schemesIndex) => {
          return (
            <button
              onClick={() => {
                setGoals(schemes);
              }}
              key={schemesIndex}
              className={
                "bg-slate-900 py-4 border-2 rounded-lg hover:bg-slate-800 mb-2 " +
                (schemes === goals ? "border-blue-400" : "border-blue-900")
              }
            >
              <p className="capitalize">{schemes.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>
      <Button func={updateWorkout} text={"Formulate"} />
      <div className="mb-16"></div>
    </SectionWrapper>
  );
};

export default Generator;
