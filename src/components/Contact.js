import React from "react";

const Contact = () => {
  return (
    <section id="contacts" className="bg-contact h-[100vh] bg-cover  w-full ">
      <div className="absolute bg-primary opacity-20 h-full w-full"></div>
      <div className="lg:w-10/12 w-11/12 mx-auto flex flex-col items-end justify-center h-full">
        <div className="z-10 w-full  lg:w-7/12 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-normal">
            Alors, qu'attendez vous ?<br />
            <span className="font-thin">N'hésitez plus!</span>
          </h2>
          <button className="hover:bg-black duration-500 bg-primary text-xl lg:text-2xl font-extrabold p-3 w-fit mt-5 z-10 text-white self-start">
            CONTACTEZ-NOUS
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
