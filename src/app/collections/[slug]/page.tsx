import CollectionDetail from '../components/CollectionDetail';
import { notFound } from 'next/navigation';
import { collections } from '../../../data/collections';

type CollectionDetailPageProps = {
  params: Promise<{ slug: string }>;
};

const CollectionDetailPage = async ({ params }: CollectionDetailPageProps) => {
  const { slug } = await params;
  const collection = collections.find((item) => item.slug === slug);

  if (!collection) notFound();

  return <CollectionDetail collection={collection} />;
};

export function generateStaticParams() {
  return collections.map(({ slug }) => ({ slug }));
}

export default CollectionDetailPage;
