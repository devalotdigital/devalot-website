import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import creativite from "../assets/créativité.png";
import efficacite from "../assets/efficacité.png";
import pratique from "../assets/pratique.png";

const TrustUs = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      // disable: "mobile",
    });
  }, []);

  return (
    <section className="py-10 bg-teamwork bg-center bg-cover bg-no-repeat relative  w-full h-[100vh]">
      <div className="lg:w-10/12 w-11/12 mx-auto flex flex-col lg:flex-row lg:justify-between items-center h-full space-y-10 lg:space-y-0 lg:space-x-0">
        <h2
          data-aos-duration="800"
          data-aos="fade-right"
          className="lg:text-6xl 2xl:text-[6em] text-center lg:text-left text-3xl md:w-9/12 font-extrabold z-10 text-white"
        >
          Faites nous confiance, <br className="hidden sm:block" /> on se charge
          de tout!
        </h2>
        <div
          className="z-10 space-y-10  lg:space-x-0 flex flex-col items-center lg:flex-col lg:justify-between  w-full lg:w-fit"
          data-aos="fade-left"
          data-aos-offset="200"
        >
          <div className="card">
            <div className="title-box">
              <h3 className="card-title">Efficacité</h3>
              <img
                src={efficacite}
                alt="éfficacité"
                className="w-10 2xl:w-20"
              />
            </div>
            <p className="card-text">
              Faire les bons choix tout en maximisant les résultats attendus.
            </p>
          </div>

          <div className="card">
            <div className="title-box">
              <h3 className="card-title">Créativité</h3>
              <img
                src={creativite}
                alt="créativité"
                className="w-10 2xl:w-20"
              />
            </div>
            <p className="card-text">
              Proposer des solutions qui vont faire la satisfaction du client.
            </p>
          </div>

          <div className="card">
            <div className="title-box">
              <h3 className="card-title">Flexibilité</h3>
              <img src={pratique} alt="flexibilité" className="w-10 2xl:w-20" />
            </div>
            <p className="card-text">
              S'adapter à la situation pour répondre aux besoins du client.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustUs;
