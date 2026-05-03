import React from 'react';

const BookingModal = ({ isOpen, onClose, route }) => {
  if (!isOpen) return null;

  const handleConfirm = () => {
    alert(`✅ Booking confirmed!\n\nRoute: ${route.from} → ${route.to}\nPrice: ${route.price}\n\nCheck your email for ticket details.`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-2xl max-w-md w-full mx-4 p-6 animate-fade-in">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Confirm Booking</h2>
        <div className="space-y-4 mb-6">
          <div className="border-b border-gray-200 pb-4">
            <p className="text-gray-600 text-sm">Route</p>
            <p className="text-lg font-semibold text-gray-800">
              {route.from} → {route.to}
            </p>
          </div>
          <div className="border-b border-gray-200 pb-4">
            <p className="text-gray-600 text-sm">Price</p>
            <p className="text-2xl font-bold text-red-600">{route.price}</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-gray-700 text-sm">
              📧 Confirmation will be sent to your registered email
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 font-semibold transition"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 font-semibold transition"
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;