import React from "react";
import SectionWrapper from "./SectionWrapper";
import ExerciseCard from "./ExerciseCard";

const Workout = (props) => {
  const { workout } = props;

  return (
    <SectionWrapper
      id={"workout"}
      header={"Welcome to"}
      title={["The", "DENGER", "Zone"]}
    >
      <div className="flex flex-col gap-8 mb-20">
        {workout.map((exercise, i) => {
          return <ExerciseCard i={i} exercise={exercise} key={i} />;
        })}
      </div>
    </SectionWrapper>
  );
};

export default Workout;
