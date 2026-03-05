import PageWrapper from '../components/layout/PageWrapper';

export default function Pricing() {
  return (
    <PageWrapper title="Pricing" description="Enterprise pricing and retainers.">
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-10">Investment.</h1>
        <p className="text-xl text-gray-400">We work on custom enterprise retainers. Contact us for a technical audit.</p>
      </div>
    </PageWrapper>
  );
}