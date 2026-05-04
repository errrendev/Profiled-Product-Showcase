import React from 'react'

const About = () => {
  return (
    <div className="w-full max-w-2xl mx-auto px-4 md:px-8">
      {/* Marquee */}
      <div className="overflow-hidden text-white rounded-full mt-4 bg-black">
        <div className="whitespace-nowrap py-2 text-sm animate-marquee">
          🎉 Exciting news! Artifact V1 is now live and ready to purchase! 🎉 Exciting news! Artifact V1 is now live and ready to purchase! 🎉 Exciting news! Artifact V1 is now live and ready to purchase! 🎉 Exciting news! Artifact V1 is now live and ready to purchase!
        </div>
      </div>

      {/* Heading & Paragraphs */}
      <div className="flex mt-20 flex-col gap-10 items-center">
        <h1 className="text-center px-4 text-3xl sm:text-4xl md:text-5xl font-bold">
          How we balance innovation and technology
        </h1>

        <div className="flex flex-col gap-5 text-gray-600 text-base sm:text-lg leading-relaxed max-w-4xl">
          <p>
            We believe the traditional career ladder is ending. Today’s workforce demands more—more flexibility, more income, and more meaning in their work. And in a world where moonlighting is off-limits, a new path is emerging: turning work knowledge into personal brands.
          </p>
          <p>
            Profiled represents this shift. The next era of growth won’t be fueled by ads alone—it will be powered by people. By making it effortless for every employee to become a voice for their company, Profiled brings authenticity back to the heart of brand storytelling.
          </p>
          <p>
            At Profiled, we’re not just building software—we’re building a culture of learning. Skilled in AI and content in-house, every team member commits to 2-hour upskilling sprints each day (even our landlord joins in).
          </p>
          <p>
            We do this because the industry is stuck in outdated habits. Most agencies and platforms still rely on manual, clunky systems. We believe the future looks different—automated, scalable, and efficient. That’s why we’re rewiring not just how we work, but how the entire ecosystem operates.
          </p>
        </div>

        {/* Image + Content Block */}
        <div className="w-full bg-gray-200 p-4 rounded-lg flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2">
            <img
              className="rounded-md w-full h-64 md:h-full object-cover"
              src="https://framerusercontent.com/images/dfvCJ67KWhmuk2wzLRFNB93ZjRQ.webp?scale-down-to=1024"
              alt="Insight visual"
            />
          </div>
          <div className="w-full md:w-1/2 flex items-end">
            <div className="flex flex-col gap-4">
              <h1 className="text-lg sm:text-xl font-semibold">Insights April 14, 2025</h1>
              <p className="text-base sm:text-lg text-gray-700">
                Lorem ipsum dolor sit amet. Lorem ipsum dolor
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About