import { MedsosLists, Menus } from '@/config/Menu';
import Navlink from '../Navlink';
import Link from 'next/link';
import Image from 'next/image';
import { BiX } from 'react-icons/bi';

type PropsType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileNav = ({ isOpen, setIsOpen }: PropsType) => {
  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 right-0 p-8 flex flex-col gap-6 bg-black/50 backdrop-blur-md shadow-2xl lg:hidden">
          <div className="flex justify-between items-center text-white">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/images/elunive-logo-white.png"
                alt="Elunive Logo"
                loading="lazy"
                width={40}
                height={40}
              />
              <span className="text-2xl text-white font-medium">elens</span>
            </Link>
            <button onClick={() => setIsOpen(false)}>
              <BiX size={30} />
            </button>
          </div>
          <ul className="flex flex-col gap-2">
            {Menus.map((menu) => (
              <li key={menu.slug}>
                <Navlink href={menu.path}>{menu.name}</Navlink>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-center gap-4 text-base transition-colors text-white">
            {MedsosLists.map((medsos) => (
              <a
                key={medsos.slug}
                href={medsos.path}
                className="transition-all hover:scale-110"
                aria-label={medsos.name}
              >
                {medsos.icon}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNav;
