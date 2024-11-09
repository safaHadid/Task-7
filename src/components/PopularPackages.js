import React from "react";

const destinations = [
  {
    id: 1,
    imageSrc: "assets/package1.png",
    title: "BIKE / RICKSHAW",
    price: "€10",
    calendar: "EVERY DAY",
    tours: "3-10 PP",
    discription:
      "A tour of the city and its surroundings led by a professional guide ...",
  },
  {
    id: 2,
    imageSrc: "assets/package2.png",
    title: "BIKE / RICKSHAW",
    price: "€30",
    calendar: "EVERY DAY",
    tours: "3-10 PP",
    discription:
      "A tour of the city and its surroundings led by a professional guide ...",
  },
  {
    id: 3,
    imageSrc: "assets/package3.png",
    title: "BIKE / RICKSHAW",
    price: "€45",
    calendar: "EVERY DAY",
    tours: "3-10 PP",
    discription:
      "A tour of the city and its surroundings led by a professional guide ...",
  },
  {
    id: 4,
    imageSrc: "assets/package4.png",
    title: "BIKE / RICKSHAW",
    price: "€10",
    calendar: "EVERY DAY",
    tours: "3-10 PP",
    discription:
      "A tour of the city and its surroundings led by a professional guide ...",
  },
];

const PopularPackages = () => {
  return (
    <div className="max-w-[1200px] mx-auto my-20">
      <div className="flex">
        <p className="text-2xl font-bold text-left mb-8">
          The Most Popular Packages
        </p>
      </div>
      <div className="grid sx:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-5 justify-center">
        {destinations.map((destination) => (
          <div
            key={destination.id}
            className="max-w-[300px] border border-gray-200 rounded-3xl"
          >
            <img src={destination.imageSrc} alt={destination.title} />
            <p className="my-2 font-bold text-left px-5">{destination.title}</p>
            <p className="text-left text-sm px-5 text-gray-400">
              <span className="text-[#FA8B02] text-3xl">
                {destination.price}
              </span>{" "}
              /day
            </p>

            <div className="text-sm mt-5 p-5 space-y-5">
              <div className="flex">
                <img src="assets/tours.svg" className="mr-2" alt="" />
                <p>Your bike for a day</p>
              </div>
              <div className="flex">
                <img src="assets/tours.svg" className="mr-2" alt="" />
                <p>Your bike for a day</p>
              </div>
              <div className="flex">
                <img src="assets/tours.svg" className="text-xs mr-2" alt="" />
                <p>Your bike for a day</p>
              </div>
              <div className="flex">
                <img src="assets/tours.svg" className="text-xs mr-2" alt="" />
                <p>Your bike for a day</p>
              </div>
            </div>
            <button className="bg-transparent max-w-[250px] text-[#FA8B02] font-semibold py-2 px-5 mb-5 border border-[#FA8B02] hover:border-transparent rounded-full mx-auto block">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularPackages;
