import React, { useState } from "react";

const ExerciseCard = (props) => {
  const { exercise, i } = props;
  const [setCompleted, setSetCompleted] = useState(0);

  function handleSetCompleted() {
    setSetCompleted(setCompleted + 1);
    if (setCompleted >= 5) {
      setSetCompleted(0);
    }
  }

  return (
    <div className="mx-20 p-4 rounded-md flex flex-col  bg-slate-950 sm:flex-wrap shadow-md shadow-slate-900">
      <div className="flex flex-col sm:flex-row sm:items-center sm:flex-wrap">
        <h4 className="text-3xl hidden sm:inline sm:text-4xl md:text-5xl font-semibold text-slate-400">
          0{i + 1}
        </h4>
        <h2 className="capiatlize whitespace-nowrap truncate max-w-full text-lg sm:text-xl md:text-2xl flex-1 md:text-center sm:text-center">
          {exercise.name.replaceAll("_", " ")}
        </h2>
        <p className="text-sm text-slate-400 capitalize">{exercise.type}</p>
      </div>

      <div className="flex flex-col">
        <h3 className="text-slate-400 text-sm">Muscle Group</h3>
        <p className="capitalize">{exercise.muscles.join(" & ")}</p>
      </div>

      <div className="flex flex-col bg-slate-950 rounded gap-2 my-2">
        {exercise.description.split("___").map((val, index) => {
          return (
            <div key={index} className="text-sm">
              {val}
            </div>
          );
        })}
      </div>

      <div className="mt-2 grid grid-cols-2 sm:grid-cols-4 sm:place-items-center gap-4">
        {["reps", "rest", "tempo"].map((info) => {
          return (
            <div
              key={info}
              className="flex flex-col p-2 rounded border-2 border-solid border-slate-900 w-full"
            >
              <h3>{info === "reps" ? `${exercise.unit}` : info}</h3>
              <p className="font-medium">{exercise[info]}</p>
            </div>
          );
        })}

        <button
          onClick={handleSetCompleted}
          className="text-start flex flex-col p-2 rounded border-2 duration-200 border-solid border-blue-900 hover:borer-blue-600 w-full "
        >
          <h3 className="text-slate-400 text-sm capitalize">Set Complete</h3>
          <p className="font-medium">{setCompleted} / 5</p>
        </button>
      </div>
    </div>
  );
};

export default ExerciseCard;
