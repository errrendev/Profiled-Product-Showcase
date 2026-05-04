import React from "react";

const Subscribe = () => {
  return (
    <section className="w-full max-w-7xl mb-20 rounded-xl bg-[#f6f4f1] py-16 px-6 flex justify-center">
      <div className="max-w-3xl w-full text-center flex flex-col items-center gap-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl  text-gray-900">
          Subscribe for updates
        </h2>
        <p className="text-gray-600 text-base md:text-lg max-w-xl">
          Get insightful content delivered direct to your inbox. Once a month.
          No Spam – ever.
        </p>

        {/* Form */}
        <form className="w-full flex flex-col sm:flex-row items-center gap-3 mt-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;