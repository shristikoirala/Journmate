// Dashboard.jsx
import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import {
  MapPin,
  Calendar,
  Users,
  Phone,
  Mountain,
  Menu,
  X
} from 'lucide-react';

const menuItems = [
  { path: '/dashboard/destinations', label: 'Destinations', icon: MapPin },
  { path: '/dashboard/bookings', label: 'Bookings', icon: Calendar },
  { path: '/dashboard/travelers', label: 'Nearby Travelers', icon: Users },
  { path: '/dashboard/contact', label: 'Contact Us', icon: Phone },
];

const Dashboard = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
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
              {menuItems.map(item => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`
                  }
                >
                  {React.createElement(item.icon, { className: 'w-4 h-4 mr-2' })}
                  {item.label}
                </NavLink>
              ))}
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
              {menuItems.map(item => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center w-full px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`
                  }
                >
                  {React.createElement(item.icon, { className: 'w-4 h-4 mr-3' })}
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;