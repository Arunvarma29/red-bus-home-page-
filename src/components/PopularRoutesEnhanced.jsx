import React, { useState } from 'react';
import SVGIcons from './SVGIcons';
import BookingModal from './BookingModal';

const PopularRoutesEnhanced = () => {
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const routes = [
    { from: 'Delhi', to: 'Jaipur', price: '₹500', rating: 4.5, buses: 45 },
    { from: 'Mumbai', to: 'Pune', price: '₹300', rating: 4.7, buses: 32 },
    { from: 'Bangalore', to: 'Chennai', price: '₹800', rating: 4.6, buses: 28 },
    { from: 'Kolkata', to: 'Dhaka', price: '₹1200', rating: 4.4, buses: 15 },
    { from: 'Hyderabad', to: 'Vijayawada', price: '₹400', rating: 4.8, buses: 22 },
    { from: 'Ahmedabad', to: 'Surat', price: '₹250', rating: 4.5, buses: 38 },
  ];

  const handleBookNow = (route) => {
    setSelectedRoute(route);
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="py-20 bg-linear-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <SVGIcons.Bus className="w-8 h-8 text-red-600" />
              <h2 className="text-4xl font-bold text-gray-800">Popular Bus Routes</h2>
            </div>
            <p className="text-gray-600 text-lg">Find buses on the most traveled routes across India</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {routes.map((route, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
              >
                {/* Route Header */}
                <div className="bg-linear-to-r from-red-500 to-red-600 p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm opacity-90">From</p>
                      <p className="text-2xl font-bold">{route.from}</p>
                    </div>
                    <SVGIcons.Bus className="w-8 h-8 opacity-50" />
                    <div className="text-right">
                      <p className="text-sm opacity-90">To</p>
                      <p className="text-2xl font-bold">{route.to}</p>
                    </div>
                  </div>
                </div>

                {/* Route Details */}
                <div className="p-6">
                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-gray-200">
                    <p className="text-gray-600 text-sm mb-2">Starting from</p>
                    <p className="text-3xl font-bold text-red-600">{route.price}</p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-yellow-50 p-4 rounded-lg text-center">
                      <div className="flex items-center justify-center gap-1 mb-2">
                        <SVGIcons.Star className="w-5 h-5 text-yellow-400" />
                        <span className="font-bold text-gray-800">{route.rating}</span>
                      </div>
                      <p className="text-xs text-gray-600">Rating</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <p className="text-lg font-bold text-gray-800 mb-2">{route.buses}</p>
                      <p className="text-xs text-gray-600">Buses</p>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <SVGIcons.Check className="w-5 h-5 text-green-600" />
                      <span>Free Cancellation</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <SVGIcons.Check className="w-5 h-5 text-green-600" />
                      <span>GPS Tracking</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <SVGIcons.Check className="w-5 h-5 text-green-600" />
                      <span>AC Buses Available</span>
                    </div>
                  </div>

                  {/* Book Now Button */}
                  <button
                    onClick={() => handleBookNow(route)}
                    className="w-full bg-linear-to-r from-red-600 to-red-700 text-white py-3 px-6 rounded-lg hover:from-red-700 hover:to-red-800 font-bold transition transform hover:scale-105"
                  >
                    Book Now 🎫
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        route={selectedRoute}
      />
    </>
  );
};

export default PopularRoutesEnhanced;