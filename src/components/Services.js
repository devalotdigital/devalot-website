import React from "react";

const Services = () => {
  return (
    <section id="services" className="pt-10 w-full h-full bg-primary">
      <h2 className="font-extrabold text-center text-3xl 2xl:text-6xl uppercase lg:text-4xl text-white mb-4">
        <span className="font-normal text-white">Nos</span> Services
      </h2>
      <p className="text-center lg:text-lg font-normal text-white ">
        Nous vous proposons divers services afin de satisfaire vos besoins !
      </p>
      <div class="min-h-screen bg-primary py-6 flex flex-col justify-center sm:py-10">
        <div class="py-3 sm:max-w-[700px] md:max-w-[760px] lg:max-w-[850px] xl:max-w-[1000px] 2xl:max-w-[1300px] sm:mx-auto w-full px-2 sm:px-0">
          <div class="relative text-black antialiased text-sm text-lg font-normal">
            {/* <!-- Vertical bar running through middle --> */}
            <div class="hidden sm:block w-1 bg-blue-300 absolute h-full left-1/2 transform -translate-x-1/2"></div>

            {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
            <div class="mt-6 sm:mt-0 sm:mb-12">
              <div class="flex flex-col sm:flex-row items-center">
                <div class="flex justify-start w-full mx-auto items-center">
                  <div class="w-full sm:w-1/2 sm:pr-8">
                    <div class="service-boxl">
                      <h3 class="service-title">Conception de site Web</h3>

                      <p className="service-text">
                        Nous pouvons créer un site web pour votre entreprise,
                        mais vous ne savez pas à qui vous adresser ? Ne cherchez
                        pas plus loin vous êtes au bon endroit ! DevAlot Digital
                        vous propose de concevoir et d'héberger votre site web
                        créer sur mesure de A à Z.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="service-number">1</div>
              </div>
            </div>

            {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
            <div class="mt-6 sm:mt-0 sm:mb-12">
              <div class="flex flex-col sm:flex-row items-center">
                <div class="flex justify-end w-full mx-auto items-center">
                  <div class="w-full sm:w-1/2 sm:pl-8">
                    <div class="service-boxr">
                      <h3 class="service-title">Maintenance de site Web</h3>

                      <p className="service-text">
                        Nous pouvons créer un site web pour votre entreprise,
                        mais vous ne savez pas à qui vous adresser ? Ne cherchez
                        pas plus loin vous êtes au bon endroit ! DevAlot Digital
                        vous propose de concevoir et d'héberger votre site web
                        créer sur mesure de A à Z.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="service-number">2</div>
              </div>
            </div>

            {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
            <div class="mt-6 sm:mt-0 sm:mb-12">
              <div class="flex flex-col sm:flex-row items-center">
                <div class="flex justify-start w-full mx-auto items-center">
                  <div class="w-full sm:w-1/2 sm:pr-8">
                    <div class="service-boxl">
                      <h3 class="service-title">Infographie & Design</h3>

                      <p className="service-text">
                        Nous pouvons créer un site web pour votre entreprise,
                        mais vous ne savez pas à qui vous adresser ? Ne cherchez
                        pas plus loin vous êtes au bon endroit ! DevAlot Digital
                        vous propose de concevoir et d'héberger votre site web
                        créer sur mesure de A à Z.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="service-number">3</div>
              </div>
            </div>

            {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
            <div class="mt-6 sm:mt-0">
              <div class="flex flex-col sm:flex-row items-center">
                <div class="flex justify-end w-full mx-auto items-center">
                  <div class="w-full sm:w-1/2 sm:pl-8">
                    <div class="service-boxr">
                      <h3 class="service-title">Composition musicale</h3>

                      <p className="service-text">
                        Nous pouvons créer un site web pour votre entreprise,
                        mais vous ne savez pas à qui vous adresser ? Ne cherchez
                        pas plus loin vous êtes au bon endroit ! DevAlot Digital
                        vous propose de concevoir et d'héberger votre site web
                        créer sur mesure de A à Z.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="service-number">4</div>
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
