import Image from "next/image";
import Detail from '@/app/Detail/page'
import Rent from '@/app/Rent/page'
import Payment from '@/app/payment/page'
import Admin from '@/app/Admin/page'
export default function Home() {
  return (
    <div  className="bg-[#f6f7f9] min-h-screen p-4 sm:p-6 lg:p-20 flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
     
     <section className="w-full flex flex-wrap sm:flex-nowrap gap-4 sm:gap-8 justify-center">
        <div className="w-full sm:w-auto flex flex-col items-center">
          <Image src={"/Ads 1.png"} alt="" width={640} height={360} className="max-w-full" />
          <Image src={"/Pick - Up.png"} alt="" width={582} height={132} className="max-w-full mt-4" />
        </div>
        <div className="w-full sm:w-auto flex flex-col items-center relative">
          <Image src={"/Ads 2.png"} alt="" width={640} height={360} className="max-w-full" />
          <Image src={"/Drop - Off.png"} alt="" width={582} height={132} className="max-w-full mt-4" />
          {/* Position Switch.png */}
          <div className="absolute top-1/2 left-[100] transform -translate-x-[300px] translate-y-[100px]">
            <Image src={"/Switch.png"} alt="" width={60} height={60} className="max-w-full" />
          </div>
        </div>
      </section>
      <div className="bg-[#f6f7f9] min-h-screen p-4 sm:p-6 lg:p-20 flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
     
      <section className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Popular Cars</h2>
      </section>
     
      {/* Car Rows */}
<section className="flex flex-col gap-8">
  {/* Row 1 */}
  <div className="flex flex-wrap justify-between gap-8 w-full max-w-[1312px] mx-auto">
    <div className="w-full sm:w-[30%] md:w-[30%] lg:w-[30%] h-[388px] bg-white rounded-tl-lg shadow-md flex justify-center items-center overflow-hidden">
      <Image 
        src="/Catalog 1.png" 
        alt="Car 1" 
        width={304} 
        height={388} 
        className="object-cover rounded-md" 
      />
    </div>
    <div className="w-full sm:w-[30%] md:w-[30%] lg:w-[30%] h-[388px] bg-white rounded-tl-lg shadow-md flex justify-center items-center overflow-hidden">
      <Image 
        src="/Catalog 2.png" 
        alt="Car 2" 
        width={304} 
        height={388} 
        className="object-cover rounded-md" 
      />
    </div>
    <div className="w-full sm:w-[30%] md:w-[30%] lg:w-[30%] h-[388px] bg-white rounded-tl-lg shadow-md flex justify-center items-center overflow-hidden">
      <Image 
        src="/Catalog 3.png" 
        alt="Car 3" 
        width={304} 
        height={388} 
        className="object-cover rounded-md" 
      />
    </div>
  </div>

  {/* Row 2 */}
  <div className="flex flex-wrap justify-between gap-8 w-full max-w-[1312px] mx-auto">
    <div className="w-full sm:w-[30%] md:w-[30%] lg:w-[30%] h-[388px] bg-white rounded-tl-lg shadow-md flex justify-center items-center overflow-hidden">
      <Image 
        src="/Catalog 4.png" 
        alt="Car 4" 
        width={304} 
        height={388} 
        className="object-cover rounded-md" 
      />
    </div>
    <div className="w-full sm:w-[30%] md:w-[30%] lg:w-[30%] h-[388px] bg-white rounded-tl-lg shadow-md flex justify-center items-center overflow-hidden">
      <Image 
        src="/Catalog 1 (1).png" 
        alt="Car 5" 
        width={304} 
        height={388} 
        className="object-cover rounded-md" 
      />
    </div>
    <div className="w-full sm:w-[30%] md:w-[30%] lg:w-[30%] h-[388px] bg-white rounded-tl-lg shadow-md flex justify-center items-center overflow-hidden">
      <Image 
        src="/Catalog 2 (1).png" 
        alt="Car 6" 
        width={304} 
        height={388} 
        className="object-cover rounded-md" 
      />
    </div>
  </div>

  {/* Row 3 */}
  <div className="flex flex-wrap justify-between gap-8 w-full max-w-[1312px] mx-auto">
    <div className="w-full sm:w-[30%] md:w-[30%] lg:w-[30%] h-[388px] bg-white rounded-tl-lg shadow-md flex justify-center items-center overflow-hidden">
      <Image 
        src="/Catalog 3 (1).png" 
        alt="Car 7" 
        width={304} 
        height={388} 
        className="object-cover rounded-md" 
      />
    </div>
    <div className="w-full sm:w-[30%] md:w-[30%] lg:w-[30%] h-[388px] bg-white rounded-tl-lg shadow-md flex justify-center items-center overflow-hidden">
      <Image 
        src="/Catalog 1 (3).png" 
        alt="Car 8" 
        width={304} 
        height={388} 
        className="object-cover rounded-md" 
      />
    </div>
    <div className="w-full sm:w-[30%] md:w-[30%] lg:w-[30%] h-[388px] bg-white rounded-tl-lg shadow-md flex justify-center items-center overflow-hidden">
      <Image 
        src="/Catalog 2 (2).png" 
        alt="Car 9" 
        width={304} 
        height={388} 
        className="object-cover rounded-md" 
      />
    </div>
  </div>

  {/* Row 4 */}
  <div className="flex flex-wrap justify-between gap-8 w-full max-w-[1312px] mx-auto">
    <div className="w-full sm:w-[30%] md:w-[30%] lg:w-[30%] h-[388px] bg-white rounded-tl-lg shadow-md flex justify-center items-center overflow-hidden">
      <Image 
        src="/Catalog 3 (2).png" 
        alt="Car 10" 
        width={304} 
        height={388} 
        className="object-cover rounded-md" 
      />
    </div>
    <div className="w-full sm:w-[30%] md:w-[30%] lg:w-[30%] h-[388px] bg-white rounded-tl-lg shadow-md flex justify-center items-center overflow-hidden">
      <Image 
        src="/Catalog 4 (1).png" 
        alt="Car 11" 
        width={304} 
        height={388} 
        className="object-cover rounded-md" 
      />
    </div>
    <div className="w-full sm:w-[30%] md:w-[30%] lg:w-[30%] h-[388px] bg-white rounded-tl-lg shadow-md flex justify-center items-center overflow-hidden">
      <Image 
        src="/Catalog 3.png" 
        alt="Car 12" 
        width={304} 
        height={388} 
        className="object-cover rounded-md" 
      />
    </div>
  </div>
</section>

        {/* Closing the section tag here */}
</div>
      

<Detail />
<Rent />
<Payment />
<Admin />
      
    </div>
         
  );
}
