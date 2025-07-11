import React, { useState } from 'react';
import logo from "../assets/Logo_Final 1.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../Components/Auth';
import { toast } from 'react-toastify';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  // 🔐 Logout Function
  const handleLogout = () => {
    // Clear all cookies
    document.cookie.split(";").forEach((c) => {
      document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/");
    });

    // Update auth state
    setIsLoggedIn(false);

    // Toast
    toast.success("Logged out successfully!");

    // Redirect to home
    navigate("/");

    // Close mobile menu
    setMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between py-2 px-4 sm:px-6">

        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Logo" className="w-16 h-16 object-contain" />
        </div>

        {/* Hamburger (Mobile Only) */}
        <div className="sm:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} className="text-2xl text-gray-700" />
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden sm:flex items-center gap-6 font-medium text-gray-700">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/service" className="hover:text-blue-600">Service</Link>
          <Link to="/aboutUs" className="hover:text-blue-600">About Us</Link>

          <Link to="/contact">
            <button className="bg-cyan-600 text-white text-sm font-semibold px-4 py-2 rounded hover:bg-cyan-800">
              Contact Us
            </button>
          </Link>

          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white text-sm font-semibold px-4 py-2 rounded hover:bg-red-800"
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="bg-gray-700 text-white text-sm font-semibold px-4 py-2 rounded hover:bg-gray-900">
                Login
              </button>
            </Link>
          )}

          <div className="flex gap-3 ml-2">
            <FontAwesomeIcon icon={faFacebook} className="text-gray-600 text-lg hover:text-blue-800 cursor-pointer" />
            <FontAwesomeIcon icon={faInstagram} className="text-gray-600 text-lg hover:text-pink-600 cursor-pointer" />
            <FontAwesomeIcon icon={faLinkedin} className="text-gray-600 text-lg hover:text-blue-700 cursor-pointer" />
            <FontAwesomeIcon icon={faXTwitter} className="text-gray-600 text-lg hover:text-gray-800 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="sm:hidden px-6 pb-4 font-medium text-gray-700 overflow-hidden">
          <div className="flex flex-col items-center gap-4">
            <Link to="/" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/service" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>Service</Link>
            <Link to="/aboutUs" className="hover:text-blue-600" onClick={() => setMenuOpen(false)}>About Us</Link>

            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              <button className="bg-cyan-600 text-white text-sm font-semibold px-4 py-2 rounded hover:bg-cyan-800">
                Contact Us
              </button>
            </Link>

            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white text-sm font-semibold px-4 py-2 rounded hover:bg-red-800"
              >
                Logout
              </button>
            ) : (
              <Link to="/login" onClick={() => setMenuOpen(false)}>
                <button className="bg-gray-700 text-white text-sm font-semibold px-4 py-2 rounded hover:bg-gray-900">
                  Login
                </button>
              </Link>
            )}

            <div className="flex gap-4 mt-2">
              <FontAwesomeIcon icon={faFacebook} className="text-gray-600 text-xl hover:text-blue-800 cursor-pointer" />
              <FontAwesomeIcon icon={faInstagram} className="text-gray-600 text-xl hover:text-pink-600 cursor-pointer" />
              <FontAwesomeIcon icon={faLinkedin} className="text-gray-600 text-xl hover:text-blue-700 cursor-pointer" />
              <FontAwesomeIcon icon={faXTwitter} className="text-gray-600 text-xl hover:text-gray-800 cursor-pointer" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
