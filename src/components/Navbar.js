import React from "react";

const Navbar = ({ isNavOpen, setIsNavOpen }) => {
  return (
    <header
      className={`${
        isNavOpen
          ? "fixed -top-[1000px] backdrop-blur-3xl bg-black duration-700 w-full text-white z-20 lg:px-0 overflow-hidden"
          : "fixed top-0 backdrop-blur-3xl bg-black duration-300 w-full text-white z-20 lg:px-0 overflow-hidden"
      }`}
    >
      <nav className="font-bold flex justify-between items-center w-11/12 lg:w-10/12 mx-auto py-4 relative">
        <h1 className="text-xl lg:text-2xl">
          DevAlot <span className="font-light text-primary">Digital</span>
        </h1>
        <ul className="lg:text-[1em] text-xs flex space-x-9 hidden lg:flex">
          <li>
            <a href="#accueil" className="uppercase navlink">
              Accueil
            </a>
          </li>
          <li>
            <a href="#whois" className="uppercase navlink">
              Qui somme nous
            </a>
          </li>
          <li>
            <a href="#services" className="uppercase navlink">
              Nos Services
            </a>
          </li>
          <li>
            <a href="#contacts" className="uppercase navlink">
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
