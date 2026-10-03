"use client";

import Link from "next/link";
import {
  Radio,
  PlaySquare,
  ArrowRight,
  Clock,
  Video,
  CheckCircle2,
  Sparkles,
  CalendarCheck,
  Download,
  Infinity as InfinityIcon,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";

export default function CoursesSection() {
  const courseOptions = [
    {
      type: "Online Courses",
      badge: "Interactive & Live Batches",
      heading: "Live Interactive Classes with Rajat Prasad",
      tagline: "Real-time trading desk simulation & live doubt-clearing",
      desc: "Attend live weekend sessions with real-time market analysis. Engage directly with Rajat Prasad, review current global macro charts, and solve practical portfolio questions on the spot.",
      image: "/images/online-card.png",
      link: "https://prashantiacademy.urbanpro.com/",
      icon: Radio,
      features: [
        "Live interactive weekend classes",
        "Direct Q&A during and after lectures",
        "Live market case study discussions",
        "Batch-exclusive curated doubt forums",
      ],
      metrics: [
        { label: "Delivery", value: "Live Interactive", icon: Radio },
        { label: "Schedule", value: "Fixed Batches", icon: CalendarCheck },
        { label: "Q&A", value: "Real-Time Direct", icon: Clock },
      ],
      ctaText: "View Live Batches",
      popular: true,
    },
    {
      type: "Offline Courses",
      badge: "Self-Paced Recorded Video Series",
      heading: "Master Market Mechanics at Your Own Pace",
      tagline: "Pre-recorded structured video libraries & platform access",
      desc: "Structured recorded video lessons available on YouTube and dedicated learning portals. Learn complex finance step-by-step with zero scheduling pressure and pause-and-rewatch convenience.",
      image: "/images/offline-card.png",
      link: "https://rajatprasad.creator-betterme.com/products",
      icon: PlaySquare,
      features: [
        "Structured video modules on YouTube/Portal",
        "Pause, rewind, and study at your own pace",
        "Downloadable cheatsheets and templates",
        "Lifetime access to uploaded lecture updates",
      ],
      metrics: [
        { label: "Delivery", value: "Recorded Videos", icon: Video },
        { label: "Access", value: "Lifetime Access", icon: InfinityIcon },
        { label: "Flexibility", value: "100% Self-Paced", icon: Download },
      ],
      ctaText: "Explore Recorded Library",
      popular: false,
    },
  ];

  const growUpVariant: Variants = {
    hidden: { opacity: 0, scale: 0.94, y: 25 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.05,
      },
    },
  };

  const cardGrowVariant: Variants = {
    hidden: { opacity: 0, scale: 0.94, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="courses"
      className="relative overflow-hidden bg-slate-50/80 py-24 sm:py-32 border-t border-slate-200/90"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #0b1733 1px, transparent 1px),
            linear-gradient(to bottom, #0b1733 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={growUpVariant}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0b1733] shadow-xs backdrop-blur-md">
            <span>Learning Formats</span>
          </div>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#0b1733] sm:text-4xl lg:text-5xl">
            Choose Your <span className="text-brand-gold">Learning Mode.</span>
          </h2>

          <p className="mt-3.5 text-sm sm:text-base leading-[120%] text-slate-600 max-w-2xl mx-auto">
            Pick between live interactive sessions with real-time mentorship or self-paced recorded video libraries crafted for flexible study.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
          className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10"
        >
          {courseOptions.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.type}
                variants={cardGrowVariant}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-3 sm:p-4 shadow-xl shadow-[#0b1733]/5 transition-all duration-300 hover:border-amber-400 hover:shadow-2xl"
              >
                <div>
                    <Link href={item?.link}>
                  <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-2xl bg-[#0b1733]">
                    <img
                      src={item.image}
                      alt={item.heading}
                      className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                  </div>
                      </Link>

                  <div className="p-4 sm:p-5">
                    <p className="text-xs sm:text-sm font-semibold text-brand-gold">
                      {item.tagline}
                    </p>

                    <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-600">
                      {item.desc}
                    </p>

                    <div className="mt-5 grid grid-cols-3 gap-2 border-y border-slate-100 py-3.5">
                      {item.metrics.map((metric) => {
                        const MetricIcon = metric.icon;
                        return (
                          <div key={metric.label} className="text-center">
                            <div className="flex items-center justify-center gap-1 text-[10px] font-medium text-slate-400 uppercase tracking-wider">
                              <MetricIcon className="h-3 w-3" />
                              <span>{metric.label}</span>
                            </div>
                            <p className="mt-0.5 text-xs font-bold text-[#0b1733]">
                              {metric.value}
                            </p>
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-5 space-y-2.5">
                      {item.features.map((feat) => (
                        <div key={feat} className="flex items-start gap-2.5">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-gold mt-0.5" />
                          <span className="text-xs sm:text-sm font-medium text-slate-700">
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-4 pt-2 sm:p-5 sm:pt-2">
                  <Link
                    href={item.link}
                    className="group/btn flex w-full items-center justify-center gap-2 rounded-xl bg-[#0b1733] py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:bg-brand-navy hover:shadow-xl active:scale-98"
                  >
                    <span>{item.ctaText}</span>
                    <ArrowRight className="h-4 w-4 text-amber-400 transition-transform duration-200 group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={growUpVariant}
          className="mt-14 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 text-center shadow-xs"
        >
          <p className="text-xs sm:text-sm text-slate-600">
            Confused between live cohorts and self-paced recorded videos?{" "}
            <Link
              href="#contact"
              className="font-bold text-[#0b1733] underline decoration-brand-gold decoration-2 underline-offset-4 hover:text-brand-gold transition-colors"
            >
              Get personalized course advice
            </Link>
          </p>
        </motion.div>

      </div>
    </section>
  );
}