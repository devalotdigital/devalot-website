import React from "react";
import dev from "../assets/dev.png";
import wrench from "../assets/wrench.png";
import design from "../assets/design.png";
import community from "../assets/community.png";
import disque from "../assets/disque.png";
import mobile from "../assets/phone.png";

const Services = () => {
  return (
    <section
      id="services"
      className="pt-10 w-full h-full bg-gradient-to-b from-primary to-blueish overflow-hidden"
    >
      <div className="w-11/12 lg:w-10/12 mx-auto">
        <h2
          data-aos="fade-up"
          className="font-extrabold text-center text-3xl 2xl:text-6xl uppercase lg:text-4xl text-white mb-2"
        >
          <span className="font-normal text-white">Nos</span> Services
        </h2>
        <p
          className="text-center w-11/12 mx-auto lg:text-lg font-normal text-white"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          Nos divers services pour améliorer votre image sur le Web
        </p>

        <div className="flex flex-wrap gap-5 justify-center items-center py-10">
          {/* création de site web */}
          <div
            className="service-card"
            data-aos="fade-up"
            data-aos-duration="1100"
          >
            <div className="flex items-center flex-col">
              <img src={dev} alt="web" className="service-img" />
              <h3 className="service-title">Création de Site Web</h3>
            </div>
            <p className="service-text">
              Des sites one page aux sites e-commerce en passant par les sites
              vitrines, nous sommes prêts à relever le défis pour concevoir le
              site web de vos rêves.
            </p>
          </div>
          {/* graphisme */}
          <div
            className="service-card"
            data-aos="fade-up"
            data-aos-duration="1100"
          >
            <div className="flex items-center flex-col">
              <img
                src={design}
                alt="ruler and pencil"
                className="service-img"
              />
              <h3 className="service-title">Graphisme Numérique</h3>
            </div>
            <p className="service-text">
              Confier-nous la création du design de vos logos et cartes de
              visite, de vos maquettes pour vos sites internet ou encore de
              flyers pour vos évènements.
            </p>
          </div>
          {/* maintenance */}
          <div
            className="service-card"
            data-aos="fade-up"
            data-aos-duration="1100"
          >
            <div className="flex items-center flex-col">
              <img src={wrench} alt="wrench" className="service-img" />
              <h3 className="service-title">Maintenance de Site Web</h3>
            </div>
            <p className="service-text">
              Le travail de maintenance permet de suivre votre site afin
              d’améliorer ses performances sur le long terme. Nous proposons des
              contrats de maintenance à des prix réduits.
            </p>
          </div>

          {/* community management */}
          <div
            className="service-card"
            data-aos="fade-up"
            data-aos-duration="1100"
          >
            <div className="flex items-center flex-col">
              <img src={community} alt="community" className="service-img" />
              <h3 className="service-title">Community Management</h3>
            </div>
            <p className="service-text">
              Le community management consiste à animer vos réseaux sociaux en
              créeant du contenu sur ces derniers, gérer la communication de
              votre entreprise etc...
            </p>
          </div>
          {/* création application mobile */}
          <div
            className="service-card"
            data-aos="fade-up"
            data-aos-duration="1100"
          >
            <div className="flex items-center flex-col">
              <img src={mobile} alt="web" className="service-img" />
              <h3 className="service-title">Création d'Application Mobile</h3>
            </div>
            <p className="service-text">
              Des sites one page aux sites e-commerce en passant par les sites
              vitrines, nous sommes prêts à relever le défis pour concevoir le
              site web de vos rêves.
            </p>
          </div>
          {/* Audio */}
          <div
            className="service-card"
            data-aos="fade-up"
            data-aos-duration="1100"
          >
            <div className="flex items-center flex-col">
              <img src={disque} alt="bass" className="service-img" />
              <h3 className="service-title">Musique/Voix-Off</h3>
            </div>
            <p className="service-text">
              Pour animer vos publicités et autres événements nécessitant un
              jingle, une musique ou une voix-off nous sommes à votre
              disposition
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
