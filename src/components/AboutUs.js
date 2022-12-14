import React from "react";

import who from "../assets/who.svg";

const WhoIs = () => {
  return (
    <section
      id="whois"
      className="h-[100%] xl:h-[100vh] bg-gradient-to-b from-primary to-blueish "
    >
      <div className="w-11/12 lg:w-10/12 text-white  mx-auto flex flex-col-reverse xl:flex-row-reverse justify-between items-center py-10 h-full lg:space-x-4 lg:gap-10">
        <div className="xl:w-1/2 w-full">
          <h2
            className="font-extrabold 2xl:leading-tight text-2xl lg:text-5xl 2xl:text-[6em] pb-5 lg:pb-10 text-center lg:text-left"
            data-aos="fade-up"
          >
            A propos de
            <span className="text-white"> nous</span>
          </h2>
          <div className="text-sm lg:text-base 2xl:text-3xl 2xl:mt-10 text-justify">
            <p className="2xl:leading-normal" data-aos="fade-up">
              DevAlot Digital est une agence digitale sénégalaise spécialisée
              dans le web fondée par un groupe de passionnés des métiers du
              digital.
            </p>{" "}
            <br />
            <p className="2xl:leading-normal" data-aos="fade-up">
              DevAlot, signifie litteralement : "Develop a lot" en anglais, cela
              fait allusion à l'aide que l'on peut apporter aux entreprises qui
              cherchent à se développer voir s'étendre du point de vue digital
              mais il témoigne aussi de notre passion pour les métiers du Web
              (notamment le developpement web), qui sont à notre humble avis
              indispensables de nos jours à l'expansion des entreprises qui se
              disent modernes.
            </p>
            <br />
            <p className="2xl:leading-normal" data-aos="fade-up">
              C'est ainsi que nous avons décider de nous lancer dans cette
              aventure qui nous excite plus que tout. Nous espérons vous compter
              parmi nos futurs clients !
            </p>
          </div>
        </div>
        <div className="w-[70%] md:w-1/2" data-aos="fade-right">
          <img src={who} alt="about us" />
        </div>
      </div>
    </section>
  );
};

export default WhoIs;
