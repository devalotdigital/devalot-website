import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import mouhamad from "../assets/mouhamad.jpg";
import khadim from "../assets/khadim.jpg";

import linkedin from "../assets/linkedin-3d-blue.png";

const WhoIs = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1500,
      disable: "mobile",
    });
  }, []);

  return (
    <section id="whois" className="h-[100%] xl:h-[100vh] bg-primary">
      <div className="w-11/12 lg:w-10/12 text-white  mx-auto flex flex-col xl:flex-row-reverse justify-between items-center py-10 h-full lg:space-x-4 gap-10">
        <div className="xl:w-1/2 w-full">
          <h2 className="font-extrabold 2xl:leading-tight text-2xl lg:text-5xl 2xl:text-[6em] pb-5 lg:pb-10 text-left">
            A propos de
            <span className="text-white"> nous</span>
          </h2>
          <div className="text-sm lg:text-lg 2xl:text-3xl 2xl:mt-10 text-justify">
            <p className="2xl:leading-normal" data-aos="fade-up">
              DevAlot Digital est une agence digitale sénégalaise spécialisée
              dans le web fondé par deux étudiants en cursus d'informatique.
            </p>{" "}
            <br />
            <p className="2xl:leading-normal" data-aos="fade-up">
              Le nom DevAlot, signifie litteralement : "Develop a lot" en
              anglais, ce nom fait allusion à l'aide que l'on peut apporter aux
              entreprises qui cherchent à se développer voir s'étendre du point
              de vue digital mais il témoigne aussi de notre passion pour les
              métiers du Web (notamment le developpement web), qui sont de nos
              jours indispensables à l'expansion des entreprises qui se disent
              modernes.
            </p>
            <br />
            <p className="2xl:leading-normal" data-aos="fade-up">
              C'est ainsi que le 8 juin 2022 nous avons décider de nous lancer
              dans cette aventure qui nous excite plus que tout. Nous espérons
              vous compter parmi nos futurs clients !
            </p>
          </div>
        </div>
        <div
          className="mb-3 lg:mb-0 flex flex-col md:flex-row gap-[20px] md:gap-[100px]"
          data-aos="fade-right"
        >
          <div className="linkedin-card">
            <div className="linkedin-header">
              <img src={linkedin} alt="linkedin" className="w-[50px]" />
            </div>
            <div className="pb-4 pt-2 px-5">
              <img
                src={mouhamad}
                alt="ordinateur"
                className="linkedin-avatar"
              />
              <p className="block font-bold">Mouhamad Gueye</p>
              <p className="text-sm mb-2 w-full">
                IT Technician - Junior Full Stack Developper - Junior Graphic
                Designer
              </p>
              <a
                className="linkedin-btn"
                href="https://sn.linkedin.com/in/mouhamad-gueye-b00b31229?trk=profile-badge"
                target="_blank"
                rel="noreferrer"
              >
                Voir profil
              </a>
            </div>
          </div>

          <div className="linkedin-card">
            <div className="linkedin-header">
              <img src={linkedin} alt="linkedin" className="w-[50px]" />
            </div>
            <div className="pb-4 pt-2 px-5">
              <img src={khadim} alt="ordinateur" className="linkedin-avatar" />
              <p className="block font-bold">Khadim Gueye</p>
              <p className="text-sm mb-2 w-full">
                IT Technician -<br /> Junior Backend Developper
              </p>
              <a
                className="linkedin-btn"
                href="https://sn.linkedin.com/in/mouhamad-gueye-b00b31229?trk=profile-badge"
                target="_blank"
                rel="noreferrer"
              >
                Voir profil
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIs;
