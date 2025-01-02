import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold">Premium Travel</h1>

        {/* Desktop Navigation Links */}
        <nav className="space-x-6 hidden md:flex flex-1 justify-center">
          <a href="#home" className="hover:text-pink-500">Home</a>
          <a href="#about" className="hover:text-pink-500">About Us</a>
          <a href="#agents" className="hover:text-pink-500">Agents</a>
          <a href="#blog" className="hover:text-pink-500">Blog</a>
        </nav>

        {/* Search Bar and Sign-In/Sign-Up Buttons on Desktop */}
        <div className="flex items-center space-x-4 hidden md:flex">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 bg-gray-800 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              🔍
            </span>
          </div>
          <div className="space-x-2">
            <button className="bg-gray-800 px-4 py-2 rounded-md hover:bg-pink-600 transition">
              Sign In
            </button>
            <button className="bg-gray-800 px-4 py-2 rounded-md hover:bg-pink-600 transition">
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleMenu} className="text-white">
            ☰
          </button>
          {/* Sign In and Sign Up buttons on mobile */}
          <div className="space-x-2">
            <button className="bg-gray-800 px-4 py-2 rounded-md hover:bg-pink-600 transition">
              Sign In
            </button>
            <button className="bg-gray-800 px-4 py-2 rounded-md hover:bg-pink-600 transition">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white p-4 space-y-4">
          <a href="#home" className="block hover:text-pink-500">Home</a>
          <a href="#about" className="block hover:text-pink-500">About Us</a>
          <a href="#agents" className="block hover:text-pink-500">Agents</a>
          <a href="#blog" className="block hover:text-pink-500">Blog</a>
          
          {/* Search bar in mobile */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 bg-gray-800 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              🔍
            </span>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
