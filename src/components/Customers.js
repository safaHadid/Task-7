import React from "react";

const Customers = () => {
  return (
    <div className="max-w-[1200px] mx-auto my-20">
      <div className="flex justify-between">
        <p className="text-2xl font-bold text-left mb-8">
          Happy Customers Says
        </p>
        <div className="flex">
          <img src="assets/left.svg" className="max-w-[50px] mr-1" alt="" />
          <img src="assets/right.svg" className="max-w-[50px]" alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-5 justify-center">
      <div className="max-w-[700px] min-h-[400px] border border-gray-100 rounded-3xl flex flex-col items-center justify-center text-center p-6">
          <img src="assets/customer.png" className="mb-5 rounded-full" alt="" />
          <p className="text-center mb-8 ">Lyod Gomez</p>
          <p>But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness. No one
          rejects, dislikes, or avoids pleasure itself, because it is pleasure.</p>
        </div>

        <div className="max-w-[700px] min-h-[400px] border border-gray-100 rounded-3xl flex flex-col items-center justify-center text-center p-6">
          <img src="assets/customer.png" className="mb-5 rounded-full" alt="" />
          <p className="text-center mb-8 ">Lyod Gomez</p>
          <p>But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness. No one
          rejects, dislikes, or avoids pleasure itself, because it is pleasure.</p>
        </div>
      </div>
    </div>
  );
};

export default Customers;
