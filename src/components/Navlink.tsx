'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

export default function Navlink({ href, children }: NavLinkProps) {
  const pathName = usePathname();
  const isActive = href === '/' ? pathName === '/' : pathName.startsWith(href);

  return (
    <Link
      href={href}
      className={`relative py-1
        after:absolute after:bottom-0 after:left-0 after:h-[2px]
        after:bg-white after:transition-all after:duration-300
        ${isActive ? 'after:w-full text-white font-semibold' : 'after:w-0 hover:after:w-full text-gray-200 font-medium'}`}
    >
      {children}
    </Link>
  );
}
