import React from "react";
import img1 from "../images/code3.jpg";

const data = [
  {
    id: 1,
    img: img1,
    category:'Tech',
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.F",
  },
  {
    id: 1,
    img: img1,
    category:'Tech',
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.F",
  },
  {
    id: 1,
    img: img1,
    category:'Tech',
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.F",
  },
  {
    id: 1,
    img: img1,
    category:'Tech',
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.F",
  },
  {
    id: 1,
    img: img1,
    category:'Tech',
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.F",
  },
  {
    id: 1,
    img: img1,
    category:'Tech',
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.F",
  },
  {
    id: 1,
    img: img1,
    category:'Tech',
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.F",
  },
  {
    id: 1,
    img: img1,
    category:'Tech',
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.F",
  },
];

const RightBar = () => {
  return (
    <>
      <section className="bg-white rounded h-[80vh] py-3 px-2">
        <h1 className="font-bold text-center mb-4 border-b border-black">
          Top Blogs
        </h1>
        <div className="space-y-4 rightSection h-[70vh]">
          {data.map((datum) => (
            <section className="flex items-center gap-2 cursor-pointer" key={datum.id}>
              <div className="w-4/12">
                <img className="rounded object-cover" src={datum.img.src} alt="" />
              </div>
              <div className="w-8/12">
                <p className="text-sm font-semibold">{datum.category}</p>
                <p className="text-xs">
                  {datum.desc}
                </p>
              </div>
            </section>
          ))}
        </div>
      </section>
    </>
  );
};

export default RightBar;
