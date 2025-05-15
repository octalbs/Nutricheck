import React from 'react';

const Home = () => {
  return (
    <div className="font-sans bg-[#A9D991]">

      {/* Hero Section */}
      <section className="flex justify-between items-center bg-[#A9D991] py-16 px-4 text-center">
        <div className='flex flex-col items-center'>
          <h1 className="text-4xl font-bold text-green-800">We Take Care About Your Health</h1>
          <p className="mt-4 text-lg text-green-700">Simplify your journey to balanced nutrition with healthy food choices. Track your meals and discover amazing recipes, easily!</p>
          <button className="mt-6 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600">see all</button>
        </div>
        <div>
          <img src="./assets/hero-home.png" alt="" />
        </div>
      </section>

      {/* NutriJel Section */}
      <section className="bg-yellow-50 py-16 text-center">
        <h2 className="text-3xl font-semibold text-green-700">Welcome to NutriJel!</h2>
        <p className="mt-4 text-lg text-gray-700">Your Digital Nutrition Companion - Making Healthy Eating Effortless!</p>
        <div className="mt-6 flex justify-center space-x-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="/path/to/food-icon1.png" alt="Food Icon" className="h-16 mb-4" />
            <p className="font-semibold">Healthy Recipes</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="/path/to/food-icon2.png" alt="Food Icon" className="h-16 mb-4" />
            <p className="font-semibold">Meal Tracker</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="/path/to/food-icon3.png" alt="Food Icon" className="h-16 mb-4" />
            <p className="font-semibold">Nutrition Tips</p>
          </div>
        </div>
        <button className="mt-6 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600">Explore</button>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-green-100 text-center">
        <h3 className="text-3xl font-semibold text-green-700">How It Works?</h3>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="/path/to/input-icon.png" alt="Input" className="h-16 mb-4 mx-auto" />
            <h4 className="text-xl font-semibold">Input your daily food</h4>
            <p className="text-gray-600">Enter the food you consume daily for tracking your nutrition.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="/path/to/analysis-icon.png" alt="Analysis" className="h-16 mb-4 mx-auto" />
            <h4 className="text-xl font-semibold">Analysis</h4>
            <p className="text-gray-600">Our system will analyze your daily intake and provide insights.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="/path/to/dashboard-icon.png" alt="Dashboard" className="h-16 mb-4 mx-auto" />
            <h4 className="text-xl font-semibold">View your nutrition dashboard</h4>
            <p className="text-gray-600">Track your progress with an easy-to-read nutrition dashboard.</p>
          </div>
        </div>
        <button className="mt-6 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600">Track your daily food</button>
      </section>

    </div>
  );
};

export default Home;
