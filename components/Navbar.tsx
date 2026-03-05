'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/purity', label: 'Purity' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-earth-200 bg-earth-50/95 backdrop-blur">
      <nav className="container-wide flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-earth-900">
          Shuddh Masala Co.
          <span className="block text-xs font-normal text-earth-600">Pure. Organic. Traditional.</span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition hover:text-spice-700 ${
                  active ? 'font-semibold text-spice-700' : 'text-earth-700'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/products"
            className="rounded-full bg-spice-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-spice-800"
          >
            Shop Now
          </Link>
        </div>
      </nav>
    </header>
  );
}
