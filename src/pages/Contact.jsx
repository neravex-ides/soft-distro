import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaPhone, FaArrowRight, FaWifi, FaBatteryFull, FaBluetooth } from 'react-icons/fa';
import PageWrapper from '../components/layout/PageWrapper';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', service: '', message: ''
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    const GAS_URL = "https://script.google.com/macros/s/AKfycby4Ik97s6ihzjlgucdRlMy1pTqGw-CUcJfmSkoEY39aK86w_Wu5aCV3SKzI7qTg6yWy4g/exec"; 

    try {
      await fetch(GAS_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      setStatus('success');
      setFormData({ name: '', email: '', service: '', message: '' });
    } catch (err) {
      setStatus('error');
    }
  };

  const logoSrc = `${import.meta.env.BASE_URL}soft-distro.png`;

  return (
    <PageWrapper title="Contact | The Nirmal Chahil Studio" description="High-end synchronization hub.">
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center py-20 px-6">
        
        {/* Main Massive Container */}
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden rounded-[4rem] shadow-[0_50px_100px_rgba(0,0,0,0.9)] border border-white/5 bg-[#111]">
          
          {/* --- LEFT SIDE: THE REALISTIC iOS HARDWARE MOCKUP --- */}
          <div className="lg:col-span-5 bg-black p-12 md:p-20 flex flex-col items-center justify-center relative border-r border-white/5 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,242,255,0.05),transparent_70%)]" />
            
            {/* The iPhone 18 Pro Frame */}
            <motion.div 
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-[320px] h-[660px] bg-[#050505] rounded-[3.5rem] border-[10px] border-[#222] shadow-[0_0_0_2px_#333,0_40px_80px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden"
            >
              {/* Dynamic Island */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-50 flex items-center justify-center" />
              
              {/* iOS Status Bar */}
              <div className="flex justify-between px-8 pt-7 text-[10px] font-black text-white/40 z-40">
                <span>9:41</span>
                <div className="flex gap-1.5 items-center">
                  <FaWifi /> <FaBluetooth /> <FaBatteryFull className="text-sm" />
                </div>
              </div>

              {/* Screen Content */}
              <div className="relative z-10 p-8 pt-12 flex flex-col h-full">
                <div className="mb-10">
                  <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                    <img src={logoSrc} alt="Logo" className="w-10 h-10 object-contain" />
                  </div>
                  <h2 className="text-3xl font-serif italic text-white leading-tight">
                    Intelligence <br /> <span className="text-brand-neon">Architected.</span>
                  </h2>
                </div>

                {/* App-like Contact Cards */}
                <div className="space-y-4">
                  {[
                    { label: "Direct Sync", val: "WhatsApp", icon: <FaWhatsapp className="text-green-500" /> },
                    { label: "Official Line", val: "Email Source", icon: <FaEnvelope className="text-blue-500" /> },
                    { label: "Voice Secure", val: "+91 7232806098", icon: <FaPhone className="text-brand-neon" /> }
                  ].map((item, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ x: 5 }}
                      className="p-4 bg-white/5 border border-white/5 rounded-[1.5rem] flex items-center justify-between group cursor-pointer"
                    >
                      <div>
                        <p className="text-[8px] font-black tracking-widest text-zinc-600 uppercase mb-1">{item.label}</p>
                        <p className="text-xs font-bold text-white/90">{item.val}</p>
                      </div>
                      <div className="text-lg opacity-40 group-hover:opacity-100 transition-opacity">{item.icon}</div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-auto pb-6 text-center">
                   <p className="text-[10px] font-black tracking-[0.4em] text-zinc-700 uppercase">Designed by Nirmal Chahil</p>
                </div>
              </div>

              {/* Home Indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-white/20 rounded-full" />
            </motion.div>
          </div>

          {/* --- RIGHT SIDE: THE 3D COLORFUL FORM (The "Raised" Card) --- */}
          <div className="lg:col-span-7 bg-[#0d0d0d] p-8 md:p-16 flex flex-col justify-center items-center relative">
            
            {/* The Raised Colorful Card */}
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="w-full max-w-2xl bg-[#fcece3] rounded-[4rem] p-10 md:p-16 shadow-[20px_40px_80px_rgba(0,0,0,0.6),-10px_-10px_30px_rgba(255,255,255,0.02)] relative z-20 border-t border-white/20"
            >
              <div className="mb-12 text-center">
                <span className="text-[10px] font-black tracking-[0.5em] text-zinc-500 uppercase block mb-4">Secure Mission Briefing</span>
                <h3 className="text-5xl font-black tracking-tighter text-black leading-none">Initialize <br /> Connection.</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-4">Full Identity</label>
                    <input required name="name" placeholder="John Doe" value={formData.name} onChange={handleChange} className="ios-input" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-4">Access Email</label>
                    <input required type="email" name="email" placeholder="john@enterprise.com" value={formData.email} onChange={handleChange} className="ios-input" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-4">Service Vector</label>
                  <select name="service" value={formData.service} onChange={handleChange} className="ios-input appearance-none text-zinc-500">
                    <option value="">Select Domain</option>
                    <option value="web">Enterprise Web</option>
                    <option value="app">iOS Architecture</option>
                    <option value="ai">Neural Sync</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest ml-4">Mission Goals</label>
                  <textarea required rows="3" name="message" placeholder="A brief vision statement..." value={formData.message} onChange={handleChange} className="ios-input resize-none" />
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={status === 'loading'} 
                  className="w-full bg-black text-white py-7 rounded-[2.5rem] flex items-center justify-center gap-4 text-sm font-black uppercase tracking-[0.4em] shadow-[0_30px_60px_rgba(0,0,0,0.4)] hover:shadow-brand-neon/20 transition-all group"
                >
                  {status === 'loading' ? 'Encrypting...' : (
                    <>Submit Mission <FaArrowRight className="group-hover:translate-x-2 transition-transform text-brand-neon" /></>
                  )}
                </motion.button>

                {status === 'success' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 bg-green-500/10 border border-green-500/20 rounded-2xl text-green-700 text-center font-bold text-xs">
                    Handshake Successful. Personnel will connect soon.
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Decorative 3D elements behind the card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[80%] bg-brand-neon/5 blur-[120px] rounded-full -z-10" />
          </div>

        </div>
      </div>
    </PageWrapper>
  );
}