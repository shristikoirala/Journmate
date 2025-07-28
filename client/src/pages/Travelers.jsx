// components/Travelers.jsx
import React from 'react';

const travelers = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    location: 'Kathmandu',
    interests: ['Trekking', 'Photography', 'Local Cuisine'],
    bio: 'Adventure lover exploring the hills of Nepal.'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    location: 'Pokhara',
    interests: ['Paragliding', 'Culture', 'Lakeside Chill'],
    bio: 'Nature enthusiast, loves lakes and local culture.'
  },
  {
    id: 3,
    name: 'Amit Thapa',
    location: 'Lalitpur',
    interests: ['Hiking', 'Street Food', 'Temples'],
    bio: 'Wandering soul discovering heritage sites.'
  },
  {
    id: 4,
    name: 'Sita Rai',
    location: 'Bhaktapur',
    interests: ['History', 'Art', 'Traditional Crafts'],
    bio: 'Passionate about Newari art and history.'
  },
  {
    id: 5,
    name: 'Bikash Shrestha',
    location: 'Dharan',
    interests: ['Camping', 'Wildlife', 'Music'],
    bio: 'Backpacker who loves forests and folk music.'
  }
];

const Travelers = () => {
  return (
    <div className="w-full bg-blue-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">Nearby Travelers</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {travelers.map(traveler => (
            <div
              key={traveler.id}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {traveler.name.charAt(0)}
              </div>
              <h3 className="font-semibold text-lg mb-1">{traveler.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{traveler.location}</p>
              <div className="flex flex-wrap gap-1 justify-center mb-4">
                {traveler.interests.map((interest, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                  >
                    {interest}
                  </span>
                ))}
              </div>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-600 transition-colors">
                Connect
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Travelers;