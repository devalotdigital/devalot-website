import React from "react";

const Welcome = () => {
  return (
    <section
      id="accueil"
      className="bg-welcome h-[100vh] bg-center bg-cover w-full text-white overflow-x-hidden"
    >
      <div className="absolute h-full w-full bg-transparent opacity-30"></div>
      <div className="lg:w-10/12 w-11/12 mx-auto flex flex-col justify-center h-full">
        <div data-aos="fade-left" className="z-10 w-full lg:w-[70%]">
          <h1 className="font-extrabold text-left text-4xl sm:text-5xl  md:text-6xl lg:text-6xl 2xl:text-[6em] mb-5 2xl:leading-tight">
            {/* Bienvenue chez <br /> Devalot Digital. */}
            DevAlot, l'agence digital sénégalaise à votre service.
          </h1>
          <p className="text-base sm:text-lg md:text-xl w-[80%] sm:w-[50%] md:w-[70%] lg:text-2xl 2xl:text-[3em] 2xl:leading-normal font-light">
            Vous apportez les{" "}
            <span className="underline decoration-primary">problèmes</span>,
            nous trouvons les{" "}
            <span className="underline decoration-primary">solutions</span>.
          </p>
        </div>
        <button className="contact">CONTACTEZ-NOUS</button>
      </div>
    </section>
  );
};

export default Welcome;
