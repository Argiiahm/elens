import Image from 'next/image';
import Link from 'next/link';
import { BiArrowBack } from 'react-icons/bi';
import type { Collection } from '../../../data/collections';

type CollectionDetailProps = {
  collection: Collection;
};

const CollectionDetail = ({ collection }: CollectionDetailProps) => {
  return (
    <main className="bg-black px-6 pb-24 pt-32 text-white sm:pb-32">
      <div className="max-w-7xl mx-auto">
        <Link
          href="/collections"
          className="flex items-center gap-2 text-neutral-400 transition-colors hover:text-white"
        >
          <BiArrowBack />
          <span>Back</span>
        </Link>

        <header className="mt-16 grid gap-8 border-b border-white/15 pb-14">
          <div>
            <h1 className="text-5xl font-medium leading-tight sm:text-7xl">
              {collection.title}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-400 sm:text-lg">
              {collection.description}
            </p>
          </div>
        </header>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {collection.photos.map((photo, index) => (
            <div
              key={photo}
              className={`relative ${index === 0 ? 'aspect-[16/9] lg:col-span-2' : 'aspect-[4/5]'}`}
            >
              <Image
                src={photo}
                alt={`${collection.title}`}
                fill
                priority={index === 0}
                sizes={
                  index === 0 ? '100vw' : '(min-width: 1024px) 50vw, 100vw'
                }
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default CollectionDetail;
