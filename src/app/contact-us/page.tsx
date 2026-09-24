import { Suspense } from "react";
import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { EnquiryForm } from "@/components/contact/EnquiryForm";

export const metadata: Metadata = {
  title: "Contact Us & Product Enquiries | Cornerstone International",
  description:
    "Contact Cornerstone International for commercial product enquiries, technical consultations, and service support.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">
          Corporate & Sales Enquiries
        </p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
          Request an Enquiry
        </h1>
        <p className="mt-3 text-base text-slate-600 max-w-2xl">
          Speak with our technical sales engineers about product pricing, turnkey installations, trials, and distribution across India.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        {/* Contact Info Sidebar */}
        <div className="rounded-3xl bg-slate-900 p-8 text-slate-100 shadow-xl self-start">
          <h2 className="text-2xl font-bold text-white">Direct Contacts</h2>

          <div className="mt-8 space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
                Registered Office
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                No. 70, 3rd Floor, 5th Cross, <br />
                Esther Enclave, Horamavu, <br />
                Bengaluru 560043, Karnataka, India
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
                Sales & Service Office
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                No. 1/2-1, Cooke Town, <br />
                Opp. ITC Infotech (Near Sanctuary), <br />
                Bengaluru 560005, Karnataka, India
              </p>
            </div>

            <div className="space-y-4 text-sm text-slate-200 pt-2 border-t border-slate-800">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-sky-400 shrink-0" />
                <a href="tel:+918048516889" className="hover:text-white transition">
                  +91 80 4851 6889
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-sky-400 shrink-0" />
                <a href="tel:+918095566889" className="hover:text-white transition">
                  +91 80 9556 6889
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-sky-400 shrink-0" />
                <a href="mailto:info@cornerstonegroup.co.in" className="hover:text-white transition">
                  info@cornerstonegroup.co.in
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-sky-400 shrink-0" />
                <a href="mailto:services@cornerstonegroup.co.in" className="hover:text-white transition">
                  services@cornerstonegroup.co.in
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 text-sky-400 shrink-0" />
                <span>Bengaluru, Karnataka, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enquiry Form with Suspense */}
        <div>
          <Suspense
            fallback={
              <div className="rounded-3xl border border-slate-200 bg-white p-12 text-center">
                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-sky-700 border-r-transparent align-[-0.125em]" />
                <p className="mt-4 text-sm text-slate-500">Loading enquiry form...</p>
              </div>
            }
          >
            <EnquiryForm />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
