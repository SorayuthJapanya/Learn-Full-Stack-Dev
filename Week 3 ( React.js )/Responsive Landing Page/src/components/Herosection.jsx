import React from "react";

import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const Herosection = () => {
  return (
    <div className="felx flex-col items-center mt-1 lg:mt-8">
      {/* Title */}
      <h1 className="text-4xl sm:text-6xl lg:text-8xl text-center tracking-wide">
        VitualR build tools
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          {" "}
          for developers
        </span>
      </h1>
      <p className="mt-10 text-center px-auto text-lg text-neutral-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aut labore
        accusamus repellendus. Quidem quis exercitationem quod doloremque harum
        voluptas distinctio, nesciunt atque ducimus iure accusamus quibusdam
        fugit error autem.
      </p>

      {/* Link */}
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 px-3 py-2 rounded-md mx-3"
        >
          Start for free
        </a>
        <a href="#" className="px-3 py-2 mx-3 border rounded-md">
          Documentation
        </a>
      </div>

      {/* Loop Video */}
      <div className="flex justify-center mt-15">
        <video
          autoPlay
          loop
          muted
          className="rounded-md w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" /> Your browser does not support
          the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-md w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" /> Your browser does not support
          the video tag.
        </video>
      </div>
    </div>
  );
};

export default Herosection;
