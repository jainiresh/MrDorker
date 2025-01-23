import React, { useEffect, useState } from 'react';
import { logout } from '../../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Sparkles from 'react-sparkle'

function Navbar({userDetails}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    
  }, [userDetails.email]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const dispatch= useDispatch();
  const handleLogout = () => {
    logout();
    dispatch({type:'USER_LOGOUT_SAGA'});
  }

  return (
    <nav className="bg-black text-white sticky top-0 z-50 shadow-md h-[10%]">
      <div className="container mx-auto flex justify-between items-center px-6" style={{padding:'1%'}}>
        {/* Logo */}
        <div className="text-2xl font-bold uppercase tracking-wide">
          Mr.Dorker
        </div>

        {/* Links for desktop */}
        <ul className="hidden md:flex space-x-8 mb-0">
          {userDetails.email ? 
            <li>
              <Link to="/dashboard" className="hover:text-gray-400 text-white text-xl transition no-underline">
                Dashboard
              </Link>
            </li> 
            : 
            <li>
              <Link to="/login" className="hover:text-gray-400 text-white text-xl transition no-underline">
                Login
              </Link>
            </li> 
          }
          <li>
            <Link to="/about-us" className="hover:text-gray-400 text-white text-xl transition no-underline">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/courses" className="hover:text-gray-400 text-black text-xl transition no-underline bg-[gold] p-4 rounded" style={{maxHeight:'10%'}}>
            
                    <div id="sparkle" style={{ position: 'absolute' }}>
                      <Sparkles
                        color="white"
                        count={50}
                        minSize={5}
                        maxSize={12}
                        overflowPx={80}
                        fadeOutSpeed={5}
                        flicker={false}
                      />
                    </div>
              Courses
            </Link>
          </li>
          <li>
            <Link to="/request-a-feature" className="hover:text-gray-400 text-white text-xl transition no-underline">
              Request a Feature
            </Link>
          </li>
          {userDetails.email ? (
            <>
              <li>
                <Link to="/profile" className="hover:text-gray-400 text-white text-xl transition no-underline">
                  Account
                </Link>
              </li>
              <li>
                <button className="hover:text-gray-400 text-white text-xl transition no-underline" onClick={() => handleLogout()}>
                  Logout
                </button>
              </li>
              <li className="flex items-center">
                <img 
                  src={userDetails.photoUrl ? userDetails.photoUrl : '/profilePic.png'} 
                  alt="Profile pic" 
                  className="w-10 h-10 rounded-md mr-2" 
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/profilePic.png'
                  }}
                /> 
              </li>
            </>
          ): 
          <>
            <li>
              <Link to="/contact" className="hover:text-gray-400 text-white text-xl transition no-underline">
                Contact US
              </Link>
            </li>
            {/* <li>
              <button className="hover:text-gray-400 text-white text-xl transition no-underline" onClick={() => handleLogout()}>
                Logout
              </button>
            </li> */}
          </>}
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
        <ul className="hidden md:flex space-x-8 mb-0 text-sm md:text-xl">     
             <li>
            <Link
              to="#home"
              className="block hover:text-gray-400 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="#features"
              className="block hover:text-gray-400 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              to="#about"
              className="block hover:text-gray-400 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="#contact"
              className="block hover:text-gray-400 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
