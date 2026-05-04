import React from 'react'
import Nav from '../Component/Nav'
import Footer from '../Component/Footer'
import Careers from '../Component/Careers/Careers'
import Careerstestimonial from '../Component/Careers/careerstestimonial'
import OpenRoles from '../Component/Careers/Openroles'

const careers = () => {
  return (
    <div>
        <Nav />
            <main className='px-2'>
            <div className="h-[45vh] md:h-[60vh] w-full mt-2 rounded-md relative overflow-hidden bg-[url(https://framerusercontent.com/images/7g6DgveJkRzPTlur3Pu6DnGS8g.webp)] bg-center bg-cover">
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/20"></div>

  <div className="absolute inset-0 flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between px-6 md:px-20 lg:px-32">
    {/* Text Section */}
    <div className="text-white flex flex-col gap-4 text-center md:text-left max-w-2xl">
      <h3 className="text-4xl sm:text-5xl md:text-[4vw] lg:text-[4vw] font-semibold leading-[1">
      We’re building the next step in martech intelligence
      </h3>
    </div>

    {/* Right Side Button / Placeholder */}
    <div className="w-full md:w-auto flex justify-center md:justify-end mt-6 md:mt-0">
      {/* Uncomment if needed */}
      {/* <div className="border border-gray-300 font-medium bg-white text-lg md:text-xl text-black rounded-full py-2 px-6 md:px-7">
        Get Started
      </div> */}
    </div>
  </div>
</div>

            <Careers />
            <Careerstestimonial />
            <OpenRoles />
            

            </main>
        <Footer />
    </div>
  )
}

export default careers