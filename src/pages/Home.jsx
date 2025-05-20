import React from 'react';
import '../styles/index.css';


const Home = () => {
  return (
    <div className="bg-[#CFEBD1]">
      {/* Hero Section */}
      <section className="py-35">
        <div className="flex justify-between items-center rounded-lg">
          <div className="w-1/2 text-center text-[#333] ml-10">
            <h1 className="text-5xl font-bold text-[#1e3c3f] tracking-tighter leading-normal ">
              Welcome to a <span className="text-[#196D0D]">Healthy and Educational</span> platform for <br />a better life
            </h1>
            <p className="text-2xl leading-8 ">
              Discover how to live a healthy life, monitor your progress, <br />and learn the best nutrition for your body.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <button className="bg-[#196D0D] text-white px-8 py-3 rounded-4xl text-xl hover:bg-[#155d07] transition-colors">
                Start Now
              </button>
              <button className="bg-transparent border-2 border-[#196D0D] text-[#196D0D] px-8 py-3 rounded-4xl text-xl hover:bg-[#196D0D] hover:text-white transition-colors">
                See More
              </button>
            </div>
          </div>
          <div className="w-[40%]">
            <img src="/assets/image/home-hero.png" alt="Healthy food" className="w-full h-auto rounded-xl" />
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-[#FDFAF6] pt-16 text-center">
        <h2 className="text-3xl font-semibold text-[#196D0D]">Our Key Features</h2>
        <p className="mt-4 text-xl text-gray-700 mb-10">Discover various features that will help you live a healthy lifestyle and gain useful knowledge.</p>
        <div className="mt-6 flex justify-center space-x-6 mb-15 ">
          <div className=" p-6 rounded-lg shadow-lg text-center hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="flex justify-start items-center mb-4">
              <img src="/assets/image/features-icon-1.png" alt="Food Icon" className="h-16 mr-4" />
              <h3 className="font-semibold">Food</h3>
            </div>
            <p className="text-gray-600">Complete information about food <br />
            nutrition and diet recommendations <br />
            according to your needs.</p>
          </div>
          <div className=" p-6 rounded-lg shadow-lg text-center hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="flex justify-start items-center mb-4">
              <img src="/assets/image/features-icon-2.png" alt="Food Icon" className="h-16 mr-4" />
              <h3 className="font-semibold">Track</h3>
            </div>
            <p className="text-gray-600">Track your health progress <br />
            with easy-to-use <br />
            and informative tracking tools.</p>
          </div>
          <div className=" p-6 rounded-lg shadow-lg text-center hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="flex justify-start items-center mb-4">
              <img src="/assets/image/features-icon-3.png" alt="Food Icon" className="h-16 mr-4" />
              <h3 className="font-semibold">Education</h3>
            </div>
            <p className="text-gray-600">Access a variety of articles, <br />
            videos and courses on <br />
            health and healthy lifestyle.</p>
          </div>
        </div>

        <div className="bg-[#CFEBD1] p-10">
          <h2 className="text-[#196D0D] font-bold text-3xl mt-10"> Ready to start your healthy journey?</h2>
          <p className="text-gray-600 mt-2">Join now to experience the benefits of our platform and start living healthier today.</p>
          <button className="mt-6 bg-[#196D0D] text-white px-8 py-3 rounded-4xl text-xl hover:bg-[#155d07] transition-colors">Join Now!</button>
        </div>              
      </section>
    </div>
  );
};

export default Home;
