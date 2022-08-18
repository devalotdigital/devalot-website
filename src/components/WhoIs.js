import React from "react";

import whois from "../assets/whois.jpg";

const WhoIs = () => {
  return (
    <section className="h-[100vh]">
      <div className="lg:w-10/12  mx-auto flex justify-between items-center py-10 h-full">
        <div className="w-1/2">
          <h2 className="font-extrabold text-3xl pb-10 ">
            {/*DevAlot <span className="text-primary font-thin ">Digital</span>{" "} c'est quoi au juste ?*/}
            Notre parcours...
          </h2>
          <div>
            DevAlot Digital est une agence digitale sénégalaise spécialisée dans
            le web fondé par deux étudiants en deuxième année d'informatique.
            <br />
            Le nom DevAlot, signifie litteralement : "Develop a lot" en anglais,
            ce nom fait allusion à l'aide que l'on peut apporter aux entreprises
            qui cherchent à se développer voir s'étendre du point de vue digital
            mais il témoigne aussi de notre passion pour les métiers du Web
            (notamment le developpement web), qui sont de nos jours
            indispensables à l'expansion des entreprises qui se disent modernes.
            <br /> C'est ainsi que le 8 juin 2022 nous avons décider de nous
            lancer dans cette aventure qui nous excite plus que tout.
            <br /> Nous espérons vous compter parmi nos futurs clients !
          </div>
        </div>
        <div>
          <img src={whois} alt="ordinateur" className="w-[500px]" />
        </div>
      </div>
    </section>
  );
};

export default WhoIs;
