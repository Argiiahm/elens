const CreativeVision = () => {
  return (
    <section className="bg-neutral-950 px-6 py-24 text-white sm:py-32">
      <div className="max-w-7xl mx-auto">
        <div>
          <h2 className="max-w-3xl text-4xl font-medium leading-tight sm:text-5xl">
            A clear plan leaves space for the good stuff to happen.
          </h2>

          <div className="mt-14 grid gap-8 border-t border-white/15 pt-8 sm:grid-cols-3">
            <div>
              <span className="text-sm text-neutral-500">01</span>
              <h3 className="mt-3 text-lg font-medium">Talk</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                We align on the brief, location, and what matters in the frame.
              </p>
            </div>
            <div>
              <span className="text-sm text-neutral-500">02</span>
              <h3 className="mt-3 text-lg font-medium">Shoot</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                You stay present. We direct only when the photograph needs it.
              </p>
            </div>
            <div>
              <span className="text-sm text-neutral-500">03</span>
              <h3 className="mt-3 text-lg font-medium">Deliver</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                Your final gallery is edited with the same mood from start to
                finish.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeVision;
