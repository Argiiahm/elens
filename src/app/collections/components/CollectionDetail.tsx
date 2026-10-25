'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BiArrowBack } from 'react-icons/bi';
import type { Photos } from '@/types/types';

type CollectionDetailProps = {
  photo: Photos;
};

const CollectionDetail = ({ photo }: CollectionDetailProps) => {
  const title = photo.alt_description || 'Untitled photograph';

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
              {title}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-400 sm:text-lg">
              {title}
            </p>
          </div>
        </header>

        <div className="relative mt-10 aspect-[4/5] overflow-hidden bg-neutral-900 lg:aspect-[16/9]">
          <Image
            src={photo.urls.regular}
            alt={title}
            fill
            priority
            sizes="(min-width: 1280px) 1280px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </main>
  );
};

export default CollectionDetail;
