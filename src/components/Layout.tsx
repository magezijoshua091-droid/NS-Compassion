import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Heart, Home, Phone, Mail, MapPin, ChevronRight, Menu, X } from 'lucide-react';

const Layout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Caregivers', path: '/caregivers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen flex flex-col selection:bg-brand-teal selection:text-white">
      {/* Top Bar */}
      <div className="bg-gray-900 text-gray-300 py-2 text-sm hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-brand-gold" /> (555) 123-4567</span>
            <span className="flex items-center gap-2"><Mail className="w-4 h-4 text-brand-gold" /> info@nscompassionatecare.com</span>
          </div>
          <div>
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-brand-gold" /> Serving the Greater Area</span>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-24 items-center">
            <Link to="/" className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-12 h-12">
                <Heart className="w-10 h-10 text-brand-teal absolute" strokeWidth={2} fill="currentColor" fillOpacity={0.1} />
                <Home className="w-5 h-5 text-brand-gold relative mt-1" strokeWidth={2} />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-2xl font-serif font-bold text-gray-900 leading-none">NS Compassionate</span>
                <span className="text-[0.5rem] sm:text-[0.65rem] font-sans tracking-widest text-brand-gold uppercase mt-1 font-semibold">Home Care Agency & Staffing LLC</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium transition-colors ${isActive(link.path) ? 'text-brand-teal border-b-2 border-brand-teal pb-1' : 'text-gray-600 hover:text-brand-teal'}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" className="bg-brand-teal text-white px-6 py-2.5 rounded-sm font-medium hover:bg-brand-teal-dark transition-colors shadow-sm">
                Get Care Today
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-600 hover:text-brand-teal focus:outline-none">
                {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl absolute top-full left-0 w-full z-50">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-3 rounded-md text-base font-medium ${isActive(link.path) ? 'text-brand-teal bg-gray-50' : 'text-gray-700 hover:text-brand-teal hover:bg-gray-50'}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center mt-4 bg-brand-teal text-white px-6 py-3 rounded-sm font-medium hover:bg-brand-teal-dark transition-colors"
              >
                Get Care Today
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8 border-t-4 border-brand-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
            <div className="md:col-span-2 lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative flex items-center justify-center w-10 h-10">
                  <Heart className="w-8 h-8 text-brand-teal absolute" strokeWidth={2} fill="currentColor" fillOpacity={0.2} />
                  <Home className="w-4 h-4 text-brand-gold relative mt-1" strokeWidth={2} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-serif font-bold text-white leading-none">NS Compassionate</span>
                  <span className="text-[0.55rem] font-sans tracking-widest text-brand-gold uppercase mt-1">Home Care Agency & Staffing LLC</span>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                Providing compassionate, high-quality home care services that enhance the well-being, dignity, and independence of every client we serve.
              </p>
              <p className="text-brand-gold font-serif italic text-lg">Caring for You Like Family</p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6 font-serif text-white">Quick Links</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-gray-400 hover:text-brand-teal transition-colors flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-brand-gold" /> {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6 font-serif text-white">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-400">
                  <Phone className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                  <span>(555) 123-4567</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <Mail className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                  <span>info@nscompassionatecare.com</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <MapPin className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                  <span>123 Care Avenue, Suite 100<br/>City, State 12345</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} NS Compassionate Home Care Agency & Staffing LLC. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-gray-500">
              <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
