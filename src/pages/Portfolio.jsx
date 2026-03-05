import PageWrapper from '../components/layout/PageWrapper';
import ScrollReveal from '../components/ui/ScrollReveal';

export default function Portfolio() {
  return (
    <PageWrapper title="Portfolio" description="Our global enterprise projects.">
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-16">Selected Work.</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[1, 2, 3, 4].map((item) => (
            <ScrollReveal key={item} delay={item * 0.1}>
              <div className="group relative overflow-hidden rounded-3xl glass aspect-video flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                <h3 className="relative z-20 text-3xl font-bold translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  Global Project {item}
                </h3>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}