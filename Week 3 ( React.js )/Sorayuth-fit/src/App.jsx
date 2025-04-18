import React, { useState } from "react";
import Generator from "./components/Generator";
import Hero from "./components/Hero";
import Workout from "./components/Workout";
import { generateWorkout } from "./utils/functions";

const App = () => {
  const [workout, setWorkout] = useState(null);
  const [poison, setPoinson] = useState("individual");
  const [muscles, setMuscles] = useState([]);
  const [goals, setGoals] = useState("strength_power");

  function updateWorkout() {
    if (muscles.length < 1) {
      return;
    }

    let newWorkout = generateWorkout({poison, muscles, goals});
    console.log(newWorkout);
    setWorkout(newWorkout);

    window.location.href = "#workout";
  }

  return (
    <main className="min-h-screen felx flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base">
      <Hero />
      <Generator
        poison={poison}
        setPoinson={setPoinson}
        muscles={muscles}
        setMuscles={setMuscles}
        goals={goals}
        setGoals={setGoals}
        updateWorkout={updateWorkout}
      />
      {workout && (<Workout workout={workout} />)}
      
    </main>
  );
};

export default App;
