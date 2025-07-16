import React, { useState } from 'react';
import { 
  Home, 
  MapPin, 
  Calendar, 
  Users, 
  BookOpen, 
  Phone, 
  LogIn, 
  UserPlus,
  Mountain,
  Camera,
  Star,
  ArrowRight,
  Menu,
  X
} from 'lucide-react';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const destinations = [
    {
      id: 1,
      name: 'Ilam',
     
      image: '/images/ilam.jpg',

      description: 'Famous for tea gardens and natural beauty',
      rating: 4.8,
      travelers: 156
    },
    {
      id: 2,
      name: 'Janakpur',
      
      image: '/images/janakpur.jpg' ,
      description: 'Historic city with rich cultural heritage',
      rating: 4.6,
      travelers: 203
    },
    {
      id: 3,
      name: 'Everest Base Camp',
      
      image: '/images/Everest-Base-Camp-.webp',
      description: 'Ultimate trekking destination',
      rating: 4.9,
      travelers: 89
    },
    {
      id: 4,
      name: 'Langtang',
      
      image: '/images/lantang.jpg',
      description: 'Beautiful valley trek with mountain views',
      rating: 4.7,
      travelers: 134
    },
    {
      id: 5,
      name: 'Pokhara',
      
      image: '/images/Pokhara.avif',
      description: 'Lake city with stunning mountain backdrop',
      rating: 4.8,
      travelers: 287
    },
    {
      id: 6,
      name: 'Chitwan National Park',
     
      image: '/images/chitwan.jpg',
      description: 'National park with wildlife safari',
      rating: 4.5,
      travelers: 178
    },
    {
      id: 7,
      name: 'Kori Hill Trek',
      image: '/images/koir.webp',
      description: 'Scenic trek through lush hills and villages',
      rating: 4.7,
      travellers: 120
    },
    {
      id: 8,
      name: 'Annapurna Base Camp',
      image: '/images/Annapurna Base Camp.jpg',
      description: 'Majestic mountain view during the annapurna base camp trek',
      rating: 4.9,
      travellers: 100
    },
     {
      id: 9,
      name: 'Badimalika',
      image: '/images/Badimalika.jpg',
      description: 'spectacular views of the Badimalika temple and surrounding hills',
      rating: 4.0,
      travellers: 50
    },
    {
      id: 10,
      name: 'Lumbini',
      image: '/images/Lumbini.jpg',
      description: 'Birthplace of Lord Buddha, a UNESCO World Heritage Site',
      rating: 4.0,
      travellers: 200
    },
    {
      id: 11,
      name: 'Api Base Camp',
      image: '/images/Api Base Camp.jpeg',
      description: 'Remote trek to the base of Api Himal, the highest peak in the Api Nampa Conservation Area',
      rating: 4.4,
      travellers: 195
    },
     {
      id: 12,
      name: 'Mardi Himal',
      image: '/images/Mardi Himal.webp',
      description: 'A lesser-known trek offering stunning views of the Annapurna range',
      rating: 4.1,
      travellers: 150
    },
     {
      id: 13,
      name: 'Manung Kot',
      image: '/images/Manung Kot.jpeg',
      description: 'A scenic hilltop offering panoramic views of the surrounding valleys and mountains',
      rating: 4.5,
      travellers: 300
    },
     {
      id: 14,
      name: 'Upper Mustang',
      image: '/images/Upper Mustang.webp',
      description: 'A remote and culturally rich region with unique Tibetan Buddhist heritage',
      rating: 4.5,
      travellers: 300
    },
     {
      id: 15,
      name: 'Namche Bazaar',
      image: '/images/Namche',
      description: 'Gateway to the Everest region, known for its vibrant Sherpa culture and stunning mountain views',
      rating: 4.5,
      travellers: 300
    },
  ];

 const nearbyTravelers = [
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

  const blogPosts = [
    {
      id: 1,
      title: 'Top 10 Trekking Routes in Nepal',
      author: 'Travel Expert',
      date: '2025-06-20',
      // Publicly accessible image for trekking in Nepal
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80',
      excerpt: 'Discover the most breathtaking trekking routes Nepal has to offer...'
    },
    {
      id: 2,
      title: 'Cultural Festivals You Must Experience',
      author: 'Culture Enthusiast',
      date: '2025-06-18',
      // Publicly accessible image for Nepalese cultural festival
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Indra_Jatra_Festival_in_Kathmandu.jpg/1280px-Indra_Jatra_Festival_in_Kathmandu.jpg',
      excerpt: 'Immerse yourself in Nepal\'s rich cultural heritage through these festivals...'
    },
    {
      id: 3,
      title: 'Solo Travel Safety Tips',
      author: 'Safety Guide',
      date: '2025-06-15',
      // Publicly accessible image for solo travel/safety (general travel image)
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80',
      excerpt: 'Essential safety tips for solo travelers exploring Nepal...'
    }
  ];

  const menuItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'destinations', label: 'Destinations', icon: MapPin },
    { id: 'bookings', label: 'Bookings', icon: Calendar },
    { id: 'travelers', label: 'Nearby Travelers', icon: Users },
    { id: 'blog', label: 'Blog', icon: BookOpen },
    { id: 'contact', label: 'Contact Us', icon: Phone },
    { id: 'login', label: 'Login', icon: LogIn },
    { id: 'signup', label: 'Sign Up', icon: UserPlus }
  ];

  const renderHome = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to JournMate</h1>
        <p className="text-xl mb-6">Find your perfect travel buddy and explore Nepal together!</p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          Start Your Journey
        </button>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
          <MapPin className="w-12 h-12 text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Discover Destinations</h3>
          <p className="text-gray-600">Explore amazing places across Nepal</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
          <Users className="w-12 h-12 text-green-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Find Travel Buddies</h3>
          <p className="text-gray-600">Connect with like-minded travelers</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
          <Calendar className="w-12 h-12 text-purple-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Plan Your Trip</h3>
          <p className="text-gray-600">Book and organize your adventures</p>
        </div>
      </div>
    </div>
  );

  const renderDestinations = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Popular Destinations</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map(destination => (
          <div key={destination.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
            <img 
              src={destination.image} 
              alt={destination.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
              <p className="text-gray-600 mb-3">{destination.description}</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span className="text-sm font-medium">{destination.rating}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Users className="w-4 h-4 mr-1" />
                  {destination.travelers} travelers
                </div>
              </div>
              <button className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderBookings = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">My Bookings</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="text-center py-12">
          <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No bookings yet</h3>
          <p className="text-gray-500 mb-6">Start planning your next adventure!</p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
            Browse Destinations
          </button>
        </div>
      </div>
    </div>
  );

  const renderTravelers = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Nearby Travelers</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {nearbyTravelers.map(traveler => (
          <div key={traveler.id} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
            <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
              {traveler.avatar}
            </div>
            <h3 className="font-semibold text-lg mb-1">{traveler.name}</h3>
            <p className="text-gray-600 text-sm mb-3">{traveler.location}</p>
            <div className="flex flex-wrap gap-1 justify-center mb-4">
              {traveler.interests.map((interest, index) => (
                <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
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
  );

  const renderBlog = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Travel Blog</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map(post => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
              <p className="text-gray-600 text-sm mb-2">By {post.author} • {post.date}</p>
              <p className="text-gray-700 text-sm mb-4">{post.excerpt}</p>
              <button className="text-blue-500 hover:text-blue-600 font-medium text-sm flex items-center">
                Read More <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContact = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-blue-500 mr-3" />
              <span>+977-1-234567</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-blue-500 mr-3" />
              <span>Kathmandu, Nepal</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Send Message</h3>
          <div className="space-y-4">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <textarea 
              rows="4" 
              placeholder="Your Message" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            ></textarea>
            <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderLogin = () => (
    <div className="max-w-md mx-auto">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Login to JournMate</h2>
        <div className="space-y-4">
          <input 
            type="email" 
            placeholder="Email Address" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors">
            Login
          </button>
        </div>
        <p className="text-center mt-4 text-gray-600">
          Don't have an account? 
          <button 
            onClick={() => setActiveSection('signup')}
            className="text-blue-500 hover:text-blue-600 ml-1"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );

  const renderSignup = () => (
    <div className="max-w-md mx-auto">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Join JournMate</h2>
        <div className="space-y-4">
          <input 
            type="text" 
            placeholder="Full Name" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input 
            type="email" 
            placeholder="Email Address" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input 
            type="password" 
            placeholder="Confirm Password" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors">
            Sign Up
          </button>
        </div>
        <p className="text-center mt-4 text-gray-600">
          Already have an account? 
          <button 
            onClick={() => setActiveSection('login')}
            className="text-blue-500 hover:text-blue-600 ml-1"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );

  const renderContent = () => {
    switch(activeSection) {
      case 'home': return renderHome();
      case 'destinations': return renderDestinations();
      case 'bookings': return renderBookings();
      case 'travelers': return renderTravelers();
      case 'blog': return renderBlog();
      case 'contact': return renderContact();
      case 'login': return renderLogin();
      case 'signup': return renderSignup();
      default: return renderHome();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Mountain className="w-8 h-8 text-blue-600 mr-2" />
              <h1 className="text-2xl font-bold text-gray-800">JournMate</h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-1">
              {menuItems.map(item => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? 'bg-blue-100 text-blue-600'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map(item => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveSection(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`flex items-center w-full px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? 'bg-blue-100 text-blue-600'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-4 h-4 mr-3" />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>
    </div>
  );
};

export default Dashboard;