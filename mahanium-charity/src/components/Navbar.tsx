"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/donate", label: "Donate" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/30 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-semibold text-brand">
          Mahanium Charity
        </Link>
        <nav className="hidden md:flex gap-6" aria-label="Primary">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium hover:text-brand-600 transition-colors ${
                  isActive ? "text-brand-600" : "text-foreground/80"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden md:block">
          <Link href="/donate" className="btn-primary">
            Donate
          </Link>
        </div>
        <div className="md:hidden">
          <Link href="/donate" className="btn-primary px-4 py-2">
            Donate
          </Link>
        </div>
      </div>
    </header>
  );
}
