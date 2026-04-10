import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img src="/artboard-10.png" alt="ChromInk Logo" className="h-8 md:h-12 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-bold uppercase tracking-widest transition-colors hover:text-brand-cyan ${
                  location.pathname === link.path ? 'text-brand-cyan' : 'text-brand-black'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="bg-brand-black text-white px-6 py-2.5 text-sm font-bold uppercase tracking-widest hover:bg-brand-cyan transition-all">
              Get Quote
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-bold uppercase tracking-widest border-b border-gray-50"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full bg-brand-black text-white text-center py-4 font-bold uppercase tracking-widest"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export const Footer = () => (
  <footer className="bg-brand-black text-white pt-20 pb-10 px-4">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
      {/* Brand Column */}
      <div className="space-y-6">
        <Link to="/" className="flex items-center gap-2">
          <img src="/footerlogo.png" alt="ChromInk Logo" className="h-10 w-auto" />
        </Link>
        <p className="text-gray-400 leading-relaxed max-w-xs">
          Premium printing and branding services in Kumasi, Ghana. We turn your vision into high-quality physical reality.
        </p>
        <div className="flex gap-4">
          <a href="https://tiktok.com/@chromink.co" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-800 flex items-center justify-center hover:bg-brand-cyan hover:border-brand-cyan transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V2a5 5 0 0 0 5 5"/></svg>
          </a>
          <a href="https://instagram.com/chromink.co" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-800 flex items-center justify-center hover:bg-brand-cyan hover:border-brand-cyan transition-all">
            <Instagram size={20} />
          </a>
          <a href="https://facebook.com/chromink.co" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-800 flex items-center justify-center hover:bg-brand-cyan hover:border-brand-cyan transition-all">
            <Facebook size={20} />
          </a>
          <a href="https://twitter.com/chromink_co" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-800 flex items-center justify-center hover:bg-brand-cyan hover:border-brand-cyan transition-all">
            <Twitter size={20} />
          </a>
        </div>
      </div>

      {/* Services Column */}
      <div>
        <h5 className="font-bold text-lg mb-8 uppercase tracking-widest text-brand-cyan">Services</h5>
        <ul className="space-y-4 text-gray-400">
          <li><Link to="/services/banner-printing" className="hover:text-white transition-colors">Banner Printing</Link></li>
          <li><Link to="/services/t-shirt-printing" className="hover:text-white transition-colors">T-Shirt Branding</Link></li>
          <li><Link to="/services/sticker-printing" className="hover:text-white transition-colors">Sticker Printing</Link></li>
          <li><Link to="/services/business-signage" className="hover:text-white transition-colors">Signage Solutions</Link></li>
          <li><Link to="/services/vehicle-branding" className="hover:text-white transition-colors">Vehicle Branding</Link></li>
          <li><Link to="/services/custom-printing" className="hover:text-white transition-colors">Custom Printing</Link></li>
        </ul>
      </div>

      {/* Quick Links Column */}
      <div>
        <h5 className="font-bold text-lg mb-8 uppercase tracking-widest text-brand-magenta">Company</h5>
        <ul className="space-y-4 text-gray-400">
          <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
          <li><Link to="/blog" className="hover:text-white transition-colors">Blog & Tips</Link></li>
          <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
          <li><Link to="/services#faq" className="hover:text-white transition-colors">FAQs</Link></li>
        </ul>
      </div>

      {/* Contact Column */}
      <div>
        <h5 className="font-bold text-lg mb-8 uppercase tracking-widest text-brand-yellow">Contact</h5>
        <ul className="space-y-6 text-gray-400">
          <li className="flex gap-4">
            <MapPin className="text-brand-cyan shrink-0" size={20} />
            <a href="https://www.google.com/maps/place/ChromInk/@6.7130822,-1.5587749,16z/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Kumasi, Ashanti Region, Ghana
            </a>
          </li>
          <li className="flex gap-4">
            <Phone className="text-brand-magenta shrink-0" size={20} />
            <a href="tel:+233593321151" className="hover:text-white transition-colors">+233 59 332 1151</a>
          </li>
          <li className="flex gap-4">
            <Mail className="text-brand-yellow shrink-0" size={20} />
            <a href="mailto:print@chromink.co" className="hover:text-white transition-colors">print@chromink.co</a>
          </li>
        </ul>
      </div>
    </div>

    <div className="max-w-7xl mx-auto pt-10 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
      <p>© 2026 ChromInk. All rights reserved.</p>
      <div className="flex gap-8">
        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
      </div>
      <p className="flex items-center gap-2">
        Made for <span className="text-white font-bold">Kumasi</span> Businesses
      </p>
    </div>

    {/* Sticky WhatsApp Button */}
    <a 
      href="https://wa.me/233593321151" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center gap-2 group"
    >
      <MessageCircle size={28} />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold whitespace-nowrap">
        WhatsApp Us
      </span>
    </a>
  </footer>
);