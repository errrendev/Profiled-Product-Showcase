import React, { useState } from 'react'

const SolutionEnterprice2 = () => {

    const [activeTab, setActiveTab] = useState("Operations");

    const tabs = ["Operations", "Agents", "Entities", "Dashboard", ];


  return (
    <div className='bg-[#f9f7f5] flex flex-col px-2 items-center'>
<div className='py-12 md:py-16 w-full px-6 md:px-12 lg:px-12 mt-12 md:mt-20 flex flex-col lg:flex-row gap-12 md:gap-16 justify-between'>
  <div className='flex flex-col  gap-6 md:gap-8'>
    <p className='text-sm md:text-base'>Welcome to Profiled</p>
    <h1 className='text-3xl md:text-4xl lg:text-5xl'>Get guidance when technology ends</h1>
    <p className='text-gray-500 text-base md:text-lg'>Artifact's unified platform transforms scattered insights into optimized, AI-driven automation—technical knowledge optional.</p>
    <div className='bg-black w-fit text-lg text-white rounded-full py-3 px-8'>Buy Now</div>

    <div className='flex flex-col md:flex-row mt-6 gap-8 md:gap-10'>
      <div className='flex gap-4 md:gap-5 flex-col w-full'>
        <div className='h-24 w-full md:w-36 flex items-center justify-center rounded-lg bg-cover relative overflow-hidden bg-[url(https://framerusercontent.com/images/Umwe05l5zhsyeIIzcMBfDuzDatU.webp)]'>
          <div className="absolute inset-0 bg-pink-400 mix-blend-multiply"></div>
          <img className="relative z-10 h-10 md:h-12" src="https://framerusercontent.com/images/ZASyIQTjun93AF0QsgZlmXT2Cdc.svg" alt="" />
        </div>
        <p className='text-sm md:text-base'>Simplify integrations with seamless API connectivity across platforms and enterprise tools.</p>
      </div>
      <div className='flex gap-4 md:gap-5 flex-col w-full'>
        <div className='h-24 w-full md:w-36 flex items-center justify-center rounded-lg bg-cover relative overflow-hidden bg-[url(https://framerusercontent.com/images/Umwe05l5zhsyeIIzcMBfDuzDatU.webp)]'>
          <div className="absolute inset-0 bg-orange-400 mix-blend-multiply"></div>
          <img className="relative z-10 h-10 md:h-12" src="https://framerusercontent.com/images/x7F0y0CwLoH7ogR5vnsHdnOLFw.svg" alt="" />
        </div>
        <p className='text-sm md:text-base'>Simplify integrations with seamless API connectivity across platforms and enterprise tools.</p>
      </div>
    </div>
  </div>

  <div className='flex flex-col-reverse lg:flex-col w-full lg:w-[40rem] gap-6 md:gap-8'>
    <div className='flex flex-col md:flex-row-reverse gap-6 md:gap-8'>
      <div className='bg-black flex flex-col justify-between items-start text-white p-6 md:p-7 rounded-lg h-72 md:h-80 w-full md:w-80'>
        <img className='h-4 md:h-5' src="https://framerusercontent.com/images/3PjTs2GiiXAtOZsaeT6ymqT4CTM.svg" alt="" />
        <h3 className='text-xl md:text-2xl mt-4'>$5.1M+ revenue unlocked through optimization.</h3>
        <button className='text-sm py-2.5 px-5 bg-white text-black rounded-full mt-4'>Customer Stories</button>
      </div>
      <div className='h-72 md:h-80 w-full md:w-80 rounded-lg overflow-hidden'>
        <img className="w-full h-full object-cover" src="https://framerusercontent.com/images/bf1HunKyaYmF1ZJsvddmzdzVgw.webp?scale-down-to=1024" alt="" />
      </div>
    </div>

    <div className="relative rounded-lg w-full h-72 md:h-80 overflow-hidden bg-[url('https://framerusercontent.com/images/Umwe05l5zhsyeIIzcMBfDuzDatU.webp')] bg-cover bg-center">
      <div className="absolute inset-0 bg-orange-500 mix-blend-multiply"></div>
      <img
        className="object-contain object-center mx-auto h-full w-auto relative z-10 p-4"
        src="https://framerusercontent.com/images/WygglN4IcuqxoGF9a8tPLrNvE.webp"
        alt=""
      />
    </div>
  </div>
</div>






<div className='flex flex-col w-full py-16 md:py-24 lg:py-30 text-center items-center justify-center px-4 md:px-8'>
  <h1 className='text-3xl md:text-4xl lg:text-5xl w-full md:w-4xl lg:w-5xl'>
    Customers love Artifact. Over 100 companies rely on Artifact to power their business operations.
  </h1>

  {/* Tabs */}
  <div className="flex mt-8 md:mt-10 gap-2 md:gap-3 flex-wrap justify-center">
    {tabs.map((tab) => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base rounded-md font-medium transition ${
          activeTab === tab
            ? "bg-black text-white"
            : "text-gray-600 border border-gray-200 hover:text-black"
        }`}
      >
        {tab}
      </button>
    ))}
  </div>

  {/* Content */}
  <div className="h-auto md:h-100 lg:h-130 mt-4 md:mt-6 rounded-md w-full max-w-6xl bg-[#E5E5E5] p-4 md:p-6">
    {activeTab === "Operations" && 
      <div className='w-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-10 h-full'>
        <div className='w-full md:w-80 lg:w-100'>
          <img className='h-60 md:h-70 lg:h-90 w-full object-contain' src="https://framerusercontent.com/images/BjK7jJzvyWTpp6F8lLeQFqwZo.png?scale-down-to=1024" alt="" />
        </div>
        <div className='flex flex-col text-left w-full md:w-100 gap-6 md:gap-8 lg:gap-10'>
          <div className='flex text-base md:text-lg flex-col items-start'>
            <h1 className='font-medium'>Artifact keeps your business data in sync</h1>
            <p className='text-gray-600'>across all systems, giving you real-time insights without the hassle.</p>
          </div>
          <div className='flex text-base md:text-lg flex-col items-start'>
            <h1 className='font-medium'>Real-time operational intelligence</h1>
            <p className='text-gray-600'>flows naturally through Artifact's custom built distributed architecture.</p>
          </div>
        </div> 
      </div>
    }
    {activeTab === "Agents" && 
      <div className='w-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-10 h-full'>
        <div className='w-full md:w-80 lg:w-100'>
          <img className='h-60 md:h-70 lg:h-90 w-full object-contain' src="https://framerusercontent.com/images/DfV5becey398qemZ2CqOhc25k.webp?scale-down-to=1024" alt="" />
        </div>
        <div className='flex flex-col text-left w-full md:w-100 gap-6 md:gap-8 lg:gap-10'>
          <div className='flex text-base md:text-lg flex-col items-start'>
            <h1 className='font-medium'>Real-time operational intelligence</h1>
            <p className='text-gray-600'>flows naturally through Artifact's custom built distributed architecture.</p>
          </div>
          <div className='flex text-base md:text-lg flex-col items-start'>
            <h1 className='font-medium'>Artifact keeps your business data in sync</h1>
            <p className='text-gray-600'>across all systems, giving you real-time insights without the hassle.</p>
          </div>
        </div> 
      </div>
    }
    {activeTab === "Dashboard" && 
      <div className='w-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-10 h-full'>
        <div className='w-full md:w-80 lg:w-100'>
          <img className='h-60 md:h-70 lg:h-90 w-full object-contain' src="https://framerusercontent.com/images/OSzS6SeV6xGQR7ovo8GAJvr1r1c.webp" alt="" />
        </div>
        <div className='flex flex-col text-left w-full md:w-100 gap-6 md:gap-8 lg:gap-10'>
          <div className='flex text-base md:text-lg flex-col items-start'>
            <h1 className='font-medium'>Real-time operational intelligence</h1>
            <p className='text-gray-600'>flows naturally through Artifact's custom built distributed architecture.</p>
          </div>
          <div className='flex text-base md:text-lg flex-col items-start'>
            <h1 className='font-medium'>Artifact keeps your business data in sync</h1>
            <p className='text-gray-600'>across all systems, giving you real-time insights without the hassle.</p>
          </div>
        </div> 
      </div>
    }
    {activeTab === "Entities" && 
      <div className='w-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-10 h-full'>
        <div className='w-full md:w-80 lg:w-100'>
          <img className='h-60 md:h-70 lg:h-90 w-full object-contain' src="https://framerusercontent.com/images/DfV5becey398qemZ2CqOhc25k.webp?scale-down-to=1024" alt="" />
        </div>
        <div className='flex flex-col text-left w-full md:w-100 gap-6 md:gap-8 lg:gap-10'>
          <div className='flex text-base md:text-lg flex-col items-start'>
            <h1 className='font-medium'>Artifact keeps your business data in sync</h1>
            <p className='text-gray-600'>across all systems, giving you real-time insights without the hassle.</p>
          </div>
          <div className='flex text-base md:text-lg flex-col items-start'>
            <h1 className='font-medium'>Artifact keeps your business data in sync</h1>
            <p className='text-gray-600'>across all systems, giving you real-time insights without the hassle.</p>
          </div>
        </div> 
      </div>
    }
  </div>
</div>
    </div>
  )
}

export default SolutionEnterprice2