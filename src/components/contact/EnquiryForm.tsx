"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AlertCircle, CheckCircle2, Send, Sparkles } from "lucide-react";
import { products } from "@/data/products";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  productSlug: string;
  requirement: string;
  quantity: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export function EnquiryForm() {
  const searchParams = useSearchParams();
  const productParam = searchParams.get("product") || "";
  const typeParam = searchParams.get("type") || "";

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    productSlug: productParam,
    requirement: typeParam === "brochure" ? "Brochure / Documentation Request" : "Product Pricing / Quotation",
    quantity: "1 - 5 units",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  // Sync if URL search params change
  useEffect(() => {
    if (productParam) {
      setFormData((prev) => ({ ...prev, productSlug: productParam }));
    }
    if (typeParam === "brochure") {
      setFormData((prev) => ({
        ...prev,
        requirement: "Brochure / Documentation Request",
        message: prev.message || "Please provide the official technical brochure and specification documentation for this product.",
      }));
    }
  }, [productParam, typeParam]);

  const validateField = (name: keyof FormData, value: string): string | undefined => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Full name is required.";
        if (value.trim().length < 2) return "Name must be at least 2 characters.";
        return undefined;
      case "email":
        if (!value.trim()) return "Business email is required.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          return "Please enter a valid email address (e.g. name@company.com).";
        }
        return undefined;
      case "phone":
        if (value.trim() && !/^[0-9+\s()-]{7,20}$/.test(value.trim())) {
          return "Please enter a valid phone number (min 7 digits).";
        }
        return undefined;
      case "message":
        if (!value.trim()) return "Please enter a brief message describing your requirement.";
        if (value.trim().length < 10) return "Message must be at least 10 characters.";
        return undefined;
      default:
        return undefined;
    }
  };

  const handleBlur = (field: keyof FormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field]);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const error = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: error }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all required fields as touched
    setTouched({
      name: true,
      email: true,
      phone: true,
      message: true,
    });

    const newErrors: FormErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      phone: validateField("phone", formData.phone),
      message: validateField("message", formData.message),
    };

    const hasErrors = Object.values(newErrors).some((err) => !!err);
    setErrors(newErrors);

    if (hasErrors) {
      return;
    }

    // Success state (frontend-only simulation)
    setSubmittedData({ ...formData });
    setIsSubmitted(true);
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      productSlug: "",
      requirement: "Product Pricing / Quotation",
      quantity: "1 - 5 units",
      message: "",
    });
    setErrors({});
    setTouched({});
  };

  // Selected product object
  const selectedProductObj = products.find((p) => p.slug === formData.productSlug);

  if (isSubmitted && submittedData) {
    const submittedProduct = products.find((p) => p.slug === submittedData.productSlug);

    return (
      <div className="rounded-3xl border border-emerald-200 bg-white p-8 sm:p-10 shadow-xs animate-in fade-in duration-300">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
          <CheckCircle2 className="h-8 w-8" />
        </div>

        <div className="mt-6 text-center">
          <h3 className="text-2xl font-bold text-slate-900">
            Thank you. Your enquiry has been recorded.
          </h3>
          <p className="mt-2 text-sm text-slate-600 max-w-lg mx-auto">
            Our corporate sales and solutions engineering team will review your requirements and respond via{" "}
            <strong className="text-slate-900">{submittedData.email}</strong>.
          </p>
        </div>

        {/* Enquiry Summary */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 max-w-lg mx-auto text-left text-xs sm:text-sm space-y-3">
          <div className="flex justify-between border-b border-slate-200 pb-2">
            <span className="text-slate-500">Contact Name:</span>
            <span className="font-semibold text-slate-900">{submittedData.name}</span>
          </div>
          {submittedData.company && (
            <div className="flex justify-between border-b border-slate-200 pb-2">
              <span className="text-slate-500">Company:</span>
              <span className="font-semibold text-slate-900">{submittedData.company}</span>
            </div>
          )}
          <div className="flex justify-between border-b border-slate-200 pb-2">
            <span className="text-slate-500">Product:</span>
            <span className="font-semibold text-sky-800">
              {submittedProduct ? submittedProduct.name : "General Corporate Enquiry"}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Requirement:</span>
            <span className="font-semibold text-slate-900">{submittedData.requirement}</span>
          </div>
        </div>

        {/* Frontend Demo Notice */}
        <div className="mt-6 rounded-xl border border-sky-100 bg-sky-50/80 p-4 text-xs text-sky-900 text-center max-w-lg mx-auto">
          <p className="font-semibold flex items-center justify-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5" /> Frontend Demonstration Mode
          </p>
          <p className="mt-1 text-sky-700">
            This form has validated your input locally for this interview prototype. In production, submissions connect to Cornerstone&apos;s corporate CRM / email notification gateway.
          </p>
        </div>

        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={handleResetForm}
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-2.5 text-xs font-semibold text-white shadow-xs transition hover:bg-slate-800 active:scale-[0.98]"
          >
            Submit Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs space-y-6"
    >
      {/* Product Enquiry Pre-population Banner */}
      {selectedProductObj ? (
        <div className="rounded-2xl border border-sky-200 bg-sky-50 p-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-sky-800">
                Product Enquiry
              </p>
              <p className="text-base font-extrabold text-slate-900 mt-0.5">
                Product: {selectedProductObj.name}
              </p>
              <p className="text-xs text-slate-600 mt-0.5">
                Division: {selectedProductObj.category}
              </p>
            </div>
            <button
              type="button"
              onClick={() => handleChange("productSlug", "")}
              className="text-xs font-semibold text-sky-700 hover:text-sky-950 underline shrink-0"
            >
              Change Product
            </button>
          </div>
        </div>
      ) : (
        <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
          <label htmlFor="enquiry-product" className="mb-1 block text-xs font-bold uppercase tracking-wider text-slate-700">
            Product / Solution of Interest
          </label>
          <select
            id="enquiry-product"
            value={formData.productSlug}
            onChange={(e) => handleChange("productSlug", e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-2xs outline-none transition focus:border-sky-600 focus:ring-4 focus:ring-sky-100"
          >
            <option value="">General Corporate / Enterprise Enquiry</option>
            {products.map((product) => (
              <option key={product.id} value={product.slug}>
                {product.name} ({product.category})
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        {/* Name * */}
        <div>
          <label htmlFor="enquiry-name" className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700">
            Full Name <span className="text-rose-500">*</span>
          </label>
          <input
            id="enquiry-name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            onBlur={() => handleBlur("name")}
            placeholder="e.g. Ramesh Kumar"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "enquiry-name-error" : undefined}
            className={`w-full rounded-xl border px-4 py-3 text-sm text-slate-900 shadow-2xs outline-none transition placeholder:text-slate-400 ${
              errors.name && touched.name
                ? "border-rose-400 bg-rose-50/30 focus:border-rose-500 focus:ring-4 focus:ring-rose-100"
                : "border-slate-200 bg-slate-50/50 focus:border-sky-600 focus:bg-white focus:ring-4 focus:ring-sky-100"
            }`}
          />
          {errors.name && touched.name && (
            <p id="enquiry-name-error" className="mt-1.5 flex items-center gap-1 text-xs text-rose-600" role="alert">
              <AlertCircle className="h-3 w-3" />
              <span>{errors.name}</span>
            </p>
          )}
        </div>

        {/* Email * */}
        <div>
          <label htmlFor="enquiry-email" className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700">
            Email <span className="text-rose-500">*</span>
          </label>
          <input
            id="enquiry-email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            onBlur={() => handleBlur("email")}
            placeholder="name@company.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "enquiry-email-error" : undefined}
            className={`w-full rounded-xl border px-4 py-3 text-sm text-slate-900 shadow-2xs outline-none transition placeholder:text-slate-400 ${
              errors.email && touched.email
                ? "border-rose-400 bg-rose-50/30 focus:border-rose-500 focus:ring-4 focus:ring-rose-100"
                : "border-slate-200 bg-slate-50/50 focus:border-sky-600 focus:bg-white focus:ring-4 focus:ring-sky-100"
            }`}
          />
          {errors.email && touched.email && (
            <p id="enquiry-email-error" className="mt-1.5 flex items-center gap-1 text-xs text-rose-600" role="alert">
              <AlertCircle className="h-3 w-3" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="enquiry-phone" className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700">
            Phone
          </label>
          <input
            id="enquiry-phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            onBlur={() => handleBlur("phone")}
            placeholder="+91 98765 43210"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "enquiry-phone-error" : undefined}
            className={`w-full rounded-xl border px-4 py-3 text-sm text-slate-900 shadow-2xs outline-none transition placeholder:text-slate-400 ${
              errors.phone && touched.phone
                ? "border-rose-400 bg-rose-50/30 focus:border-rose-500 focus:ring-4 focus:ring-rose-100"
                : "border-slate-200 bg-slate-50/50 focus:border-sky-600 focus:bg-white focus:ring-4 focus:ring-sky-100"
            }`}
          />
          {errors.phone && touched.phone && (
            <p id="enquiry-phone-error" className="mt-1.5 flex items-center gap-1 text-xs text-rose-600" role="alert">
              <AlertCircle className="h-3 w-3" />
              <span>{errors.phone}</span>
            </p>
          )}
        </div>

        {/* Company */}
        <div>
          <label htmlFor="enquiry-company" className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700">
            Company
          </label>
          <input
            id="enquiry-company"
            type="text"
            value={formData.company}
            onChange={(e) => handleChange("company", e.target.value)}
            placeholder="e.g. Healthcare Trust / Tech Facility"
            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 shadow-2xs outline-none transition placeholder:text-slate-400 focus:border-sky-600 focus:bg-white focus:ring-4 focus:ring-sky-100"
          />
        </div>

        {/* Message * */}
        <div className="sm:col-span-2">
          <label htmlFor="enquiry-message" className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-700">
            Message <span className="text-rose-500">*</span>
          </label>
          <textarea
            id="enquiry-message"
            rows={4}
            required
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
            onBlur={() => handleBlur("message")}
            placeholder="Please describe your facility requirements, operational timeline, or scope..."
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "enquiry-message-error" : undefined}
            className={`w-full rounded-xl border px-4 py-3 text-sm text-slate-900 shadow-2xs outline-none transition placeholder:text-slate-400 ${
              errors.message && touched.message
                ? "border-rose-400 bg-rose-50/30 focus:border-rose-500 focus:ring-4 focus:ring-rose-100"
                : "border-slate-200 bg-slate-50/50 focus:border-sky-600 focus:bg-white focus:ring-4 focus:ring-sky-100"
            }`}
          />
          {errors.message && touched.message && (
            <p id="enquiry-message-error" className="mt-1.5 flex items-center gap-1 text-xs text-rose-600" role="alert">
              <AlertCircle className="h-3 w-3" />
              <span>{errors.message}</span>
            </p>
          )}
        </div>
      </div>

      <div className="pt-2">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-700 px-7 py-3.5 text-sm font-bold text-white shadow-xs transition hover:bg-sky-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2 active:scale-[0.98]"
        >
          <Send className="h-4 w-4" />
          <span>Send Enquiry</span>
        </button>
      </div>
    </form>
  );
}
