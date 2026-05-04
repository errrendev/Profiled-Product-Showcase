import React from "react";
import { useNavigate } from "react-router-dom";


const articles = [
  {
    id: 1,
    category: "News",
    date: "Apr 14, 2025",
    title: "The growing role of AI in smarter business decision-making",
    author: "Dana Horowitz",
    image: "https://framerusercontent.com/images/rBmUsbrqf8AMsGxzc1Ukzvv1E.webp",
  },
  {
    id: 2,
    category: "Insight",
    date: "Apr 14, 2025",
    title: "How integrations can make or break your team's workflow",
    author: "Yuki Tanaka",
    image: "https://framerusercontent.com/images/pl3Ta18azDa0biNfqwf7tVd4iuA.webp",
  },
  {
    id: 3,
    category: "News",
    date: "Apr 14, 2025",
    title: "How to simplify team collaboration with the right SaaS tools",
    author: "Dana Horowitz",
    image: "https://framerusercontent.com/images/BjK7jJzvyWTpp6F8lLeQFqwZo.png",
  },
  {
    id: 4,
    category: "News",
    date: "Apr 14, 2025",
    title: "New trends in remote work and productivity",
    author: "John Doe",
    image: "https://framerusercontent.com/images/uQmXQvxsL3NoGW8jaQIV3vI.webp",
  },
  {
    id: 5,
    category: "Insight",
    date: "Apr 14, 2025",
    title: "Best practices for modern SaaS product development",
    author: "Jane Smith",
    image: "https://framerusercontent.com/images/Umwe05l5zhsyeIIzcMBfDuzDatU.webp",
  },
  {
    id: 6,
    category: "News",
    date: "Apr 14, 2025",
    title: "How small teams can scale with AI automation",
    author: "Alex Johnson",
    image: "https://framerusercontent.com/images/2bgOEYAWXMxCuw3emojGtuyV5ng.webp",
  },
];

const LatestArticles = () => {
    const navigate = useNavigate();
    const handleArticleClick = (articleId) => {
        // Find the article data
        const article = articles.find(a => a.id === articleId);
        
        // Navigate using React Router with article data
        navigate(`/blog/${articleId}`, { 
          state: { article } 
        });
      };

  return (
    <section className="px-4 sm:px-6 lg:px-10 py-12 mx-auto">
      <h2 className="text-3xl sm:text-4xl mb-10">
        Latest Articles
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <div 
            key={article.id} 
            className="flex flex-col gap-4 cursor-pointer transition-transform hover:scale-105 hover:shadow-lg rounded-md p-2"
            onClick={() => handleArticleClick(article.id)}
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-60 sm:h-70 lg:h-80 object-cover rounded-md"
            />
            <div className="flex gap-2 text-xs text-gray-500">
              <span>{article.category}</span>
              <span>· {article.date}</span>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold hover:text-blue-600 transition-colors">
              {article.title}
            </h3>
            <p className="text-sm text-gray-600">{article.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestArticles;