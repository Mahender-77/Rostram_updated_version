import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouse({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <footer className="bg-[#F5F5F5] text-gray-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center text-2xl font-bold mb-4">
              <img src={logo} alt="Rostram Logo" className="h-12 w-auto mr-2" />
            
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed max-w-md">
              Pioneering technology solutions for over 20 years. Specializing in VFX tools, 
              web development, and AI innovation.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-700">
                <Mail size={18} className="mr-3 text-[#CB2733]" />
                <span>info@rostram.com</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Phone size={18} className="mr-3 text-[#CB2733]" />
                <span>+91 830-950-1041</span>
              </div>
              <div className="flex items-center text-gray-700">
                <MapPin size={18} className="mr-3 text-[#CB2733]" />
                <span>Hyderabad</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Contact', 'Careers'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-700 hover:text-[#CB2733] transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Services</h3>
            <ul className="space-y-3">
              {['VFX Tools', 'Pipeline Development', 'Web Development', 'AI Solutions'].map((service) => (
                <li key={service}>
                  <span className="text-gray-700 hover:text-[#CB2733] transition-colors duration-200 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm">
            © {currentYear} Rostram. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-gray-500 text-sm hover:text-[#CB2733] cursor-pointer transition-colors duration-200">
              Privacy Policy
            </span>
            <span className="text-gray-500 text-sm hover:text-[#CB2733] cursor-pointer transition-colors duration-200">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
