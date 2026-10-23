const Hero = () => {
  return (
    <section className="relative flex overflow-hidden bg-black px-6 pb-20 pt-32 text-white sm:pb-28">
      <Image
        src="https://images.unsplash.com/reserve/Lt0DwxdqRKSQkX7439ey_Chaz_fisheye-11.jpg?q=80&w=1470&auto=format&fit=crop"
        alt="Photographer working behind the camera"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-55"
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <h1 className="mt-6 max-w-5xl text-5xl font-medium sm:text-7xl lg:text-7xl">
          Photography with attention to what is already happening.
        </h1>
      </div>
    </section>
  );
};

export default Hero;
import Image from 'next/image';
