import React from 'react';
import SVGIcons from './SVGIcons';

const OffersSection = () => {
  const offers = [
    {
      title: 'Summer Special',
      description: 'Get 30% off on all bookings',
      discount: '30%',
      code: 'SUMMER30',
      valid: 'Valid till June 30',
    },
    {
      title: 'Group Travel',
      description: 'Book 5+ seats and get flat ₹500 off',
      discount: '₹500',
      code: 'GROUP500',
      valid: 'Valid till end of month',
    },
    {
      title: 'First Booking',
      description: 'New users get ₹250 cashback',
      discount: '₹250',
      code: 'FIRST250',
      valid: 'One-time offer',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">🎉 Special Offers</h2>
          <p className="text-gray-600 text-lg">Grab amazing deals on your next booking</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="bg-linear-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-xl p-6 hover:shadow-xl transition"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{offer.title}</h3>
                  <p className="text-gray-600 text-sm">{offer.description}</p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 mb-4 text-center">
                <p className="text-3xl font-bold text-red-600">{offer.discount}</p>
                <p className="text-xs text-gray-500 mt-1">{offer.valid}</p>
              </div>

              <div className="bg-red-600 text-white p-3 rounded-lg text-center mb-4">
                <p className="text-sm">Promo Code</p>
                <p className="text-lg font-bold">{offer.code}</p>
              </div>

              <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 font-semibold transition">
                Copy Code
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersSection;