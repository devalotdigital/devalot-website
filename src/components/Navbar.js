import React from "react";
import logo from "../assets/logo.png";

const Navbar = ({ isNavOpen, setIsNavOpen }) => {
  return (
    <header
      className={`${
        isNavOpen
          ? "fixed -top-[1000px] duration-700 w-full text-white z-20 lg:px-0 overflow-hidden"
          : "fixed top-0  backdrop-blur-[10px] bg-blueish/50 duration-300 w-full text-white z-20 lg:px-0 overflow-hidden"
      }`}
    >
      <nav className="font-bold flex justify-between items-center w-11/12 lg:w-10/12 mx-auto py-2 relative ">
        <div className="text-xl lg:text-2xl 2xl:text-5xl text-white flex items-center gap-2">
          <img src={logo} alt="" className="w-[50px]" />
          <p className="leading-6">
            DevAlot <br /> <span className="font-light">Digital</span>
          </p>
        </div>
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
              Services
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
          <span className="w-9 h-1 bg-white block"></span>
          <span className="w-9 h-1 bg-white block"></span>
          <span className="w-9 h-1 bg-white block"></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
