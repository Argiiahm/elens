import CreativeVision from '@/app/(home)/components/CreativeVision';
import HeroSection from '@/app/(home)/components/Hero';
import PhotoJournal from '@/app/(home)/components/PhotoJournal';
import FeatureWork from './components/FeatureWork';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeatureWork />
      <PhotoJournal />
      <CreativeVision />
    </main>
  );
}
