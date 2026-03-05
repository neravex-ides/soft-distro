import PageWrapper from '../components/layout/PageWrapper';

export default function Terms() {
  return (
    <PageWrapper title="Terms & Conditions" description="SOFT-DISTRO Terms.">
      <div className="container mx-auto px-6 py-20 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-10">Terms & Conditions</h1>
        <div className="prose prose-invert text-gray-300 space-y-6">
          <p>By using SOFT-DISTRO services, you agree to our enterprise terms of service.</p>
          <h3 className="text-xl font-bold text-white mt-8">Service Level Agreements</h3>
          <p>All enterprise projects are governed by our custom SLA contracts.</p>
        </div>
      </div>
    </PageWrapper>
  );
}