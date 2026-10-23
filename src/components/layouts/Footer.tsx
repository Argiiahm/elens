import Image from 'next/image';
import Link from 'next/link';
import { MedsosLists, Menus } from '@/config/Menu';

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-14 sm:py-16">
        <div className="flex flex-col gap-12 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="inline-flex items-center gap-2">
              <Image
                src="/images/elunive-logo-white.png"
                alt="Elunive Logo"
                width={40}
                height={40}
              />
              <span className="text-2xl font-medium tracking-tight">elens</span>
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-neutral-400">
              Capturing honest moments and turning them into timeless stories.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-7 gap-y-4 text-sm text-neutral-300">
            {Menus.map((menu) => (
              <Link
                key={menu.slug}
                href={menu.path}
                className="hover:text-white transition-colors"
              >
                {menu.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} Elens. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-neutral-300">
            {MedsosLists.map((medsos) => (
              <a
                key={medsos.slug}
                href={medsos.path}
                aria-label={medsos.name}
                className="transition-all hover:scale-110 hover:text-white"
              >
                {medsos.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
