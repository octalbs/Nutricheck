
// src/components/Navbar.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/index.css";

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  }

  return (
    <nav className="fixed top-0 left-0 w-full p-4 shadow-md bg-transparent backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/assets/image/logo.png" alt="NutriCheck" className="h-25" />
        </div>

        {/* Menu */}
        <ul className="flex space-x-6 font-bold">
          <li>
            <Link to="/" className="hover:text-[#196D0D]">
              Home
            </Link>
          </li>
          <li>
            <Link to="/food" className="hover:text-[#196D0D]">
              Food
            </Link>
          </li>
          <li>
            <Link to="/tracker" className="hover:text-[#196D0D]">
              Tracker
            </Link>
          </li>
          <li>
            <Link to="/education" className="hover:text-[#196D0D]">
              Education
            </Link>
          </li>
          <li>
            <Link to="/aboutus" className="hover:text-[#196D0D]">
              About us
            </Link>
          </li>
        </ul>

        {/* Authentication Buttons */}
        <div className="flex space-x-4 items-center">
          {currentUser ? (
            <>
              <span className="text-[#196D0D] font-medium">Welcome, {currentUser.displayName || currentUser.email}</span>
              <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="bg-[#196D0D] text-white px-4 py-2 rounded-full hover:bg-green-600 transition">
                Login
              </Link>
              <Link to="/signup" className="bg-white text-[#196D0D] px-4 py-2 rounded-full border-2 border-[#196D0D] hover:bg-green-600 hover:text-white transition">
                Sign-Up
              </Link>
            </>
          )}
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
