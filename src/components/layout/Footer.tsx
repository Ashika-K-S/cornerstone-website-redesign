import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Products", href: "/products" },
  { label: "Video Gallery", href: "/video-gallery" },
  { label: "Brochures", href: "/brochures" },
  { label: "Contact Us", href: "/contact-us" },
];

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="mb-4 text-xl font-black uppercase tracking-[0.18em] text-white">Cornerstone</div>
            <p className="max-w-xs text-sm leading-6 text-slate-300">
              Diversified product sales and services focused on hygiene, water, energy, infrastructure, and public health solutions.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-100">Quick Links</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-100">Key Sectors</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>Water Solutions</li>
              <li>Hygiene Products</li>
              <li>Power and Energy</li>
              <li>Infrastructure</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-100">Contact</h3>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-sky-400" />
                <span>Bengaluru, Karnataka, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-sky-400" />
                <a href="tel:+918048516889" className="transition hover:text-white">+91 80 4851 6889</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-sky-400" />
                <a href="mailto:info@cornerstonegroup.co.in" className="transition hover:text-white">info@cornerstonegroup.co.in</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-sm text-slate-400">
          <p>© 2026 Cornerstone International. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
