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
      <section className="py-20">
        <div className="flex justify-center gap-16">
          <div className="text-center">
            <img 
              src="/assets/image/food-hero.png" 
              alt="Vegetable & Fruit" 
              className="rounded-lg w-64 h-64 object-contain mx-auto border-4 border-[#196D0D]" 
            />
            <p className="mt-4">Vegetable & Fruit</p>
          </div>
          <div className="text-center">
            <img 
              src="/assets/image/food-hero.png" 
              alt="Protein" 
              className="rounded-lg w-64 h-64 object-contain mx-auto border-4 border-[#196D0D]" 
            />
            <p className="mt-4">Protein</p>
          </div>
          <div className="text-center">
            <img 
              src="/assets/image/food-hero.png" 
              alt="Fats" 
              className="rounded-lg w-64 h-64 object-contain mx-auto border-4 border-[#196D0D]" 
            />
            <p className="mt-4">Fats</p>
          </div>
          <div className="text-center">
            <img 
              src="/assets/image/food-hero.png" 
              alt="Carbs" 
              className="rounded-lg w-64 h-64 object-contain mx-auto border-4 border-[#196D0D]" 
            />
            <p className="mt-4">Carbs</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Food;
