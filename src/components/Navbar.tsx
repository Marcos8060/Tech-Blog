import React, { useState,useRef,useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Drawer from "./Drawer";
import img1 from '../assets/images/me.png';


interface NavbarProps {

}


const Navbar:React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navBackground, setNavBackground] = useState(false);

  const navRef = useRef<boolean>();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 40;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section className="flex items-center justify-between sm:px-12 px-4 py-3 bg-white rounded shadow-xl"
      >
        <div>
            <p className="font-semibold">Blog</p>
        </div>
        <nav className="md:block hidden">
          <ul className="flex items-center gap-8">
            <li className="text-secondary text-xs">
              <a href="#about" className="text-black text-sm">Home</a>
            </li>
            <li className="text-secondary text-xs">
              <a href="#experience" className="text-black text-sm">About</a>
            </li>
            <li className="text-secondary text-xs">
              <a href="#projects" className="text-black text-sm">Services</a>
            </li>
            <li className="text-secondary text-xs">
              <a href="#contact" className="text-black text-sm">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="md:hidden block">
          <AiOutlineMenu
            className="text-primary text-2xl cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
          <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </section>
    </>
  );
};

export default Navbar;
