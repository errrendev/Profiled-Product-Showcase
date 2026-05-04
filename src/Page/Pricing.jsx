import React from 'react'
import PriceTire from '../Component/Pricing/PriceTire'
import { MdOutlineStarPurple500 } from "react-icons/md";
import FAQ from '../Component/Pricing/FAQ';
import Footer from './../Component/Footer'
import SlidingTestimonialCards from '../Component/Pricing/Testimonals';
import Nav from './../Component/Nav'

const Pricing = () => {
  return (
    <>
    <Nav />
   <div className='flex flex-col  items-center'>
   

   <div className="text-center  flex flex-col gap-5 items-center max-w-3xl mx-auto px-4 py-12">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  leading-[1]">
        Flexible pricing that scales with you
      </h1>

      {/* Subtitle */}
      <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl">
        Choose a plan that fits your team's needs, from startup to enterprise.
      </p>

      {/* Reviews */}
      <div className="flex flex-col sm:flex-row items-center gap-2 text-gray-500 text-sm">
        <p className="font-medium">G2</p>
        <div className="flex text-yellow-500 text-lg">
          <MdOutlineStarPurple500 />
          <MdOutlineStarPurple500 />
          <MdOutlineStarPurple500 />
          <MdOutlineStarPurple500 />
          <MdOutlineStarPurple500 />
        </div>
        <p className="font-medium">100+ Reviews</p>
      </div>
    </div>

        <PriceTire />
        <SlidingTestimonialCards />
        <FAQ />

       

   </div>

   <Footer />
</>

  )
}

export default Pricing