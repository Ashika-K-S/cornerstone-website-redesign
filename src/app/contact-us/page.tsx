import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Cornerstone International",
  description: "Contact Cornerstone International for product enquiries, service support, and sales assistance.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">Contact us</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">Let’s talk about your next project.</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-3xl bg-slate-900 p-8 text-slate-100 shadow-xl">
          <h2 className="text-2xl font-bold text-white">Reach our team</h2>

          <div className="mt-8 space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">Registered office</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                No. 70, 3rd Floor, 5th Cross, <br />
                Esther Enclave, Horamavu, <br />
                Bengaluru 560043, Karnataka, India
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">Sales & service office</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                No. 1/2-1, Cooke Town, <br />
                Opp. ITC Infotech (Near Sanctuary), <br />
                Bengaluru 560005, Karnataka, India
              </p>
            </div>

            <div className="space-y-4 text-sm text-slate-200">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-sky-400" />
                <a href="tel:+918048516889" className="hover:text-white">+91 80 4851 6889</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-sky-400" />
                <a href="tel:+918095566889" className="hover:text-white">+91 80 9556 6889</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-sky-400" />
                <a href="mailto:info@cornerstonegroup.co.in" className="hover:text-white">info@cornerstonegroup.co.in</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-sky-400" />
                <a href="mailto:services@cornerstonegroup.co.in" className="hover:text-white">services@cornerstonegroup.co.in</a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 text-sky-400" />
                <span>Bengaluru, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <form className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">Name</label>
                <input id="name" type="text" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-sky-500 focus:bg-white" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">Email</label>
                <input id="email" type="email" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-sky-500 focus:bg-white" placeholder="name@example.com" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="subject" className="mb-2 block text-sm font-medium text-slate-700">Subject</label>
                <input id="subject" type="text" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-sky-500 focus:bg-white" placeholder="Product enquiry" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">Message</label>
                <textarea id="message" rows={6} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-sky-500 focus:bg-white" placeholder="Tell us about your requirement..." />
              </div>
            </div>
            <button type="submit" className="mt-6 inline-flex items-center justify-center rounded-full bg-sky-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-800">
              Send enquiry
            </button>
          </form>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">Location</div>
            <div className="h-64 rounded-2xl border border-slate-200 bg-[radial-gradient(circle_at_center,_rgba(14,165,233,0.18),_transparent_55%)] p-4">
              <div className="flex h-full items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 text-center text-slate-500">
                Bengaluru, Karnataka, India
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
