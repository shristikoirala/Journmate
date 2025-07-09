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
      // Publicly accessible image from Wikimedia Commons
      image: 'https://www.google.com/imgres?q=illam&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fb%2Fb8%2FIlam_green.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FIlam_Municipality&docid=GP15zH8aeyRkDM&tbnid=vTRikeFK10LorM&vet=12ahUKEwiC6ubBhpGOAxW7zTgGHfq9LD0QM3oECG4QAA..i&w=4288&h=2293&hcb=2&ved=2ahUKEwiC6ubBhpGOAxW7zTgGHfq9LD0QM3oECG4QAA',
      description: 'Famous for tea gardens and natural beauty',
      rating: 4.8,
      travelers: 156
    },
    {
      id: 2,
      name: 'Janakpur',
      // Publicly accessible image from Wikimedia Commons (Janaki Mandir)
      image: 'data:image/jpeg;base64,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',
      description: 'Historic city with rich cultural heritage',
      rating: 4.6,
      travelers: 203
    },
    {
      id: 3,
      name: 'Everest Base Camp',
      // Publicly accessible image from Wikimedia Commons
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Everest_Base_Camp_trek_Nepal.jpg/1280px-Everest_Base_Camp_trek_Nepal.jpg',
      description: 'Ultimate trekking destination',
      rating: 4.9,
      travelers: 89
    },
    {
      id: 4,
      name: 'Langtang',
      // Publicly accessible image from Wikimedia Commons (Langtang Valley)
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Langtang_Valley%2C_Nepal.jpg/1280px-Langtang_Valley%2C_Nepal.jpg',
      description: 'Beautiful valley trek with mountain views',
      rating: 4.7,
      travelers: 134
    },
    {
      id: 5,
      name: 'Pokhara',
      // Publicly accessible image from Wikimedia Commons (Phewa Lake)
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Pokhara_Lakeside_Pano_2016.jpg/1280px-Pokhara_Lakeside_Pano_2016.jpg',
      description: 'Lake city with stunning mountain backdrop',
      rating: 4.8,
      travelers: 287
    },
    {
      id: 6,
      name: 'Chitwan',
      // Publicly accessible image from Wikimedia Commons (Rhino in Chitwan)
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Rhino_in_Chitwan_National_Park.jpg/1280px-Rhino_in_Chitwan_National_Park.jpg',
      description: 'National park with wildlife safari',
      rating: 4.5,
      travelers: 178
    }
  ];

  const nearbyTravelers = [
    { id: 1, name: 'Rajesh Kumar', location: 'Kathmandu', interests: ['Trekking', 'Photography'], avatar: 'RK' },
    { id: 2, name: 'Priya Sharma', location: 'Pokhara', interests: ['Adventure', 'Culture'], avatar: 'PS' },
    { id: 3, name: 'Amit Thapa', location: 'Lalitpur', interests: ['Hiking', 'Food'], avatar: 'AT' },
    { id: 4, name: 'Sita Rai', location: 'Bhaktapur', interests: ['History', 'Art'], avatar: 'SR' }
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