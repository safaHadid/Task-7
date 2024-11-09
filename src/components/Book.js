import React from "react";

const Book = () => {
  return (
    <div className="relative py-8 my-20">
      <div
        className="h-[1200px] lg:h-[600px]  bg-cover bg-center flex justify-center items-center"
        style={{
          backgroundImage: 'url("assets/contactusbg.png")',
        }}
      >
        <div className="w-full max-w-[1200px] flex flex-col lg:flex-row items-center justify-between mx-auto px-4 md:px-8">
          <div className="text-black bg-[#FFFFFF4D] p-6 md:p-8 rounded-3xl flex flex-col items-center my-6 md:mb-0">
            <form className="w-full space-y-6 max-w-[700px] mx-auto my-5">
              <div className="flex flex-col md:flex-row space-y-4 md:space-x-8 md:space-y-0">
                <div className="flex flex-col w-full md:w-1/2">
                  <label className="text-sm font-medium mb-2" htmlFor="name">
                    Name and Surname
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="p-3 rounded-lg border border-gray-300"
                    placeholder="Enter your name and surname"
                  />
                </div>

                <div className="flex flex-col w-full md:w-1/2">
                  <label className="text-sm font-medium mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="p-3 rounded-lg border border-gray-300"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row space-y-4 md:space-x-8 md:space-y-0">
                <div className="flex flex-col w-full md:w-1/2">
                  <label className="text-sm font-medium mb-2" htmlFor="phone">
                    Telephone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="p-3 rounded-lg border border-gray-300"
                    placeholder="Enter your telephone number"
                  />
                </div>

                <div className="flex flex-col w-full md:w-1/2">
                  <label className="text-sm font-medium mb-2" htmlFor="service">
                    Service Type
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="p-3 rounded-lg border border-gray-300"
                    placeholder="Select the service types"
                  >
                    <option value="">Select the service types</option>
                    <option value="consulting">Consulting</option>
                    <option value="training">Training</option>
                    <option value="support">Support</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col md:flex-row space-y-4 md:space-x-8 md:space-y-0">
                <div className="flex flex-col w-full md:w-1/2">
                  <label className="text-sm font-medium mb-2" htmlFor="date">
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className="p-3 rounded-lg border border-gray-300"
                    placeholder="Select the date"
                  />
                </div>

                <div className="flex flex-col w-full md:w-1/2">
                  <label className="text-sm font-medium mb-2" htmlFor="time">
                    Time
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    className="p-3 rounded-lg border border-gray-300"
                    placeholder="Select the time"
                  />
                </div>
              </div>

              <div className="flex justify-center">
                <button className="px-6 py-2 text-sm font-medium text-white bg-[#FA8B02] rounded-3xl mt-6 w-full md:w-auto">
                  Book Now
                </button>
              </div>
            </form>
          </div>

          <div className="relative flex justify-center">
            <img
              src="assets/bike.png"
              className="max-w-200 object-cover relative"
              alt="Traveler"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
