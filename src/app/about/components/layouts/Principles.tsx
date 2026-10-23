import FeaturedCard from '../../../../components/FeaturedCard';

const Features = [
  {
    number: '01',
    title: 'People first',
    description:
      'A good photograph begins with making the people in it comfortable.',
  },
  {
    number: '02',
    title: 'Less direction',
    description:
      'We guide when needed, then let the real interaction take over.',
  },
  {
    number: '03',
    title: 'Edit with restraint',
    description:
      'The final images stay true to the light, place, and people involved.',
  },
];

const Principles = () => {
  return (
    <section className="bg-black px-6 py-24 text-white sm:py-32">
      <FeaturedCard
        description="The work is thoughtful, not overworked."
        Features={Features}
      />
    </section>
  );
};

export default Principles;
