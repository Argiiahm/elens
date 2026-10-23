import SectionBackgroundImage from '@/components/SectionBackgroundImage';
import InputSearch from '@/components/ui/input/search/InputSearch';
import CollectionsGallery from './components/CollectionsGallery';

const CollectionsPage = () => {
  return (
    <main>
      <SectionBackgroundImage
        imageUrl="https://images.unsplash.com/photo-1609144883030-df8ce65ffb4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
        title="Explore the Art of Photography"
        description="Discover a curated collection of moments, perspectives, and stories captured through the lens."
      >
        <InputSearch type="text" placeholder="Search collections, photos..." />
      </SectionBackgroundImage>
      <CollectionsGallery />
    </main>
  );
};

export default CollectionsPage;
