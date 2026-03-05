import { motion } from 'framer-motion';
import { FiCheck, FiZap, FiTarget, FiShield } from 'react-icons/fi';
import PageWrapper from '../components/layout/PageWrapper';

const PriceCard = ({ title, price, features, icon, delay, highlight }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className={`relative p-10 rounded-[3.5rem] border ${highlight ? 'bg-white text-black border-white shadow-[0_30px_60px_rgba(255,255,255,0.1)]' : 'bg-[#111] text-white border-white/10 shadow-2xl'} flex flex-col justify-between h-full group hover:-translate-y-4 transition-all duration-500`}
  >
    <div>
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-10 text-3xl ${highlight ? 'bg-black text-white' : 'bg-white/5 text-brand-neon'}`}>
        {icon}
      </div>
      <h3 className="text-sm font-black uppercase tracking-[0.4em] mb-4 opacity-60">{title}</h3>
      <div className="flex items-baseline gap-2 mb-10">
        <span className="text-6xl font-black tracking-tighter">{price}</span>
        <span className="text-xs font-bold opacity-40 uppercase">/ Project</span>
      </div>
      <div className="space-y-4 mb-12">
        {features.map((f, i) => (
          <div key={i} className="flex items-center gap-3">
            <FiCheck className={highlight ? 'text-black' : 'text-brand-neon'} />
            <span className="text-sm font-medium opacity-80">{f}</span>
          </div>
        ))}
      </div>
    </div>
    <button className={`w-full py-6 rounded-full font-black uppercase tracking-widest text-xs transition-all ${highlight ? 'bg-black text-white hover:scale-105' : 'bg-white/5 border border-white/10 hover:bg-white hover:text-black'}`}>
      Acquire Plan
    </button>
  </motion.div>
);

export default function Pricing() {
  return (
    <PageWrapper title="Investment | The Nirmal Standard">
      <div className="bg-[#050505] min-h-screen pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-white mb-6 italic">INVESTMENT.</h1>
            <p className="text-zinc-500 text-xl md:text-2xl font-light">Choose your level of technological dominance.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <PriceCard 
              title="Standard" price="$2k" icon={<FiTarget />} delay={0.1}
              features={["Custom Web Architecture", "iOS Responsive Design", "SEO Synchronization", "4 Weeks Timeline"]}
            />
            <PriceCard 
              title="Pro" price="$5k" icon={<FiZap />} delay={0.2} highlight
              features={["Enterprise Ecosystem", "Full AI Integration", "Neural Engine Logic", "Priority 24/7 Support", "Performance Mastery"]}
            />
            <PriceCard 
              title="Titan" price="$10k+" icon={<FiShield />} delay={0.3}
              features={["Global Infrastructure", "Hardware Optimization", "Dedicated Architect", "Infinite Scalability", "Lifetime Security"]}
            />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}