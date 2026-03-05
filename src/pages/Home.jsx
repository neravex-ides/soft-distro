import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import PageWrapper from '../components/layout/PageWrapper';
import ParticleBackground from '../components/3d/ParticleBackground';
import ScrollReveal from '../components/ui/ScrollReveal';

const services = [
  { title: "Enterprise Web", desc: "Scalable architectures built for millions.", id: "web" },
  { title: "AI Integration", desc: "Automate intelligence into your workflows.", id: "ai" },
  { title: "Cloud Native", desc: "AWS/GCP infrastructure deployments.", id: "cloud" },
  { title: "Mobile Apps", desc: "iOS and Android premium experiences.", id: "app" },
];

export default function Home() {
  return (
    <PageWrapper title="Global Tech Services" description="World-class enterprise digital transformation.">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden -mt-24">
        <ParticleBackground />
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
            className="text-6xl md:text-8xl font-display font-bold text-white mb-6 tracking-tight"
          >
            Engineer the <span className="text-gradient-accent">Future.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 1 }}
            className="text-lg md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto"
          >
            Silicon Valley-grade full-stack architecture, UI/UX, and cloud deployments for global enterprises.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
              Start a Project <FiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-6 container mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-16">Expertise.</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((srv, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1} width="100%">
              <Link to={`/services/${srv.id}`} className="group block p-10 glass rounded-2xl hover:border-brand-neon transition-colors relative overflow-hidden">
                <h3 className="text-3xl font-bold mb-4">{srv.title}</h3>
                <p className="text-gray-400 text-lg">{srv.desc}</p>
                <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all text-brand-neon text-3xl">
                  <FiArrowRight />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-brand-accent/10 border-y border-white/5">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            { label: "Projects Delivered", val: "500+" },
            { label: "Enterprise Clients", val: "50+" },
            { label: "Uptime SLA", val: "99.9%" },
            { label: "Global Reach", val: "Worldwide" }
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-4xl md:text-6xl font-bold text-white mb-2">{stat.val}</div>
              <div className="text-sm text-gray-400 tracking-widest uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}