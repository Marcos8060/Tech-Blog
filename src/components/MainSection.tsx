import React from "react";
import img1 from "../images/h.jpg";

const MainSection = () => {
  return (
    <>
      <section className="relative">
        <img
          className="rounded-xl h-[40vh] w-full object-cover"
          src={img1.src}
          alt=""
        />
        <p className="absolute text-white bottom-12 left-5 font-thin">Travel</p>
        <p className="absolute text-white bottom-5 left-5 font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum...
        </p>
      </section>
    </>
  );
};

export default MainSection;
