import React from 'react';
import logo from '../assets/Logo_Final 1.png';

export const Footer = () => {
  return (
    <footer className="bg-[#f9f9f9] px-6 md:px-20 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
        {/* Left Section */}
        <div className="col-span-1 md:col-span-1">
          <img src={logo} alt="Company Logo" className="w-24 h-24 mb-4" />
          <p className="text-[#808080] text-sm leading-relaxed text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quas facilis natus
            doloremque obcaecati dolores necessitatibus aperiam dolbus veritatis quam iure
            deleniti. Aliquid quisquam quasi.
          </p>
        </div>

        {/* Services */}
        <div>
          <h5 className="text-lg font-semibold mb-3">Services</h5>
          <ul className="text-[#606060] text-sm space-y-2">
            <li>App Development</li>
            <li>Web Development</li>
            <li>Graphic Design</li>
            <li>Ecommerce</li>
          </ul>
        </div>

        {/* Our Goals */}
        <div>
          <h5 className="text-lg font-semibold mb-3">Our Goals</h5>
          <ul className="text-[#606060] text-sm space-y-2">
            <li>Mission</li>
            <li>Vision</li>
            <li>Values</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h5 className="text-lg font-semibold mb-3">Company</h5>
          <ul className="text-[#606060] text-sm space-y-2">
            <li>About</li>
            <li>Career</li>
            <li>Why Choose Us</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h5 className="text-lg font-semibold mb-3">Our Help</h5>
          <ul className="text-[#606060] text-sm space-y-2">
            <li>FAQ</li>
            <li>Help & Support</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-[#606060]">
        <span>Privacy Policy &nbsp; | &nbsp; Terms and Conditions</span>
      </div>
    </footer>
  );
};
