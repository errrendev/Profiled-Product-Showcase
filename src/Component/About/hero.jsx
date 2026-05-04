import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center text-center px-4 sm:px-6 lg:px-8">
      {/* Heading Section */}
      <div className="max-w-2xl">
        <h1 className="text-xl sm:text-2xl font-medium tracking-wide text-gray-600">
          About us
        </h1>
        <h1 className="text-3xl sm:text-5xl md:text-6xl  mt-4 ">
          The next generation of business intelligence
        </h1>
      </div>

      {/* Image + Content Section */}
      <div className="mt-12 sm:mt-16 lg:mt-20 max-w-6xl w-full">
        {/* Image */}
        <img
          src="https://framerusercontent.com/images/foTskrzkZzNPxwblHNNQa68RQk.webp"
          alt="business-intelligence"
          className="w-full h-auto rounded-lg"
        />

        {/* Content */}
        <div className="flex flex-col md:flex-row  gap-4 md:gap-4 mt-4">
          {/* Left Section */}
          <div className="md:w-1/2 text-left bg-[url(https://framerusercontent.com/images/FxursHoQ0VMXhoCCOSxmx0VJVYg.webp)] bg-orange-700 bg-blend-multiply bg-center bg-cover p-6 flex flex-col justify-between rounded-lg text-white">
            <h1 className="text-2xl sm:text-3xl md:text-5xl">$1.2bn</h1>
            <h2 className="text-sm sm:text-base md:text-xl max-w-xs mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h2>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 text-left flex flex-col justify-between items-start p-6 bg-[#f6f4f1] rounded-lg">
            <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis,
              non.
            </p>
            <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition w-full sm:w-auto">
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;