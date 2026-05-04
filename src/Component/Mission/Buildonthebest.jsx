import React from "react";

const BuiltOnTheBest = () => {
  const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/4/4f/Slack_Icon.png",
    "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg",
    "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
    "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg",
    "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
  ];

  return (
    <section className=" bg-white text-center overflow-hidden  ">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-gray-900 font-bold leading-tight">
        Built on the best
      </h2>
      <p className="mt-4 md:mt-6 px-5 text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
        Join over <span className="font-semibold">1000 companies</span> using
        Artifact to create dynamic content that fits with any brand.
      </p>

      {/* GitHub stars */}
      <div className="mt-3 text-gray-500 text-xs md:text-sm">
        Github ⭐⭐⭐⭐⭐ 10k+ Stars
      </div>

      {/* Infinite scroll logos */}
      <div className="mt-8 md:mt-10 lg:mt-12 w-screen max-w-2xl relative bg-[#f6f4f1] py-6 overflow-hidden">
        <div className="flex gap-4 md:gap-6 animate-marquee">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center bg-gray-50 rounded-lg md:rounded-xl shadow-sm shrink-0"
            >
              <img
                src={logo}
                alt={`logo-${index}`}
                className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* animation styles */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 20s linear infinite;
        }

        /* Faster on small screens */
        @media (max-width: 768px) {
          .animate-marquee {
            animation: marquee 15s linear infinite;
          }
        }
      `}</style>
    </section>
  );
};

export default BuiltOnTheBest;