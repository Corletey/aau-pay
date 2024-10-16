import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#393464] text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#ffd700]">About Us</h3>
            <p className="text-gray-300">
              The Association of African Universities (AAU) is a network dedicated to enhancing the quality and relevance of higher education in Africa.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#ffd700]">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Events</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Membership</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#ffd700]">Connect with Us</h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook">
                <FaFacebookF className="text-[#ffd700] hover:text-white transition-colors" size={20} />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter className="text-[#ffd700] hover:text-white transition-colors" size={20} />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn className="text-[#ffd700] hover:text-white transition-colors" size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-600 pt-4">
          <p className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Association of African Universities. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

