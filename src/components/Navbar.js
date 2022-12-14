import React from "react";
import logo from "../assets/logo.png";

const Navbar = ({ isNavOpen, setIsNavOpen }) => {
  return (
    <header
      className={`${
        isNavOpen
          ? "fixed -top-[1000px] duration-700 w-full text-white z-20 lg:px-0 overflow-hidden"
          : "fixed top-0  backdrop-blur-[2px] duration-300 w-full text-white z-20 lg:px-0 overflow-hidden"
      }`}
    >
      <nav className="font-bold flex justify-between items-center w-11/12 lg:w-10/12 mx-auto py-2 relative ">
        <p className="text-xl lg:text-2xl 2xl:text-5xl text-black">
          {/* DevAlot <span className="font-light text-primary">Digital</span> */}
          <img src={logo} alt="" className="w-[50px]" />
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
          <span className="w-9 h-1 bg-white block"></span>
          <span className="w-9 h-1 bg-white block"></span>
          <span className="w-9 h-1 bg-white block"></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
