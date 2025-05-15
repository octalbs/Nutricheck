import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-yellow-50 text-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start">
        {/* Logo and Description */}
        <div className="flex flex-col items-start mb-6 md:mb-0">
          <div className="flex items-center space-x-2">
            <img src="/path/to/logo.png" alt="NutriCheck" className="h-10" /> {/* Ganti dengan path logo kamu */}
            <span className="text-2xl font-semibold text-green-700">NutriCheck</span>
          </div>
          <p className="mt-2 text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Dignissimos vel quidem ipsum saepe odit! Optio vitae harum ipsum
            reiciendis, iure nobis.
          </p>
        </div>

        {/* Contact Us Section */}
        <div className="flex flex-col mb-6 md:mb-0">
          <h3 className="font-semibold text-lg text-gray-800">Contact Us</h3>
          <ul className="mt-2 text-sm text-gray-600 space-y-1">
            <li>Email: <a href="mailto:nabilahdaa@gmail.com" className="hover:text-green-500">nabilahdaa@gmail.com</a></li>
            <li>Phone: <a href="tel:+6282160455334" className="hover:text-green-500">+6282160455334</a></li>
            <li>Phone: <a href="tel:+6285293838468" className="hover:text-green-500">+6285293838468</a></li>
          </ul>
        </div>

        {/* Location Section */}
        <div className="flex flex-col mb-6 md:mb-0">
          <h3 className="font-semibold text-lg text-gray-800">Location</h3>
          <p className="mt-2 text-sm text-gray-600">
            Universitas Sumatera Utara, Medan, Sumatera Utara
          </p>
        </div>

        {/* Navigation Section */}
        <div className="flex flex-col mb-6 md:mb-0">
          <h3 className="font-semibold text-lg text-gray-800">Navigation</h3>
          <ul className="mt-2 text-sm text-gray-600 space-y-1">
            <li><a href="/" className="hover:text-green-500">Home</a></li>
            <li><a href="/menu" className="hover:text-green-500">Menu</a></li>
            <li><a href="/tracker" className="hover:text-green-500">Tracker</a></li>
            <li><a href="/education" className="hover:text-green-500">Education</a></li>
            <li><a href="/chatbot" className="hover:text-green-500">AI Chatbot</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t mt-8 pt-4 text-center text-sm text-gray-600">
        <p>&copy; 2025 NutriCheck. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
