import React, { useState } from "react";

import axios from "../api/axios";
import sendmail from "../assets/sendmail.svg";
const SENDMAIL_URL = "/sendmail";

const Form = ({ setSuccess, setErrorMessage }) => {
  const [respName, setRespName] = useState("");
  const [entrepriseName, setEntrepriseName] = useState("");
  const [object, setObject] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const phoneRegex = /^(221|00221|\+221)?(77|78|75|70|76)[0-9]{7}$/;
  const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

  const handleSub = async (e) => {
    e.preventDefault();

    if (
      respName.length === 0 ||
      entrepriseName.length === 0 ||
      object === "" ||
      mailRegex.test(email) === false ||
      phoneRegex.test(phoneNumber) === false ||
      message.length < 10
    ) {
      setErrorMessage("Champ(s) renseigné(s) invalide(s)");
      setError(true);
      setSuccess(true);
    } else {
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

        setErrorMessage("Mail envoyé avec succès !");
        setSuccess(true);
        console.log(postMail.status);
      } catch (error) {
        if (!error.response) {
          setErrorMessage("Le serveur ne répond pas");
        } else if (error.response.status === 400) {
          setErrorMessage("Echec de l'envoie");
          setSuccess(false);
        } else if (error.response?.status === 406) {
          setErrorMessage("Champ(s) obligatoire(s) manquants (*)");
        } else {
          setErrorMessage("Echec de la connexion");
        }
      }
    }
  };

  return (
    <section className="bg-blueish pt-10">
      <div className="w-11/12 lg:w-10/12 text-white  mx-auto flex flex-col-reverse lg:flex-row justify-between items-center  h-full lg:space-x-4 lg:gap-10">
        <div className="lg:w-[50%] w-full">
          <h2
            data-aos="fade-right"
            className="font-extrabold 2xl:leading-tight text-2xl lg:text-5xl 2xl:text-[6em] text-center lg:text-left"
          >
            Ecrivez-nous un mail !
          </h2>

          <form
            onSubmit={handleSub}
            data-aos="fade-right"
            className="w-[100%] mt-5 mx-auto flex flex-col items-center"
          >
            <input
              type="text"
              name="resp-name"
              onChange={(e) => setRespName(e.target.value)}
              placeholder="Nom du responsable (*)"
              className="input"
            />
            {error && nameRegex.test(respName) === false ? (
              <span className="error">Nom renseigné invalide</span>
            ) : null}

            <input
              type="text"
              name="entreprise-name"
              onChange={(e) => setEntrepriseName(e.target.value)}
              placeholder="Nom de l'entreprise (*)"
              className="input"
            />
            {error && nameRegex.test(entrepriseName) === false ? (
              <span className="error">Nom de l'entreprise invalide</span>
            ) : null}
            <input
              type="text"
              name="object"
              onChange={(e) => setObject(e.target.value)}
              placeholder="Objet (*)"
              className="input"
            />
            {error && object.length === 0 ? (
              <span className="error">Ce champ ne peut être vide</span>
            ) : null}
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email (*)"
              className="input"
            />
            {error && mailRegex.test(email) === false ? (
              <span className="error">Adresse mail invalide</span>
            ) : null}

            <input
              type="text"
              name="numero"
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Téléphone (*)"
              className="input"
            />
            {error && phoneRegex.test(phoneNumber) === false ? (
              <span className="error">
                Numéro téléphone incorrect (format Sénégal)
              </span>
            ) : null}

            <textarea
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              cols="30"
              rows="5"
              placeholder="Message(*)"
              className="input"
            ></textarea>

            {error && message.length < 10 ? (
              <span className="error">
                Ce champ ne peut être vide et doit comporter plus de 10
                caractères
              </span>
            ) : null}

            <input type="submit" value="ENVOYER" className="submit" />
          </form>
        </div>
        <div className="w-[40%]" data-aos="fade-left">
          <img src={sendmail} alt="mail sending" />
        </div>
      </div>
    </section>
  );
};

export default Form;
