import React from 'react';

const Navbar = () => {
  return (
    <nav className=" p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="../assets/logo.png" alt="NutriCheck" className="h-8" /> {/* Ganti dengan path logo kamu */}
        </div>
        
        {/* Menu */}
        <ul className="flex space-x-6">
          <li><a href="/" className="text-green-800 hover:text-green-600">Home</a></li>
          <li><a href="/food" className="text-green-800 hover:text-green-600">Food</a></li>
          <li><a href="/tracker" className="text-green-800 hover:text-green-600">Tracker</a></li>
          <li><a href="/education" className="text-green-800 hover:text-green-600">Education</a></li>
          <li><a href="/about" className="text-green-800 hover:text-green-600">About us</a></li>
        </ul>

        {/* Buttons (Login and Sign-Up) */}
        <div className="flex space-x-4">
          <a href="/login" className="bg-[#CFEBD1] text-white px-4 py-2 rounded-full hover:bg-green-600 transition">Login</a>
          <a href="/signup" className="bg-white text-green-500 px-4 py-2 rounded-full border-2 border-green-500 hover:bg-green-50 transition">Sign-Up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
