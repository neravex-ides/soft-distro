import PageWrapper from '../components/layout/PageWrapper';

export default function Blog() {
  return (
    <PageWrapper title="Engineering Blog" description="Tech insights from our architects.">
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-10">Engineering Blog.</h1>
        <p className="text-xl text-gray-400">Insights on scalable architecture, AI, and UI/UX.</p>
      </div>
    </PageWrapper>
  );
}