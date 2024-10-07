import React from "react";
import Wrapper from "../assets/Wrapper";

function Landing() {
  return (
    <div className="bg-blue-100 min-h-screen">
    <div className='lg:max-w-[1024px] m-auto'>
        <div className="flex flex-col gap-10 h-203 items-center justify-center px-2 md:px-5 lg:px-0">
          <p className="text-gray-800 font-bold text-xl md:text-3xl lg:text-5xl text-center">
            Navigating the complexities of technology with expertise and insight
            – we transform your challenges into opportunities for growth.
          </p>
          <p className=" text-gray-800 font-semibold text-lg md:text-xl lg:text-2xl text-center ">
            Innovative Expertise and Trusted Partnerships for Exceptional
            Outcomes.
          </p>
        </div>
    </div>
    </div>
  );
}

export default Landing;
