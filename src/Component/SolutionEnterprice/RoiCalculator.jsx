import React, { useState, useEffect } from "react";

const ROICalculator = () => {
  const DEFAULTS = {
    employees: 10000,
    xFollowers: 300000,
    igLikes: 650000,
    liFollowers: 50000,
  };

  const [employees, setEmployees] = useState("");
  const [xFollowers, setXFollowers] = useState("");
  const [igLikes, setIgLikes] = useState("");
  const [liFollowers, setLiFollowers] = useState("");
  const [results, setResults] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  // Handle input changes with validation
  const handleInputChange = (setter) => (e) => {
    const value = e.target.value;
    // Only allow numbers and empty string
    if (value === '' || /^[0-9\b]+$/.test(value)) {
      setter(value);
    }
  };

  const sanitize = (val, fallback) => {
    const n = Number(val);
    return !val || isNaN(n) || n < 0 ? fallback : n;
  };

  const format = (n) => new Intl.NumberFormat("en-US").format(Math.round(n));

  const handleCalculate = () => {
    setIsCalculating(true);
    
    // Use setTimeout to allow the calculating state to trigger animations
    setTimeout(() => {
      const e = sanitize(employees, DEFAULTS.employees);
      const x = sanitize(xFollowers, DEFAULTS.xFollowers);
      const likes = sanitize(igLikes, DEFAULTS.igLikes);
      const li = sanitize(liFollowers, DEFAULTS.liFollowers);

      const currentReach = x + likes + li;
      const potentialReach = e * 681.72 + currentReach;
      const newPeople = Math.max(0, potentialReach - currentReach);
      const percentIncrease =
        currentReach > 0 ? Math.round((newPeople / currentReach) * 100) : 0;

      setResults({
        currentReach: Math.round(currentReach),
        potentialReach: Math.round(potentialReach),
        newPeople: Math.round(newPeople),
        percentIncrease,
      });
      
      setIsCalculating(false);
    }, 600);
  };

  // For bar widths (relative to potential)
  const barWidth = (val, max) => {
    if (!max || max <= 0) return "0%";
    return `${Math.min(100, (val / max) * 100)}%`;
  };

  return (
    <div className="max-w-5xl flex flex-col items-center bg-[#faf7f5] mx-auto text-center py-20 px-6">
      {/* Heading */}
      <h2 className="text-5xl max-w-3xl text-gray-900 mb-3">
        See how far Amplify can take your message
      </h2>
      <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
        Use this free tool to calculate your potential reach.
      </p>

      {/* Inputs row */}
      <div className="grid grid-cols-2 mt-20 md:grid-cols-4 gap-6 mb-8">
        <div className="relative">
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder={String(DEFAULTS.employees)}
            value={employees}
            onChange={handleInputChange(setEmployees)}
            className="w-full border border-gray-300 p-3 rounded-md text-center focus:outline-none focus:ring-1 focus:ring-black transition-all"
          />
          <p className="mt-2 text-sm font-medium text-gray-700">Employees</p>
        </div>

        <div className="relative">
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder={String(DEFAULTS.xFollowers)}
            value={xFollowers}
            onChange={handleInputChange(setXFollowers)}
            className="w-full border border-gray-300 p-3 rounded-md text-center focus:outline-none  focus:ring-1 focus:ring-black  transition-all"
          />
          <p className="mt-2 text-sm font-medium text-gray-700">𝕏 followers</p>
        </div>

        <div className="relative">
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder={String(DEFAULTS.igLikes)}
            value={igLikes}
            onChange={handleInputChange(setIgLikes)}
            className="w-full border border-gray-300 p-3 rounded-md text-center focus:outline-none  focus:ring-1 focus:ring-black  transition-all"
          />
          <p className="mt-2 text-sm font-medium text-gray-700">👍 likes</p>
        </div>

        <div className="relative">
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder={String(DEFAULTS.liFollowers)}
            value={liFollowers}
            onChange={handleInputChange(setLiFollowers)}
            className="w-full border border-gray-300 p-3 rounded-md text-center focus:outline-none focus:ring-1 focus:ring-black  transition-all"
          />
          <p className="mt-2 text-sm font-medium text-gray-700">in followers</p>
        </div>
      </div>

      {/* Button */}
      <button
        onClick={handleCalculate}
        disabled={isCalculating}
        className={`mx-auto bg-[#08323C] text-white mt-5 py-3 px-8 rounded-md font-semibold transition-all transform hover:scale-105 ${
          isCalculating ? "opacity-75 cursor-not-allowed" : "hover:bg-[#0a4552]"
        }`}
      >
        {isCalculating ? "Calculating..." : "Calculate Your Reach"}
      </button>

      {/* Results with animations */}
      {results && (
        <div
          className={`mt-12 text-left ${
            isCalculating ? "opacity-0" : "opacity-100 transition-opacity duration-700"
          }`}
        >
          {/* Bar comparison */}
          <div className="space-y-5">
            <div className="flex items-center">
              <span className="w-64 text-gray-700 font-medium">
                Your current maximum social reach
              </span>
              <div className="flex-1 h-6 bg-gray-200 rounded ml-4 overflow-hidden">
                <div
                  className="h-6 bg-teal-700 rounded transition-all duration-1000 ease-out"
                  style={{
                    width: barWidth(results.currentReach, results.potentialReach),
                  }}
                />
              </div>
              <span className="ml-4 font-semibold text-gray-800 min-w-[100px] text-right">
                {format(results.currentReach)}
              </span>
            </div>

            <div className="flex items-center">
              <span className="w-64 text-gray-700 font-medium">
                Your potential social reach with Amplify
              </span>
              <div className="flex-1 h-6 bg-gray-200 rounded ml-4 overflow-hidden">
                <div
                  className="h-6 bg-teal-500 rounded transition-all duration-1000 ease-out"
                  style={{ width: "100%" }}
                />
              </div>
              <span className="ml-4 font-semibold text-gray-800 min-w-[100px] text-right">
                {format(results.potentialReach)}
              </span>
            </div>
          </div>

          <hr className="my-10 border-gray-200" />

          {/* Highlight cards with staggered animations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            <div className="bg-teal-50 p-6 rounded-lg border border-teal-100 transform transition-all duration-500 hover:scale-105">
              <p className="text-4xl font-extrabold text-teal-700 mb-2">
                {format(results.newPeople)}
              </p>
              <p className="text-gray-700">
                new people could be seeing your content
              </p>
            </div>
            <div className="bg-teal-50 p-6 rounded-lg border border-teal-100 transform transition-all duration-500 hover:scale-105 delay-150">
              <p className="text-4xl font-extrabold text-teal-700 mb-2">
                {results.percentIncrease}%+
              </p>
              <p className="text-gray-700">
                potential increase in your social reach
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ROICalculator;