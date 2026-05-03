import React from 'react';
import SVGIcons from './SVGIcons';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      city: 'Delhi',
      rating: 5,
      message: 'Great service! The bus was clean and the driver was very professional. Will book again!',
      avatar: '👩',
    },
    {
      name: 'Rajesh Kumar',
      city: 'Mumbai',
      rating: 5,
      message: 'Excellent experience from booking to reaching. RedBus is my first choice now.',
      avatar: '👨',
    },
    {
      name: 'Anjali Patel',
      city: 'Bangalore',
      rating: 4,
      message: 'Good selection of buses and competitive prices. Highly recommend!',
      avatar: '👩',
    },
    {
      name: 'Vikram Singh',
      city: 'Hyderabad',
      rating: 5,
      message: 'Amazing customer support and hassle-free booking process. Keep it up!',
      avatar: '👨',
    },
  ];

  return (
    <section className="py-20 bg-linear-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-300 text-lg">Join thousands of happy travelers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-blue-900 bg-opacity-10 backdrop-blur-md rounded-xl p-6 hover:bg-opacity-20 transition"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <SVGIcons.Star key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>

              {/* Message */}
              <p className="text-gray-100 mb-6 italic">"{testimonial.message}"</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <span className="text-4xl">{testimonial.avatar}</span>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-gray-300 text-sm">{testimonial.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mt-16 text-center">
          <div>
            <p className="text-4xl font-bold text-red-500">50M+</p>
            <p className="text-gray-300">Happy Travelers</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-red-500">1000+</p>
            <p className="text-gray-300">Bus Operators</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-red-500">2500+</p>
            <p className="text-gray-300">Routes Covered</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;