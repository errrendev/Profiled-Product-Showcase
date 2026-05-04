import React from "react";

const CareersSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto text-center px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-3">Careers at Artifact</h2>
        <p className="text-gray-600 mb-12">
          Open Door ⭐⭐⭐⭐⭐ 30+ reviews
        </p>

        {/* Careers Card */}
        <div className="bg-gray-50 rounded-xl max-w-xl shadow-md overflow-hidden">
          {/* Images */}
          <div className="grid gap-2  grid-cols-2">
            <img
              src="https://framerusercontent.com/images/E8ZblUVJTEdhSeyFuiAvLSdU0.webp"
              alt="Team member"
              className="object-cover w-full h-64"
            />
            <img
              src="https://framerusercontent.com/images/7g6DgveJkRzPTlur3Pu6DnGS8g.webp?scale-down-to=1024"
              alt="Team smiling"
              className="object-cover w-full h-64"
            />
          </div>

          {/* Text */}
          <div className="p-6 text-left">
            <p className="text-lg mb-4">
              <span className="font-semibold">Join our growing team.</span> We are a 54 strong
              team of big-thinkers from around the globe, and we’re looking to expand.
            </p>
            <button className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition">
              See Careers
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;