import React from "react";

const Timeline = () => {
  const events = [
    { date: "2023", text: "Fact is founded in California" },
    { date: "May 2023", text: "First prototype launched to early testers" },
    { date: "Nov 2023", text: "Secured funding to fuel growth" },
    { date: "Feb 2024", text: "First major integration released for users" },
    { date: "Apr 2024", text: "Expanded team to scale development" },
    { date: "Sept 2024", text: "Hit 1,000 businesses using Artifact" },
    { date: "Jan 2025", text: "Launched Artifact for enterprise" },
    { date: "Future", text: "More goodness" },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-20 px-6">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          The story so far.
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Key moments in our ongoing mission to redefine business automation.
        </p>
      </div>

      {/* Desktop - Horizontal Timeline */}
      <div className="hidden md:block relative max-w-6xl mx-auto">
        {/* Horizontal line */}
        <div className="absolute top-5 left-0 w-full h-[2px] bg-gray-200" />

        <div className="flex justify-between relative">
          {events.map((event, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center w-28 md:w-32"
            >
              {/* Marker */}
              <div className="relative">
                <div className="w-[2px] h-10 bg-gray-300 mx-auto" />
                <div className="w-2 h-2 bg-black rounded-full absolute -top-1 left-1/2 transform -translate-x-1/2" />
              </div>

              {/* Text */}
              <div className="mt-4">
                <p className="text-sm font-semibold text-gray-900">
                  {event.date}
                </p>
                <p className="text-xs text-gray-600 mt-1">{event.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile - Vertical Timeline */}
      <div className="md:hidden max-w-md mx-auto space-y-10">
        {events.map((event, idx) => (
          <div key={idx} className="flex items-start gap-4">
            {/* Marker */}
            <div className="flex flex-col items-center">
              <div className="w-2 h-2 bg-black rounded-full" />
              {idx !== events.length - 1 && (
                <div className="w-[2px] flex-1 bg-gray-300" />
              )}
            </div>

            {/* Text */}
            <div>
              <p className="text-sm font-semibold text-gray-900">
                {event.date}
              </p>
              <p className="text-xs text-gray-600 mt-1">{event.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;