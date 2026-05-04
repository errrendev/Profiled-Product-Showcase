import React from "react";

const articles = [
  {
    id: 1,
    title: "What businesses get wrong about digital transformation",
    image: "https://placehold.co/300x180?text=Article+1",
  },
  {
    id: 2,
    title: "Scaling smarter with technology that actually works",
    image: "https://placehold.co/300x180?text=Article+2",
  },
  {
    id: 3,
    title: "The hidden inefficiencies slowing your business down",
    image: "https://placehold.co/300x180?text=Article+3",
  },
  {
    id: 4,
    title: "How automation frees teams to focus on real growth",
    image: "https://placehold.co/300x180?text=Article+4",
  },
];

const NewsInsights = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20">
      {/* Heading */}
      <div className="mb-10 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold">News & Insight</h2>
        <p className="text-gray-600 mt-2">
          Read the latest product updates, company news and industry insight.
        </p>
      </div>

      {/* Main layout */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left - Featured Article */}
        <div className="flex-1">
          <div className="rounded-lg overflow-hidden shadow">
            <img
              src="https://placehold.co/800x500?text=Featured+Article"
              alt="Featured Article"
              className="w-full h-80 md:h-[28rem] object-cover"
            />
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-500">Insight · Apr 17, 2025</p>
            <h3 className="text-xl md:text-2xl font-semibold mt-2">
              Breaking down information silos with the right digital toolkit
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              Caleb Piero
            </p>
          </div>
        </div>

        {/* Right - Other Articles */}
        <div className="w-full lg:w-1/3 flex flex-col gap-6">
          {articles.map((article) => (
            <div key={article.id} className="flex items-center gap-4">
              <img
                src={article.image}
                alt={article.title}
                className="w-24 h-16 rounded object-cover"
              />
              <h4 className="text-sm font-medium leading-snug hover:underline cursor-pointer">
                {article.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsInsights;