import React from "react";

const Welcome = () => {
  return (
    <section className="bg-welcome h-[100vh] bg-cover w-full text-white ">
      <div className="absolute h-full w-full bg-secondary opacity-50"></div>
      <div className="lg:w-10/12 mx-auto flex flex-col justify-center h-full">
        <p className="text-3xl w-3/5 z-10">
          Nous vous souhaitons la bienvenue sur notre site. <br />
          Chez <span className="font-extrabold">DevAlot Digital, </span>
          vous apportez les{" "}
          <span className="underline decoration-primary">problèmes</span>, nous
          trouvons les{" "}
          <span className="underline decoration-primary">
            solutions adéquates
          </span>
          .
        </p>
        <button className="bg-primary text-3xl font-extrabold p-3 w-fit mt-5 z-10">
          DECOUVRIR
        </button>
      </div>
    </section>
  );
};

export default Welcome;
