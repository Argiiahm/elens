import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from 'react-icons/fa6';

export const Menus = [
  { slug: 'home', name: 'Home', path: '/' },
  { slug: 'collections', name: 'Collections', path: '/collections' },
  {
    slug: 'web-services',
    name: 'Official Services',
    path: 'https://elunive.id',
  },
  { slug: 'about', name: 'About Elens', path: '/about' },
];

export const MedsosLists = [
  {
    slug: 'facebook',
    name: 'Facebook',
    path: 'https://www.facebook.com/',
    icon: <FaFacebook size={20} />,
  },
  {
    slug: 'youtube',
    name: 'Youtube',
    path: 'https://www.youtube.com/',
    icon: <FaYoutube size={20} />,
  },
  {
    slug: 'linkedin',
    name: 'Linkedin',
    path: 'https://www.linkedin.com/',
    icon: <FaLinkedin size={20} />,
  },
  {
    slug: 'instagram',
    name: 'Instagram',
    path: 'https://www.instagram.com/',
    icon: <FaInstagram size={20} />,
  },
];
