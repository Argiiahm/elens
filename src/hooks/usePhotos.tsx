'use client';

import { getPhotos } from '@/app/services/photos.service';
import { Photos } from '@/types/types';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

const usePhotos = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || '';
  const [search, setSearch] = useState(query);

  const [photos, setPhotos] = useState<Photos[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchPhotos = useCallback(async () => {
    try {
      setLoading(true);
      const response = await getPhotos({
        query: query || 'nature',
      });
      setPhotos(response);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to fetch');
    } finally {
      setLoading(false);
    }
  }, [query]);

  useEffect(() => {
    fetchPhotos();
  }, [fetchPhotos]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = search.trim();
    const params = new URLSearchParams();

    if (value) {
      params.set('query', value);
    } else {
      params.delete('query');
    }

    params.set('page', '1');
    router.push(`${pathname}?${params.toString()}`);
  };

  return {
    photos,
    search,
    setSearch,
    handleSearch,
    query,
    loading,
    error,
  };
};

export default usePhotos;
