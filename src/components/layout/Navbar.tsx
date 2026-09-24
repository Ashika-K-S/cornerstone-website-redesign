"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Products", href: "/products" },
  { name: "Video Gallery", href: "/video-gallery" },
  { name: "Brochures", href: "/brochures" },
  { name: "Contact Us", href: "/contact-us" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3" aria-label="Cornerstone home">
            <Image src="/images/logo-mark.svg" alt="Cornerstone logo" width={54} height={54} className="rounded-xl" />
            <div className="leading-tight">
              <div className="text-lg font-black uppercase tracking-[0.16em] text-slate-900">Cornerstone</div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">International</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive ? "text-sky-700" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-full bg-sky-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-800"
            >
              Enquire Now
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            className="inline-flex items-center justify-center rounded-md border border-slate-200 p-2 text-slate-700 transition hover:border-slate-300 hover:text-slate-900 lg:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3" aria-label="Mobile navigation">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-3 py-2 text-sm font-medium ${
                    isActive ? "bg-sky-50 text-sky-700" : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <Link
              href="/contact-us"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-sky-700 px-4 py-2.5 text-sm font-semibold text-white"
            >
              Enquire Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
