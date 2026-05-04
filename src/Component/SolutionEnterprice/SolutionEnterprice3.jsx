import React from 'react'
import { MdOutlineStarPurple500 } from "react-icons/md";

const SolutionEnterprice3 = () => {
  return (
    <div className='bg-[#f9f7f5]'>
      <div className='py-10 md:py-25 flex flex-col gap-5 md:gap-7 text-center items-center px-4 md:px-0'>
        <h1 className='text-3xl md:text-5xl lg:text-6xl w-full md:w-170'>See why customers love using Artifact</h1>
        <p className='text-sm md:text-base'>98% Satisfaction from over 600 verified reviews.</p>
        <div className="bg-black text-white text-lg md:text-xl text-center rounded-full py-2 px-6 md:py-3 md:px-8">Start Now</div>

        <div className="grid text-left w-full md:w-[70vw] mt-10 md:mt-20 grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-white flex flex-col gap-4 md:gap-7 items-start p-4 md:p-5 w-full rounded-md"> 
              <img className='h-8 md:h-12' src={`https://framerusercontent.com/images/${item === 1 ? 'qF3seVabEE7dooAezFKepy4X4sw' : item === 2 ? 'loSrBvaqvws3TXHJ13Y5ubMs1A' : item === 3 ? 'hvhFixoMlDwEb5kzNXSNNhuEUm4' : '3cJrFjlm5lgF6Tbjt9xU3p3QVs'}.svg`} alt="" />
              <div>
                <h3 className='text-lg md:text-xl font-medium'>Automate workflows</h3>
                <p className='text-gray-500 text-sm md:text-base'>and optimize efficiency with AI-powered task management solutions for any modern business.</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='flex flex-col xl:flex-row w-full px-4 md:px-8 lg:px-40 py-10 md:py-15 pb-20 md:pb-30 gap-8 md:gap-10'>
        <div className='w-full gap-4 md:gap-5 flex flex-col'>
          <p className='text-sm md:text-base'>Let us show you Artifact</p>
          <h1 className='text-3xl md:text-5xl lg:text-6xl'>Smarter automation, fewer mistakes</h1>
          <p className='text-sm md:text-base'>Artifact's unified platform transforms scattered insights into optimized automation—technical knowledge optional.</p>

          <div className='flex text-gray-500 text-xs md:text-sm items-center gap-2'>
            <p>G2</p> 
            <div className='flex'>
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
            </div>
            <p>620+ Reviews</p>
          </div>

          <div className='flex flex-col md:flex-row mt-5 gap-4 md:gap-2'>
            <div className='bg-black flex flex-col justify-between items-start text-white p-5 md:p-7 rounded-md h-60 md:h-80 w-full md:w-80'>
              <img className='h-3 md:h-3.5' src="https://framerusercontent.com/images/3PjTs2GiiXAtOZsaeT6ymqT4CTM.svg" alt="" />
              <h3 className='text-lg md:text-xl mt-4'>$5.1M+ revenue unlocked through optimization.</h3>
              <button className='text-xs md:text-sm py-2 px-4 md:px-5 bg-white text-black rounded-full mt-4'>Customer Stories</button>
            </div>
            <div className='h-60 md:h-80 w-full md:w-80 rounded-md overflow-hidden object-cover object-center'>
              <img className='w-full h-full object-cover' src="https://framerusercontent.com/images/pl3Ta18azDa0biNfqwf7tVd4iuA.webp" alt="" />
            </div>
          </div>
        </div>

        <div className="w-full mx-auto bg-white p-5 md:p-8 rounded-lg shadow-sm">
          <form className="flex h-full flex-col gap-6 md:gap-10">
            {[
              { label: "Your name", type: "text" },
              { label: "Email address", type: "email" },
              { label: "Phone", type: "tel" },
              { label: "Organization", type: "text", placeholder: "Add some additional context with this helper text" }
            ].map((field, index) => (
              <div key={index}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  placeholder={field.placeholder || ""}
                  className="w-full border border-gray-300 rounded-md px-3 md:px-4 py-2 text-sm md:text-base focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>
            ))}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                How did you hear about us?
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 md:px-4 py-2 text-sm md:text-base focus:ring-2 focus:ring-black focus:outline-none">
                <option>Choose option</option>
                <option>Google</option>
                <option>Friend / Referral</option>
                <option>Social Media</option>
                <option>Other</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 md:py-3 rounded-full font-medium text-sm md:text-base hover:bg-gray-800 transition"
            >
              Request a demo
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SolutionEnterprice3