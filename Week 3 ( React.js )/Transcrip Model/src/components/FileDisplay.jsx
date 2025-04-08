import React from "react";

const FileDisplay = (props) => {
  const { handleAudioReset, file, audioStream, handleFormSubmission } = props;

  return (
    <main className="flex-1 p-4 flex flex-col text-center gap-3 sm:gap-4 justify-center pb-20 w-fit max-w-full mx-auto">
      <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl">
        Your <span className="span bold font-semibold">File</span>
      </h1>
      <div className="flex items-center mx-auto gap-2 text-left mt-4">
        <h3 className="font-semibold">Name: </h3>
        <p>{file ? file?.name : 'Custom Audio'}</p>
      </div>
      <div className="flex justify-between items-center gap-4 mt-4">
        <button onClick={handleAudioReset} className="text-slate-400 cursor-pointer special-btn hover:text-blue-600">
          Reset
        </button>
        <button onClick={handleFormSubmission} className="special-btn cursor-pointer hover:text-white hover:bg-blue-400 hover:outline-none flex items-center gap-2 font-medium">
          <p>Transcripe</p>
          <i className="fa-solid fa-feather"></i>
        </button>
      </div>
    </main>
  );
};

export default FileDisplay;
