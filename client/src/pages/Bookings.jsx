// components/Bookings.jsx
import React from 'react';
import { Calendar } from 'lucide-react';

const Bookings = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">My Bookings</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="text-center py-12">
          <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No bookings yet</h3>
          <p className="text-gray-500 mb-6">Start planning your next adventure!!!</p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
            Browse Destinations
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
