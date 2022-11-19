import React from "react";

const Services = () => {
  return (
    <section
      id="services"
      className="pt-10 w-full h-full bg-primary overflow-x-hidden"
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
          Nous vous proposons divers services afin de satisfaire vos besoins !
        </p>

        <div className="min-h-screen bg-primary  flex flex-col justify-center sm:py-10">
          <div className="py-3   sm:mx-auto w-full sm:px-0">
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
                        <h3 className="service-title">
                          Conception de site Web
                        </h3>

                        <p className="service-text">
                          Nous mettons à votre disposition une équipe de
                          développeurs passionnés par leur travail et prêts à
                          relever le défis pour concevoir le site web de vos
                          rêves. Des sites one page aux sites e-commerce en
                          passant par les sites vitrines, DevAlot se donne pour
                          mission de répondre à vos besoins afin de vous
                          satisfaire. Après création, nous vous proposons de
                          suivre le comportement de votre site pour une durée de
                          1 mois.
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
                        <h3 className="service-title">
                          Maintenance de site Web
                        </h3>

                        <p className="service-text">
                          Concevoir un site c’est bien, le maintenir c’est
                          mieux. En effet, le travail de maintenance permet de
                          suivre votre site et d’améliorer ses performances de
                          sur le long terme. Nous vous proposons donc des
                          contrats de maintenance en fonction de vos besoins à
                          des prix défiants toute concurrence. Notre service de
                          maintenance comprend tout ce qui va dans le sens de
                          l’amélioration des performances de votre site.
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
                        <h3 className="service-title">Graphisme & Designing</h3>

                        <p className="service-text">
                          Toujours dans le soucis de vous satisfaire et
                          d’améliorer l’image de votre entreprise, notre équipe
                          vous propose ses services afin de: créer des logos
                          pour vos marques, des posts numériques pour vos
                          réseaux sociaux, créer des designs de cartes de
                          visites, flyers et maquettes de site web. L’équipe
                          vous propose des offres adaptées à vos besoins et
                          s’engage à vous mettre au centre de la réalisation de
                          votre projet afin d’obtenir les résultats escomptés.
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
                        <h3 className="service-title">Community Management</h3>
                        <p className="service-text">
                          Bien gérer son image digitale et être proche de sa
                          clientèle cible est une chose primordiale, pour cela
                          nous pouvons vous aidez à animer votre communauté sur
                          le Web et conquérir de nouveaux clients. Nous sommes
                          là pour assurer la communication de votre entreprise
                          et la bonne gestion de vos réseaux
                          sociaux.Contactez-nous pour plus de détails.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="service-number">4</div>
                </div>
              </div>
              {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
              <div className="mt-6 sm:mt-12 sm:mb-0">
                <div className="flex flex-col sm:flex-row items-center">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full md:w-1/2 md:pr-8">
                      <div
                        className="service-boxl"
                        data-aos="fade-right"
                        data-aos-duration="1200"
                      >
                        <h3 className="service-title">Composition musique</h3>

                        <p className="service-text">
                          Pour animer vos publicités et autres événements
                          nécessitant un jingle ou une musique, nous mettons à
                          votre disposition un compositeur qui vous assistera
                          dans votre projet de création. Après avoir compris
                          votre idée, l’équipe se lancera dans la réalisation de
                          votre projet afin de vous proposer un résultat qui
                          fera votre satisfaction, le tout à un prix défiant
                          toute concurrence. Pour plus de détails
                          contactez-nous.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="service-number">5</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
