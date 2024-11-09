import React from 'react'

const destinations = [
    {
      id: 1,
      imageSrc: "assets/services1.png",
      title: "Lucca Bike Tour",
      discription: "A tour of the city and its surroundings led by a professional guide ..."
    },
    {
      id: 2,
      imageSrc: "assets/services2.png",
      title: "Lucca Bike Tour",
      discription: "A tour of the city and its surroundings led by a professional guide ..."
    },
    {
      id: 3,
      imageSrc: "assets/services3.png",
      title: "Lucca Bike Tour",
      discription: "A tour of the city and its surroundings led by a professional guide ..."
    },
    {
      id: 4,
      imageSrc: "assets/services4.png",
      title: "Lucca Bike Tour",
      discription: "A tour of the city and its surroundings led by a professional guide ..."
    },
  ];

const Services = () => {
  return (
    <div className="max-w-[1200px] mx-auto my-20">
        <div className="grid sx:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-5 justify-center">
        {destinations.map((destination) => (
          <div key={destination.id} className="max-w-[300px]">
            <img src={destination.imageSrc} alt={destination.title} />
            <p className="my-2 font-bold text-left">{destination.title}</p>
            <div className="flex justify-center items-center text-xs mt-3">
                {destination.discription}
              </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services