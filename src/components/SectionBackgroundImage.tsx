type SectionBackgroundImageProps = {
  imageUrl: string;
  title: string;
  description: string;
  children?: React.ReactNode;
};

const SectionBackgroundImage = ({
  imageUrl,
  title,
  description,
  children,
}: SectionBackgroundImageProps) => {
  return (
    <section className="relative min-h-[100vh] flex flex-col justify-between bg-black text-white pt-28 pb-2 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-black via-black/60 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-full h-full z-0 opacity-60 lg:opacity-75">
        <Image
          src={imageUrl}
          alt="background-hero"
          fill
          sizes="100vw"
          className="object-cover object-right"
        />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex-grow flex items-center">
        <div className="max-w-2xl py-4">
          <h1 className="text-4xl sm:text-3xl lg:text-5xl font-medium mb-5 text-white leading-tight">
            {title}
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-9">
            {description}
          </p>
          <div>{children}</div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent via-black/70 to-black z-10 pointer-events-none" />
    </section>
  );
};

export default SectionBackgroundImage;
import Image from 'next/image';
