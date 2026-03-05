import { Link } from 'react-router-dom';
import { FaWhatsapp, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-dark pt-20 pb-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <Link to="/" className="flex items-center gap-3 mb-6">
            <img src="/soft-distro.png" alt="Soft-Distro" className="w-8 h-8" />
            <span className="font-display font-bold text-xl">SOFT-DISTRO</span>
          </Link>
          <p className="text-gray-400 text-sm mb-6">Building world-class digital experiences for enterprise leaders and global innovators.</p>
          <div className="flex gap-4 text-xl">
            <a href="https://wa.me/7232806098" target="_blank" rel="noreferrer" className="hover:text-brand-neon transition"><FaWhatsapp /></a>
            <a href="#" className="hover:text-brand-neon transition"><FaLinkedin /></a>
            <a href="#" className="hover:text-brand-neon transition"><FaTwitter /></a>
            <a href="#" className="hover:text-brand-neon transition"><FaGithub /></a>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-white">Company</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link to="/careers" className="hover:text-white transition">Careers</Link></li>
            <li><Link to="/case-studies" className="hover:text-white transition">Case Studies</Link></li>
            <li><Link to="/blog" className="hover:text-white transition">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-white">Services</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link to="/services/web" className="hover:text-white transition">Web Development</Link></li>
            <li><Link to="/services/app" className="hover:text-white transition">App Development</Link></li>
            <li><Link to="/services/ai" className="hover:text-white transition">AI Integration</Link></li>
            <li><Link to="/services/cloud" className="hover:text-white transition">Cloud Solutions</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-white">Contact</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>Email: <a href="mailto:officialsoftdistro@gmail.com" className="hover:text-white">officialsoftdistro@gmail.com</a></li>
            <li>Mobile: +91 7232806098</li>
            <li><Link to="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-white transition">Terms & Conditions</Link></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} SOFT-DISTRO. All rights reserved.
      </div>
    </footer>
  );
}