import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cornerstonegroup.co.in"),
  title: {
    template: "%s | Cornerstone International",
    default: "Cornerstone International | Quality Products and Services",
  },
  description:
    "Cornerstone International offers hygiene, water, power, energy, and infrastructure solutions with a strong service-led approach.",
  openGraph: {
    title: "Cornerstone International",
    description: "Quality products and services for hygiene, water, power, energy, and infrastructure.",
    url: "https://cornerstonegroup.co.in/",
    siteName: "Cornerstone International",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-slate-50 text-slate-900 antialiased">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
