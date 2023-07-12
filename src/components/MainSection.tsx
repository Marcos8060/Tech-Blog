import React from "react";
import img1 from "../images/code3.jpg";
import img2 from "../images/fam.jpg";

const data = [
  {
    id: 1,
    img: img2,
    category: "Food",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis...",
  },
  {
    id: 2,
    img: img1,
    category: "Food",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis...",
  },
  {
    id: 3,
    img: img2,
    category: "Food",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis...",
  },
  {
    id: 4,
    img: img1,
    category: "Food",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis...",
  },
  {
    id: 7,
    img: img2,
    category: "Food",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis...",
  },
  {
    id: 8,
    img: img1,
    category: "Food",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis...",
  },
  {
    id: 9,
    img: img2,
    category: "Food",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis...",
  },
];

const MainSection = () => {
  return (
    <>
      <section className="h-[80vh]">
        <div className="relative">
          <img
            className="rounded-xl h-[35vh] w-full object-cover"
            src={img1.src}
            alt=""
          />
          <p className="absolute text-white bottom-12 left-5 font-thin text-sm">
            Travel
          </p>
          <p className="absolute text-white bottom-5 left-5 font-thin">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum...
          </p>
        </div>
        <div className="blogSection gap-4 py-3 h-[47vh]">
          {data.map((datum) => (
            <section className="w-full cursor-pointer" key={datum.id}>
              <img
                className="h-40 w-full object-cover rounded-t-lg"
                src={datum.img.src}
                alt=""
              />
              <div className="bg-white px-2 py-2">
                <p>{datum.category}</p>
                <p className="text-sm font-semibold">{datum.desc}</p>
              </div>
            </section>
          ))}
        </div>
      </section>
    </>
  );
};

export default MainSection;
