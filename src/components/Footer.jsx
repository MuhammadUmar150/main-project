import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 border-t-4 border-gray-700">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          {/* Column 1: Company Info */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-semibold mb-4 text-lime-500">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-lime-500 transition duration-300">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-lime-500 transition duration-300">Careers</a>
              </li>
              <li>
                <a href="#" className="hover:text-lime-500 transition duration-300">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-lime-500 transition duration-300">Terms of Service</a>
              </li>
            </ul>
          </div>

          {/* Column 2: Support */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-semibold mb-4 text-lime-500">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-lime-500 transition duration-300">Help Center</a>
              </li>
              <li>
                <a href="#" className="hover:text-lime-500 transition duration-300">Shipping & Returns</a>
              </li>
              <li>
                <a href="#" className="hover:text-lime-500 transition duration-300">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Follow Us */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-semibold mb-4 text-lime-500">Follow Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-lime-500 transition duration-300">
                  <i className="fab fa-facebook-f text-xl"></i> Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lime-500 transition duration-300">
                  <i className="fab fa-twitter text-xl"></i> Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lime-500 transition duration-300">
                  <i className="fab fa-instagram text-xl"></i> Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lime-500 transition duration-300">
                  <i className="fab fa-linkedin text-xl"></i> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          <p className="text-white">
            {/* Apply hover effect on each letter */}
            {'© 2024 Your Company Name. All rights reserved.'.split('').map((char, index) => (
              <span
                key={index}
                className="inline-block cursor-default text-white hover:text-lime-600 transition duration-300"
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
