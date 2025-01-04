import React, { useState } from 'react';
import { logout } from '../../firebase';
import { useDispatch } from 'react-redux';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const dispatch= useDispatch();
  const handleLogout = () => {
    logout();
    dispatch({type:'IS_LOGGED_OUT'})
  }

  return (
    <nav className="bg-black text-white sticky top-0 z-50 shadow-md h-[6vh]">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold uppercase tracking-wide">
          Mr.Dorker
        </div>

        {/* Links for desktop */}
        <ul className="hidden md:flex space-x-8 mb-0">
          <li>
            <a href="/dashboard" className="hover:text-gray-400 text-white text-xl transition no-underline">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#features" className="hover:text-gray-400 text-white text-xl transition no-underline">
              Features
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-400 text-white text-xl transition no-underline">
              About Us
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-400 text-white text-xl transition no-underline">
              Request a Feature
            </a>
          </li>
          <li>
            <button className="hover:text-gray-400 text-white text-xl transition no-underline" onClick={() => handleLogout()}>
              Logout
            </button>
          </li>
        </ul>

        {/* Hamburger Menu for Mobile */}
        <button
          className="block md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <div className="w-6 h-1 bg-white mb-1"></div>
          <div className="w-6 h-1 bg-white mb-1"></div>
          <div className="w-6 h-1 bg-white"></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden bg-black text-white space-y-4 px-6 py-4">
          <li>
            <a
              href="#home"
              className="block hover:text-gray-400 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#features"
              className="block hover:text-gray-400 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block hover:text-gray-400 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block hover:text-gray-400 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
