import React from 'react'

const Careers = () => {

  return (
    <div className='flex flex-col px-2 py-20 items-center'>

        <h1 className='text-[7vw] md:text-4xl leading-[1] max-w-4xl text-center'>What drives Profiled? A relentless focus on problem solving for everyday businesses.</h1>



        <div className="grid sm:grid-cols-2 lg:grid-cols-3 mt-20 max-w-7xl gap-2">
  <div className="aspect-square w-full text-white justify-between text-center p-10 flex flex-col items-center bg-black rounded-sm overflow-hidden">
    <h3 className='text-4xl text-gray-500'>01</h3>
    <h1 className='text-4xl'>Build loud </h1>
    <p className='text-lg text-gray-500'>We move fast and genuinely believe we’re just one great marketing stunt away from a billion-dollar business. </p>
    
  </div>
  <div className="aspect-square w-full rounded-sm overflow-hidden bg-black">
    <img
        src="https://framerusercontent.com/images/jehlP4lN1tfJz6MQec5UQwETHBU.webp"
        alt=""
        className="w-full h-full object-cover"
    />
  </div>
  <div className="aspect-square w-full text-white justify-between text-center p-10 flex flex-col items-center bg-black rounded-sm overflow-hidden">
    <h3 className='text-4xl text-gray-500'>02</h3>
    <h1 className='text-4xl'>No guesswork</h1>
    <p className='text-lg text-gray-500'>We build, test, learn, and repeat until every step is proven and the right path becomes impossible to miss.</p>
    
  </div>

  <div className="aspect-square w-full text-white justify-between text-center p-10 flex flex-col items-center bg-black rounded-sm overflow-hidden">
    <h3 className='text-4xl text-gray-500'>03</h3>
    <h1 className='text-4xl'>Simplicity scales</h1>
    <p className='text-lg text-gray-500'>If it needs a paragraph to explain, it’s already too complex — the best ideas are the ones anyone can grasp in seconds.</p>
    
  </div>
  <div className="aspect-square w-full text-white justify-between text-center p-10 flex flex-col items-center bg-black rounded-sm overflow-hidden">
    <h3 className='text-4xl text-gray-500'>04</h3>
    <h1 className='text-4xl'>Work like it’s yours</h1>
    <p className='text-lg text-gray-500'>Not in the burnout way, but in the way where you take pride in every detail, own the outcomes, and care enough to make it better than you found it.</p>
    
  </div>
  <div className="aspect-square w-full  text-white  bg-cover bg-center gap-5 bg-orange-500 bg-blend-multiply bg-[url(https://framerusercontent.com/images/Umwe05l5zhsyeIIzcMBfDuzDatU.webp)]  justify-center text-center  p-10 flex flex-col items-center bg-black rounded-sm overflow-hidden">
   
    <h1 className='text-4xl'>Sound Likes You?</h1>
    <button className='text-xl py-2 px-5 bg-white text-black rounded-full'>See Carrers</button>
    
    
  </div>

  
</div>

    </div>
  )
}

export default Careers