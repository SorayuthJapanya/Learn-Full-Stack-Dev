import React, { useState } from "react";
import Transcription from "./Transcription";
import Translation from "./Translation";

const Information = () => {
  const [tap, setTap] = useState("transcription");
  return (
    <div className="flex-1 p-4 flex flex-col text-center gap-3 sm:gap-4 justify-center pb-20 w-fit max-w-full mx-auto">
      <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl">
        Your <span className="span bold font-semibold">Transciption</span>
      </h1>
      <div className="grid grid-cols-2 items-center text-center mx-auto bg-white border border-solid border-blue-400 shadow rounded-full overflow-hidden w-">
        <button
          onClick={() => setTap("transcription")}
          className={`px-4 py-2 cursor-pointer duration-200  
    ${
      tap === "transcription"
        ? "bg-blue-400 text-white"
        : "text-blue-400 hover:text-blue-600"
    }`}
        >
          Transcription
        </button>
        <button
          onClick={() => setTap("translation")}
          className={`px-4 py-2 cursor-pointer duration-200 
    ${
      tap === "translation"
        ? "bg-blue-400 text-white"
        : "text-blue-400 hover:text-blue-600"
    }`}
        >
          Translation
        </button>
      </div>

      {tap === "transcription" ? <Transcription /> : <Translation />}
    </div>
  );
};

export default Information;
