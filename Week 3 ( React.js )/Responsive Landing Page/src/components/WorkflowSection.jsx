import { CheckCircle2 } from "lucide-react";
import React from "react";
import code from "../assets/code.jpg";
import { checklistItems } from "../constants";

const WorkflowSection = () => {
  return (
    <div className="mt-15">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-2 tracking-wide">
        Accelerate your
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          {" "}
          coding workflow.
        </span>
      </h2>

      <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-1/2 p-2 mt-5">
          <img src={code} alt="code" />
        </div>
        <div className="pt-2 w-full lg:w-1/2">
          {checklistItems.map((items, index) => {
            return (
              <div key={index} className="flex mb-12 mt-10">
                <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 flex justify-center items-center rounded-full">
                  <CheckCircle2 />
                </div>
                <div>
                    <h5 className="mt-1 mb-2 text-lg">{items.title}</h5>
                    <p className="text-neutral-500">{items.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WorkflowSection;
