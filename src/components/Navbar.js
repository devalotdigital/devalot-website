import React from "react";

const Navbar = () => {
  return (
    <header className="absolute w-full text-white z-50">
      <nav className="font-extrabold flex justify-between lg:w-10/12 mx-auto pt-5 ">
        <h1 className="text-4xl">
          DevAlot <span className="font-light text-primary">Digital</span>
        </h1>
        <ul className="text-xl flex space-x-9">
          <li>
            <a href="#accueil" className="uppercase">
              Accueil
            </a>
          </li>
          <li>
            <a href="#services" className="uppercase">
              Nos Services
            </a>
          </li>
          <li>
            <a href="#contacts" className="uppercase">
              Contacts
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
