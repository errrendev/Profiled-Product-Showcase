import React from "react";

const ApiSection = () => {
  const features = [
    {
      id: 1,
      title: "Real-time operational intelligence",
      description:
        "flows naturally through Artifact’s custom built distributed architecture.",
    },
    {
      id: 2,
      title: "Artifact synchronizes enterprise",
      description:
        "data across distributed sources for continuous operational intelligence.",
    },
    {
      id: 3,
      title: "Through intelligent synchronization protocols",
      description:
        "Artifact delivers continuous data harmonization across ecosystems.",
    },
  ];

  return (
    <section className="w-full py-20 px-6 md:px-12 lg:px-20 bg-white">
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-6xl  text-gray-900">
          The API is just the beginning
        </h2>
      </div>

      {/* Features */}
      <div className="max-w-2xl mx-auto flex  flex-col gap-4 mb-12">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-[#f3f2ef] px-6 py-5 rounded-lg text-left"
          >
            <p className="text-gray-900 md:text-xl">{feature.title}</p>
            <p className="text-gray-600 text-sm md:text-xl mt-1">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Footer Text & Button */}
      <div className="max-w-xl mx-auto text-center">
        <p className="text-gray-600 mb-6 text-sm md:text-base">
          Artifact’s unified platform transforms scattered insights into
          optimized automation—technical knowledge optional.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-900 transition">
          Get started
        </button>
      </div>
    </section>
  );
};

export default ApiSection;