import React from 'react';
import '../styles/index.css';

const Footer = () => {
  return (
    <footer className="bg-[#F9F9F9] text-gray-800 ">
      <div className="max-w-7xl mx-auto px-6 pt-5">
        <div className="flex justify-between ">

          {/* Logo and Text */}
          <div>            
              <img src="/assets/image/logo.png" alt="NutriCheck" className="h-20" />
              <p className="text-sm text-gray-500 ">
                Healthy and educational <br /> platform for a better life.
              </p>            
          </div>         

          {/* Navigation */}
          <div className="space-y-1">
            <h4 className="font-semibold text-lg">Navigation</h4>
            <ul className="text-sm text-gray-500 space-y-1">
              <li><a href="/" className="hover:text-green-600">Home</a></li>              
              <li><a href="/tracker" className="hover:text-green-600">Tracker</a></li>
              <li><a href="/education" className="hover:text-green-600">Education</a></li>
              <li><a href="/about" className="hover:text-green-600">About Us</a></li>
            </ul>
          </div>

          {/* Service */}
          <div className="space-y-1">
            <h4 className="font-semibold text-lg">Service</h4>
            <ul className="text-sm text-gray-500 space-y-1">
              <li><a href="/" className="hover:text-green-600">Tracking Food Nutrition</a></li>              
              <li><a href="/tracker" className="hover:text-green-600">Health Articles</a></li>
              <li><a href="/education" className="hover:text-green-600">FAQ</a></li>              
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-1">
            <h4 className="font-semibold text-lg">Contact</h4>
            <ul className="text-sm text-gray-500 space-y-1">
              <li><a href="/" className="hover:text-green-600">InfoNutrijel@gmail.com</a></li>              
              <li><a href="/tracker" className="hover:text-green-600">+6209348484</a></li>
              <li><a href="/education" className="hover:text-green-600">Jalan. Indah kapuk</a></li>              
            </ul>
          </div>
        </div>
        

        {/* Footer Bottom */}
        <div className="py-5 text-center text-sm text-gray-500">
          <p>© 2025 NutriJel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
