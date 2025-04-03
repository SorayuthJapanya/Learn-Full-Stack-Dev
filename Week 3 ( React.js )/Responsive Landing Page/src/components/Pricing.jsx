import { CheckCircle2 } from "lucide-react";
import React from "react";
import { features, pricingOptions } from "../constants";

const Pricing = () => {
  return (
    <div className="mt-15">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Pricing
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => {
          return (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-10 border border-neutral-700 rounded-xl">
                {/* Title */}
                <p className="text-3xl mb-8">
                  {option.title}
                  {option.title === "Pro" && (
                    <span className="bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text text-lg my-4 ml-2">
                      (Most Popular)
                    </span>
                  )}
                </p>
                {/* Price */}
                <p className="mb-8">
                  <span className="text-5xl mt-6 mr-2">{option.price}</span>
                  <span className="text-neutral-400 tracking-tight">
                    {" "}
                    /Month
                  </span>
                </p>
                {/* Feature */}
                <ul>
                  {option.features.map((features, index) => {
                    return (
                      <li key={index} className="mt-8 flex items-center">
                        <CheckCircle2 />
                        <span className="ml-2">{features}</span>
                      </li>
                    );
                  })}
                </ul>
                <a
                  href="#"
                  className="inline-flex justify-center items-center text-center w-full h-10 mt-16 tracking-tight text-xl border border-orange-900 hover:bg-orange-900 rounded-lg transition duration-200"
                >
                  Subscribe
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
