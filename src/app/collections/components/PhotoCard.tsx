import { Photos } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';

const PhotoCard = ({ slug, alt_description, urls }: Photos) => {
  return (
    <Link
      href={`/collections/${slug}`}
      className="group block overflow-hidden bg-neutral-900"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-neutral-800">
        <Image
          src={urls.regular}
          alt={alt_description}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex items-center justify-between gap-4 px-4 py-5 sm:px-5">
        <h2 className="text-lg font-medium text-white">Elens Studio</h2>
        <p className="text-xs tracking-[0.16em] text-neutral-500 uppercase">
          elunive
        </p>
      </div>
    </Link>
  );
};

export default PhotoCard;
