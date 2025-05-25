import React from 'react';
import '../styles/index.css';

const Education = () => {
  return (
    <div className="bg-[#CFEBD1] min-h-screen p-35">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-3xl font-bold text-green-800">Video & Article</h1>
      </section>

      {/* Video Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Video 1 */}
        <div className="relative group">
          <a href="https://youtu.be/Evji_ebWZQU?si=g5ww8EZCj19T5ykl" target="_blank" rel="noopener noreferrer">
            <div className="relative w-full h-60 overflow-hidden rounded-xl">
              <img 
                src="/assets/image/edu-thumbnail-1.png" 
                alt="Nutrition and Why it Matters" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <iframe 
                className="absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" 
                src="https://www.youtube.com/embed/Evji_ebWZQU?autoplay=1&mute=1" 
                frameBorder="0" 
                allow="autoplay; encrypted-media" 
                allowFullScreen
              />
            </div>
            <div className="mt-3">
              <p className="text-lg font-semibold text-green-800">Nutrition and Why it Matters</p>
            </div>
          </a>
        </div>

        {/* Video 2 */}
        <div className="relative group">
          <a href="https://www.youtube.com/watch?v=videoID2" target="_blank" rel="noopener noreferrer">
            <div className="relative w-full h-60 overflow-hidden rounded-xl">
              <img 
                src="thumbnail_image_2.jpg" 
                alt="How to Power Up Your Mind" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <iframe 
                className="absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" 
                src="https://www.youtube.com/embed/videoID2?autoplay=1&mute=1" 
                frameBorder="0" 
                allow="autoplay; encrypted-media" 
                allowFullScreen
              />
            </div>
            <div className="mt-3">
              <p className="text-lg font-semibold text-green-800">How to Power Up Your Mind: Essential Nutrients for a Healthy Brain</p>
            </div>
          </a>
        </div>

        {/* Add more video sections as needed */}
      </div>
    </div>
  );
};

export default Education;
