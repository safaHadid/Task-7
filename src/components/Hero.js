import React, { useState } from "react";

const Hero = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{
        backgroundImage: 'url("assets/bg.png")',
      }}
    >
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="mt-5 p-3 text-3xl md:text-5xl font-bold text-center decoration-slice text-white">
          Enjoy in the best way!
        </div>
        <div className=" text-l md:text-2xl p-3 text-center text-white">
          Enjoy our services for your trip anytime
        </div>
        <div className="bg-[#FFFFFF33] p-5 my-8 rounded-xl w-[1000px]">
          <div className=" border-gray-200 dark:border-gray-700">
            <ul
              className="flex flex-wrap -mb-px text-sm font-medium text-center"
              role="tablist"
            >
              <li className="" role="presentation">
                <button
                  className={`inline-block p-4 ${
                    activeTab === "profile" ? "text-[#FA8B02]" : "text-white"
                  }
                  ${activeTab === "profile" ? "bg-white" : "bg-[#FFFFFF66]"}`}
                  onClick={() => handleTabClick("profile")}
                  role="tab"
                  aria-selected={activeTab === "profile"}
                >
                  Profile
                </button>
              </li>
              <li className="" role="presentation">
                <button
                  className={`inline-block p-4 ${
                    activeTab === "dashboard" ? "text-[#FA8B02]" : "text-white"
                  }
                  ${activeTab === "dashboard" ? "bg-white" : "bg-[#FFFFFF66]"}`}
                  onClick={() => handleTabClick("dashboard")}
                  role="tab"
                  aria-selected={activeTab === "dashboard"}
                >
                  Dashboard
                </button>
              </li>
            </ul>
          </div>
          <div id="default-styled-tab-content">
            <div
              className={`p-4 bg-gray-50 dark:bg-gray-800 ${
                activeTab === "profile" ? "block" : "hidden"
              }
              ${activeTab === "profile" ? "bg-white" : "bg-[#FFFFFF66]"}`}
              id="styled-profile"
              role="tabpanel"
            >
              <div>
                <div className="flex h-full ">
                  <div className="mx-auto flex flex-col items-center justify-center">
                    <div className="flex items-center mb-2">
                      <img
                        src="assets/tours.svg"
                        alt="Tours Icon"
                        className="mr-2"
                      />
                      <p>Number of people</p>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <p className="mr-2">Choose number</p>
                      <select className=" px-2 py-1">
                      </select>
                    </div>
                  </div>
                  <div className="mx-auto flex flex-col items-center justify-center">
                    <div className="flex items-center mb-2">
                      <img
                        src="assets/calendar.svg"
                        alt="Tours Icon"
                        className="mr-2"
                      />
                      <p>Date</p>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <p className="mr-2">Choose Date</p>
                      <select className=" px-2 py-1">
                      </select>
                    </div>
                  </div>
                  <div className="mx-auto flex flex-col items-center justify-center">
                    <div className="flex items-center mb-2">
                      <img
                        src="assets/time.svg"
                        alt="Tours Icon"
                        className="mr-2"
                      />
                      <p>Time</p>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <p className="mr-2">Choose Time</p>
                      <select className=" px-2 py-1">
                      </select>
                    </div>
                  </div>
                  <div className="mx-auto flex flex-col items-center justify-center">
                    <div className="flex items-center mb-2">
                      <img
                        src="assets/flag.svg"
                        alt="Tours Icon"
                        className="mr-2"
                      />
                      <p>Tour</p>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <p className="mr-2">Select Tour</p>
                      <select className=" px-2 py-1">
                      </select>
                    </div> 
                    
                  </div>
                  <div className="mx-auto flex flex-col items-center justify-center">
                    <div className="flex items-center mb-2">
                      <img
                        src="assets/car.svg"
                        alt="Tours Icon"
                        className="mr-2"
                      />
                      <p>Transportation</p>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <p className="mr-2">Select Transportation</p>
                      <select className=" px-2 py-1">
                      </select>
                    </div> 
                    
                  </div>
                  <img src="assets/search.svg" className="w-[60px] hover:cursor-pointer" alt="" />
                </div>
              </div>
            </div>
            <div
              className={`p-4 bg-gray-50 dark:bg-gray-800 ${
                activeTab === "dashboard" ? "block" : "hidden"
              }`}
              id="styled-dashboard"
              role="tabpanel"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <strong className="font-medium text-gray-800 dark:text-white">
                  Example
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
