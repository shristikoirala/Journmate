import React, { useState } from 'react';
import { Users, MapPin, Shield, Heart, Star, ArrowRight, Mountain, Camera, Compass, Globe } from 'lucide-react';
import { Link, Outlet, useLocation } from 'react-router-dom';

// Navigation component that can be used across all pages
const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-10 h-10 rounded-lg flex items-center justify-center">
                <MapPin className="text-white w-6 h-6" />
              </div>
              <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                JournMate
              </span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <Link
              to="/"
              className={`font-semibold transition-colors ${
                currentPath === '/'
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`font-semibold transition-colors ${
                currentPath === '/about'
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              About Us
            </Link>
            <Link
              to="/dashboard"
              className={`font-semibold transition-colors ${
                currentPath === '/dashboard'
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Dashboard
            </Link>
            <Link 
              to="/register"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Footer component that can be used across all pages
const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center mb-4">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-10 h-10 rounded-lg flex items-center justify-center">
              <MapPin className="text-white w-6 h-6" />
            </div>
            <span className="ml-3 text-2xl font-bold">JournMate</span>
          </div>
          <p className="text-gray-400">
            Connecting travelers, creating memories, and building a community of adventurers across Nepal.
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/find-buddies" className="hover:text-white transition-colors">Find Buddies</Link></li>
            <li><Link to="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/help" className="hover:text-white transition-colors">Help Center</Link></li>
            <li><Link to="/safety" className="hover:text-white transition-colors">Safety</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <div className="space-y-2 text-gray-400">
            <p>📧 info@journmate.com</p>
            <p>📱 +977-1-4567890</p>
            <p>📍 Kathmandu, Nepal</p>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2025 JournMate. All rights reserved. Made with ❤ in Nepal</p>
      </div>
    </div>
  </footer>
);

// Layout component that applies the Navbar and Footer to all pages
const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

// Home Page Component
const HomePage = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
    {/* Hero Section */}
    <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Find Your Perfect
            <span className="block text-yellow-300">Travel Buddy</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Connect with like-minded travelers in Nepal. Share adventures, split costs, and create unforgettable memories together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-block">
              Start Your Journey
            </Link>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-bounce">
        <Mountain className="text-white/30 w-12 h-12" />
      </div>
      <div className="absolute bottom-20 right-10 animate-pulse">
        <Camera className="text-white/30 w-10 h-10" />
      </div>
      <div className="absolute top-1/2 left-20 animate-spin-slow">
        <Compass className="text-white/20 w-8 h-8" />
      </div>
    </div>

    {/* Features Section */}
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose JournMate?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We make finding travel companions safe, easy, and fun
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Users className="text-white w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Matching</h3>
            <p className="text-gray-600 leading-relaxed">
              Our AI-powered algorithm connects you with travelers who share your interests, budget, and travel style.
            </p>
          </div>
          
          <div className="group bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Shield className="text-white w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Safe & Secure</h3>
            <p className="text-gray-600 leading-relaxed">
              Verified profiles, secure messaging, and a trusted community rating system ensure your safety.
            </p>
          </div>
          
          <div className="group bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Heart className="text-white w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Build Connections</h3>
            <p className="text-gray-600 leading-relaxed">
              Create lasting friendships with fellow travelers and become part of a vibrant community.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* How It Works */}
    <div className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            Three simple steps to find your travel companion
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <span className="text-white text-2xl font-bold">1</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Create Your Profile</h3>
            <p className="text-gray-600 leading-relaxed">
              Tell us about yourself, your travel preferences, and where you want to go.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <span className="text-white text-2xl font-bold">2</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Matched</h3>
            <p className="text-gray-600 leading-relaxed">
              Our smart algorithm finds compatible travel buddies based on your preferences.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="bg-gradient-to-r from-purple-600 to-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <span className="text-white text-2xl font-bold">3</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Start Your Adventure</h3>
            <p className="text-gray-600 leading-relaxed">
              Chat, plan together, and embark on your amazing journey with your new travel buddy.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Testimonials */}
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Travelers Say
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-2xl shadow-lg">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-400 w-5 h-5 fill-current" />
              ))}
            </div>
            <p className="text-gray-700 mb-4">
              "Found an amazing travel buddy for my Everest Base Camp trek. We're still best friends!"
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>
              <div className="ml-3">
                <p className="font-semibold text-gray-900">Sarah K.</p>
                <p className="text-sm text-gray-600">Adventure Enthusiast</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl shadow-lg">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-400 w-5 h-5 fill-current" />
              ))}
            </div>
            <p className="text-gray-700 mb-4">
              "Safe, secure, and so easy to use. Found my perfect travel companion for Pokhara!"
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">R</span>
              </div>
              <div className="ml-3">
                <p className="font-semibold text-gray-900">Rajesh M.</p>
                <p className="text-sm text-gray-600">Culture Explorer</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-2xl shadow-lg">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-400 w-5 h-5 fill-current" />
              ))}
            </div>
            <p className="text-gray-700 mb-4">
              "The matching algorithm is incredible. Found someone who loves photography as much as I do!"
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">P</span>
              </div>
              <div className="ml-3">
                <p className="font-semibold text-gray-900">Priya S.</p>
                <p className="text-sm text-gray-600">Solo Traveler</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* CTA Section */}
    <div className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Find Your Travel Buddy?
        </h2>
        <p className="text-xl text-white/90 mb-8">
          Join thousands of travelers who have found their perfect companions through JournMate
        </p>
        <Link to="/register" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-10 py-4 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center">
          Get Started Today
          <ArrowRight className="ml-2 w-6 h-6" />
        </Link>
      </div>
    </div>
  </div>
);

// About Page Component
const AboutPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
    {/* Hero Section */}
    <div className="relative bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            About
            <span className="block text-yellow-300">JournMate</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Connecting travelers, creating memories, and building a community of adventurers across Nepal
          </p>
        </div>
      </div>
    </div>

    {/* Mission Section */}
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              At JournMate, we believe that travel is better when shared. Our mission is to connect like-minded travelers in Nepal, making solo travel safer, more affordable, and infinitely more fun.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We're passionate about helping people discover the beauty of Nepal while building meaningful connections with fellow adventurers. Whether you're trekking through the Himalayas or exploring ancient temples, we're here to help you find the perfect travel companion.
            </p>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <Globe className="text-blue-600 w-16 h-16 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Community</h3>
                <p className="text-gray-600">
                  Join thousands of travelers from around the world exploring Nepal together
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Story Section */}
    <div className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Story
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            JournMate was born from a simple observation: too many people miss out on incredible travel experiences because they don't have someone to share them with. As a team of passionate travelers and developers, we decided to solve this problem.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">The Problem</h3>
              <p className="text-gray-600">
                Many travelers, especially students and solo adventurers, struggle to find reliable travel companions. This often leads to cancelled trips, safety concerns, or expensive solo travel costs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">The Solution</h3>
              <p className="text-gray-600">
                We created JournMate to intelligently match travelers based on their preferences, destinations, and travel styles, making it easy to find compatible companions.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-3xl text-white">
            <h3 className="text-3xl font-bold mb-6">Why Nepal?</h3>
            <p className="text-lg mb-4">
              Nepal offers some of the world's most incredible travel experiences, from the towering peaks of the Himalayas to the rich cultural heritage of Kathmandu.
            </p>
            <p className="text-lg">
              We wanted to start where adventure truly begins - in the heart of the Himalayas, where every journey is an opportunity to create lifelong memories.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Values Section */}
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Values
          </h2>
          <p className="text-xl text-gray-600">
            The principles that guide everything we do
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Shield className="text-white w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Safety First</h3>
            <p className="text-gray-600">
              Your safety and security are our top priorities in everything we do.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Heart className="text-white w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Community</h3>
            <p className="text-gray-600">
              Building genuine connections and fostering a supportive travel community.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="bg-gradient-to-r from-purple-600 to-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Users className="text-white w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Inclusivity</h3>
            <p className="text-gray-600">
              Welcoming travelers from all backgrounds and creating equal opportunities.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Mountain className="text-white w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Adventure</h3>
            <p className="text-gray-600">
              Encouraging exploration and helping people step out of their comfort zones.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* CTA Section */}
    <div className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Join Our Community
        </h2>
        <p className="text-xl text-white/90 mb-8">
          Be part of the JournMate family and start your next adventure today
        </p>
        <Link to="/register" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-10 py-4 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center">
          Start Your Journey
          <ArrowRight className="ml-2 w-6 h-6" />
        </Link>
      </div>
    </div>
  </div>
);

// Main Dashboard Component - Now simplified as the actual dashboard content
const DashboardContent = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Your Travel Dashboard</h1>
      
      {/* Dashboard content will go here */}
      <div className="bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Welcome to your JournMate Dashboard!</h2>
        <p className="text-lg text-gray-700 mb-4">
          This is where you'll manage your travel plans, connect with travel buddies, and more.
        </p>
        
        {/* Dashboard features - placeholder */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="bg-blue-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Your Profile</h3>
            <p className="text-gray-700">Complete your profile to get better matches</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">Edit Profile</button>
          </div>
          
          <div className="bg-green-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Travel Plans</h3>
            <p className="text-gray-700">Create or join travel plans in Nepal</p>
            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg">Browse Plans</button>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Messages</h3>
            <p className="text-gray-700">Connect with your matched travel buddies</p>
            <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg">Open Messages</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Export all components so they can be used in the router setup
export { Layout, HomePage, AboutPage, DashboardContent };

// Default export for backward compatibility
export default function Dashboard() {
  return <Layout />;
}