import React from "react";

const Button = (props) => {

    const { text, func } = props;

  return (
    <button onClick={func} className="px-8 py-4 mx-auto rounded-md cursor-pointer bg-slate-800 hover:bg-slate-900 border-2 border-blue-900 outline-none transition-all duration-200 ease-in-out flex items-center gap-2 shadow-[0_5px_10px_rgba(8,_112,_184,_0.7)] hover:shadow-[0_10px_20px_rgba(8,_112,_184,_0.7) ">
      <p>{text}</p>
    </button>
  );
};

export default Button;
