import React from 'react';
import Image from 'next/image';  

const page = () => {
  return (
    <div className="min-h-screen flex flex-col"> 
      {/* Main Content Section */}
      <div className="flex flex-col sm:flex-row justify-center items-start space-x-4 space-y-4 sm:space-y-0 mx-auto flex-1">
        {/* Left Sidebar */}
        <aside className="bg-white border-r opacity-100 w-full sm:w-[286px] md:w-[320px] lg:w-[350px] h-[400px] sm:h-[900px] lg:h-screen flex-shrink-0 mb-4">
          <div className="w-full h-full flex items-center justify-center">
            <img
              src="/Nav Bar.png"
              alt="Sidebar Image"
              className="w-full h-full object-contain"
            />
          </div>
        </aside>

        {/* Right Div */}
        <div className="bg-white border-r opacity-100 w-full sm:w-[286px] md:w-[320px] lg:w-[350px] h-[400px] sm:h-[900px] lg:h-screen flex-shrink-0 mb-4">
          <Image
            src="/Details Rental.png" 
            alt="Right Image"
            width={300}
            height={350}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        {/* Third Div with images */}
        <div className="bg-white opacity-100 w-full sm:w-[286px] md:w-[320px] lg:w-[350px] h-[400px] sm:h-[900px] lg:h-screen flex-shrink-0 mb-4">
          <Image
            src="/Top 5 Car Rental.png" 
            alt="Right Image"
            width={300}
            height={350}
            className="w-full h-auto rounded-lg object-cover"
          />

          {/* Second Image */}
          <Image
            src="/Recent Transaction.png" 
            alt="Second Image"
            width={300}
            height={350}
            className="w-full h-auto rounded-lg object-cover mt-4"  
          />
        </div>
      </div>
      </div>
    
  );
};

export default page;
