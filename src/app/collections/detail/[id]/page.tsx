'use client';

import CollectionDetail from '../../components/CollectionDetail';
import { notFound, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getPhoto } from '@/app/services/photos.service';
import type { Photos } from '@/types/types';

const CollectionDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [photo, setPhoto] = useState<Photos | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        setLoading(true);
        const data = await getPhoto(id);
        setPhoto(data);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : 'Failed to load photo'
        );
      } finally {
        setLoading(false);
      }
    };

    fetchPhoto();
  }, [id]);

  if (loading) {
    return (
      <main className="flex items-center justify-center h-screen bg-black text-white">
        Loading...
      </main>
    );
  }

  if (error || !photo) {
    return notFound();
  }

  return <CollectionDetail photo={photo} />;
};

export default CollectionDetailPage;
