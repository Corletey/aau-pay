import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#393464] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#ffd700]">About Us</h3>
            <p className="text-gray-300 leading-relaxed">
              The Association of African Universities (AAU) is dedicated to enhancing the quality and relevance of higher education in Africa. Learn more about our initiatives.
            </p>
            <a href="/about" className="inline-block mt-4 text-[#5bc0de] hover:text-[#ffd700] font-medium transition-colors">
              Read More &rarr;
            </a>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#ffd700]">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-300 hover:text-[#ffd700] font-medium transition-colors">Home</a></li>
              <li><a href="/events" className="text-gray-300 hover:text-[#ffd700] font-medium transition-colors">Events</a></li>
              <li><a href="/membership" className="text-gray-300 hover:text-[#ffd700] font-medium transition-colors">Membership</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-[#ffd700] font-medium transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#ffd700]">Connect with Us</h3>
            <p className="text-gray-300 leading-relaxed mb-4">Follow us on social media for updates:</p>
            <div className="flex space-x-6">
              <a href="#" aria-label="Facebook" className="text-[#ffd700] hover:text-white transition-colors transform hover:scale-110">
                <FaFacebookF size={24} />
              </a>
              <a href="#" aria-label="Twitter" className="text-[#ffd700] hover:text-white transition-colors transform hover:scale-110">
                <FaTwitter size={24} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-[#ffd700] hover:text-white transition-colors transform hover:scale-110">
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-600 pt-6">
          <p className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Association of African Universities. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
