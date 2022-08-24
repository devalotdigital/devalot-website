import React from "react";

const Sidebar = ({ isNavOpen, setIsNavOpen }) => {
  const open =
    "fixed top-0 right-0 duration-700 font-white backdrop-blur-3xl  z-50";
  const close =
    "fixed top-0 -right-[1000px] opacity-0 duration-700 font-white backdrop-blur-3xl  z-50";
  return (
    <div className={`${isNavOpen ? open : close}`}>
      <ul className="flex flex-col items-center font-extrabold h-[100vh] w-[100vw] text-center text-white justify-center space-y-10 lg:hidden">
        <li onClick={() => setIsNavOpen(false)}>
          <a href="#accueil" className="uppercase navlink">
            Accueil
          </a>
        </li>
        <li onClick={() => setIsNavOpen(false)}>
          <a href="#whois" className="uppercase navlink">
            Qui somme nous
          </a>
        </li>
        <li onClick={() => setIsNavOpen(false)}>
          <a href="#services" className="uppercase navlink">
            Nos Services
          </a>
        </li>
        <li onClick={() => setIsNavOpen(false)}>
          <a href="#contacts" className="uppercase navlink">
            Contacts
          </a>
        </li>
      </ul>

      <div
        className="absolute  space-y-5 top-2 right-0 z-50"
        onClick={() => setIsNavOpen(false)}
      >
        <svg
          className="h-12 w-12 text-primary mr-3 cursor-pointer"
          viewBox="0 0 24 24"
          fill="primary"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </div>
    </div>
  );
};

export default Sidebar;
