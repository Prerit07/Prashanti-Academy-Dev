"use client";

import { useState, useEffect } from "react";
import {
  X,
  User,
  Phone,
  Mail,
  CheckCircle2,
  ShieldCheck,
  Award,
  Sparkles,
  ArrowRight,
  TrendingUp,
  AlertCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormErrors {
  name?: string;
  mobile?: string;
  email?: string;
}

export default function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
  });

  const [submittedData, setSubmittedData] = useState<{
    name: string;
    mobile: string;
    email: string;
  } | null>(null);

  const [errors, setErrors] = useState<FormErrors>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Prevent background scroll and compensate for scrollbar width to stop layout flickering
  useEffect(() => {
    if (isOpen) {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      if (scrollBarWidth > 0) {
        document.body.style.paddingRight = `${scrollBarWidth}px`;
      }
    } else {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
      setSubmitted(false);
      setErrors({});
      setServerError(null);
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    };
  }, [isOpen]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    const cleanMobile = formData.mobile.replace(/\D/g, "");
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(cleanMobile)) {
      newErrors.mobile = "Enter a valid 10-digit mobile number";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validate()) return;

    setLoading(true);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit enquiry.");
      }

      setSubmittedData({ ...formData });
      setSubmitted(true);
      setFormData({ name: "", mobile: "", email: "" });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setServerError(err.message);
      } else {
        setServerError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
          {/* Backdrop with GPU acceleration to prevent paint flashing */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "linear" }}
            onClick={onClose}
            className="fixed inset-0 bg-[#060d1b]/85 backdrop-blur-md transform-gpu will-change-[opacity]"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-4xl overflow-hidden rounded-3xl border border-white/15 bg-[#081226] text-white shadow-2xl shadow-black/80 transform-gpu"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Ambient Gold Glow */}
            <div
              className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full opacity-20 blur-3xl"
              style={{ backgroundColor: "#BC9538" }}
            />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/10 text-slate-300 transition-colors hover:bg-brand-gold hover:text-black active:scale-95 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="h-4 w-4" />
            </button>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="thank-you-view"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative flex min-h-115 w-full flex-col items-center justify-center bg-transparent p-6 sm:p-14 text-center"
                >
                  <div
                    className="pointer-events-none absolute h-56 w-56 rounded-full opacity-15 blur-3xl"
                    style={{ backgroundColor: "#10b981" }}
                  />

                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-400/40 bg-emerald-500/10 text-emerald-400"
                  >
                    <CheckCircle2 className="h-8 w-8" />
                  </motion.div>

                  <div className="mt-5 max-w-md">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                      Enquiry Received
                    </span>

                    <h3 className="mt-4 text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                      Thank You,{" "}
                      <span className="text-brand-gold">
                        {submittedData?.name || "Learner"}!
                      </span>
                    </h3>

                    <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-300">
                      Your enquiry has been successfully logged. Our academic
                      coordinator will reach out to you shortly.
                    </p>
                  </div>

                  <div className="mt-7">
                    <button
                      type="button"
                      onClick={onClose}
                      className="inline-flex items-center gap-2 rounded-xl border border-brand-gold/40 bg-brand-gold px-8 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 transition-all hover:bg-amber-400 active:scale-95 cursor-pointer"
                    >
                      <span>Done</span>
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="form-view"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-1 lg:grid-cols-12"
                >
                  <div className="relative hidden flex-col justify-between border-b border-white/10 bg-white/3 p-8 lg:col-span-5 lg:flex lg:border-b-0 lg:border-r">
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/40 bg-brand-gold/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-gold">
                        <span>Admissions Open</span>
                      </div>

                      <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-white leading-tight">
                        Learn Directly From{" "}
                        <span className="text-brand-gold">Rajat Prasad.</span>
                      </h3>

                      <p className="mt-2.5 text-xs leading-relaxed text-slate-400">
                        Corporate trainer for FIMMDA and Dun & Bradstreet with over 15 years of industry experience.
                      </p>

                      <div className="mt-6 space-y-3.5 border-t border-white/10 pt-6">
                        <div className="flex items-start gap-3">
                          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-gold/10 text-brand-gold">
                            <Award className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-200">
                              Institutional Training
                            </p>
                            <p className="text-[11px] text-slate-400">
                              Practical modules tested across banking and corporate cohorts.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-gold/10 text-brand-gold">
                            <ShieldCheck className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-200">
                              Strict Risk Management
                            </p>
                            <p className="text-[11px] text-slate-400">
                              Learn capital protection instead of unverified stock tips.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-gold/10 text-brand-gold">
                            <TrendingUp className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-200">
                              Live Doubt Clearing
                            </p>
                            <p className="text-[11px] text-slate-400">
                              Step-by-step guidance using actual market charts and real data.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 text-[11px] text-slate-500">
                      <p>Prashanti Academy</p>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 lg:col-span-7 flex flex-col justify-center">
                    <div className="pr-6">
                      <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
                        Contact <span className="text-brand-gold">Us.</span>
                      </h4>
                      <p className="mt-1 text-xs text-slate-400">
                        Leave your details below, and we will get back to you shortly.
                      </p>
                    </div>

                    {serverError && (
                      <div className="mt-4 flex items-center gap-2 rounded-xl border border-rose-500/30 bg-rose-500/10 p-3 text-xs text-rose-300">
                        <AlertCircle className="h-4 w-4 shrink-0 text-rose-400" />
                        <span>{serverError}</span>
                      </div>
                    )}

                    <form
                      onSubmit={handleSubmit}
                      noValidate
                      className="mt-6 space-y-4"
                    >
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Full Name <span className="text-brand-gold">*</span>
                        </label>
                        <div className="relative">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-500">
                            <User className="h-4 w-4" />
                          </div>
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => {
                              setFormData({
                                ...formData,
                                name: e.target.value,
                              });
                              if (errors.name)
                                setErrors({ ...errors, name: undefined });
                            }}
                            placeholder="Enter your name"
                            className={`w-full rounded-xl border bg-white/5 py-2.5 pl-10 pr-3.5 text-xs sm:text-sm text-white placeholder-slate-500 outline-none transition-colors focus:bg-white/10 ${
                              errors.name
                                ? "border-rose-500 focus:border-rose-500"
                                : "border-white/10 focus:border-brand-gold"
                            }`}
                          />
                        </div>
                        {errors.name && (
                          <p className="mt-1 text-[11px] text-rose-400">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Mobile Number <span className="text-brand-gold">*</span>
                        </label>
                        <div className="relative">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-500">
                            <Phone className="h-4 w-4" />
                          </div>
                          <input
                            type="tel"
                            maxLength={10}
                            value={formData.mobile}
                            onChange={(e) => {
                              const val = e.target.value.replace(/\D/g, "");
                              setFormData({ ...formData, mobile: val });
                              if (errors.mobile)
                                setErrors({ ...errors, mobile: undefined });
                            }}
                            placeholder="10-digit mobile number"
                            className={`w-full rounded-xl border bg-white/5 py-2.5 pl-10 pr-3.5 text-xs sm:text-sm text-white placeholder-slate-500 outline-none transition-colors focus:bg-white/10 ${
                              errors.mobile
                                ? "border-rose-500 focus:border-rose-500"
                                : "border-white/10 focus:border-brand-gold"
                            }`}
                          />
                        </div>
                        {errors.mobile && (
                          <p className="mt-1 text-[11px] text-rose-400">
                            {errors.mobile}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Email Address <span className="text-brand-gold">*</span>
                        </label>
                        <div className="relative">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-500">
                            <Mail className="h-4 w-4" />
                          </div>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => {
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              });
                              if (errors.email)
                                setErrors({ ...errors, email: undefined });
                            }}
                            placeholder="name@example.com"
                            className={`w-full rounded-xl border bg-white/5 py-2.5 pl-10 pr-3.5 text-xs sm:text-sm text-white placeholder-slate-500 outline-none transition-colors focus:bg-white/10 ${
                              errors.email
                                ? "border-rose-500 focus:border-rose-500"
                                : "border-white/10 focus:border-brand-gold"
                            }`}
                          />
                        </div>
                        {errors.email && (
                          <p className="mt-1 text-[11px] text-rose-400">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={loading}
                          className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-brand-gold/40 bg-brand-gold py-3 text-xs font-bold uppercase tracking-wider text-slate-950 shadow-lg shadow-brand-gold/15 transition-all hover:bg-amber-400 active:scale-[0.99] disabled:opacity-50 cursor-pointer"
                        >
                          <span>
                            {loading ? "Submitting..." : "Enquire Now"}
                          </span>
                          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                        </button>
                      </div>
                    </form>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}