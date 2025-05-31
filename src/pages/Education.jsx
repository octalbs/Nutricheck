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
    <div className="bg-[#CFEBD1]">
      {/* Hero Section */}
    <section className="py-45">
      <div className=" flex justify-center items-center rounded-lg ">
        <div className=" w-1/2 text-center bg-[#FDFAF6] ml-10 border-t-4 border-r-4 border-b-4 border-l-4 border-[#196D0D] rounded-4xl p-20">
          <h1 className="text-5xl font-bold text-[#1e3c3f] tracking-tighter leading-normal">
            <span className="text-[#196D0D]">Discover </span> The Best <br />
            Nutrition Tips
          </h1>
          <p className="text-2xl tracking-wider leading-10 ">
            Explore articles and videos to learn more <br />
            about how nutrition impacts <br />
            your <span className="text-[#196D0D]">health </span> and well-being.
          </p>
          <div>            
            <button className="bg-transparent border-2 border-[#196D0D] text-[#196D0D] mt-5 px-8 py-3 rounded-4xl text-xl hover:bg-[#196D0D] hover:text-white transition-colors">
              See More
            </button>
          </div>
        </div>
        <div className="w-[35%] ml-10 py-10 md:mt-0  border-b-4   border-[#196D0D] rounded-xl">
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
            reverseDirection: true,
          }}
        >
          {/* Slider Images */}
          <SwiperSlide>
            <img
              src="/assets/image/food-slider-1.png"
              alt="Image 1"
              className="w-[80%] h-auto object-cover mx-auto"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/image/food-slider-2.png"
              alt="Image 2"
              className="w-[80%] h-auto object-cover mx-auto"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/image/food-slider-3.png"
              alt="Image 3"
              className="w-[80%] h-auto object-cover mx-auto"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/image/food-slider-4.png"
              alt="Image 4"
              className="w-[80%] h-auto object-cover mx-auto"
            />
          </SwiperSlide>
        </Swiper>
        </div>
      </div>
    </section>

    <section className="text-center bg-[#FDFAF6]">
      <h1 className=" pt-10 text-3xl font-bold text-green-800">Video & Article</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-30 py-10">
      
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
        <a href="https://youtu.be/fqhYBTg73fw?si=2DQ6lkJXhyzJRYnm" target="_blank" rel="noopener noreferrer">
          <div className="relative w-full h-60 overflow-hidden rounded-xl">
            <img 
              src="/assets/image/edu-thumbnail-5.png" 
              alt="How to Power Up Your Mind" 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <iframe 
              className="absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" 
              src="https://www.youtube.com/embed/fqhYBTg73fw?si=2DQ6lkJXhyzJRYnm" 
              frameBorder="0" 
              allow="autoplay; encrypted-media" 
              allowFullScreen
            />
          </div>
          <div className="mt-3">
            <p className="text-lg font-semibold text-green-800">What's the Best Diet? Healthy Eating 101</p>
          </div>
        </a>
      </div>
      <div className="relative group">
        <a href="https://youtu.be/fqhYBTg73fw?si=2DQ6lkJXhyzJRYnm" target="_blank" rel="noopener noreferrer">
          <div className="relative w-full h-60 overflow-hidden rounded-xl">
            <img 
              src="/assets/image/edu-thumbnail-5.png" 
              alt="How to Power Up Your Mind" 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <iframe 
              className="absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" 
              src="https://www.youtube.com/embed/fqhYBTg73fw?si=2DQ6lkJXhyzJRYnm" 
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
      <div className="relative group">
        <a href="https://youtu.be/fqhYBTg73fw?si=2DQ6lkJXhyzJRYnm" target="_blank" rel="noopener noreferrer">
          <div className="relative w-full h-60 overflow-hidden rounded-xl">
            <img 
              src="/assets/image/edu-thumbnail-5.png" 
              alt="How to Power Up Your Mind" 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <iframe 
              className="absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" 
              src="https://www.youtube.com/embed/fqhYBTg73fw?si=2DQ6lkJXhyzJRYnm" 
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
      <div className="relative group">
        <a href="https://youtu.be/fqhYBTg73fw?si=2DQ6lkJXhyzJRYnm" target="_blank" rel="noopener noreferrer">
          <div className="relative w-full h-60 overflow-hidden rounded-xl">
            <img 
              src="/assets/image/edu-thumbnail-5.png" 
              alt="How to Power Up Your Mind" 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <iframe 
              className="absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" 
              src="https://www.youtube.com/embed/fqhYBTg73fw?si=2DQ6lkJXhyzJRYnm" 
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
    </section>      

      {/* Video Grid Section */}
    
    </div>
  );
};

export default Education;
