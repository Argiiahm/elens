type Feature = {
  number: string;
  title: string;
  description: string;
};

type PropsTypes = {
  title?: string;
  description?: string;
  Features: Feature[];
};

const FeaturedCard = ({ title, description, Features }: PropsTypes) => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="max-w-2xl">
        <p className="text-sm font-medium tracking-[0.2em] text-neutral-500 uppercase">
          {title}
        </p>
        <h2 className="mt-5 text-4xl font-medium leading-tight sm:text-5xl">
          {description}
        </h2>
      </div>

      <div className="mt-16 border-t border-white/15">
        {Features.map((feature) => (
          <article
            key={feature.number}
            className="grid gap-5 border-b border-white/15 py-7 sm:grid-cols-[5rem_1fr_1fr] sm:items-baseline sm:gap-8"
          >
            <span className="text-sm text-neutral-500">{feature.number}</span>
            <h3 className="text-2xl font-medium">{feature.title}</h3>
            <p className="text-base leading-relaxed text-neutral-400">
              {feature.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCard;
