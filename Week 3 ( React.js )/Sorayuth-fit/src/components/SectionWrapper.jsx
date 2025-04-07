import React from "react";

const SectionWrapper = (props) => {
  const { children, header, title, id } = props;

  return (
    <section id={id} className="min-h-screen flex flex-col gap-10 ">
      <div className="bg-slate-950 py-10 flex flex-col gap-4 items-center justify-center">
        <p className="uppercase font-medium">{header}</p>
        <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl ">
          {title[0]} <span className="text-blue-400 uppercase">{title[1]}</span>{" "}
          {title[2]}
        </h2>
      </div>
      <div className="w-full flex flex-col gap-10">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
