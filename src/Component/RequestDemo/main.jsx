import React from 'react'
import { MdOutlineStarPurple500 } from "react-icons/md";

const main = () => {
  return (
    <div className='flex flex-col max-w-2xl py-7 text-center items-center '>
        <p>Let us show you Artifact</p>

        <h1 className='text-[4vw] leading-[1]'>Smarter automation, fewer mistakes</h1>

        <p className='mt-10'>Artifact’s unified platform transforms scattered insights into optimized automation—technical knowledge optional.</p>

        <div className='flex text-gray-500 py-15 text-sm items-center gap-2'>
            <p>G2 </p> 
            <div className='flex'>
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />    
            </div>
            <p> 620+ Reviews</p>
        </div>


        <div className='w-full p-3 text-left flex gap-5 bg-center items-center text-white bg-cover bg-[url(https://framerusercontent.com/images/Umwe05l5zhsyeIIzcMBfDuzDatU.webp)] overflow-hidden bg-orange-400 bg-blend-multiply h-[40vw] md:h-60 rounded-md bg-red-400'>
            <img className='h-full rounded-md' src="https://framerusercontent.com/images/0Ev4VJJeVOeJOopOOl8qBxHQjg.webp?scale-down-to=512" alt="" />
            <h1 className='text-xs sm:text-[2vw] md:text-lg'>Hello 👋 I’m Mark, a product evangelist here at Artifact. Just fill in the form below and I’d be happy to run you through a personal demonstration.</h1>
        </div>


    </div>
  )
}

export default main