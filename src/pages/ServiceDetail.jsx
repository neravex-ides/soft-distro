import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import PageWrapper from '../components/layout/PageWrapper';
import ScrollReveal from '../components/ui/ScrollReveal';

export default function ServiceDetail() {
  const { id } = useParams();

  return (
    <PageWrapper title="Service Details" description="Enterprise digital solutions.">
      <div className="container mx-auto px-6 py-20">
        <Link to="/services" className="inline-flex items-center gap-2 text-gray-400 hover:text-brand-neon mb-10 transition">
          <FiArrowLeft /> Back to Services
        </Link>
        <ScrollReveal>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 uppercase text-gradient-accent">
            {id} Development
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mb-12">
            We provide world-class, scalable, and highly secure {id} solutions tailored for global enterprises. Our architectures are built to handle millions of requests with zero downtime.
          </p>
          <div className="glass p-10 rounded-3xl max-w-4xl">
            <h3 className="text-2xl font-bold mb-6">Our Approach</h3>
            <ul className="space-y-4 text-gray-400">
              <li>- Deep Architecture Planning</li>
              <li>- Silicon Valley Standard Code Quality</li>
              <li>- CI/CD Pipeline Integration</li>
              <li>- 24/7 Enterprise Support</li>
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </PageWrapper>
  );
}