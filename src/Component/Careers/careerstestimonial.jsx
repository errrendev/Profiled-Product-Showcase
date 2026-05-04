import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TeamTestimonials = () => {
  // Dynamic user data - you can easily add more users here
  const testimonials = [
    {
      id: 1,
      name: "Reed Price",
      position: "Sales Manager",
      image: "https://framerusercontent.com/images/pl3Ta18azDa0biNfqwf7tVd4iuA.webp",
      quote: "There's a real focus on building great tech without unnecessary complexity. It's all about making things simple and effective."
    },
    {
      id: 2,
      name: "Sarah Chen",
      position: "Product Designer", 
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=600&fit=crop&face",
      quote: "The collaborative environment here is incredible. Every day brings new challenges and opportunities to grow as a designer."
    },
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="bg-gray-50 ">
      <div className="max-w-7xl mx-auto  py-16">
        <div className="grid grid-cols-12  items-center">
          
          {/* Left Side - Text Content */}
          <div className="col-span-12 px-3 flex flex-col justify-center items-center lg:items-start lg:col-span-5 space-y-8">
            <div className="space-y-6 text-center lg:text-left">
              <h1 className="text-2xl lg:text-4xl xl:text-4xl max-w-120 lg:w-90  text-black leading-tight">
                See why our team love coming to work at Artifact<br/>
                
              </h1>
              
              <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors duration-200 mt-3">
                See Careers
              </button>
            </div>

            {/* Rating Section */}
            <div className="flex items-center space-x-3 ">
              <span className="text-gray-600 text-sm">Open Door</span>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-gray-400" />
                ))}
              </div>
              <span className="text-gray-600 text-sm">30+ reviews</span>
            </div>
          </div>

          {/* Right Side - Image Section */}
          <div className="col-span-12 sm:px-3 w-full mt-6 lg:col-span-7 ">
            <div className="rounded-xl overflow-hidden w-full flex flex-col sm:flex-row">
              
              {/* Main Image Container */}
              <div className=" w-full overflow-hidden ">
       
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-full h-80 lg:h-96 object-cover transition-all duration-500 ease-in-out"
                />
        
              </div>

              {/* Quote Card - Positioned to the right of image */}
              <div className=" bg-white flex flex-col justify-between p-6 w-full lg:p-8  shadow-xl  lg:max-w-sm z-20 transform transition-all duration-500 ease-in-out">
                <p className="text-gray-800 text-sm lg:text-base leading-relaxed mb-6 font-normal">
                  "{currentTestimonial.quote}"
                </p>
                
                <div>
                  <h3 className="font-bold text-lg text-black mb-1">
                    {currentTestimonial.name}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {currentTestimonial.position}
                  </p>
                </div>
              </div>

              {/* Navigation Arrows - Bottom left of image */}
              

            </div>
            <div className="mt-4 flex space-x-3  z-30">
                <button
                  onClick={goToPrevious}
                  className="bg-white/95 backdrop-blur-sm p-2.5 border border-gray-300 rounded-full  hover:bg-white transition-all duration-200 hover:scale-105"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>
                
                <button
                  onClick={goToNext}
                  className="bg-white/95 backdrop-blur-sm p-2.5 border border-gray-300 rounded-full  hover:bg-white transition-all duration-200 hover:scale-105"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5 text-gray-700" />
                </button>
              </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default TeamTestimonials;