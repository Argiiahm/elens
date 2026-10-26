import CreativeVision from '@/app/(home)/components/CreativeVision';
import HeroSection from '@/app/(home)/components/Hero';
import PhotoJournal from '@/app/(home)/components/PhotoJournal';
import FeatureWork from './components/FeatureWork';

const Home = () => {
  return (
    <main>
      <HeroSection />
      <FeatureWork />
      <PhotoJournal />
      <CreativeVision />
    </main>
  );
};

export default Home;
