import React, { useState } from 'react';
import SVGIcons from './SVGIcons';

const HeaderEnhanced = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-linear-to-r from-red-600 to-red-700 text-white py-4 shadow-lg sticky top-0 z-40">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-white rounded-lg p-2">
            <SVGIcons.Bus className="w-8 h-8 text-red-600" />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-2xl font-bold">RedBus</h1>
            <p className="text-xs text-red-100">Book Your Journey</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <a href="#" className="hover:text-red-100 transition font-semibold">
            Bus Tickets
          </a>
          <a href="#" className="hover:text-red-100 transition font-semibold">
            Hotels
          </a>
          <a href="#" className="hover:text-red-100 transition font-semibold">
            Bus Hire
          </a>
          <a href="#" className="hover:text-red-100 transition font-semibold">
            Pilgrimages
          </a>
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-red-100 transition hidden sm:block">
            Help
          </a>
          <button className="bg-white text-red-600 px-4 py-2 rounded-lg font-bold hover:bg-red-50 transition">
            Sign In
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-red-700 px-4 py-4 border-t border-red-500">
          <nav className="space-y-3">
            <a href="#" className="block hover:text-red-100 transition font-semibold">
              Bus Tickets
            </a>
            <a href="#" className="block hover:text-red-100 transition font-semibold">
              Hotels
            </a>
            <a href="#" className="block hover:text-red-100 transition font-semibold">
              Bus Hire
            </a>
            <a href="#" className="block hover:text-red-100 transition font-semibold">
              Pilgrimages
            </a>
            <a href="#" className="block hover:text-red-100 transition font-semibold">
              Help
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default HeaderEnhanced;