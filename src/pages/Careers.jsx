import PageWrapper from '../components/layout/PageWrapper';

export default function Careers() {
  return (
    <PageWrapper title="Careers" description="Join our global engineering team.">
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-10">Join Us.</h1>
        <p className="text-xl text-gray-400">We are always looking for world-class architects and designers.</p>
      </div>
    </PageWrapper>
  );
}