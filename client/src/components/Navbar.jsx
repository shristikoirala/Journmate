import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white">
      <Link to="/" className="text-2xl font-bold text-blue-700">JournMate</Link>
      <div className="flex space-x-6">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/about" className="hover:text-blue-600">About Us</Link>
        <Link to="/dashboard" className="hover:text-blue-600">Dashboard</Link>
        <Link to="/blogs" className="hover:text-blue-600">Blogs</Link>
        <Link to="/register" className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded hover:scale-105 transition">Get Started</Link>
      </div>
    </nav>
  );
};

export default Navbar;
