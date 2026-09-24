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
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md transition-shadow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-6">
          <Link
            href="/"
            className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2 rounded-xl"
            aria-label="Cornerstone International home"
          >
            <Image
              src="/images/logo-mark.svg"
              alt="Cornerstone logo"
              width={52}
              height={52}
              priority
              className="rounded-xl transition-transform hover:scale-105 duration-200"
            />
            <div className="leading-tight">
              <div className="text-lg font-black uppercase tracking-[0.16em] text-slate-900">
                Cornerstone
              </div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                International
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors relative py-1 px-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 ${
                    isActive
                      ? "text-sky-700 font-bold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-1 right-1 h-0.5 rounded-full bg-sky-700 animate-in fade-in duration-200"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-full bg-sky-700 px-5 py-2.5 text-sm font-bold text-white shadow-xs transition hover:bg-sky-800 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2"
            >
              Enquire Now
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 p-2.5 text-slate-700 transition hover:border-slate-300 hover:text-slate-900 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 lg:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Accessible Mobile Menu */}
      {open && (
        <div id="mobile-menu" className="border-t border-slate-200 bg-white/95 backdrop-blur-md lg:hidden animate-in slide-in-from-top-2 duration-200">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3 space-y-1" aria-label="Mobile navigation">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-3.5 py-2.5 text-sm font-semibold transition ${
                    isActive
                      ? "bg-sky-50 text-sky-800"
                      : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="pt-2">
              <Link
                href="/contact-us"
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-xl bg-sky-700 px-4 py-2.5 text-sm font-bold text-white shadow-xs transition hover:bg-sky-800 active:scale-[0.98]"
              >
                Enquire Now
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
