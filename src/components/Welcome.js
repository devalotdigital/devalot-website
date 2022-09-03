import React from "react";

const Welcome = () => {
  return (
    <section
      id="accueil"
      className="bg-welcome h-[100vh] bg-center bg-cover w-full text-white "
    >
      <div className="absolute h-full w-full bg-transparent opacity-30"></div>
      <div className="lg:w-10/12 w-11/12 mx-auto flex flex-col justify-center h-full">
        <div className="z-10 w-full  lg:w-[60%] lg:w-[60%]">
          <p className="font-extrabold text-left text-4xl sm:text-5xl  md:text-6xl lg:text-6xl 2xl:text-[6em] mb-5 2xl:leading-tight">
            Bienvenue chez <br /> Devalot Digital.
          </p>
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
