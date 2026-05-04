import React from 'react'
import { MdOutlineStarPurple500 } from "react-icons/md";
import { motion } from "framer-motion";

const Home1 = () => {

    const images = [
        "https://framerusercontent.com/images/62RaudZ18TLRpXIE916sSwh4TM.svg",
        "https://framerusercontent.com/images/2WdZCq9vCYyMBfrIgC0MibcALM.svg",
        "https://framerusercontent.com/images/vWNsPPzVcIMsYprdjIvv0JJDT2A.svg",
        "https://framerusercontent.com/images/PcEgRSJq1Rn2sZZiGPxi3so8Xo.svg",
        "https://framerusercontent.com/images/EGPjEYHzvUMWPWfamnlxc9n8qDE.svg",
        "https://framerusercontent.com/images/62RaudZ18TLRpXIE916sSwh4TM.svg",
        "https://framerusercontent.com/images/2WdZCq9vCYyMBfrIgC0MibcALM.svg",
        "https://framerusercontent.com/images/vWNsPPzVcIMsYprdjIvv0JJDT2A.svg",
        "https://framerusercontent.com/images/PcEgRSJq1Rn2sZZiGPxi3so8Xo.svg",
        "https://framerusercontent.com/images/EGPjEYHzvUMWPWfamnlxc9n8qDE.svg",
        "https://framerusercontent.com/images/62RaudZ18TLRpXIE916sSwh4TM.svg",
        "https://framerusercontent.com/images/2WdZCq9vCYyMBfrIgC0MibcALM.svg",
        "https://framerusercontent.com/images/vWNsPPzVcIMsYprdjIvv0JJDT2A.svg",
        "https://framerusercontent.com/images/PcEgRSJq1Rn2sZZiGPxi3so8Xo.svg",
        "https://framerusercontent.com/images/EGPjEYHzvUMWPWfamnlxc9n8qDE.svg",
        "https://framerusercontent.com/images/2WdZCq9vCYyMBfrIgC0MibcALM.svg",
        "https://framerusercontent.com/images/vWNsPPzVcIMsYprdjIvv0JJDT2A.svg",
        "https://framerusercontent.com/images/PcEgRSJq1Rn2sZZiGPxi3so8Xo.svg",
        "https://framerusercontent.com/images/EGPjEYHzvUMWPWfamnlxc9n8qDE.svg",
        "https://framerusercontent.com/images/62RaudZ18TLRpXIE916sSwh4TM.svg",
        "https://framerusercontent.com/images/2WdZCq9vCYyMBfrIgC0MibcALM.svg",
        "https://framerusercontent.com/images/vWNsPPzVcIMsYprdjIvv0JJDT2A.svg",
        "https://framerusercontent.com/images/PcEgRSJq1Rn2sZZiGPxi3so8Xo.svg",
        "https://framerusercontent.com/images/EGPjEYHzvUMWPWfamnlxc9n8qDE.svg",
      ];
      
  return (
    <div className='flex w-full px-4 flex-col items-center justify-center'>

            <div className="w-full max-w-120 overflow-hidden rounded-full mt-4 bg-[#f6f4f0]">
            <div className="whitespace-nowrap py-2 text-xs sm:text-sm md:text-base animate-marquee">
                🎉 Exciting news! Artifact V1 is now live and ready to purchase! 🎉 
                Exciting news! Artifact V1 is now live and ready to purchase! 🎉 
                Exciting news! Artifact V1 is now live and ready to purchase! 🎉 
                Exciting news! Artifact V1 is now live and ready to purchase! 🎉 
                Exciting news! Artifact V1 is now live and ready to purchase!
            </div>
            </div>

            <div className="text-center flex flex-col gap-4 items-center mt-10 px-4  w-full max-w-4xl mx-auto">
                {/* Subtitle */}
                <h3 className="text-sm sm:text-base text-gray-500">Welcome to Profiled</h3>

                {/* Main Heading */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl ">
                    Transforming potential into performance
                </h1>

                {/* Description */}
                <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl">
                    Artifact’s unified platform transforms scattered insights into optimized automation—technical knowledge optional.
                </p>

                {/* Button */}
                <div className="bg-black w-auto text-lg sm:text-xl text-white rounded-full py-2 px-6 mt-2 cursor-pointer hover:bg-gray-900 transition">
                    Buy Now
                </div>

                {/* Reviews */}
                <div className="flex flex-wrap justify-center items-center text-gray-500 text-xs sm:text-sm gap-2 mt-2">
                    <p className="font-medium">G2</p>
                    <div className="flex text-yellow-500 text-sm sm:text-base">
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    </div>
                    <p>100+ Reviews</p>
                </div>
                </div>





                <div className="flex max-w-7xl flex-col md:flex-row gap-4 md:gap-2 mt-10 px-2">
                {/* Left Image */}
                <img
                    className="w-full md:w-1/3 h-60 sm:h-72 md:h-100 rounded-md object-cover object-center"
                    src="https://framerusercontent.com/images/rBmUsbrqf8AMsGxzc1Ukzvv1E.webp"
                    alt="Left Image"
                />

                {/* Center Image + Overlay */}
                <div
                    className="
                    relative flex flex-col items-center pt-4 overflow-hidden
                    w-full md:w-1/3 h-60 sm:h-72 md:h-100
                    bg-[url('https://framerusercontent.com/images/Umwe05l5zhsyeIIzcMBfDuzDatU.webp')]
                    bg-cover bg-center bg-orange-500 bg-blend-multiply
                    rounded-md
                    px-4
                    "
                >
                    <div className="bg-black/40 rounded-md flex items-center gap-3 justify-center text-white w-full py-2">
                    <img
                        className="h-6 sm:h-7"
                        src="https://framerusercontent.com/images/uijBCMcq0cF8Mi9JorcmB8XUmU.svg"
                        alt="Icon"
                    />
                    <h1 className="text-sm sm:text-base">Build a marketing agent</h1>
                    </div>

                    <img
                    className="rounded-md mt-3 sm:mt-5 object-cover object-center w-full"
                    src="https://framerusercontent.com/images/BjK7jJzvyWTpp6F8lLeQFqwZo.png"
                    alt="Center Image"
                    />
                </div>

                {/* Right Testimonial */}
                <div className="w-full md:w-1/3 h-60 sm:h-72 md:h-100 flex flex-col justify-between rounded-md text-white p-4 sm:p-5 bg-black">
                    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl ">
                    “Artifact had everything we needed to build a stunning website in no time. The attention to detail in this product is simply remarkable.”
                    </h1>
                    <div className="text-xs sm:text-sm text-gray-400 mt-2">
                    <p>Paula Bennett</p>
                    <p>VP of Product Development, Morance</p>
                    </div>
                </div>
                </div>




            
                <div className="mt-10 flex px-3 flex-col gap-6 items-center px-4 sm:px-6 lg:px-10">
  {/* Heading */}
  <h3 className="text-center text-sm sm:text-base md:text-lg lg:text-xl w-80  sm:w-full">
    Join over 1,000 companies using Artifact to build content that fits with any brand.
  </h3>

  {/* Marquee container */}
  <div className="relative w-[85vw] mt-5 overflow-hidden py-4 sm:py-6">
    {/* Fade overlays */}
    <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 sm:w-20 bg-gradient-to-r from-white/70 to-transparent" />
    <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 sm:w-20 bg-gradient-to-l from-white/70 to-transparent" />

    {/* Marquee animation */}
    <motion.div
      className="flex gap-4 sm:gap-6 md:gap-10"
      animate={{ x: ["0%", "-100%"] }}
      transition={{
        repeat: Infinity,
        duration: 40,
        ease: "linear",
      }}
    >
      {[...images, ...images].map((src, index) => (
        <img
          key={index}
          src={src}
          alt=""
          className="h-6  md:h-6 lg:h-7 w-auto object-cover rounded-lg filter grayscale"
        />
      ))}
    </motion.div>
  </div>
</div>
                



<div className="py-16 px-4 sm:px-6 md:px-10 lg:px-20 mt-10 flex flex-col lg:flex-row gap-10 lg:gap-12 w-full">
  {/* Left Column */}
  <div className="flex lg:mt-25 flex-col gap-6 lg:gap-10 flex-1">
    <p className="text-sm">Welcome to Artifact</p>
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl ">
      Acceleration through adaptive insight
    </h1>

    <div className="bg-black w-max text-lg sm:text-xl text-white rounded-full py-2 px-6 mt-2 cursor-pointer hover:bg-gray-900 transition">
      Buy Now
    </div>

    <div className="flex flex-col gap-4 mt-6">
      <h3 className="text-sm sm:text-base md:text-lg">
        Artifact keeps your business data in sync across all systems, giving you real-time insights without the hassle.
      </h3>
      <h3 className="text-sm sm:text-base md:text-lg">
        Real-time operational intelligence flows naturally through Artifact’s custom built distributed architecture.
      </h3>
    </div>
  </div>

  {/* Right Column */}
  <div className="flex flex-col gap-4 lg:gap-6 flex-1">
    {/* Top Row */}
    <div className="flex flex-col md:flex-row gap-4 md:gap-2">
      {/* Card */}
      <div className="bg-black flex flex-col justify-between items-start text-white p-4 sm:p-6 md:p-7 rounded-md flex-1 h-60 sm:h-72 md:h-80">
        <img className="h-3.5 sm:h-4" src="https://framerusercontent.com/images/3PjTs2GiiXAtOZsaeT6ymqT4CTM.svg" alt="" />
        <h3 className="text-sm sm:text-base md:text-xl mt-2">$5.1M+ revenue unlocked through optimization.</h3>
        <button className="text-xs sm:text-sm py-2 px-4 sm:px-5 bg-white text-black rounded-full mt-2">
          Customer Stories
        </button>
      </div>

      {/* Image */}
      <div className="rounded-md overflow-hidden flex-1 h-60 sm:h-72 md:h-80">
        <img className="w-full h-full object-cover object-center" src="https://framerusercontent.com/images/pl3Ta18azDa0biNfqwf7tVd4iuA.webp" alt="" />
      </div>
    </div>

    {/* Bottom Image */}
    <div className="relative rounded-md w-full h-60 sm:h-72 md:h-80 overflow-hidden bg-[url('https://framerusercontent.com/images/Umwe05l5zhsyeIIzcMBfDuzDatU.webp')] bg-cover bg-orange-500 bg-blend-multiply bg-center">
      <img
        className="pt-8 sm:pt-10 pl-4 sm:pl-12 mx-auto object-contain"
        src="https://framerusercontent.com/images/zBDOFiZc0is2CAj72BPwEfShT5s.png"
        alt=""
      />
    </div>
  </div>
</div>

           



            
        </div>
  )
}

export default Home1