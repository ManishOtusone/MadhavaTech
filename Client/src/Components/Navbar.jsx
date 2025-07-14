import React, { useState } from 'react';
import logo from "../assets/Logo_Final 1.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../Components/Auth';
import { toast } from 'react-toastify';

const API_BASE_URL = import.meta.env.VITE_API_URL;

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isLoggedIn, setIsLoggedIn, user, setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await fetch(`${API_BASE_URL}/api/logout`, {
        method: "POST",
        credentials: "include",
      });

      setIsLoggedIn(false);
      setUser(null);
      toast.success("Logged out successfully!");
      navigate("/");
      setMenuOpen(false);
    } catch (err) {
      console.log(err);
      toast.error("Logout failed");
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between py-2 px-4 sm:px-6">

        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Logo" className="w-16 h-16 object-contain" />
        </div>

        {/* Hamburger (Mobile) */}
        <div className="sm:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} className="text-2xl text-gray-700" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center gap-6 font-medium text-gray-700">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/service" className="hover:text-blue-600">Service</Link>
          <Link to="/aboutUs" className="hover:text-blue-600">About Us</Link>

          <Link to="/contact">
            <button className="bg-cyan-600 text-white text-sm font-semibold px-4 py-2 rounded hover:bg-cyan-800">
              Contact Us
            </button>
          </Link>

          {/* Admin Dashboard Link */}
          {isLoggedIn && user?.accountType === "Admin" && (
            <Link to="/admin-dashboard">
              <button className="bg-indigo-600 text-white text-sm font-semibold px-4 py-2 rounded hover:bg-indigo-800">
                View Queries
              </button>
            </Link>
          )}

          {/* User Dashboard Link */}
          {isLoggedIn && user?.accountType === "User" && (
            <Link to="/user-dashboard">
              <button className="bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded hover:bg-green-800">
                See You Query
              </button>
            </Link>
          )}

          {/* Login / Logout */}
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

          {/* Social Icons */}
          <div className="flex gap-3 ml-2">
            <FontAwesomeIcon icon={faFacebook} className="text-gray-600 text-lg hover:text-blue-800 cursor-pointer" />
            <FontAwesomeIcon icon={faInstagram} className="text-gray-600 text-lg hover:text-pink-600 cursor-pointer" />
            <FontAwesomeIcon icon={faLinkedin} className="text-gray-600 text-lg hover:text-blue-700 cursor-pointer" />
            <FontAwesomeIcon icon={faXTwitter} className="text-gray-600 text-lg hover:text-gray-800 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
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

            {/* Admin Link (Mobile) */}
            {isLoggedIn && user?.accountType === "Admin" && (
              <Link to="/admin-dashboard" onClick={() => setMenuOpen(false)}>
                <button className="bg-indigo-600 text-white text-sm font-semibold px-4 py-2 rounded hover:bg-indigo-800">
                  View Queries
                </button>
              </Link>
            )}

            {/* User Link (Mobile) */}
            {isLoggedIn && user?.accountType === "User" && (
              <Link to="/user-dashboard" onClick={() => setMenuOpen(false)}>
                <button className="bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded hover:bg-green-800">
                  User Panel
                </button>
              </Link>
            )}

            {/* Login / Logout (Mobile) */}
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

            {/* Social Icons */}
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
