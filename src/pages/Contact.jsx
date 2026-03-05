import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import PageWrapper from '../components/layout/PageWrapper';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', budget: '', message: ''
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    // Replace with your deployed Google Apps Script URL
    const GAS_URL = "https://script.google.com/macros/s/AKfycby4Ik97s6ihzjlgucdRlMy1pTqGw-CUcJfmSkoEY39aK86w_Wu5aCV3SKzI7qTg6yWy4g/exec"; 

    try {
      await fetch(GAS_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', service: '', budget: '', message: '' });
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <PageWrapper title="Contact Us" description="Get in touch with SOFT-DISTRO.">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Info Side */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Let's Build.</h1>
            <p className="text-xl text-gray-400 mb-12">Partner with us for your next digital transformation. We operate globally.</p>
            
            <div className="space-y-8">
              <a href="mailto:officialsoftdistro@gmail.com" className="flex items-center gap-6 text-xl hover:text-brand-neon transition">
                <div className="p-4 glass rounded-full"><FaEnvelope /></div>
                officialsoftdistro@gmail.com
              </a>
              <div className="flex items-center gap-6 text-xl">
                <div className="p-4 glass rounded-full"><FaPhone /></div>
                +91 7232806098
              </div>
              <a href="https://wa.me/7232806098" target="_blank" rel="noreferrer" className="flex items-center gap-6 text-xl hover:text-green-400 transition">
                <div className="p-4 glass rounded-full text-green-400"><FaWhatsapp /></div>
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <form onSubmit={handleSubmit} className="glass p-8 md:p-12 rounded-3xl space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Full Name</label>
                  <input required name="name" value={formData.name} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-neon text-white" />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-neon text-white" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Phone</label>
                  <input name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-neon text-white" />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Service Needed</label>
                  <select name="service" value={formData.service} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-neon text-white appearance-none">
                    <option value="">Select Service</option>
                    <option value="web">Web Development</option>
                    <option value="app">App Development</option>
                    <option value="ai">AI Integration</option>
                    <option value="consulting">Consulting</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Message</label>
                <textarea required rows="4" name="message" value={formData.message} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-neon text-white"></textarea>
              </div>

              <button disabled={status === 'loading'} className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-brand-neon hover:text-white transition-all disabled:opacity-50">
                {status === 'loading' ? 'Sending...' : 'Submit Inquiry'}
              </button>
              {status === 'success' && <p className="text-green-400 text-center mt-4">Message sent successfully!</p>}
              {status === 'error' && <p className="text-red-400 text-center mt-4">An error occurred. Please try again.</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
}