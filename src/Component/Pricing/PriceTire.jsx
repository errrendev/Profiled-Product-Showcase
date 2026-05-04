import React from 'react'

const PriceTire = () => {
  return (
    <div className="flex flex-col max-w-7xl lg:flex-row w-full px-4 md:px-10 gap-6 mt-10">
      {/* Basic Plan */}
      <div className="border flex flex-col gap-10 justify-between bg-white border-gray-300 rounded-md p-6 flex-1">
        <div className="text-2xl md:text-3xl">
          <h3>Basic</h3>
          <h2 className="text-gray-400 font-medium">$15/month</h2>
        </div>
        <p className="text-lg md:text-xl mt-3">
          The essential toolkit for small teams and new startups.
        </p>
        <div className="bg-black text-white text-lg md:text-xl text-center rounded-full py-3 px-6 mt-4">
          Start Now
        </div>
        <div className="text-gray-600 flex flex-col gap-2 mt-4">
          <h1 className="text-black">What's included?</h1>
          <ul className="list-disc list-inside">
            <li>Unlimited automation</li>
            <li>Basic integrations</li>
            <li>Real-time analytics</li>
            <li>Standard support</li>
          </ul>
        </div>
        <p className="text-gray-500 text-sm mt-3">
          Add some disclaimer text here if necessary.
        </p>
      </div>

      {/* Growth Plan */}
      <div className="border flex flex-col justify-between bg-white border-gray-300 rounded-md p-6 flex-1">
        <div className="text-2xl md:text-3xl">
          <h3>Growth</h3>
          <h2 className="text-gray-400 font-medium">$30/month</h2>
        </div>
        <p className="text-lg md:text-xl mt-3">
          The essential toolkit for growing teams.
        </p>
        <div className="bg-gradient-to-r from-orange-500 to-pink-800 text-lg md:text-xl text-white text-center rounded-full py-3 px-6 mt-4">
          Start Now
        </div>
        <div className="text-gray-600 flex flex-col gap-2 mt-4">
          <h1 className="text-black">What's included?</h1>
          <ul className="list-disc list-inside">
            <li>Unlimited automation</li>
            <li>Advanced integrations</li>
            <li>Real-time analytics</li>
            <li>Priority support</li>
          </ul>
        </div>
        <p className="text-gray-500 text-sm mt-3">
          Add some disclaimer text here if necessary.
        </p>
      </div>

      {/* Pro Plan */}
      <div className="border flex flex-col justify-between bg-black text-white border-gray-300 rounded-md p-6 flex-1">
        <div className="text-2xl md:text-3xl">
          <h3>Pro</h3>
          <h2 className="text-gray-400 font-medium">$50/month</h2>
        </div>
        <p className="text-lg md:text-xl mt-3">
          The complete toolkit for scaling businesses.
        </p>
        <div className="bg-white text-black text-lg md:text-xl text-center rounded-full py-3 px-6 mt-4">
          Start Now
        </div>
        <div className="text-gray-300 flex flex-col gap-2 mt-4">
          <h1 className="text-white">What's included?</h1>
          <ul className="list-disc list-inside">
            <li>Unlimited automation</li>
            <li>Premium integrations</li>
            <li>Advanced analytics</li>
            <li>24/7 dedicated support</li>
          </ul>
        </div>
        <p className="text-gray-400 text-sm mt-3">
          Add some disclaimer text here if necessary.
        </p>
      </div>
    </div>
  )
}

export default PriceTire