import Image from 'next/image';
import Link from 'next/link';
import { TbArrowBarToRight } from 'react-icons/tb';

const HeroSection = () => {
  return (
    <section
      id="HeroBanner"
      className="relative min-h-[100vh] flex flex-col justify-between bg-black text-white pt-28 pb-2 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-full lg:w-3/5 h-full z-0 opacity-60 lg:opacity-75">
        <Image
          src="https://images.unsplash.com/photo-1660898944468-3823351d87bb?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
          alt="background-hero"
          fill
          priority
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex-grow flex items-center">
        <div className="max-w-2xl py-4">
          <h1 className="text-4xl sm:text-3xl lg:text-5xl font-medium mb-5 text-white leading-tight">
            Capturing Moments, Creating Timeless Stories
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-9">
            We capture life's most meaningful moments through timeless
            photography. From portraits and weddings to fashion and events,
            every frame tells a unique story filled with emotion, beauty, and
            authenticity.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/collections"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold rounded-full bg-transparent border border-gray-100 text-white hover:border-gray-700 hover:bg-white hover:text-black transition-all transform hover:-translate-y-0.5"
            >
              <span>Explore</span>
              <TbArrowBarToRight />
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent via-black/70 to-black z-10 pointer-events-none" />
    </section>
  );
};

export default HeroSection;
