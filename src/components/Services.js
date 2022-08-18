import React from "react";

import arrowRight from "../assets/arrow.png";

const Services = () => {
  return (
    <section className="py-20 w-full">
      <div className="lg:w-10/12 mx-auto">
        <h2 className="font-extrabold text-center text-4xl text-primary mb-4">
          <span className="font-normal text-black">NOS</span> SERVICES
        </h2>
        <p className="text-center text-xl font-thin mb-10">
          Nous vous proposons divers services pour satisfaire vos besoins
        </p>

        <div className="flex justify-center">
          <div className="h-[1000px] bg-primary w-1 flex justify-center relative">
            <div className="absolute top-0 service-number">1</div>

            <div className="absolute top-[50%] transform translate-y-[-50%] service-number">
              2
            </div>

            <div className="absolute bottom-0 service-number">3</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
