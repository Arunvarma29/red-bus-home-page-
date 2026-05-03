import React, { useState } from 'react';
import SVGIcons from './SVGIcons';

const HeroSectionEnhanced = () => {
  const [tripType, setTripType] = useState('one-way');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [passengers, setPassengers] = useState(1);

  const handleSearch = () => {
    if (!from || !to || !date) {
      alert('Please fill all fields');
      return;
    }
    alert(`Searching ${tripType} buses\nFrom: ${from}\nTo: ${to}\nDate: ${date}\nPassengers: ${passengers}`);
  };

  return (
    <section className="relative bg-linear-to-br from-red-600 via-red-500 to-red-700 py-20 px-4 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-10 right-10 opacity-10">
        <SVGIcons.Bus className="w-32 h-32 text-white" />
      </div>
      <div className="absolute bottom-10 left-10 opacity-10">
        <SVGIcons.Bus className="w-32 h-32 text-white" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">Easy Bus Booking</h1>
          <p className="text-xl text-red-100">Book buses, hotels, and more at best prices</p>
        </div>

        <div className="bg-white rounded-xl shadow-2xl p-8 max-w-5xl mx-auto">
          {/* Trip Type Toggle */}
          <div className="flex gap-4 mb-6 pb-6 border-b border-gray-200">
            <button
              onClick={() => setTripType('one-way')}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                tripType === 'one-way'
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              One Way
            </button>
            <button
              onClick={() => setTripType('round-trip')}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                tripType === 'round-trip'
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Round Trip
            </button>
          </div>

          {/* Search Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
            {/* From */}
            <div className="relative">
              <label className="text-gray-700 font-semibold mb-2 flex items-center gap-2">
                <SVGIcons.MapPin className="w-5 h-5 text-red-600" />
                From
              </label>
              <input
                type="text"
                placeholder="Departure city"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition"
              />
            </div>

            {/* To */}
            <div className="relative">
              <label className=" text-gray-700 font-semibold mb-2 flex items-center gap-2">
                <SVGIcons.MapPin className="w-5 h-5 text-red-600" />
                To
              </label>
              <input
                type="text"
                placeholder="Arrival city"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition"
              />
            </div>

            {/* Date */}
            <div className="relative">
              <label className=" text-gray-700 font-semibold mb-2 flex items-center gap-2">
                <SVGIcons.Calendar className="w-5 h-5 text-red-600" />
                Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition"
              />
            </div>

            {/* Passengers */}
            <div className="relative">
              <label className=" text-gray-700 font-semibold mb-2 flex items-center gap-2">
                <SVGIcons.Users className="w-5 h-5 text-red-600" />
                Passengers
              </label>
              <select
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'Passenger' : 'Passengers'}
                  </option>
                ))}
              </select>
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <button
                onClick={handleSearch}
                className="w-full bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 font-bold text-lg transition transform hover:scale-105"
              >
                🔍 Search
              </button>
            </div>
          </div>

          {/* Optional Features */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <label className="flex items-center gap-2 cursor-pointer hover:text-red-600">
              <input type="checkbox" className="w-4 h-4" />
              Flexible Dates
            </label>
            <label className="flex items-center gap-2 cursor-pointer hover:text-red-600">
              <input type="checkbox" className="w-4 h-4" />
              Book Now Pay Later
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionEnhanced;