import PageWrapper from '../components/layout/PageWrapper';

export default function CaseStudies() {
  return (
    <PageWrapper title="Case Studies" description="How we scale businesses.">
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-10">Case Studies.</h1>
        <p className="text-xl text-gray-400">Detailed breakdowns of our enterprise architectures coming soon.</p>
      </div>
    </PageWrapper>
  );
}