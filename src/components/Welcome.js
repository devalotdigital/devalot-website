import React from "react";

const Welcome = () => {
  return (
    <section
      id="accueil"
      className="bg-welcome h-[100vh] bg-center bg-cover w-full text-white "
    >
      <div className="absolute h-full w-full bg-secondary opacity-30"></div>
      <div className="lg:w-10/12 w-11/12 mx-auto flex flex-col justify-center items-center sm:items-start h-full">
        <p className="text-xl text-center sm:text-left md:w-3/5 lg:text-4xl lg:w-4/5 z-10 font-light">
          Nous vous souhaitons la bienvenue. <br />
          Chez <span className="font-extrabold">DevAlot Digital, </span>
          vous apportez les{" "}
          <span className="underline decoration-primary">problèmes</span>, nous
          trouvons les{" "}
          <span className="underline decoration-primary">solutions</span>.
        </p>
        <button className="hover:bg-black duration-500 bg-primary text-lg lg:text-2xl font-extrabold p-2 md:p-3 w-fit mt-5 z-10">
          CONTACTEZ-NOUS
        </button>
      </div>
    </section>
  );
};

export default Welcome;
