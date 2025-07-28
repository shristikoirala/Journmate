import React, { useState, useEffect } from 'react';
import { MapPin, Users, Mountain, Heart, Star, Shield, Globe, Camera, Calendar, Compass, Plane, Coffee, Sun, Moon, TrendingUp, Award, MessageCircle, Backpack, Navigation } from 'lucide-react';

const DashboardWelcome = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [weatherAnimation, setWeatherAnimation] = useState('sunny');
  const [activeTab, setActiveTab] = useState('trending');

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    const weatherTimer = setInterval(() => {
      setWeatherAnimation(prev => prev === 'sunny' ? 'cloudy' : 'sunny');
    }, 4000);
    
    return () => {
      clearInterval(timer);
      clearInterval(weatherTimer);
    };
  }, []);

  const destinations = [
    {
      name: "Ilam Tea Gardens",
      description: "Misty hills and endless tea plantations",
      image: '/images/ilamteagarden.jpg',
      rating: 4.8,
      travelers: 156,
      category: "Nature",
      duration: "3-5 days",
      difficulty: "Easy",
      badge: "Popular"
    },
    {
      name: "Upper Mustang",
      description: "Ancient kingdom with desert landscapes",
      image: '/images/Upper Mustang.webp',
      rating: 4.9,
      travelers: 89,
      category: "Adventure",
      duration: "10-12 days",
      difficulty: "Hard",
      badge: "Trending"
    },
    {
      name: "Annapurna Base Camp",
      description: "World's most beautiful trekking route",
      image: '/images/Annapurna Base Camp.jpg',
      rating: 4.7,
      travelers: 234,
      category: "Trekking",
      duration: "15-20 days",
      difficulty: "Hard",
      badge: "Epic"
    },
    {
      name: "Phewa Lake",
      description: "Serene lake surrounded by mountains",
      image: '/images/phewa.lake.jpg',
      rating: 4.6,
      travelers: 98,
      category: "Solitude",
      duration: "7-9 days",
      difficulty: "Medium",
      badge: "Hidden Gem"
    }
  ];

  const travelers = [
    { 
      name: "Anish Thapa", 
      destination: "Pokhara", 
      avatar: "AT", 
      color: "from-emerald-500 via-teal-500 to-cyan-500",
      status: "online",
      trips: 12,
      joined: "2 days ago"
    },
    { 
      name: "Priya Sharma", 
      destination: "Everest Base Camp", 
      avatar: "PS", 
      color: "from-rose-500 via-pink-500 to-fuchsia-500",
      status: "planning",
      trips: 8,
      joined: "1 week ago"
    },
    { 
      name: "Raj Gurung", 
      destination: "Chitwan", 
      avatar: "RG", 
      color: "from-amber-500 via-orange-500 to-red-500",
      status: "traveling",
      trips: 15,
      joined: "3 days ago"
    },
    { 
      name: "Maya Lama", 
      destination: "Bandipur", 
      avatar: "ML", 
      color: "from-violet-500 via-purple-500 to-indigo-500",
      status: "online",
      trips: 6,
      joined: "5 hours ago"
    }
  ];

  const quickStats = [
    { label: "Solo Travelers", value: "1,250+", icon: <Backpack className="w-6 h-6" />, color: "from-emerald-400 via-teal-500 to-cyan-600" },
    { label: "Destinations", value: "75+", icon: <Navigation className="w-6 h-6" />, color: "from-orange-400 via-red-500 to-pink-600" },
    { label: "Success Rate", value: "98%", icon: <Award className="w-6 h-6" />, color: "from-violet-400 via-purple-500 to-indigo-600" },
    { label: "Active Trips", value: "23", icon: <Mountain className="w-6 h-6" />, color: "from-amber-400 via-yellow-500 to-orange-600" }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'online': return 'bg-emerald-400 shadow-emerald-400/50';
      case 'planning': return 'bg-amber-400 shadow-amber-400/50';
      case 'traveling': return 'bg-sky-400 shadow-sky-400/50';
      default: return 'bg-gray-400';
    }
  };

  const getBadgeColor = (badge) => {
    switch(badge) {
      case 'Popular': return 'bg-gradient-to-r from-emerald-500 to-teal-600';
      case 'Trending': return 'bg-gradient-to-r from-rose-500 to-pink-600';
      case 'Epic': return 'bg-gradient-to-r from-violet-500 to-purple-600';
      case 'Hidden Gem': return 'bg-gradient-to-r from-amber-500 to-orange-600';
      default: return 'bg-gradient-to-r from-gray-500 to-gray-600';
    }
  };

  return (
    <>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -right-4 w-96 h-96 bg-gradient-to-br from-orange-200/30 to-rose-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-8 -left-8 w-80 h-80 bg-gradient-to-br from-violet-200/30 to-indigo-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Header with Time & Weather */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 mb-8 relative overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 opacity- rounded-3xl"
            style={{
              backgroundImage: '/images/bg-nepal.webp',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>
          
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/40 to-transparent rounded-3xl"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-200/50 to-orange-200/50 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-violet-200/50 to-pink-200/50 rounded-full blur-2xl"></div>
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 relative z-10">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex items-center gap-2">
                  {weatherAnimation === 'sunny' ? 
                    <Sun className="w-8 h-8 text-amber-500 animate-spin" style={{animationDuration: '8s'}} /> : 
                    <div className="w-8 h-8 bg-slate-300 rounded-full animate-pulse"></div>
                  }
                  <span className="text-sm font-medium text-gray-600">
                    {currentTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                  </span>
                </div>
                <div className="h-4 w-px bg-gray-300"></div>
                <span className="text-sm text-gray-600">Kathmandu, Nepal</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-black mb-4">
                Welcome to{' '}
                <span className="bg-gradient-to-r from-violet-600 via-rose-500 to-orange-500 bg-clip-text text-transparent animate-pulse">
                  JournMate
                </span>
                <span className="inline-block animate-bounce ml-2">🎒</span>
              </h1>
              
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Your solo adventure starts here - connect with like-minded travelers and explore Nepal's wonders together
              </p>
              
              <div className="flex flex-wrap gap-3">
                <button className="bg-gradient-to-r from-violet-600 via-rose-500 to-orange-500 text-white px-8 py-3 rounded-2xl font-semibold hover:scale-105 hover:shadow-xl transform transition-all duration-300 flex items-center gap-2">
                  <Compass className="w-5 h-5" />
                  Find Solo Buddy
                </button>
                <button className="bg-white/70 backdrop-blur-sm text-gray-700 px-8 py-3 rounded-2xl font-semibold hover:bg-white/90 transition-all duration-300 border border-gray-200 flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Plan Solo Trip
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 lg:w-80">
              {quickStats.map((stat, index) => (
                <div key={index} className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 text-center hover:scale-105 transform transition-all duration-300 border border-white/30">
                  <div className={`bg-gradient-to-r ${stat.color} w-12 h-12 rounded-xl flex items-center justify-center text-white mx-auto mb-2 shadow-lg`}>
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto">
          {['trending', 'adventure', 'cultural', 'solitude'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-2xl font-semibold capitalize transition-all duration-300 whitespace-nowrap
                ${activeTab === tab 
                  ? 'bg-gradient-to-r from-violet-600 to-orange-500 text-white shadow-lg scale-105' 
                  : 'bg-white/50 text-gray-600 hover:bg-white/70 border border-white/30'
                }`}
            >
              {tab === 'solitude' ? 'Peaceful Escapes' : `${tab} Destinations`}
            </button>
          ))}
        </div>

        {/* Enhanced Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-3 border border-white/20"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute top-4 left-4 ${getBadgeColor(destination.badge)} text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg`}>
                  {destination.badge}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                  <Star className="w-4 h-4 text-amber-500 fill-current" />
                  <span className="text-sm font-semibold">{destination.rating}</span>
                </div>
                <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs">
                  {destination.duration}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold text-violet-700 bg-violet-50 px-2 py-1 rounded-lg border border-violet-200">
                    {destination.category}
                  </span>
                  <span className={`text-xs font-semibold px-2 py-1 rounded-lg border
                    ${destination.difficulty === 'Easy' ? 'text-emerald-700 bg-emerald-50 border-emerald-200' :
                      destination.difficulty === 'Hard' ? 'text-rose-700 bg-rose-50 border-rose-200' :
                      'text-amber-700 bg-amber-50 border-amber-200'
                    }`}>
                    {destination.difficulty}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-violet-600 transition-colors">
                  {destination.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{destination.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-violet-600">
                    <Users className="w-4 h-4" />
                    <span className="text-sm font-medium">{destination.travelers} solo travelers</span>
                  </div>
                  <button className="bg-gradient-to-r from-violet-600 to-orange-500 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:scale-105 transform transition-all duration-200 shadow-md">
                    Join Adventure
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Travelers Section */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 mb-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Solo Travel Community</h2>
              <p className="text-gray-600">Connect with verified solo adventurers</p>
            </div>
            <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-2xl font-semibold hover:scale-105 transform transition-all duration-300 flex items-center gap-2 shadow-lg">
              <MessageCircle className="w-5 h-5" />
              Join Community
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {travelers.map((traveler, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative">
                    <div className={`bg-gradient-to-r ${traveler.color} w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                      {traveler.avatar}
                    </div>
                    <div className={`absolute -bottom-1 -right-1 w-4 h-4 ${getStatusColor(traveler.status)} rounded-full border-2 border-white shadow-lg`}></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-sm">{traveler.name}</h3>
                    <p className="text-xs text-gray-500 capitalize">{traveler.status}</p>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">Going to {traveler.destination}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Backpack className="w-4 h-4" />
                    <span className="text-sm">{traveler.trips} solo trips</span>
                  </div>
                  <div className="text-xs text-gray-500">Joined {traveler.joined}</div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-violet-600 to-orange-500 text-white py-2 rounded-xl text-sm font-semibold hover:scale-105 transform transition-all duration-200 shadow-md">
                  Connect
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* JournMate Features */}
        <div className="bg-gradient-to-br from-slate-900 via-violet-900 to-orange-900 rounded-3xl shadow-2xl p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-orange-400/20 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-br from-violet-400/20 to-transparent rounded-full blur-2xl"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Why Solo Travelers Choose JournMate</h2>
              <p className="text-xl text-orange-100 max-w-3xl mx-auto">
                Designed specifically for independent explorers seeking authentic connections and unforgettable solo adventures
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transform transition-all duration-300 shadow-xl">
                  <Shield className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Safe Solo Travel</h3>
                <p className="text-orange-100 leading-relaxed">Verified profiles and safety features designed for solo adventurers</p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transform transition-all duration-300 shadow-xl">
                  <Globe className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Local Connections</h3>
                <p className="text-orange-100 leading-relaxed">Meet locals and fellow solo travelers who share your wanderlust</p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transform transition-all duration-300 shadow-xl">
                  <Heart className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Meaningful Adventures</h3>
                <p className="text-orange-100 leading-relaxed">Create lasting memories and friendships through shared solo experiences</p>
              </div>
            </div>

            <div className="text-center">
              <button className="bg-gradient-to-r from-orange-500 to-rose-500 text-white px-10 py-4 rounded-2xl text-lg font-bold hover:scale-105 transform transition-all duration-300 shadow-xl hover:shadow-2xl">
                Begin Your Solo Journey
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardWelcome;