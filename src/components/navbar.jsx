import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import aauLogoImg from '../assets/images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('EN');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const languages = ['EN', 'FR', 'PT', 'AR'];

  return (
    <nav className="bg-[#393464] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img src={aauLogoImg} alt="AAU Logo" className="h-16 w-auto" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                <a href="/" className="hover:bg-[#ffd700] hover:text-[#393464] px-4 py-3 rounded-md text-base font-bold transition duration-200 ease-in-out">
                  Home
                </a>
                <a href="/terms-and-conditions" className="hover:bg-[#ffd700] hover:text-[#393464] px-4 py-3 rounded-md text-base font-bold transition duration-200 ease-in-out">
                  Terms of Use
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:block relative">
            <button
              className="flex items-center bg-[#5bc0de] hover:bg-[#4cabc7] px-4 py-3 rounded-md text-base font-bold transition duration-200 ease-in-out"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <Globe className="h-5 w-5 mr-2 text-[#ffd700]" />
              {language}
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg z-20">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setLanguage(lang);
                      setDropdownOpen(false);
                    }}
                    className={`block w-full px-4 py-3 text-left hover:bg-[#f3bd00] transition duration-200 ease-in-out ${
                      language === lang ? 'bg-[#5bc0de] text-white' : ''
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-[#4a4580] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#393464] focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="hover:bg-[#4a4580] block px-3 py-3 rounded-md text-base font-bold transition duration-200 ease-in-out">
              Home
            </a>
            <a href="/terms-and-conditions" className="hover:bg-[#4a4580] block px-3 py-3 rounded-md text-base font-bold transition duration-200 ease-in-out">
              Terms of Use
            </a>
          </div>
          <div className="pt-4 pb-3 border-t border-[#4a4580]">
            <div className="flex items-center px-5 relative">
              <button
                className="flex items-center bg-[#5bc0de] hover:bg-[#4cabc7] px-4 py-3 rounded-md text-base font-bold transition duration-200 ease-in-out"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <Globe className="h-5 w-5 mr-2 text-[#ffd700]" />
                {language}
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg z-20">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setLanguage(lang);
                        setDropdownOpen(false);
                      }}
                      className={`block w-full px-4 py-3 text-left hover:bg-[#f3bd00] transition duration-200 ease-in-out ${
                        language === lang ? 'bg-[#5bc0de] text-white' : ''
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;