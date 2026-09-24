"use client";

import Link from "next/link";
import { Download, FileText, Info, Lock } from "lucide-react";
import { brochures } from "@/data/brochures";

interface ProductDocumentsProps {
  productSlug: string;
  productName: string;
}

export function ProductDocuments({ productSlug, productName }: ProductDocumentsProps) {
  // Find associated brochure if available in data
  const matchedBrochure = brochures.find(
    (b) => b.id === productSlug || b.id.includes(productSlug) || productSlug.includes(b.id)
  );

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs">
      <div className="flex items-center gap-2 mb-4">
        <FileText className="h-5 w-5 text-sky-700" />
        <h3 className="text-lg font-bold text-slate-900">Technical Documentation</h3>
      </div>

      <div className="space-y-3">
        {matchedBrochure ? (
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-2xl border border-sky-100 bg-sky-50/50 p-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-slate-900">{matchedBrochure.title}</span>
                <span className="rounded-md bg-sky-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-sky-800">
                  Official Literature
                </span>
              </div>
              <p className="mt-1 text-xs text-slate-600 max-w-md">
                {matchedBrochure.description}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <Link
                href={`/contact-us?product=${productSlug}&type=brochure`}
                className="inline-flex items-center gap-1.5 rounded-xl bg-sky-700 px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-sky-800 transition"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Request Brochure PDF</span>
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div>
              <div className="flex items-center gap-2 text-slate-700">
                <span className="text-sm font-semibold">{productName} Specification Sheet</span>
                <span className="rounded-md bg-slate-200 px-2 py-0.5 text-[10px] font-semibold text-slate-600">
                  On Request
                </span>
              </div>
              <p className="mt-1 text-xs text-slate-500">
                Engineering drawings and certification documents are shared directly under NDA or upon facility enquiry.
              </p>
            </div>

            <Link
              href={`/contact-us?product=${productSlug}&type=brochure`}
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition shrink-0"
            >
              <span>Enquire for Specs</span>
            </Link>
          </div>
        )}

        {/* Quick jump to specifications */}
        <div className="pt-2 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <Info className="h-3.5 w-3.5 text-slate-400" />
            <span>Digital specifications below are sourced directly from manufacturer data.</span>
          </div>
          <a
            href="#technical-specifications"
            className="font-semibold text-sky-700 hover:text-sky-900 underline"
          >
            View Specifications &darr;
          </a>
        </div>
      </div>
    </div>
  );
}
