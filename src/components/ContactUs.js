import React from "react";

const ContactUs = () => {
  return (
    <div className="relative py-8 my-20">
      <div
        className="h-[600px] md:h-[400px] bg-cover bg-center flex justify-center items-center"
        style={{
          backgroundImage: 'url("assets/contactusbg.png")',
        }}
      >
        <div className="w-full max-w-[1000px] flex flex-col md:flex-row items-center justify-between mx-auto px-4 md:px-8">
          <div className="text-black bg-[#FFFFFF4D] max-w-md p-6 md:p-8 rounded-3xl flex flex-col items-center my-6 md:mb-0">
            <p className="text-xl md:text-2xl text-center font-bold mb-4">
              Get Special Offers for Organizations
            </p>
            <p className="text-center text-sm mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
            <button className="px-6 py-2 text-sm font-medium text-white bg-[#FA8B02] rounded-3xl">
              Contact Us
            </button>
          </div>

          <div className="relative flex justify-center">
            <img
              src="assets/traveler.png"
              className="h-[300px] md:h-[480px] object-cover relative -top-5 md:-top-10"
              alt="Traveler"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
