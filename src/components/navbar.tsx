'use client'
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Guides', href: '/guides' },
    { name: 'Tools', href: '/tools' },
    { name: 'Search', href: '/search' }
  ];

  return (
    <nav className="bg-transparent backdrop-blur-sm border-b border-gray-800/30 fixed top-0 left-0 right-0 z-50">
      <div className="w-full mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo Section - Always visible */}
          <div className="flex items-center space-x-3 md:hidden">
            <img 
              src="guide.png" 
              alt="GuideMeNow Logo" 
              className="w-8 h-8 object-contain"
            />
            <span className="text-white font-bold text-xl">GuideMeNow</span>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center space-x-8 w-full">
            <div className="flex items-center space-x-3 mr-8">
              <img 
                src="guide.png" 
                alt="GuideMeNow Logo" 
                className="w-8 h-8 object-contain"
              />
              <span className="text-white font-bold text-xl">GuideMeNow</span>
            </div>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white hover:bg-gray-800/50 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button - positioned at the end */}
          <div className="md:hidden ml-auto">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white hover:bg-gray-800/50 p-2 rounded-lg transition-all duration-300 ease-in-out"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/20 backdrop-blur-md rounded-lg mt-2 border border-gray-800/30 mx-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white hover:bg-gray-700/50 block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ease-in-out text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;