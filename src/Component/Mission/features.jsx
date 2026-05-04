import React from "react";

const StatsSection = () => {
  const stats = [
    {
      id: 1,
      value: "99.99%",
      description: "Uptime reliability over the last 365 days",
      image: "https://framerusercontent.com/images/hSnr3XJbDDAx75ojCJXvfawZ1LE.svg",
    },
    {
      id: 2,
      value: "500k",
      description: "Requests served per second, yeah that’s a lot",
      image: "https://framerusercontent.com/images/wAhs5YhjrwZotznyboCrgHydBrg.svg",
    },
    {
      id: 3,
      value: "<15ms",
      description: "Average response time from our server",
      image: "https://framerusercontent.com/images/x7F0y0CwLoH7ogR5vnsHdnOLFw.svg",
    },
    {
      id: 4,
      value: "2PB+",
      description: "That’s a whole lot of petabytes we’re securely storing",
      image: "https://framerusercontent.com/images/RYQvwDTDIVpSgUKJdQkGPVNvZQ.svg",
    },
  ];

  return (
    <section className="bg-[#f7f6f3] w-full py-16 px-6 md:px-12 lg:px-20">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900">
          What drives Artifact?{" "}
          <span className="text-gray-500 font-normal">
            A relentless focus on problem solving for everyday businesses.
          </span>
        </h2>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="flex items-center h-50 bg-white rounded-lg shadow-sm overflow-hidden"
          >
            {/* Left image section */}
            <div className="w-30 flex justify-center items-center  bg-[url('https://framerusercontent.com/images/Umwe05l5zhsyeIIzcMBfDuzDatU.webp')] 
                    bg-cover bg-center bg-orange-500 bg-blend-multiply h-full flex-shrink-0">
              <img
                src={stat.image}
                alt="stat-icon"
                className="h-10  object-cover"
              />
            </div>
            {/* Text section */}
            <div className="flex flex-col h-full justify-between p-4">
              <h3 className="text-3xl md:text-6xl text-gray-900">
                {stat.value}
              </h3>
              <p className="text-gray-600 w-70 text-sm md:text-base">
                {stat.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;