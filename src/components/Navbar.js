import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../assets/avatar.png";

const Navbar = ({ isNavOpen, setIsNavOpen }) => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      disable: "mobile",
    });
  }, []);

  return (
    <header
      data-aos="fade-down"
      className={`${
        isNavOpen
          ? "fixed -top-[1000px] backdrop-blur-3xl duration-700 w-full text-white z-20 lg:px-0 overflow-hidden"
          : "fixed top-0 backdrop-blur-3xl bg-white duration-300 w-full text-white z-20 lg:px-0 overflow-hidden"
      }`}
    >
      <nav className="font-bold flex justify-between items-center w-11/12 lg:w-10/12 mx-auto py-2 relative">
        <p className="text-xl lg:text-2xl 2xl:text-5xl text-black">
          {/* DevAlot <span className="font-light text-primary">Digital</span> */}
          <img src={logo} alt="" className="w-[45px]" />
        </p>
        <ul className="lg:text-[1em] 2xl:text-3xl text-xs text-black flex space-x-9 hidden lg:flex">
          <li>
            <a href="#accueil" className="navlink">
              Accueil
            </a>
          </li>
          <li>
            <a href="#whois" className="navlink">
              A propos
            </a>
          </li>
          <li>
            <a href="#services" className="navlink">
              Nos Services
            </a>
          </li>
          <li>
            <a href="#contacts" className="navlink">
              Contacts
            </a>
          </li>
        </ul>

        <div
          className="space-y-2 flex items-end lg:hidden flex-col cursor-pointer z-50"
          onClick={() => {
            setIsNavOpen((prev) => !prev);
          }}
        >
          <span className="w-9 h-1 bg-primary block"></span>
          <span className="w-6 h-1 bg-primary block"></span>
          <span className="w-3 h-1 bg-primary block"></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
