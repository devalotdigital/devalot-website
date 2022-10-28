import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      disable: "mobile",
    });
  }, []);

  return (
    <section id="services" className="pt-10 w-full h-full bg-primary">
      <h2
        data-aos="fade-up"
        className="font-extrabold text-center text-3xl 2xl:text-6xl uppercase lg:text-4xl text-white mb-4"
      >
        <span className="font-normal text-white">Nos</span> Services
      </h2>
      <p
        className="text-center lg:text-lg font-normal text-white"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        Nous vous proposons divers services afin de satisfaire vos besoins !
      </p>
      <div className="min-h-screen bg-primary py-6 flex flex-col justify-center sm:py-10">
        <div className="py-3 max-w-[600px] md:max-w-[750px]  lg:max-w-[950px] xl:max-w-[1200px] 2xl:max-w-[1300px] sm:mx-auto w-full px-2 sm:px-0">
          <div className="relative text-black antialiased  text-lg font-normal ">
            {/* <!-- Vertical bar running through middle --> */}
            <div className="hidden md:block w-1 bg-blue-300 absolute h-full left-1/2 transform -translate-x-1/2"></div>

            {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
            <div className="mt-6 sm:mt-0 sm:mb-12">
              <div className="flex flex-col sm:flex-row items-center">
                <div className="flex justify-start w-full mx-auto items-center">
                  <div className="w-full md:w-1/2 md:pr-8">
                    <div
                      className="service-boxl"
                      data-aos="fade-right"
                      data-aos-duration="1200"
                    >
                      <h3 className="service-title">Conception de site Web</h3>

                      <p className="service-text">
                        DevAlot met à votre disposition une équipe de
                        développeurs passionnés par leur travail et prêt à
                        relever le défis pour concevoir le site web de vos
                        rêves. Des sites one page aux sites e-commerce en
                        passant par les sites vitrines, DevAlot se donne pour
                        mission de répondre à vos besoins afin de vous
                        satisfaire. De plus pour un site vitrine commandé on
                        vous offre une période de suivi de votre site de 2
                        semaines pour suivre le comportement de votre site.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="service-number">1</div>
              </div>
            </div>

            {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
            <div className="mt-6 sm:mt-0 sm:mb-12">
              <div className="flex flex-col sm:flex-row items-center">
                <div className="flex justify-end w-full mx-auto items-center">
                  <div className="w-full md:w-1/2 md:pl-8">
                    <div
                      className="service-boxr"
                      data-aos="fade-left"
                      data-aos-duration="1200"
                    >
                      <h3 className="service-title">Maintenance de site Web</h3>

                      <p className="service-text">
                        Concevoir un site c’est bien, le maintenir c’est mieux.
                        En effet, la maintenance permet d’améliorer les
                        performances de votre site sur le long terme. Nous vous
                        proposons donc des contrats de maintenance en fonction
                        de vos besoins à un prix défiant toute concurrence.
                        Notre service de maintenance comprend tout ce qui va
                        dans le sens de l’amélioration du SEO (Search Engine
                        Optimisation) de votre site ou plus simplement le
                        référencement naturel de votre site sur les moteurs de
                        recherche.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="service-number">2</div>
              </div>
            </div>

            {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
            <div className="mt-6 sm:mt-0 sm:mb-12">
              <div className="flex flex-col sm:flex-row items-center">
                <div className="flex justify-start w-full mx-auto items-center">
                  <div className="w-full md:w-1/2 md:pr-8">
                    <div
                      className="service-boxl"
                      data-aos="fade-right"
                      data-aos-duration="1200"
                    >
                      <h3 className="service-title">Infographie & Design</h3>

                      <p className="service-text">
                        Toujours dans le soucis de vous satisfaire et
                        d’améliorer l’image de votre entreprise, notre pôle
                        Infographie & Design vous propose ses services afin de:
                        créer des logos pour vos marques, créer de posts
                        numériques pour vos réseaux sociaux, créer et imprimer
                        des cartes de visites, flyers (liste à compléter) pour
                        vos évènements L’équipe vous propose des offres adaptées
                        à vos besoins et s’engage à vous mettre au centre de la
                        réalisation de votre projet afin d’obtenir les résultats
                        escomptés. Franchissez le pas, vous ne serez pas déçu!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="service-number">3</div>
              </div>
            </div>

            {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
            <div className="mt-6 sm:mt-0">
              <div className="flex flex-col sm:flex-row items-center">
                <div className="flex justify-end w-full mx-auto items-center">
                  <div className="w-full md:w-1/2 md:pl-8">
                    <div
                      className="service-boxr"
                      data-aos="fade-left"
                      data-aos-duration="1200"
                    >
                      <h3 className="service-title">Composition musicale</h3>

                      <p className="service-text">
                        Pour animer vos publicités et autres événements
                        nécessitant un jingle ou une musique, nous mettons à
                        votre disposition un compositeur qui vous assistera dans
                        votre projet de création. Après avoir compris votre
                        idée, l’équipe se lancera dans la réalisation de votre
                        projet afin de vous proposer un résultat satisfaisant,
                        le tout à un prix défiant toute concurrence. Pour plus
                        de détails contactez-nous ici.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="service-number">4</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <ol class="relative border-l w-[90%] md:w-[80%] lg:w-[65%] xl:w-[50%] mx-auto border-primary">
        <li class="mb-10 ml-4">
          <div class="absolute w-3 h-3 bg-primary rounded-full -left-1.5 border border-primary"></div>
          <h3 class="service-title">Conception de site Web</h3>
          <p class="service-text">
             
          </p>
        </li> */}

      {/* <li class="mb-10 ml-4">
          <div class="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -left-1.5 border border-primary"></div>
          <h3 class="service-title">Community Management</h3>

          <p class="service-text">
            Nous pouvons vous aidez à animer votre communauté, conquérir de
            nouveaux clients et les fidéliser. DevAlot Digital est là pour
            assurer la communication de votre boîte, la gestion de vos réseaux
            sociaux et bien plus encore. Notre slogan "Vos problèmes, nos
            solutions"
          </p>
        </li> */}

      {/* <li class="mb-10 ml-4">
          <div class="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -left-1.5 border border-primary"></div>
          <h3 class="service-title">Composition de jingle</h3>
          <p class="service-text">
            Nous pouvons créer un site web pour votre entreprise, mais vous ne
            savez pas à qui vous adresser ? Ne cherchez pas plus loin vous êtes
            au bon endroit ! DevAlot Digital vous propose de concevoir et
            d'héberger votre site web créer sur mesure de A à Z.
          </p>
        </li>

        <li class="mb-10 ml-4">
          <div class="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -left-1.5 border border-primary"></div>
          <h3 class="service-title">Infographie & Design</h3>
          <p class="service-text">
            Nous pouvons créer un site web pour votre entreprise, mais vous ne
            savez pas à qui vous adresser ? Ne cherchez pas plus loin vous êtes
            au bon endroit ! DevAlot Digital vous propose de concevoir et
            d'héberger votre site web créer sur mesure de A à Z.
          </p>
        </li>
      </ol> */}
    </section>
  );
};

export default Services;
