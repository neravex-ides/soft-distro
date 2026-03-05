import { Link } from 'react-router-dom';
import PageWrapper from '../components/layout/PageWrapper';
import ScrollReveal from '../components/ui/ScrollReveal';

const allServices = [
  { id: 'web', title: 'Web Development', desc: 'React, Next.js, and Node.js enterprise architectures.' },
  { id: 'app', title: 'App Development', desc: 'React Native & Flutter premium mobile experiences.' },
  { id: 'uiux', title: 'UI/UX Design', desc: 'Awwwards-level interface design and user research.' },
  { id: 'branding', title: 'Branding', desc: 'Identity systems for billion-dollar visions.' },
  { id: 'seo', title: 'SEO & Marketing', desc: 'Data-driven global growth strategies.' },
  { id: 'cloud', title: 'Cloud Solutions', desc: 'AWS/GCP/Azure deployments & DevOps.' },
  { id: 'ai', title: 'AI Integration', desc: 'LLMs, Machine Learning, and automation.' },
  { id: 'enterprise', title: 'Enterprise Software', desc: 'Custom ERP and CRM systems.' },
];

export default function Services() {
  return (
    <PageWrapper title="Services" description="Our technical services.">
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-20">Capabilities.</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((srv, idx) => (
            <ScrollReveal key={srv.id} delay={idx * 0.1}>
              <Link to={`/services/${srv.id}`} className="block h-full glass p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-4">{srv.title}</h3>
                <p className="text-gray-400">{srv.desc}</p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}