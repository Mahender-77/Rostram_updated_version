import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import logo from '../assets/logo.png';

interface HeaderProps {
  heroColor?: { color: string; gradient: string };
}

const Header: React.FC<HeaderProps> = ({ heroColor }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services' },
    { name: 'Contact', href: '/contact' },
    { name: 'Careers', href: '/careers' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === path;
  };

  const serviceDropdown = [
    { label: 'VFX', href: '/service-vfx' },
    { label: 'IT Services', href: '/service-it' },
    { label: 'Support', href: '/service-support' },
  ];

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white' : ''
      )}
      style={{ backgroundColor: isScrolled ? undefined : '#F8F9FA'}}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-10 py-4">
        <div className="flex items-center h-16 min-h-[56px] sm:min-h-[64px]">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img src={logo} alt="Rostram Logo" className="h-10 sm:h-12 md:h-14 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4 lg:space-x-8 ml-auto items-center">
            {navItems.map((item) => (
              item.name === 'Services' ? (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.href}
                    className={cn(
                      'px-2 lg:px-3 py-2 text-base lg:text-lg font-medium transition-colors duration-200 relative group flex items-center',
                      isScrolled
                        ? isActive(item.href)
                          ? 'text-red-600'
                          : 'text-gray-700 hover:text-red-600'
                        : isActive(item.href)
                        ? 'text-red-600'
                        : 'text-gray-900 hover:text-red-600 drop-shadow-sm'
                    )}
                  >
                    {item.name}
                    <ChevronDown size={18} className="ml-1 inline-block align-middle" />
                  </Link>
                  {/* Dropdown */}
                  <div className="absolute left-0 mt-2 w-44 sm:w-56 bg-white rounded-lg shadow-xl py-2 px-2 sm:px-3 z-50 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto transition-opacity duration-200" tabIndex={-1}>
                    {serviceDropdown.map((option) => (
                      <Link
                        key={option.label}
                        to={option.href}
                        className="block px-3 py-2 text-sm sm:text-base font-semibold text-gray-800 hover:text-white hover:bg-[#CA2833] rounded transition-colors duration-150"
                      >
                        {option.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    'px-2 lg:px-3 py-2 text-base lg:text-lg font-medium transition-colors duration-200 relative group flex items-center',
                    isScrolled
                      ? isActive(item.href)
                        ? 'text-red-600'
                        : 'text-gray-700 hover:text-red-600'
                      : isActive(item.href)
                      ? 'text-red-600'
                      : 'text-gray-900 hover:text-red-600 drop-shadow-sm'
                  )}
                >
                  {item.name}
                  <span className={cn(
                    'absolute inset-x-0 bottom-0 h-0.5 transform transition-transform duration-200',
                    isActive(item.href) ? 'scale-x-100 bg-red-600' : 'scale-x-0 group-hover:scale-x-100 bg-red-300'
                  )}></span>
                </Link>
              )
            ))}
            <Link to="/contact">
              <Button
                className="ml-2 lg:ml-6 px-4 sm:px-6 py-2 text-base lg:text-lg font-bold bg-[#CB2733] hover:bg-[#a81e29] text-white rounded-md shadow transition-colors duration-200 border-0"
                style={{ backgroundColor: '#CB2733' }}
              >
                Get in Touch
              </Button>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden ml-auto">
            <Button
              onClick={toggleMenu}
              className={cn(
                'focus:outline-none transition-colors duration-200 p-2',
                isScrolled ? 'text-gray-700 hover:text-red-600' : 'text-white hover:text-red-300'
              )}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className={cn(
              'px-2 pt-2 pb-3 space-y-1 border-t',
              isScrolled ? 'bg-white border-gray-100' : 'bg-black/80 border-gray-700'
            )}>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    'block px-3 py-2 text-base font-medium transition-colors duration-200 relative flex items-center rounded',
                    isScrolled 
                      ? isActive(item.href)
                        ? 'text-red-600 border-b-2 border-red-600'
                        : 'text-gray-700 hover:text-red-600'
                      : isActive(item.href)
                      ? 'text-red-600 border-b-2 border-red-600'
                      : 'text-white hover:text-red-300'
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                  {item.name === 'Services' && (
                    <ChevronDown size={18} className="ml-1 inline-block align-middle" />
                  )}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button
                  className="w-full mt-4 px-4 py-3 text-base font-bold bg-[#CB2733] hover:bg-[#a81e29] text-white rounded-md shadow transition-colors duration-200 border-0"
                  style={{ backgroundColor: '#CB2733' }}
                >
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
