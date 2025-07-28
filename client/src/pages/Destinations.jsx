// components/Destinations.jsx
import React from 'react';
import { Star, Users } from 'lucide-react';

const destinations = [
  {
    id: 1,
    name: 'Ilam',
    image: '/images/ilam.jpg',
    description: 'Famous for tea gardens and natural beauty',
    rating: 4.8,
    travelers: 156,
  },
  {
    id: 2,
    name: 'Janakpur',
    image: '/images/janakpur.jpg',
    description: 'Historic city with rich cultural heritage',
    rating: 4.6,
    travelers: 203,
  },
  {
    id: 3,
    name: 'Everest Base Camp',
    image: '/images/everest base camp.webp',
    description: 'Ultimate trekking destination',
    rating: 4.9,
    travelers: 89,
  },
  {
    id: 4,
    name: 'Langtang',
    image: '/images/lantang.jpg',
    description: 'Beautiful valley trek with mountain views',
    rating: 4.7,
    travelers: 134,
  },
  {
    id: 5,
    name: 'Pokhara',
    image: '/images/Pokhara.avif',
    description: 'Lake city with stunning mountain backdrop',
    rating: 4.8,
    travelers: 287,
  },
  {
    id: 6,
    name: 'Chitwan National Park',
    image: '/images/chitwan.jpg',
    description: 'National park with wildlife safari',
    rating: 4.5,
    travelers: 178,
  },
  {
    id: 7,
    name: 'Kori Hill Trek',
    image: '/images/kori.webp',
    description: 'Scenic trek through lush hills and villages',
    rating: 4.7,
    travelers: 120,
  },
  {
    id: 8,
    name: 'Annapurna Base Camp',
    image: '/images/annapurna base camp.jpg',
    description: 'Majestic mountain view during the annapurna base camp trek',
    rating: 4.9,
    travelers: 100,
  },
  {
    id: 9,
    name: 'Badimalika',
    image: '/images/Badimalika.jpg',
    description: 'Spectacular views of the Badimalika temple and surrounding hills',
    rating: 4.0,
    travelers: 50,
  },
  {
    id: 10,
    name: 'Lumbini',
    image: '/images/Lumbini.jpg',
    description: 'Birthplace of Lord Buddha, a UNESCO World Heritage Site',
    rating: 4.0,
    travelers: 200,
  },
  {
    id: 11,
    name: 'Api Base Camp',
    image: '/images/Api Base Camp.jpeg',
    description: 'Remote trek to the base of Api Himal, the highest peak in the Api Nampa Conservation Area',
    rating: 4.4,
    travelers: 195,
  },
  {
    id: 12,
    name: 'Mardi Himal',
    image: '/images/Mardi Himal.webp',
    description: 'A lesser-known trek offering stunning views of the Annapurna range',
    rating: 4.1,
    travelers: 150,
  },
  {
    id: 13,
    name: 'Manung Kot',
    image: '/images/Manung Kot.jpeg',
    description: 'A scenic hilltop offering panoramic views of the surrounding valleys and mountains',
    rating: 4.5,
    travelers: 300,
  },
  {
    id: 14,
    name: 'Upper Mustang',
    image: '/images/Upper Mustang.webp',
    description: 'A remote and culturally rich region with unique Tibetan Buddhist heritage',
    rating: 4.5,
    travelers: 300,
  },
  {
    id: 15,
    name: 'Namche Bazaar',
    image: '/images/Namche Bazaar.jpg',
    description: 'Gateway to the Everest region, known for its vibrant Sherpa culture and stunning mountain views',
    rating: 4.5,
    travelers: 300,
  },
];

const Destinations = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Popular Destinations</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map((destination) => (
          <div
            key={destination.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-1 text-gray-800">
                {destination.name}
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                {destination.description}
              </p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  {destination.rating}
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  {destination.travelers} travelers
                </div>
              </div>
              <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;


