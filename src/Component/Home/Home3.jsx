import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import FAQ from '../Pricing/FAQ';


const Home3 = () => {
  return (
    <div className='px-3 sm:px-10 lg:px-35 flex flex-col gap-10 py-20'>
        <FAQ />
        


        <div className="rounded-lg p-6 flex flex-col lg:flex-row text-white justify-between w-full bg-black">
  {/* Left content */}
  <div className="flex flex-col gap-7 py-7 px-5 lg:w-1/2">
    <h3 className="text-gray-500 text-sm md:text-base">Download the app</h3>
    <h1 className="text-3xl md:text-5xl lg:text-6xl leading-tight">
      Collaboration without all the chaos
    </h1>
    <p className="text-sm md:text-base">
      Artifact’s unified platform transforms scattered insights into optimized
      automation—technical knowledge optional.
    </p>

    {/* Buttons */}
    <div className="w-full flex flex-col sm:flex-row mt-5 text-sm gap-3">
      <div className="border bg-white text-black flex gap-2 items-center border-gray-300 font-medium rounded-full py-3 px-6 justify-center sm:justify-start">
        <FaApple /> <h3>Apple Store</h3>
      </div>
      <div className="bg-white text-black flex gap-2 items-center rounded-full py-3 px-6 justify-center sm:justify-start">
        <IoLogoGooglePlaystore /> <h3>Google Play</h3>
      </div>
    </div>
  </div>

  {/* Right content */}
  <div className="w-full lg:w-1/2 h-72 lg:h-auto mt-6 lg:mt-0 flex overflow-hidden justify-center items-center bg-orange-500 bg-blend-multiply bg-[url(https://framerusercontent.com/images/Umwe05l5zhsyeIIzcMBfDuzDatU.webp)] rounded-md bg-cover">
    <img
      className="w-40 md:w-60 lg:w-70"
      src="https://framerusercontent.com/images/LRO06G7J3Wnsm00sMeyKFq9gfU.png?scale-down-to=2048"
      alt=""
    />
  </div>
</div>




    </div>
  )
}

export default Home3