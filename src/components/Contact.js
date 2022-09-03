import React from "react";

const Contact = () => {
  return (
    <section
      id="contacts"
      className="bg-contact h-[100vh] bg-cover bg-center  w-full "
    >
      <div className="absolute bg-transparent opacity-20 h-full w-full"></div>
      <div className="lg:w-10/12 w-11/12 mx-auto flex flex-col items-end justify-center h-full">
        <div className=" text-left z-10 w-full  lg:w-[60%] lg:w-[60%] ">
          <h2 className="text-4xl md:text-4xl lg:text-5xl font-extrabold text-white leading-normal text-4xl sm:text-5xl  md:text-6xl lg:text-6xl 2xl:text-[6em] 2xl:leading-tight">
            Alors, qu'attendez vous ?<br />
            <span className="font-thin">N'hésitez plus!</span>
          </h2>
          <button className="contact">CONTACTEZ-NOUS</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
