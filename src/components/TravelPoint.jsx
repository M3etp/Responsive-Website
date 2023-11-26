import React from "react";

function TravelPoint() {
  return (
    <div className=" h-[100vh] flex md:flex-row flex-col items-center">
      <div>
        <img src="/travel-point.png" className=" w-[770px]" />
      </div>
      <div className='md:w-[440px] w-auto mx-auto px-5'>
        <h2 className="text-pink-500 text-3xl font-bold tracking-widest">
          TRAVEL POINT
        </h2>
        <p className="text-2xl font-bold pt-5">We helping you find your dream location</p>
        <p className='md:text-[18px] text-[14px] text-[#191825] opacity-50'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
        <div className="pt-5 flex flex-wrap gap-6 ">
            <div className="w-[150px] h-[110px] rounded-lg bg-white outline-1 flex flex-col justify-center items-center">
                <h3 className=" text-orange-500 text-2xl font-bold">500+</h3>
                <p className="text-sm">Holiday Packages</p>
            </div>
            <div className="w-[150px] h-[110px] rounded-lg bg-white outline-1 flex flex-col justify-center items-center">
                <h3 className=" text-orange-500 text-2xl font-bold">100+</h3>
                <p className="text-sm">Luxary Hotels</p>
            </div>
            <div className="w-[150px] h-[110px] rounded-lg bg-white outline-1 flex flex-col justify-center items-center">
                <h3 className=" text-orange-500 text-2xl font-bold">7+</h3>
                <p className="text-sm">Premium Airlines</p>
            </div>
            <div className="w-[150px] h-[110px] rounded-lg bg-white outline-1 flex flex-col justify-center items-center">
                <h3 className=" text-orange-500 text-2xl font-bold">2K+</h3>
                <p className="text-sm">Happy Customers</p>
            </div>  
        </div>
      </div>
    </div>
  );
}

export default TravelPoint;
