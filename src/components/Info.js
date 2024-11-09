import React from "react";

const services = [
  {
    title: "Complete Packages For All Your Wishes",
    icon: "icon_best price.svg"
  },
  {
    title: "Over 30 Years Of Experience",
    icon: "icon_experience.svg"
  },
  {
    title: "Expert Guides For You",
    icon: "icon_guide.svg"
  },
  {
    title: "Guaranteed fun at the best price!",
    icon: "icon_map.svg"
  }
];

const Info = () => {
  return (
    <div
      className="h-[800px] md:h-[400px] my-8 bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage: 'url("assets/contactusbg.png")',
      }}
    >
      <div className="max-w-[1200px] mx-auto justify-center">
        <div className="grid sx:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-5 justify-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="mx-auto w-[250px] flex flex-col items-center justify-center text-center px-8 py-5 bg-[#FFFFFF4D] rounded-3xl"
            >
              <img
                src={`assets/${service.icon}`}
                className="w-[40px] m-5"
                alt={service.title}
              />
              <p>{service.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Info;
