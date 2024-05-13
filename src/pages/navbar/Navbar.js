// src/components/layout/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo-red-black.png"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-8 mr-4" /> {/* Replace with your logo */}
            <div className="text-white font-bold text-xl">New Dance Revolution</div>
          </div>

          {/* Burger icon for mobile screens */}
          <div className="block lg:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex lg:items-center lg:w-auto">
            <ul className="lg:flex">
              <li className="mr-6">
                <Link to="/" className="text-white hover:text-gray-300">Home</Link>
              </li>
              <li className="mr-6">
                <Link to="/signup" className="text-white hover:text-gray-300">Signup</Link>
              </li>
              <li className="mr-6">
                <Link to="/schedule" className="text-white hover:text-gray-300">Schedule</Link>
              </li>
              <li>
                <Link to="/about" className="text-white hover:text-gray-300">About</Link>
              </li>
              {/* Add more menu items as needed */}
            </ul>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden">
            <ul className="flex flex-col">
              <li className="my-2">
                <Link to="/" className="text-white hover:text-gray-300">Home</Link>
              </li>
              <li className="my-2">
                <Link to="/classes" className="text-white hover:text-gray-300">Classes</Link>
              </li>
              <li className="my-2">
                <Link to="/schedule" className="text-white hover:text-gray-300">Schedule</Link>
              </li>
              <li className="my-2">
                <a href="#about" className="text-white hover:text-gray-300">About</a>
              </li>
              {/* Add more menu items as needed */}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
