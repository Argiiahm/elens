import { Photos } from '@/types/types';
import PhotoCard from './PhotoCard';

type CollectionsPropsType = {
  photos: Photos[];
  loading: boolean;
  error: string;
};

const CollectionsGallery = ({
  photos,
  loading,
  error,
}: CollectionsPropsType) => {
  return (
    <section className="bg-black px-6 py-24 text-white sm:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="mt-4 text-4xl font-medium sm:text-5xl">
              Recent frames
            </h1>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-neutral-400">
            A small selection of photographs from recent sessions and personal
            work.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {error && <div className="text-red-500">{error}</div>}
          {loading
            ? 'please wait...'
            : photos.length > 0
              ? photos.map((photo) => <PhotoCard key={photo.id} {...photo} />)
              : 'Collections not Found'}
        </div>
      </div>
    </section>
  );
};

export default CollectionsGallery;
