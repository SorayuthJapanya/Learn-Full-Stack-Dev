import React from "react";

const Transcribing = (props) => {
  const { downloading } = props;
  return (
    <div className="flex flex-col justify-center items-center gap-10 md:gap-14 pb-36 flex-1">
      <div className="flex-flex-col text-center gap-2 sm:gap-4 ">
        <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl">
          Tran<span className="span bold font-semibold">scribing</span>
        </h1>
        <p className="mt-4 italic">
          {!downloading ? "warning up cylinders" : "core cylinders engage"}
        </p>
      </div>
      <div className="flex flex-col gap-2 sm:gap-4 max-w-[400px] w-full mx-auto">
        {[0, 1, 2].map((val) => {
          return (
            <div
              key={val}
              className={
                "rounded-full h-2 sm:h-3 bg-slate-400 loading " +
                `loading${val}`
              }
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Transcribing;
