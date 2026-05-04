import { useState, useEffect } from "react";

const SlidingTestimonialCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const cardsData = [
    {
      metric: "72%",
      arrow: "↓",
      description: "Decrease in incoming support requests",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      bgGradient: "from-purple-500 to-purple-800",
    },
    {
      metric: "3.5x",
      arrow: "↑",
      description: "They increased their output by over 3.5 times",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
      bgGradient: "from-pink-400 to-red-500",
    },
    {
      metric: "91%",
      arrow: "↑",
      description: "Increase in team productivity and revenue growth",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      bgGradient: "from-blue-400 to-cyan-400",
    },
    {
      metric: "85%",
      arrow: "↓",
      description: "Reduction in project completion time",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
      bgGradient: "from-green-400 to-teal-400",
    },
  ];

  const totalCards = cardsData.length;

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // Tailwind lg breakpoint
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goToPrevious = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const goToNext = () => {
    if (currentIndex < totalCards - 1) setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="mx-auto bg-gray-50 w-screen py-20 font-sans overflow-hidden">
      {/* Header */}
      <div className="text-center flex w-screen px-6 items-center justify-center mb-16">
        <h1 className="text-xl md:text-4xl md:max-w-3xl text-black mb-3 leading-tight">
          Customers love Artifact.{" "}
          <span className="text-gray-500">
            Over 1,000 companies rely on Artifact to power their business.
          </span>
        </h1>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full px-5 md:px-5 overflow-hidden">
        {/* Carousel Track */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: isLargeScreen
              ? `translateX(-${currentIndex * (100 / 2.4)}%)`
              : `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {cardsData.map((card, index) => (
            <div
              key={index}
              className={`flex items-stretch justify-center px-2 ${
                isLargeScreen ? "min-w-[47.66%]" : "min-w-full"
              }`}
            >
              <div
                className={`bg-gradient-to-br ${card.bgGradient} rounded-3xl p-8 md:p-10 shadow-2xl flex flex-col md:flex-row items-center gap-2 md:gap-10 text-white w-full h-full`}
              >
                {/* Card Text */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-3 mb-5">
                    <span className="text-4xl md:text-6xl font-extrabold">
                      {card.metric}
                    </span>
                    <span className="text-2xl md:text-3xl text-white/80">
                      {card.arrow}
                    </span>
                  </div>
                  <p className="text-lg md:text-xl mb-8 leading-relaxed">
                    {card.description}
                  </p>
                  <button className="border-2 border-white text-white px-6 py-3 rounded-full text-base font-semibold hover:bg-white hover:text-black transition-all duration-300">
                    See Stories
                  </button>
                </div>
                {/* Card Image */}
                <img
                  src={card.image}
                  alt="Customer"
                  className="w-40 h-40 md:w-48 md:h-48 rounded-2xl object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex pl-10 justify-start gap-4 mt-10">
        <button
          onClick={goToPrevious}
          disabled={currentIndex === 0}
          className={`w-12 h-12 border-2 bg-white rounded-full flex items-center justify-center text-lg font-bold transition-all duration-300 ${
            currentIndex === 0
              ? "border-gray-300 text-gray-400 cursor-not-allowed opacity-50"
              : "border-gray-300 text-gray-700 hover:border-black hover:bg-black hover:text-white cursor-pointer"
          }`}
        >
          ‹
        </button>
        <button
          onClick={goToNext}
          disabled={currentIndex === totalCards - 1}
          className={`w-12 h-12 border-2 bg-white rounded-full flex items-center justify-center text-lg font-bold transition-all duration-300 ${
            currentIndex === totalCards - 1
              ? "border-gray-300 text-gray-400 cursor-not-allowed opacity-50"
              : "border-gray-300 text-gray-700 hover:border-black hover:bg-black hover:text-white cursor-pointer"
          }`}
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default SlidingTestimonialCards;