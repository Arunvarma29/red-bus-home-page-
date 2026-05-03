import React from 'react';
import SVGIcons from './SVGIcons';

const FooterEnhanced = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-red-600 rounded-lg p-2">
                <SVGIcons.Bus className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">RedBus</h3>
            </div>
            <p className="text-sm text-gray-400 mb-4">Your trusted partner for safe and affordable bus travel.</p>
            <div className="flex gap-3">
              <a href="#" className="hover:text-red-500 transition">
                📘 Facebook
              </a>
              <a href="#" className="hover:text-red-500 transition">
                🐦 Twitter
              </a>
              <a href="#" className="hover:text-red-500 transition">
                📷 Instagram
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-red-500 transition">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-red-500 transition">
                  Bus Tickets
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition">
                  Hotels
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition">
                  Bus Hire
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition">
                  Pilgrimages
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-red-500 transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition">
                  Track Booking
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition">
                  Cancellation Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition">
                  Refunds
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
            <p className="text-sm text-gray-400 mb-3">Get exclusive deals and updates</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded bg-gray-800 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <button className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition font-semibold text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="text-2xl mb-2">🔒</div>
              <p className="text-sm">Secure Booking</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">✈️</div>
              <p className="text-sm">Free Cancellation</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">💰</div>
              <p className="text-sm">Best Prices</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">⏰</div>
              <p className="text-sm">24/7 Support</p>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 border-t border-gray-800 pt-8">
            <p>&copy; 2023 RedBus. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-red-500 transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-red-500 transition">
                Terms & Conditions
              </a>
              <a href="#" className="hover:text-red-500 transition">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterEnhanced;