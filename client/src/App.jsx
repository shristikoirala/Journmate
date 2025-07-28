import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import DashboardWelcome from './components/DashboardWelcome';
import Destinations from './pages/Destinations';
import Bookings from './pages/Bookings';
import Travelers from './pages/Travelers';
import Contact from './pages/Contact';
import BlogList from './pages/Blog/BlogList';
import BlogDetail from './pages/Blog/BlogDetail';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Global Layout Routes (with navbar) */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          
          {/* Dashboard nested routes */}
          <Route path="/dashboard" element={<Dashboard />}>
           <Route index element={<DashboardWelcome />} />
           <Route path="destinations" element={<Destinations />} />
           <Route path="bookings" element={<Bookings />} />
           <Route path="travelers" element={<Travelers />} />
           <Route path="contact" element={<Contact />} />
          </Route>

          {/* Other routes */}
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
