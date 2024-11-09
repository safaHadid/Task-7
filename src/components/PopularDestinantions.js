import React from "react";

const destinations = [
  {
    id: 1,
    imageSrc: "assets/popular1.png",
    title: "Lucca Bike Tour",
    price: "34 €",
    calendar: "EVERY DAY",
    tours: "3-10 PP",
    discription: "A tour of the city and its surroundings led by a professional guide ..."
  },
  {
    id: 2,
    imageSrc: "assets/popular2.png",
    title: "Lucca Bike Tour",
    price: "34 €",
    calendar: "EVERY DAY",
    tours: "3-10 PP",
    discription: "A tour of the city and its surroundings led by a professional guide ..."
  },
  {
    id: 3,
    imageSrc: "assets/popular3.png",
    title: "Lucca Bike Tour",
    price: "34 €",
    calendar: "EVERY DAY",
    tours: "3-10 PP",
    discription: "A tour of the city and its surroundings led by a professional guide ..."
  },
  {
    id: 4,
    imageSrc: "assets/popular4.png",
    title: "Lucca Bike Tour",
    price: "34 €",
    calendar: "EVERY DAY",
    tours: "3-10 PP",
    discription: "A tour of the city and its surroundings led by a professional guide ..."
  },
];

const PopularDestinantions = () => {
  return (
    <div className="max-w-[1200px] mx-auto my-20">
      
      <div className="flex justify-between">
      <p className="text-2xl font-bold text-left mb-8">
        Explore Our Popular Destinations
      </p>
      <div className="flex">
        <img src="assets/left.svg" className="max-w-[50px] mr-1" alt="" />
        <img src="assets/right.svg" className="max-w-[50px]" alt="" />
      </div>
      </div>
      <div className="grid sx:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-5 justify-center">
        {destinations.map((destination) => (
          <div key={destination.id} className="max-w-[300px]">
            <img src={destination.imageSrc} alt={destination.title} />
            <p className="my-2 font-bold text-left">{destination.title}</p>
            <p className="text-left">
              from <span className="text-[#FA8B02]">{destination.price}</span>
            </p>
            <div className="flex justify-between mt-4">
              <div className="flex justify-center items-center">
                <img src="assets/calendar.svg" className="text-xs mr-1" alt="" />
                <p className="text-xs text-[#FA8B02]">{destination.calendar}</p>
              </div>
              <div className="flex justify-center items-center">
                <img src="assets/tours.svg" className="text-xs mr-1" alt="" />
                <p className="text-xs text-[#FA8B02]">{destination.tours}</p>
              </div>
            </div>
            <div className="flex justify-center items-center text-xs mt-3">
                {destination.discription}
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularDestinantions;
