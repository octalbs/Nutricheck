import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="max-w-7xl mx-auto text-center">
        <p>&copy; 2025 NutriCheck. All rights reserved.</p>
        <div className="mt-4">
          <a href="/privacy" className="text-blue-400 hover:text-blue-200 mx-3">Privacy Policy</a>
          <a href="/terms" className="text-blue-400 hover:text-blue-200 mx-3">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
