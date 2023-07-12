import React from "react";
import img1 from "../images/h.jpg";
import img2 from "../images/fam.jpg";

const MainSection = () => {
  return (
    <>
      <section className="h-[80vh]">
        <div className="relative">
          <img
            className="rounded-xl h-[40vh] w-full object-cover"
            src={img1.src}
            alt=""
          />
          <p className="absolute text-white bottom-12 left-5 font-thin">
            Travel
          </p>
          <p className="absolute text-white bottom-5 left-5 font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum...
          </p>
        </div>
        <div className="flex gap-4 py-2">
          <div className="w-1/2">
            <img
              className="h-40 w-full object-cover rounded-t-lg"
              src={img2.src}
              alt=""
            />
            <div className="bg-white px-2 py-2">
              <p>Food</p>
              <p className="text-sm font-semibold">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Perferendis...
              </p>
            </div>
          </div>
          <div className="w-1/2">
            <img
              className="h-40 w-full object-cover rounded-t-lg"
              src={img2.src}
              alt=""
            />
            <div className="bg-white px-2 py-2">
              <p>Food</p>
              <p className="text-sm font-semibold">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Perferendis...
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainSection;
