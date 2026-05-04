import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const BlogDetailPage = () => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const { blogId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Try to get blog data from React Router state first
    if (location.state?.article) {
      setBlog(location.state.article);
      setLoading(false);
      return;
    }
    
    // Fallback: try sessionStorage
    const storedBlog = sessionStorage.getItem('currentBlog');
    if (storedBlog) {
      setBlog(JSON.parse(storedBlog));
      setLoading(false);
      return;
    }
    
    // If no data available, you could fetch from API here
    console.log(`No blog data found for ID: ${blogId}`);
    setLoading(false);
  }, [blogId, location.state]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }



  return (
    <div className="min-h-screen ">
      {/* Navigation */}
      

      {/* Blog Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 py-12">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md font-medium">
              {blog.category}
            </span>
            <span>·</span>
            <time>{blog.date}</time>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {blog.title}
          </h1>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
              {blog.author.charAt(0)}
            </div>
            <div>
              <p className="font-medium text-gray-900">By {blog.author}</p>
              <p className="text-sm text-gray-500">Published on {blog.date}</p>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-8">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Blog Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <p className="text-lg text-gray-600 mb-6 italic">
              This is a sample blog post content. In a real application, you would store and retrieve the full blog content from your database or CMS.
            </p>
            
            <div className="space-y-6">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              
              <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 my-6">
                "This is a sample quote that would be relevant to the blog post content. It adds visual interest and breaks up the text flow."
              </blockquote>
              
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </div>
        </div>

        {/* Blog Metadata */}
        <div className="mt-12 p-6 bg-white rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Blog Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium text-gray-700">ID:</span> {blog.id}
            </div>
            <div>
              <span className="font-medium text-gray-700">Category:</span> {blog.category}
            </div>
            <div>
              <span className="font-medium text-gray-700">Author:</span> {blog.author}
            </div>
            <div>
              <span className="font-medium text-gray-700">Published:</span> {blog.date}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogDetailPage;