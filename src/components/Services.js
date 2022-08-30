import React from "react";

const Services = () => {
  return (
    <section id="services" className="py-10 w-full h-full">
      <h2 className="font-extrabold text-center text-3xl uppercase lg:text-4xl text-primary mb-4">
        <span className="font-normal text-black ">Nos</span> Services
      </h2>
      <p className="text-center lg:text-lg font-normal mb-10">
        Nous vous proposons divers services afin de satisfaire vos besoins !
      </p>

      <ol class="relative border-l w-[90%] md:w-[80%] lg:w-[65%] xl:w-[55%] mx-auto border-primary">
        <li class="mb-10 ml-4">
          <div class="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -left-1.5 border border-primary"></div>
          <h3 class="service-title">Conception de site Web</h3>
          <p class="service-text">
            Nous pouvons créer un site web pour votre entreprise, mais vous ne
            savez pas à qui vous adresser ? Ne cherchez pas plus loin vous êtes
            au bon endroit ! DevAlot Digital vous propose de concevoir et
            d'héberger votre site web créer sur mesure de A à Z.
          </p>
        </li>

        <li class="mb-10 ml-4">
          <div class="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -left-1.5 border border-primary"></div>
          <h3 class="service-title">Community Management</h3>

          <p class="service-text">
            Nous pouvons vous aidez à animer votre communauté, conquérir de
            nouveaux clients et les fidéliser. DevAlot Digital est là pour
            assurer la communication de votre boîte, la gestion de vos réseaux
            sociaux et bien plus encore. Notre slogan "Vos problèmes, nos
            solutions"
          </p>
        </li>

        <li class="mb-10 ml-4">
          <div class="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -left-1.5 border border-primary"></div>
          <h3 class="service-title">Composition de jingle</h3>
          <p class="service-text">
            Nous vous proposons de composer des jingles de qualité pour vos
            publicités et autres animations à un prix défiant toute concurrence.
            N'hésitez plus.
          </p>
        </li>

        <li class="mb-10 ml-4">
          <div class="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -left-1.5 border border-primary"></div>
          <h3 class="service-title">Infographie & Design</h3>
          <p class="service-text">
            Nous pouvons vous aidez à animer votre communauté, conquérir de
            nouveaux clients et les fidéliser. DevAlot Digital est là pour
            assurer la communication de votre boîte, la gestion de vos réseaux
            sociaux et bien plus encore. Notre slogan "Vos problèmes, nos
            solutions"
          </p>
        </li>
      </ol>
    </section>
  );
};

export default Services;
