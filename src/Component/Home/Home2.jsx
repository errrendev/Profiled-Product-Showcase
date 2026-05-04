import React from 'react'
import { MdOutlineStarPurple500 } from "react-icons/md";
import PriceTire from '../Pricing/PriceTire';

const Home2 = () => {
  return (
    <div className='bg-[#f6f4f0] flex flex-col px-2 items-center '>
        <div className="text-center mt-20 px-4 w-full  sm:max-w-[400px] md:max-w-[600px] lg:max-w-[800px] mx-auto">
            <span className="block  text-4xl md:text-4xl ">
                Customers love Artifact.
            </span>
            <span className="block text-gray-500 text-sm sm:text-base md:text-lg mt-2">
                Over 1,000 companies rely on Artifact to power their business.
            </span>
            </div>



            <div className="py-5 flex flex-col gap-7 text-center items-center px-4">
  {/* Heading Section */}


  {/* Features Grid */}
  <div className="grid text-left w-full sm:w-[90%] md:w-[80%] lg:w-[70%] mt-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="bg-white flex flex-col gap-5 items-start p-5 w-full rounded-md shadow-sm">
      <img
        className="h-12"
        src="https://framerusercontent.com/images/qF3seVabEE7dooAezFKepy4X4sw.svg"
        alt=""
      />
      <div>
        <h3 className="font-semibold text-lg">Automate workflows</h3>
        <p className="text-gray-500 text-sm">
          and optimize efficiency with AI-powered task management solutions for
          any modern business.
        </p>
      </div>
    </div>

    <div className="bg-white flex flex-col gap-5 items-start p-5 w-full rounded-md shadow-sm">
      <img
        className="h-12"
        src="https://framerusercontent.com/images/loSrBvaqvws3TXHJ13Y5ubMs1A.svg"
        alt=""
      />
      <div>
        <h3 className="font-semibold text-lg">Seamless integration</h3>
        <p className="text-gray-500 text-sm">
          Connect effortlessly with your existing tools to streamline your
          workflow.
        </p>
      </div>
    </div>

    <div className="bg-white flex flex-col gap-5 items-start p-5 w-full rounded-md shadow-sm">
      <img
        className="h-12"
        src="https://framerusercontent.com/images/hvhFixoMlDwEb5kzNXSNNhuEUm4.svg"
        alt=""
      />
      <div>
        <h3 className="font-semibold text-lg">Data-driven insights</h3>
        <p className="text-gray-500 text-sm">
          Make smarter decisions with analytics and reports powered by AI.
        </p>
      </div>
    </div>

    <div className="bg-white flex flex-col gap-5 items-start p-5 w-full rounded-md shadow-sm">
      <img
        className="h-12"
        src="https://framerusercontent.com/images/3cJrFjlm5lgF6Tbjt9xU3p3QVs.svg"
        alt=""
      />
      <div>
        <h3 className="font-semibold text-lg">Collaboration tools</h3>
        <p className="text-gray-500 text-sm">
          Improve teamwork with features designed for modern businesses.
        </p>
      </div>
    </div>

    <div className="bg-white flex flex-col gap-5 items-start p-5 w-full rounded-md shadow-sm">
      <img
        className="h-12"
        src="https://framerusercontent.com/images/mgPw1n73bkIqjDTUYnZYdXQxzpU.svg"
        alt=""
      />
      <div>
        <h3 className="font-semibold text-lg">Scalable solutions</h3>
        <p className="text-gray-500 text-sm">
          Whether small or enterprise, scale effortlessly with flexible options.
        </p>
      </div>
    </div>

    <div className="bg-white flex flex-col gap-5 items-start p-5 w-full rounded-md shadow-sm">
      <img
        className="h-12"
        src="https://framerusercontent.com/images/1hrMoHur5e3kUt6ubeQtOzyp68.svg"
        alt=""
      />
      <div>
        <h3 className="font-semibold text-lg">Secure & reliable</h3>
        <p className="text-gray-500 text-sm">
          Enterprise-grade security and reliability you can trust.
        </p>
      </div>
    </div>
  </div>

  {/* Button */}
  <div className="border border-gray-300 text-black text-lg sm:text-xl text-center rounded-full py-3 px-8 mt-10 cursor-pointer">
    Meet Customers
  </div>
</div>






        <div className="rounded-full w-full sm:w-[60%] lg:w-[50%] mt-10 flex bg-black gap-3 p-3 py-2 items-center">
  {/* Avatar */}
  <img
    className="rounded-full h-10 w-10 object-cover"
    src="https://framerusercontent.com/images/2bgOEYAWXMxCuw3emojGtuyV5ng.webp?scale-down-to=512"
    alt="Support Avatar"
  />

  {/* Text */}
  <div className="text-white flex flex-col text-xs sm:text-sm lg:text-base flex-1">
    <h1 className="font-medium">Hello 👋 I’m Jake from support.</h1>
    <p className="text-gray-300">
      Let me know if you have any questions about Artifact.
    </p>
  </div>

  {/* Button */}
  <div className="flex items-center">
    <button className="border border-gray-300 font-medium bg-white text-black rounded-full py-1.5 px-5 text-xs sm:text-sm hover:bg-gray-100 transition">
      Pricing
    </button>
  </div>
</div>




        
        
        <div className="h-[36rem] w-full mt-20 rounded-md relative overflow-hidden bg-[url('https://framerusercontent.com/images/uQmXQvxsL3NoGW8jaQIV3vI.webp')] bg-cover bg-center">
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="absolute inset-0 flex flex-col md:flex-row items-end justify-between p-6 sm:p-10 md:px-20 lg:px-32 gap-6">
            {/* Left Side - Testimonial */}
            <div className="text-white flex flex-col gap-6 max-w-2xl">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                “Looking for process improvements, we found a solution that transformed our entire data strategy. The depth of insights was remarkable.”
            </h3>
            <div>
                <h3 className="font-semibold">Maya Singh</h3>
                <p className="text-gray-300">Product Strategy Lead</p>
            </div>
            </div>

            {/* Right Side - Button */}
            <div className="flex justify-start md:justify-end w-full md:w-auto">
            <button className="border border-gray-300 font-medium bg-white text-black rounded-full py-2 px-6 sm:px-8 hover:bg-gray-100 transition">
                Pricing
            </button>
            </div>
        </div>
        </div>


            <div className="py-16 flex flex-col gap-6 text-center items-center px-4">
            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-3xl">
                Flexible pricing that scales with you
            </h1>

            {/* Subheading */}
            <p className="text-gray-600 text-base sm:text-lg">
                Choose a plan that fits your team's needs, from startup to enterprise.
            </p>

            {/* Review Section */}
            <div className="flex flex-wrap justify-center text-gray-500 text-sm sm:text-base items-center gap-2">
                <p className="font-medium">G2</p>
                <div className="flex text-yellow-500 text-lg">
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                </div>
                <p>620+ Reviews</p>
            </div>
            </div>





            <PriceTire />

            <div className="py-16 flex flex-col gap-7 text-center items-center px-4">
  {/* Heading Section */}
  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl ">
    See why customers love using Artifact
  </h1>
  <p className="text-gray-600 text-base sm:text-lg">
    98% Satisfaction from over 600 verified reviews.
  </p>
  <div className="bg-black text-white text-lg sm:text-xl text-center rounded-full py-3 px-8 cursor-pointer">
    Start Now
  </div>

  {/* Features Grid */}
  <div className="grid text-left w-full sm:w-[90%] md:w-[80%] lg:w-[70%] mt-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="bg-white flex flex-col gap-5 items-start p-5 w-full rounded-md shadow-sm">
      <img
        className="h-12"
        src="https://framerusercontent.com/images/qF3seVabEE7dooAezFKepy4X4sw.svg"
        alt=""
      />
      <div>
        <h3 className="font-semibold text-lg">Automate workflows</h3>
        <p className="text-gray-500 text-sm">
          and optimize efficiency with AI-powered task management solutions for
          any modern business.
        </p>
      </div>
    </div>

    <div className="bg-white flex flex-col gap-5 items-start p-5 w-full rounded-md shadow-sm">
      <img
        className="h-12"
        src="https://framerusercontent.com/images/loSrBvaqvws3TXHJ13Y5ubMs1A.svg"
        alt=""
      />
      <div>
        <h3 className="font-semibold text-lg">Seamless integration</h3>
        <p className="text-gray-500 text-sm">
          Connect effortlessly with your existing tools to streamline your
          workflow.
        </p>
      </div>
    </div>

    <div className="bg-white flex flex-col gap-5 items-start p-5 w-full rounded-md shadow-sm">
      <img
        className="h-12"
        src="https://framerusercontent.com/images/hvhFixoMlDwEb5kzNXSNNhuEUm4.svg"
        alt=""
      />
      <div>
        <h3 className="font-semibold text-lg">Data-driven insights</h3>
        <p className="text-gray-500 text-sm">
          Make smarter decisions with analytics and reports powered by AI.
        </p>
      </div>
    </div>

    <div className="bg-white flex flex-col gap-5 items-start p-5 w-full rounded-md shadow-sm">
      <img
        className="h-12"
        src="https://framerusercontent.com/images/3cJrFjlm5lgF6Tbjt9xU3p3QVs.svg"
        alt=""
      />
      <div>
        <h3 className="font-semibold text-lg">Collaboration tools</h3>
        <p className="text-gray-500 text-sm">
          Improve teamwork with features designed for modern businesses.
        </p>
      </div>
    </div>

    <div className="bg-white flex flex-col gap-5 items-start p-5 w-full rounded-md shadow-sm">
      <img
        className="h-12"
        src="https://framerusercontent.com/images/mgPw1n73bkIqjDTUYnZYdXQxzpU.svg"
        alt=""
      />
      <div>
        <h3 className="font-semibold text-lg">Scalable solutions</h3>
        <p className="text-gray-500 text-sm">
          Whether small or enterprise, scale effortlessly with flexible options.
        </p>
      </div>
    </div>

    <div className="bg-white flex flex-col gap-5 items-start p-5 w-full rounded-md shadow-sm">
      <img
        className="h-12"
        src="https://framerusercontent.com/images/1hrMoHur5e3kUt6ubeQtOzyp68.svg"
        alt=""
      />
      <div>
        <h3 className="font-semibold text-lg">Secure & reliable</h3>
        <p className="text-gray-500 text-sm">
          Enterprise-grade security and reliability you can trust.
        </p>
      </div>
    </div>
  </div>

  {/* Button */}
  <div className="border border-gray-300 text-black text-lg sm:text-xl text-center rounded-full py-3 px-8 mt-10 cursor-pointer">
    Meet Customers
  </div>
</div>

    </div>
  )
}

export default Home2