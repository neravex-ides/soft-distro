import { useParams } from 'react-router-dom';
import PageWrapper from '../components/layout/PageWrapper';

export default function BlogSingle() {
  const { id } = useParams();
  return (
    <PageWrapper title="Article" description="Read our latest insights.">
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-5xl font-display font-bold mb-10">Article: {id}</h1>
        <p className="text-xl text-gray-400">Full article content goes here.</p>
      </div>
    </PageWrapper>
  );
}