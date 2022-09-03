import React from "react";

import whois from "../assets/whois.jpg";

const WhoIs = () => {
  return (
    <section id="whois" className="lg:h-[100vh] bg-primary">
      <div className="w-11/12 lg:w-10/12 text-white  mx-auto flex flex-col lg:flex-row justify-between items-center py-10 h-full lg:space-x-4">
        <div className="lg:w-1/2 md:w-3/5">
          <h2 className="font-extrabold 2xl:leading-tight text-2xl lg:text-3xl 2xl:text-[6em] pb-5 lg:pb-10 text-left">
            {/*DevAlot <span className="text-primary font-thin ">Digital</span>{" "} c'est quoi au juste ?*/}
            A propos de
            <span className="text-secondary"> nous !</span>
          </h2>
          <div className="text-sm 2xl:text-3xl 2xl:mt-10">
            <p className="2xl:leading-normal">
              DevAlot Digital est une agence digitale sénégalaise spécialisée
              dans le web fondé par deux étudiants en cursus d'informatique.
            </p>{" "}
            <br />
            <p className="2xl:leading-normal">
              Le nom DevAlot, signifie litteralement : "Develop a lot" en
              anglais, ce nom fait allusion à l'aide que l'on peut apporter aux
              entreprises qui cherchent à se développer voir s'étendre du point
              de vue digital mais il témoigne aussi de notre passion pour les
              métiers du Web (notamment le developpement web), qui sont de nos
              jours indispensables à l'expansion des entreprises qui se disent
              modernes.
            </p>
            <br />
            <p className="2xl:leading-normal">
              C'est ainsi que le 8 juin 2022 nous avons décider de nous lancer
              dans cette aventure qui nous excite plus que tout. Nous espérons
              vous compter parmi nos futurs clients !
            </p>
          </div>
        </div>
        <div className="hidden lg:block">
          <img
            src={whois}
            alt="ordinateur"
            className="md:w-[400px] xl:w-[500px] 2xl:w-[800px]"
          />
        </div>
      </div>
    </section>
  );
};

export default WhoIs;
