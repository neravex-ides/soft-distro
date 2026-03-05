import PageWrapper from '../components/layout/PageWrapper';

export default function PrivacyPolicy() {
  return (
    <PageWrapper title="Privacy Policy" description="SOFT-DISTRO Privacy Policy.">
      <div className="container mx-auto px-6 py-20 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-10">Privacy Policy</h1>
        <div className="prose prose-invert text-gray-300 space-y-6">
          <p>At SOFT-DISTRO, we take your privacy seriously. This policy describes how we collect and use your data.</p>
          <h3 className="text-xl font-bold text-white mt-8">Data Collection</h3>
          <p>We only collect data necessary to provide our digital transformation services.</p>
        </div>
      </div>
    </PageWrapper>
  );
}