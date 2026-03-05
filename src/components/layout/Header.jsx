import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Header() {
  const location = useLocation();
  const logoSrc = `${import.meta.env.BASE_URL}soft-distro.png`;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-4xl">
      <nav className="bg-black/50 backdrop-blur-2xl border border-white/10 rounded-full px-8 py-4 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 group-hover:border-brand-neon transition-all overflow-hidden">
            <img src={logoSrc} alt="Logo" className="w-7 h-7 object-contain" />
          </div>
          <span className="text-sm font-black tracking-tighter text-white uppercase">SOFT-DISTRO</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:text-brand-neon ${
                location.pathname === link.path ? 'text-brand-neon' : 'text-zinc-500'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <Link 
          to="/contact" 
          className="hidden md:block bg-white text-black text-[10px] font-black uppercase tracking-widest px-6 py-2.5 rounded-full hover:scale-105 transition-transform"
        >
          Project Sync
        </Link>
      </nav>
    </header>
  );
}