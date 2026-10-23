import Image from 'next/image';

const Story = () => {
  return (
    <section className="bg-neutral-950 px-6 py-24 text-white sm:py-32">
      <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-24">
        <Image
          src="https://images.unsplash.com/photo-1604948706959-6cb8cb979e7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
          loading="lazy"
          width={500}
          height={500}
          alt="Elens photography detail"
          className="h-auto w-full max-w-sm"
        />
        <div className="max-w-3xl">
          <p className="text-3xl font-medium leading-snug sm:text-4xl">
            Elens makes photographs that feel like the day did: close, lived-in,
            and worth revisiting.
          </p>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg">
            We work across portraits, celebrations, and editorial projects. The
            approach stays simple listen first, keep the direction clear, and
            leave room for the unscripted moments that cannot be planned.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Story;
