import React from 'react';

const AboutUs = ({imgSrc}) => {
  return (
    <div className="flex flex-col md:flex-row items-center lg:justify-between p-8 my-5 mx-auto max-w-[1000px]">
      <img 
        src={imgSrc}
        alt="About Us" 
        className="w-full lg:w-1/2 h-auto mb-6 lg:mb-0 max-w-[400px]"
      />
      <div className="lg:w-1/2 lg:pl-8">
        <p className='text-left text-sm pb-2 text-[#333333]'>WELCOME TO OUR SITE!</p>
        <p className='text-left text-2xl font-bold text-[#333333]'>We are the best company for your visit</p>
        <p className='text-left text-base text-[#333333] py-8'>
          After decades of experience, and a whole life in Lucca, we offer you the most complete tourism service in the city. In addition to having bikes and rickshaws to have as much fun as you want, you have the choice of tour guides with whom to tour and drivers for your every need! We offer packages in the way that you get the most at the lowest price. Book with us and we will always be available for you!
        </p>
        <div className='flex gap-5'>
            <div className='max-w-[80px]'>
                <p className='text-[#FA8B02] text-xl font-bold'>20+</p>
                <p className='text-sm text-[#333333]'>Years Experience</p>
            </div>
            <div className='max-w-[80px]'>
                <p className='text-[#FA8B02] text-xl font-bold'>100+</p>
                <p className='text-sm text-[#333333]'>Happy Customer</p>
            </div>
            <div className='max-w-[80px]'>
                <p className='text-[#FA8B02] text-xl font-bold'>15+</p>
                <p className='text-sm text-[#333333]'>Choice of Services</p>
            </div>
            <div className='max-w-[80px]'>
                <p className='text-[#FA8B02] text-xl font-bold'>10+</p>
                <p className='text-sm text-[#333333]'>Professional Guides</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
