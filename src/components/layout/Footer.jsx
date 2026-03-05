import { Link } from 'react-router-dom';
import { FaWhatsapp, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

export default function Footer() {
  // Yeh variable automatically sahi path (local vs github) pakad lega
  const logoPath = `${import.meta.env.BASE_URL}soft-distro.png`;

  return (
    <footer className="border-t border-white/10 bg-brand-dark pt-20 pb-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <Link to="/" className="flex items-center gap-3 mb-6">
            <img 
              src={logoPath} 
              alt="Soft-Distro Logo" 
              className="w-10 h-10 object-contain" // Size thodi badhai hai footer ke hisab se
              onError={(e) => {
                // Agar phir bhi load na ho, toh console mein error dikhaye
                console.error("Footer Logo failed to load at:", logoPath);
              }} 
            />
            <span className="font-display font-bold text-xl tracking-tight text-white">SOFT-DISTRO</span>
          </Link>
          <p className="text-gray-400 text-sm mb-6 leading-relaxed">
            Building world-class digital experiences for enterprise leaders and global innovators.
          </p>
          <div className="flex gap-4 text-xl">
            <a href="https://wa.me/917232806098" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-green-500 transition-all"><FaWhatsapp /></a>
            <a href="#" className="text-gray-400 hover:text-blue-600 transition-all"><FaLinkedin /></a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-all"><FaTwitter /></a>
            <a href="https://github.com/neravex-ides" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-all"><FaGithub /></a>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-white uppercase tracking-wider text-xs">Company</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link to="/about" className="hover:text-brand-neon transition">About Us</Link></li>
            <li><Link to="/careers" className="hover:text-brand-neon transition">Careers</Link></li>
            <li><Link to="/case-studies" className="hover:text-brand-neon transition">Case Studies</Link></li>
            <li><Link to="/blog" className="hover:text-brand-neon transition">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-white uppercase tracking-wider text-xs">Services</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link to="/services" className="hover:text-brand-neon transition">Web Development</Link></li>
            <li><Link to="/services" className="hover:text-brand-neon transition">App Development</Link></li>
            <li><Link to="/services" className="hover:text-brand-neon transition">AI Integration</Link></li>
            <li><Link to="/services" className="hover:text-brand-neon transition">Cloud Solutions</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-white uppercase tracking-wider text-xs">Contact</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="break-all">Email: <a href="mailto:officialsoftdistro@gmail.com" className="hover:text-white transition">officialsoftdistro@gmail.com</a></li>
            <li>Mobile: <a href="tel:+917232806098" className="hover:text-white transition">+91 7232806098</a></li>
            <li><Link to="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-white transition">Terms & Conditions</Link></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-white/5 text-center text-xs text-gray-600">
        &copy; {new Date().getFullYear()} SOFT-DISTRO. Crafted with passion by Neravex-IDE.
      </div>
    </footer>
  );
}