import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Form = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      // disable: "mobile",
    });
  }, []);
  return (
    <div className="bg-primary py-5">
      <h2
        data-aos="fade-right"
        data-aos-duration="1100"
        className="w-11/12 mx-auto pt-5 text-2xl text-center  md:text-4xl lg:text-4xl font-extrabold text-white leading-normal text-4xl sm:text-5xl  md:text-6xl lg:text-6xl 2xl:text-[6em] 2xl:leading-tight"
      >
        Demander un devis
      </h2>

      <form
        data-aos="fade-left"
        data-aos-duration="1100"
        className="w-11/12 mt-5 mx-auto bg-primary flex flex-col gap-8 items-center"
      >
        <input
          type="text"
          name="resp-name"
          placeholder="Nom du responsable *"
          className="input"
          required
        />
        <input
          type="text"
          name="entreprise-name"
          placeholder="Nom de l'entreprise"
          className="input"
        />
        <input
          type="text"
          name="object"
          placeholder="Objet"
          className="input"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="input"
        />
        <input
          type="text"
          name="numero"
          placeholder="Numéro de téléphone *"
          required
          className="input"
        />
        <textarea
          name="message"
          cols="30"
          rows="10"
          placeholder="Message *"
          className="input"
        ></textarea>
        <input type="submit" value="ENVOYER" className="submit" />
      </form>
    </div>
  );
};

export default Form;
