import React from "react";


const AboutUsHero = () => {
  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{
        backgroundImage: 'url("assets/aboutusbg.png")',
      }}
    >
      <div className="flex flex-col items-center justify-center mx-auto h-screen max-w-[800px]">
        <div className="text-3xl mt-5 md:text-5xl font-extrabold text-center text-white">
        Our team cares about your full relax
        </div>
        <div className="text-l mt-8 text-center text-white">
        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.
        </div>
        <button className="bg-transparent max-w-[250px] text-white font-semibold py-2 px-5 my-5 border border-white hover:border-transparent rounded-full mx-auto block">
        View our Tour Packages
            </button>
      </div>
    </div>
  );
};

export default AboutUsHero;
 