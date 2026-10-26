'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navlink from '../Navlink';
import MobileNav from './MobileNav';
import { MedsosLists, Menus } from '@/config/Menu';
import { useEffect, useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Scroll && Close
  useEffect(() => {
    const closeMenu = () => setIsOpen(false);
    window.addEventListener('scroll', closeMenu);
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex gap-10">
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
            <nav className="flex items-center gap-10">
              <ul className="hidden md:flex items-center gap-7">
                {Menus.map((menu) => (
                  <li key={menu.slug}>
                    <Navlink href={menu.path}>{menu.name}</Navlink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="hidden md:flex items-center gap-4 text-base transition-colors text-white">
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
          <button
            onClick={() => setIsOpen((open) => !open)}
            className="lg:hidden flex items-center text-white cursor-pointer"
          >
            <BiMenu size={30} />
          </button>
        </div>
      </div>
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default Navbar;
