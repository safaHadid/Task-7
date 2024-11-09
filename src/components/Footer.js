import React from 'react';

const Footer = () => {
  return (
    <div className='min-h-[550px] bg-gray-700'>
      <div className='max-w-[1200px] p-5 mx-auto'>
        <div className='flex items-center justify-start mb-8'>
          <img src="assets/logo.png" className='max-w-[130px]' alt="Logo" />
        </div>
        <div className='flex items-center justify-center text-left border-t-2 border-b-2 border-gray-600 py-5'>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 p-5 text-white">
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className='text-sm space-y-3'>
                <li><a href="#" className="hover:text-orange-400">Bike and Rickshaw rental</a></li>
                <li><a href="#" className="hover:text-orange-400">Guided Tours of Lucca</a></li>
                <li><a href="#" className="hover:text-orange-400">Guided Bike Tour of Lucca</a></li>
                <li><a href="#" className="hover:text-orange-400">Transportation With Luxury Cars</a></li>
                <li><a href="#" className="hover:text-orange-400">Bike and Rickshaw rental</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Home</h3>
              <ul className='text-sm space-y-3'>
                <li><a href="#" className="hover:text-orange-400">Home</a></li>
                <li><a href="#" className="hover:text-orange-400">About Us</a></li>
                <li><a href="#" className="hover:text-orange-400">Tour Packages</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Help</h3>
              <ul className='text-sm space-y-3'>
                <li><a href="#" className="hover:text-orange-400">Terms of Use</a></li>
                <li><a href="#" className="hover:text-orange-400">Provicy Policy</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contacts</h3>
              <ul className='text-sm space-y-3'>
                <li><a href="#" className="hover:text-orange-400">Piazza Napoleone, Lucca, Tuscany
                </a></li>
                <li><a href="#" className="hover:text-orange-400">	+39 346 368 5708
                </a></li>
                <li><a href="#" className="hover:text-orange-400">	italiainlimo@gmail.com</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Social Media</h3>
              <ul className='flex gap-5'>
                <li><img src="assets/socialmedia.svg" alt="" /></li>
                <li><img src="assets/socialmedia1.svg" alt="" /></li>
                <li><img src="assets/socialmedia2.svg" alt="" /></li>
              </ul>
            </div>
          </div>
        </div>
        <div className='text-center text-white mt-8'>
        Copyright © 2022.  All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
