import React from "react";

const Hero = () => {
  return (
    <div className="min-h-screen px-6 md:px-12 lg:px-30 py-12 text-white bg-black rounded-xl w-full flex items-center">
      <div className="flex flex-col gap-12 lg:gap-20 w-full">
        {/* Text Section */}
        <div>
          <p className="text-sm md:text-base text-gray-400">About our tech stack</p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl mt-6 leading-snug md:leading-tight font-bold">
          The technology powering Profiled is built for scale, reliability, and seamless integration.
          </h1>
        </div>

        {/* Image Section */}
        <div className="flex flex-col md:flex-row w-full gap-4 md:gap-6">
          {/* Left Image with Background Blend */}
          <div className="relative w-full md:w-1/2 h-64 md:h-96 lg:h-[28rem] rounded-md overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://framerusercontent.com/images/Umwe05l5zhsyeIIzcMBfDuzDatU.webp')] bg-cover bg-center bg-orange-500 bg-blend-multiply" />
            <img
              className="absolute inset-0 w-full h-full object-contain p-6 md:p-10"
              src="https://framerusercontent.com/images/iNmwgjSnVXye9OFW7nUFy9Hs8.png"
              alt="Tech Illustration"
            />
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 h-64 md:h-96 lg:h-[28rem] rounded-md overflow-hidden">
            <img
              className="w-full h-full object-cover object-center"
              src="https://framerusercontent.com/images/A5tRdt5WsTr90iDsSaKRFkmYUMs.png"
              alt="Technology Preview"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;