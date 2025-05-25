import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules'; 

import { Swiper, SwiperSlide } from 'swiper/react';
import '../styles/index.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const Education = () => {
  return (
    <div className="bg-[#CFEBD1] min-h-screen py-35">
      {/* Hero Section */}
      <section className="flex items-center justify-between mt-16 px-6">
        {/* Left Section (30% width) */}
        <div className="w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-green-800 mb-4">Discover the Best Nutrition Tips</h1>
          <p className="text-lg text-gray-700 mb-6">
            Explore articles and videos to learn more about how nutrition impacts your health and well-being.
          </p>
          <button className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition duration-300">
            Get Started
          </button>
        </div>

        {/* Right Section (70% width) */}
        <div className="w-[40%] mt-6 md:mt-0">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y,  Autoplay]}
            spaceBetween={2}
            slidesPerView={1} 
            centeredSlides={true} 
            slideToClickedSlide={true} 
            loop={true}     
            autoplay={{
              delay: 3000, 
              disableOnInteraction: false, 
            }}
          >
            {/* Slider Images */}
            <SwiperSlide>
              <img
                src="/assets/image/food-slider-1.png"
                alt="Image 1"
                className="w-full h-auto object-cover rounded-xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/assets/image/food-slider-2.png"
                alt="Image 2"
                className="w-full h-auto object-cover rounded-xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/assets/image/food-slider-3.png"
                alt="Image 3"
                className="w-full h-auto object-cover rounded-xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/assets/image/food-slider-4.png"
                alt="Image 4"
                className="w-full h-auto object-cover rounded-xl"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>



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
          <a href="https://youtu.be/E_LVUM4-d70?si=tkX-1ReFx91ZCHUz" target="_blank" rel="noopener noreferrer">
            <div className="relative w-full h-60 overflow-hidden rounded-xl">
              <img 
                src="/assets/image/edu-thumbnail-2.png" 
                alt="How to Power Up Your Mind" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <iframe 
                className="absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" 
                src="https://www.youtube.com/embed/E_LVUM4-d70?si=tkX-1ReFx91ZCHUz" 
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
        {/* Video 3 */}
        <div className="relative group">
          <a href="https://youtu.be/inEPlZZ_SfA?si=imkdCGMoWkv1k3Gx" target="_blank" rel="noopener noreferrer">
            <div className="relative w-full h-60 overflow-hidden rounded-xl">
              <img 
                src="/assets/image/edu-thumbnail-3.png" 
                alt="How to Power Up Your Mind" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <iframe 
                className="absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" 
                src="https://www.youtube.com/embed/inEPlZZ_SfA?si=imkdCGMoWkv1k3Gx" 
                frameBorder="0" 
                allow="autoplay; encrypted-media" 
                allowFullScreen
              />
            </div>
            <div className="mt-3">
              <p className="text-lg font-semibold text-green-800">How The Six Basic Nutrients Affect Your Body</p>
            </div>
          </a>
        </div>

        {/* Video 4 */}
        <div className="relative group">
          <a href="https://youtu.be/p4W-bvGvyfk?si=6Oh9Fgpu1H_W4e3k" target="_blank" rel="noopener noreferrer">
            <div className="relative w-full h-60 overflow-hidden rounded-xl">
              <img 
                src="/assets/image/edu-thumbnail-4.png" 
                alt="How to Power Up Your Mind" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <iframe 
                className="absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" 
                src="https://www.youtube.com/embed/p4W-bvGvyfk?si=6Oh9Fgpu1H_W4e3k" 
                frameBorder="0" 
                allow="autoplay; encrypted-media" 
                allowFullScreen
              />
            </div>
            <div className="mt-3">
              <p className="text-lg font-semibold text-green-800">Pedoman Gizi Seimbang</p>
            </div>
          </a>
        </div>

        {/* Video 5 */}
        <div className="relative group">
          <a href="https://youtu.be/p4W-bvGvyfk?si=6Oh9Fgpu1H_W4e3k" target="_blank" rel="noopener noreferrer">
            <div className="relative w-full h-60 overflow-hidden rounded-xl">
              <img 
                src="/assets/image/edu-thumbnail-4.png" 
                alt="How to Power Up Your Mind" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <iframe 
                className="absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" 
                src="https://www.youtube.com/embed/p4W-bvGvyfk?si=6Oh9Fgpu1H_W4e3k" 
                frameBorder="0" 
                allow="autoplay; encrypted-media" 
                allowFullScreen
              />
            </div>
            <div className="mt-3">
              <p className="text-lg font-semibold text-green-800">How The Six Basic Nutrients Affect Your Body</p>
            </div>
          </a>
        </div>

        {/* Add more video sections as needed */}
      </div>
    </div>
  );
};

export default Education;
