import FeaturedCard from '../../../components/FeaturedCard';

const projects = [
  {
    number: '01',
    title: 'Portraits',
    description:
      'Personal sessions with room for character, movement, and style.',
  },
  {
    number: '02',
    title: 'Weddings',
    description: 'The ceremony, the people, and the moments in between.',
  },
  {
    number: '03',
    title: 'Editorial',
    description: 'Visual stories for people, brands, and printed matter.',
  },
];

const PhotoJournal = () => {
  return (
    <section className="bg-black px-6 py-24 text-white sm:py-32">
      <FeaturedCard
        title="Different stories. One considered point of view."
        Features={projects}
      />
    </section>
  );
};

export default PhotoJournal;
