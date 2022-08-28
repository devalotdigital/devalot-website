import React from "react";

const Services = () => {
  return (
    <section id="services" className="py-10 lg:py-20 w-full h-full">
      <div className="w-11/12 lg:w-10/12 mx-auto">
        <h2 className="font-extrabold text-center text-3xl lg:text-4xl text-primary mb-4">
          <span className="font-normal text-black">Nos</span> Services
        </h2>
        <p className="text-center lg:text-xl font-thin mb-10">
          Nous vous proposons divers services pour satisfaire vos besoins
        </p>

        <div className="flex flex-col space-y-10 items-center">
          <div className="flex w-full flex-row-reverse items-center">
            <div className="service-box">
              <h3 className="service-title">
                Developpement <span className="text-primary">Web</span>
              </h3>
              <p className="service-text">
                Vous souhaitez créer un site web pour votre entreprise, mais
                vous ne savez pas à qui vous adresser ? Ne cherchez pas plus
                loin vous êtes au bon endroit ! DevAlot Digital vous propose de
                concevoir et d'héberger votre site web créer sur mesure de A à
                Z.
              </p>
            </div>
            <div className="service-number">1</div>
          </div>

          <div className="flex w-full items-center">
            <div className="service-box hover:shadow-boxl">
              <h3 className="service-title">
                Community <span className="text-primary">Management</span>
              </h3>
              <p className="service-text">
                Nous pouvons vous aidez à animer votre communauté, conquérir de
                nouveaux clients et les fidéliser. DevAlot Digital est là pour
                assurer la communication de votre boîte, la gestion de vos
                réseaux sociaux et bien plus encore. Notre slogan "Vos
                problèmes, nos solutions"
              </p>
            </div>
            <div className="service-number">2</div>
          </div>

          <div className="flex flex-row-reverse w-full items-center">
            <div className="service-box  ">
              <h3 className="service-title">
                Composition <span className="text-primary">jingle</span>
              </h3>
              <p className="service-text">
                DevAlot Digital propose, de composer pour vous des jingles de
                qualité pour vos publicités et autres animations à un prix
                défiant toute concurrence. N'hésitez plus.
              </p>
            </div>
            <div className="service-number">3</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
