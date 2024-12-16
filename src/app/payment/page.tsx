import Image from "next/image";

const Layout = () => {
  return (
    <div className="max-w-[1440px] mx-auto p-4 bg-gray-50 overflow-hidden">
    
      <div className="flex flex-col md:flex-row gap-8">
     
        <div className="flex-1 bg-white shadow-md rounded-lg p-4">
          <Image
            src="/Payment.png" 
            alt="Left Image"
            width={852}
            height={600}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

       
        <div className="w-full md:w-[492px] bg-white shadow-md rounded-tl-[10px] p-4">
          <Image
            src="/Rental Summary.png" 
            alt="Right Image"
            width={400}
            height={560}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Layout;
