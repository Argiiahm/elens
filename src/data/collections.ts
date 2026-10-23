export type Collection = {
  slug: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  photos: string[];
};

export const collections: Collection[] = [
  {
    slug: 'after-the-rain',
    title: 'After the Rain',
    category: 'Street',
    description: 'A walk through the city after an afternoon downpour.',
    imageUrl:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=900&auto=format&fit=crop',
    photos: [
      'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=1400&auto=format&fit=crop',
    ],
  },
  {
    slug: 'the-ceremony',
    title: 'The Ceremony',
    category: 'Wedding',
    description: 'A quiet record of the vows, guests, and late-night dancing.',
    imageUrl:
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=900&auto=format&fit=crop',
    photos: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1400&auto=format&fit=crop',
    ],
  },
  {
    slug: 'soft-focus',
    title: 'Soft Focus',
    category: 'Portrait',
    description: 'Portraits made with natural light and an unhurried pace.',
    imageUrl:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=900&auto=format&fit=crop',
    photos: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1400&auto=format&fit=crop',
    ],
  },
  {
    slug: 'sunday-table',
    title: 'Sunday Table',
    category: 'Lifestyle',
    description:
      'Slow mornings, shared food, and the details left on the table.',
    imageUrl:
      'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?q=80&w=900&auto=format&fit=crop',
    photos: [
      'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1400&auto=format&fit=crop',
    ],
  },
  {
    slug: 'in-motion',
    title: 'In Motion',
    category: 'Editorial',
    description: 'Movement, texture, and a wardrobe built for the frame.',
    imageUrl:
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=900&auto=format&fit=crop',
    photos: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1400&auto=format&fit=crop',
    ],
  },
  {
    slug: 'quiet-hours',
    title: 'Quiet Hours',
    category: 'Travel',
    description: 'A short study of open roads, changing weather, and distance.',
    imageUrl:
      'https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=900&auto=format&fit=crop',
    photos: [
      'https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1400&auto=format&fit=crop',
    ],
  },
];
