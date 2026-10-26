'use client';

import { Suspense, useEffect, useRef } from 'react';
import usePhotos from '@/hooks/usePhotos';
import SectionBackgroundImage from '@/components/SectionBackgroundImage';
import InputSearch from '@/components/ui/input/search/InputSearch';
import CollectionsGallery from './components/CollectionsGallery';

const CollectionsContent = () => {
  const { photos, search, setSearch, query, handleSearch, loading, error } =
    usePhotos();

  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query) {
      galleryRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [query]);

  return (
    <main>
      <SectionBackgroundImage
        imageUrl="https://images.unsplash.com/photo-1609144883030-df8ce65ffb4e?q=80&w=1470&auto=format&fit=crop"
        title="Explore the Art of Photography"
        description="Discover a curated collection of moments, perspectives, and stories captured through the lens."
      >
        <InputSearch
          value={search}
          handleSearch={handleSearch}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search collections, photos..."
        />
      </SectionBackgroundImage>

      <div ref={galleryRef}>
        <CollectionsGallery photos={photos} loading={loading} error={error} />
      </div>
    </main>
  );
};

export default function CollectionsPage() {
  return (
    <Suspense fallback={<main className="min-h-screen bg-black" />}>
      <CollectionsContent />
    </Suspense>
  );
}
