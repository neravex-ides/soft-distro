import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenu(false);
  }, [location]);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4' : 'bg-transparent py-6'}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <img src={`${import.meta.env.BASE_URL}soft-distro.png`} alt="Soft-Distro Logo" className="w-8 h-8 object-contain" />
          <span className="font-display font-bold text-xl tracking-wider">SOFT-DISTRO</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className="text-sm font-medium hover:text-brand-neon transition-colors">
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="px-6 py-2 bg-white text-black rounded-full text-sm font-bold hover:bg-brand-neon hover:text-white transition-all">
            Get Started
          </Link>
        </div>

        <button className="md:hidden text-2xl" onClick={() => setMobileMenu(!mobileMenu)}>
          {mobileMenu ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {mobileMenu && (
        <div className="absolute top-full left-0 w-full glass flex flex-col items-center py-6 gap-6 md:hidden">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className="text-lg font-medium">
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </motion.nav>
  );
}