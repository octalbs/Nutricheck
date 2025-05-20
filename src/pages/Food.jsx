import React from "react";

const Food = () => {
  return (
    <div className="bg-[#FDFAF6]">

      {/* Hero section */}
      <section className="pt-40">
        <div className="flex items-center justify-between p-8">
          <div className="bg-[#CFEBD1] justify-center m-5 border-t-4 border-r-4 border-b-4 border-l-4 border-[#196D0D] rounded-br-full rounded-tr-full p-10 w-1/2">
            <h1 className="text-5xl font-semibold m-2 tracking-tighter leading-normal">Let’s <span className="text-[#196D0D]">Take Care</span>  <br />About Your Health </h1>
            <p className="text-gray-700 text-2xl m-2">Simplifies your journey to balanced nutrition with <br />
            instant food analysis, AI-powered insights. Track <br />
            your meals and discover smarter eating habits. <br />
            Start your health transformation today, <br />completely free!</p>
          </div>

          <div className="w-[40%]">

            <img src="/assets/image/food-hero.png" alt="Gambar" className=" rounded-lg" />
          </div>
        </div>
        <hr className="w-[80%] mx-auto border-t-2 " />

        <p className="text-center text-2xl m-10 leading-10"> “The path to healthy eating is not about punishing yourself for what you eat, but <br />
          about making mindful decisions that enhance your overall quality of life.” </p>
      </section>

      {/* Food categories section */}
      <section className="py-15 bg-[#CFEBD1]">
        <div className="flex justify-center gap-16">
          <div className="text-center">
            <img src="/assets/image/categories-fiber.png" alt="Fiber" className="rounded-4xl w-50 h-50 object-contain mx-auto p-6 border-2 border-[#196D0D] transform transition duration-300 hover:scale-105 hover:shadow-lg" />
            <h3 className="mt-4 font-semibold">Fiber</h3>
          </div>
          <div className="text-center">
            <img src="/assets/image/categories-protein.png" alt="Fiber" className="rounded-4xl w-50 h-50 object-contain mx-auto p-6 border-2 border-[#196D0D] transform transition duration-300 hover:scale-105 hover:shadow-lg" />
            <h3 className="mt-4 font-semibold">Protein</h3>
          </div>
          <div className="text-center">
            <img src="/assets/image/categories-fats.png" alt="Fiber" className="rounded-4xl w-50 h-50 object-contain mx-auto p-6 border-2 border-[#196D0D] transform transition duration-300 hover:scale-105 hover:shadow-lg" />
            <h3 className="mt-4 font-semibold">Fats</h3>
          </div>
          <div className="text-center">
            <img src="/assets/image/categories-carbs.png" alt="Fiber" className="rounded-4xl w-50 h-50 object-contain mx-auto p-6 border-2 border-[#196D0D] transform transition duration-300 hover:scale-105 hover:shadow-lg" />
            <h3 className="mt-4 font-semibold">Carbs</h3>
          </div>
        </div>
      </section>

      {/* New Section with Grid */}
      <section className="">
        <div className="mt-20 px-10">
          <div className="bg-white py-4 mb-10 border-2 border-[#196D0D] rounded-4xl w-4/5 mx-auto text-center ">
            <h3 className="text-3xl font-bold text-[#196D0D]">Fiber</h3>
          </div>
          <div className="max-w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Yellow Category */}
            <div className="text-center bg-white py-10 px-10 mx-auto">
              <img 
                src="/assets/image/fiber-yellow.png" 
                alt="Yellow" 
                className="w-60  object-contain mx-auto rounded-lg" 
              />
              <h3 className="mt-4   text-lg font-semibold">Yellow</h3>
              <p className="text-lg   font-light max-w-[250px]">Immune system, Healthy heart, Prevents ulcers, and Healthy Colon</p>
            </div>
            <div className="text-center bg-white py-10 px-10 mx-auto">
              <img 
                src="/assets/image/fiber-yellow.png" 
                alt="Yellow" 
                className="w-60  object-contain mx-auto rounded-lg" 
              />
              <h3 className="mt-4 text-lg font-semibold">White</h3>
              <p className="text-lg font-light max-w-[250px]">Immune system, Healthy heart, Prevents ulcers, and Healthy Colon</p>
            </div>
            <div className="text-center bg-white py-10 px-10 mx-auto">
              <img 
                src="/assets/image/fiber-white.png" 
                alt="Yellow" 
                className="w-60  object-contain mx-auto rounded-lg" 
              />
              <h3 className="mt-4   text-lg font-semibold">Green</h3>
              <p className="text-lg   font-light max-w-[250px]">Immune system, Healthy heart, Prevents ulcers, and Healthy Colon</p>
            </div>
            <div className="text-center bg-white py-10 px-10 mx-auto">
              <img 
                src="/assets/image/fiber-yellow.png" 
                alt="Yellow" 
                className="w-60  object-contain mx-auto rounded-lg" 
              />
              <h3 className="mt-4   text-lg font-semibold">Red</h3>
              <p className="text-lg   font-light max-w-[250px]">Immune system, Healthy heart, Prevents ulcers, and Healthy Colon</p>
            </div>
            <div className="text-center bg-white py-10 px-10 mx-auto">
              <img 
                src="/assets/image/fiber-yellow.png" 
                alt="Yellow" 
                className="w-60  object-contain mx-auto rounded-lg" 
              />
              <h3 className="mt-4   text-lg font-semibold">Purple</h3>
              <p className="text-lg   font-light max-w-[250px]">Immune system, Healthy heart, Prevents ulcers, and Healthy Colon</p>
            </div>
            <div className="text-center bg-white py-10 px-10 mx-auto">
              <img 
                src="/assets/image/fiber-yellow.png" 
                alt="Yellow" 
                className="w-60  object-contain mx-auto rounded-lg" 
              />
              <h3 className="mt-4   text-lg font-semibold">Orange</h3>
              <p className="text-lg   font-light max-w-[250px]">Immune system, Healthy heart, Prevents ulcers, and Healthy Colon</p>
            </div>
            
            
            
          </div>
        </div>
      </section>



    </div>
  );
};

export default Food;
