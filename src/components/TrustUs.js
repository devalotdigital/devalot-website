import React from "react";

import creativite from "../assets/créativité.png";
import efficacite from "../assets/efficacité.png";
import pratique from "../assets/pratique.png";

const TrustUs = () => {
  return (
    <section className="bg-trustus bg-cover  h-[100vh] w-full ">
      <div className="absolute bg-secondary h-full w-full opacity-50"></div>
      <div className="lg:w-10/12 mx-auto flex justify-between items-center h-full ">
        <h2 className="text-6xl w-9/12 font-extrabold z-10 text-white ">
          Faites nous confiance, <br /> on se charge de tout!
        </h2>
        <div className="z-10 space-y-10 ">
          <div className="card">
            <div className="title-box">
              <h3 className="card-title">Efficacité</h3>
              <img src={efficacite} alt="" />
            </div>
            <p>
              Faire les bons choix tout en maximisant les résultats attendus.
            </p>
          </div>

          <div className="card">
            <div className="title-box">
              <h3 className="card-title">Créativité</h3>
              <img src={creativite} alt="" />
            </div>
            <p>
              Proposer des solutions qui vont faire la satisfaction du client.
            </p>
          </div>

          <div className="card">
            <div className="title-box">
              <h3 className="card-title">Flexibilité</h3>
              <img src={pratique} alt="" />
            </div>
            <p>S'adapter à la situation pour répondre aux besoins du client.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustUs;
