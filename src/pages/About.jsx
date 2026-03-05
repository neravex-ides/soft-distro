import PageWrapper from '../components/layout/PageWrapper';
import ScrollReveal from '../components/ui/ScrollReveal';

export default function About() {
  return (
    <PageWrapper title="About Us" description="About SOFT-DISTRO.">
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-10 text-gradient-accent">Global Vision.</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-lg text-gray-300 leading-relaxed">
          <ScrollReveal>
            <p className="mb-6">SOFT-DISTRO is not just an agency; we are your engineering partner. Operating from the cloud, we serve global enterprises, startups, and institutions, delivering Silicon Valley-level architecture.</p>
            <p>Our team consists of senior full-stack architects, award-winning UI/UX directors, and production engineers obsessed with performance, scalability, and design perfection.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="glass p-10 rounded-3xl">
              <h3 className="text-2xl font-bold text-white mb-4">Our Core Values</h3>
              <ul className="space-y-4">
                <li><strong className="text-brand-neon">01.</strong> Code Quality as a Religion</li>
                <li><strong className="text-brand-neon">02.</strong> Pixel-Perfect Execution</li>
                <li><strong className="text-brand-neon">03.</strong> Transparent Communication</li>
                <li><strong className="text-brand-neon">04.</strong> Global Scalability</li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </PageWrapper>
  );
}