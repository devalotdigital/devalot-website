import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "../api/axios";
import sendmail from "../assets/sendmail.svg";
const SENDMAIL_URL = "/sendmail";

const Form = ({ setSuccess }) => {
  useEffect(() => {
    AOS.init({
      once: true,
      // disable: "mobile",
    });
  }, []);

  const [respName, setRespName] = useState("");
  const [entrepriseName, setEntrepriseName] = useState("");
  const [object, setObject] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSub = async (e) => {
    e.preventDefault();

    try {
      const postMail = await axios.post(
        SENDMAIL_URL,
        JSON.stringify({
          respName,
          entrepriseName,
          object,
          email,
          phoneNumber,
          message,
        }),
        {
          headers: {
            "Content-Type": "application/json",
            withCredentials: true,
          },
        }
      );

      console.log(postMail);
    } catch (error) {
      if (!error.response) {
        setErrorMessage("Le serveur ne répond pas");
      } else if (error.response.status === 400) {
        setErrorMessage("Echec de l'envoie");
        setSuccess(false);
      } else if (error.response?.status === 406) {
        setErrorMessage("Champ(s) obligatoire(s) manquants (*)");
      } else {
        setErrorMessage("");
      }
    }
  };

  return (
    <section className="bg-primary py-5">
      <div className="w-11/12 lg:w-10/12 text-white  mx-auto flex flex-col-reverse lg:flex-row justify-between items-center  h-full lg:space-x-4 lg:gap-10">
        <div className="lg:w-[50%] w-full">
          <h2
            data-aos="fade-right"
            data-aos-duration="1100"
            className="font-extrabold 2xl:leading-tight text-2xl lg:text-5xl 2xl:text-[6em] text-center lg:text-left"
          >
            Ecrivez nous un mail !
          </h2>

          <form
            onSubmit={handleSub}
            data-aos="fade-left"
            data-aos-duration="1100"
            className="w-[100%] mt-5 mx-auto bg-primary flex flex-col items-center"
          >
            <input
              type="text"
              name="resp-name"
              onChange={(e) => setRespName(e.target.value)}
              placeholder="Nom du responsable *"
              className="input"
              required
            />
            <input
              type="text"
              name="entreprise-name"
              onChange={(e) => setEntrepriseName(e.target.value)}
              placeholder="Nom de l'entreprise*"
              className="input"
            />
            <input
              type="text"
              name="object"
              onChange={(e) => setObject(e.target.value)}
              placeholder="Objet"
              className="input"
            />
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email*"
              required
              className="input"
            />
            <input
              type="text"
              name="numero"
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Numéro de téléphone"
              required
              className="input"
            />
            <textarea
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              cols="30"
              rows="5"
              placeholder="Message*"
              className="input"
            ></textarea>
            <input type="submit" value="ENVOYER" className="submit" />
          </form>
        </div>
        <div className="w-[40%]" data-aos="fade-right">
          <img src={sendmail} alt="mail sending" />
        </div>
      </div>
    </section>
  );
};

export default Form;
