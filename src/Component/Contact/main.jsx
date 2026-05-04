import React from 'react'

const main = () => {
  return (
    <div className=' flex flex-col text-center px-3 md:px-7 items-center'>

       <div className=' flex flex-col w-full max-w-5xl items-center gap-20 '>


       <div className='flex flex-col items-center gap-5'>
            <p className='text-sm lg:text-[1vw] text-gray-600'>Contact Us</p>
            <h1 className='text-4xl sm:text-5xl md:text-[4vw] '>Get in touch with us</h1>
            <p className='max-w-2xl xl:text-[1vw] 2xl:w-[50vw]'>Whether you have a question, need support, or just want to learn more about employee advocacy, our team is here to help.</p>
        </div>

        <div className="flex flex-col md:flex-row  md:h-120 w-full gap-1.5 bg-red-400 p-1.5">
  {/* Image Section */}
  <div className="w-full md:w-1/2">
    <img
      className="w-full h-full object-cover rounded-lg"
      src="https://framerusercontent.com/images/FffzsYS39UfRgcWgl1bIDp4gB3Q.webp"
      alt="Temple Guide"
    />
  </div>

  {/* Content Section */}
  <div className="w-full md:w-1/2 flex flex-col justify-center gap-6 md:gap-10 items-center  md:h-full bg-white rounded-lg p-4">
    <div className='text-lg font-medium sm:text-[1.5em] leading-7'>
        <h1>Profiled HQ</h1>
        <p className='text-gray-500'>Mumbai, Maharashtra, India</p>
    </div>
    <div className='sm:text-[1em] text-gray-600 max-w-60 leading-6'>
        <p>Empress Business Bay, Andheri East, Mumbai - 400093</p>
    </div>
    <div className='sm:text-[1em] text-gray-600 leading-6'>
        
        <p>+91 9082322596 / +91 8928101790</p>
    </div>
  </div>
</div>


       </div>


    </div>
  )
}

export default main