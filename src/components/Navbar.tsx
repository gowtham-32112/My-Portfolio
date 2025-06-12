import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap, PanelsTopLeft, Code, Home, ShieldCheck } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: 'Home', path: '/', icon: <Home className="w-5 h-5 mr-2" /> },
    { name: 'Education', path: '/education', icon: <GraduationCap className="w-5 h-5 mr-2" /> },
    { name: 'Projects', path: '/achievements', icon: <PanelsTopLeft className="w-5 h-5 mr-2" /> },
    { name: 'Certifications', path: '/certifications', icon: <ShieldCheck className="w-5 h-5 mr-2" /> },
    { name: 'Skills', path: '/skills', icon: <Code className="w-5 h-5 mr-2" /> },
    { name: 'My Resume', path: '/ResumePage', icon: <Code className="w-5 h-5 mr-2" /> },
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white shadow-lg">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <GraduationCap className="h-8 w-8 mr-2" />
              <span className="font-bold text-xl">Engineering Portfolio</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'bg-indigo-700 text-white'
                      : 'text-gray-200 hover:bg-indigo-800 hover:text-white'
                  }`}
                >
                  {item.icon}
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-indigo-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === item.path
                    ? 'bg-indigo-700 text-white'
                    : 'text-gray-200 hover:bg-indigo-800 hover:text-white'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;