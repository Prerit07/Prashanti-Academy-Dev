"use client";

import Image from "next/image";
import Link from "next/link";
import {
  TrendingUp,
  Globe2,
  Landmark,
  Layers,
  Award,
  BookOpenCheck,
  ShieldAlert,
  ArrowRight,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";

export default function AboutAcademy() {
  const pillars = [
    {
      title: "Stock Market",
      tagline: "Equity Valuation & Market Dynamics",
      desc: "Master market dynamics, company valuation, and technical and fundamental analysis to build confident investment strategies.",
      icon: TrendingUp,
    },
    {
      title: "Foreign Exchange (Forex)",
      tagline: "Global Macro & Capital Flows",
      desc: "Understand currency pairs, central bank policies, geopolitical influences, and global capital flows driving worldwide liquidity.",
      icon: Globe2,
    },
    {
      title: "Bonds Market",
      tagline: "Fixed Income & Yield Curve Cycles",
      desc: "Gain clarity on fixed-income securities, yield curves, interest rate cycles, and the global debt instruments powering economies.",
      icon: Landmark,
    },
    {
      title: "Derivatives",
      tagline: "Futures, Options & Risk Hedging",
      desc: "Learn how to utilize futures, options, and structured instruments for systematic hedging, strategic speculation, and risk management.",
      icon: Layers,
    },
  ];

  const differentiators = [
    {
      title: "Corporate-Grade Rigor",
      desc: "Learn from curriculums tested, audited, and refined in professional corporate trading desks and corporate treasury environments.",
      icon: Award,
    },
    {
      title: "Practical & Plain-Language",
      desc: "We strip away unnecessary academic jargon to focus purely on clear, actionable market mechanics you can execute right away.",
      icon: BookOpenCheck,
    },
    {
      title: "Risk-First Approach",
      desc: "Sustainable market survival starts with disciplined capital preservation, calculated sizing, and ironclad risk parameters.",
      icon: ShieldAlert,
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
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemGrowVariant: Variants = {
    hidden: { opacity: 0, scale: 0.92, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="about" className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[68%] sm:h-[62%] lg:h-[58%] overflow-hidden">
        <Image
          src="/images/about-finance-bg.jpg"
          alt="Financial Education Background"
          fill
          priority
          className="object-cover object-top sm:object-center"
        />

        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(
                180deg,
                rgba(248, 250, 252, 0.30) 0%,
                rgba(241, 245, 249, 0.80) 20%,
                rgba(248, 250, 252, 0.94) 70%,
                rgba(255, 255, 255, 0.98) 90%,
                #FFFFFF 100%
              )
            `,
          }}
        />

        <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-b from-transparent to-white backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={growUpVariant}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/40 bg-white/90 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-navy shadow-sm backdrop-blur-md">
            <span>About Prashanti Academy</span>
          </div>

          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl lg:text-5xl">
            Bridging Corporate Finance to{" "}
            <span className="text-brand-navy md:text-brand-gold">Ambitious Learners.</span>
          </h2>

          <p className="mt-6 text-base leading-[130%] text-slate-700 sm:text-lg">
            At Prashanti Academy, we bridge the gap between complex financial markets and ambitious learners. Built on a trusted track record of delivering corporate training to businesses and finance professionals, we have now expanded our doors to learning enthusiasts, aspiring traders, and retail investors who want to master how money moves.
          </p>

          <div className="mt-6 rounded-2xl border-l-4 border-brand-gold bg-white/95 p-5 sm:p-6 shadow-sm backdrop-blur-sm">
            <p className="text-sm sm:text-base font-semibold italic text-brand-navy">
              “We believe that the analytical depth, discipline, and strategic insight typically reserved for corporate trading desks should be accessible to anyone eager to learn.”
            </p>
          </div>
        </motion.div>

        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start justify-between gap-4 border-b border-slate-400/80 pb-6 md:flex-row md:items-end"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
                Curriculum Architecture
              </span>
              <h3 className="mt-1 text-2xl font-bold tracking-tight text-brand-navy sm:text-3xl">
                What We Teach
              </h3>
            </div>
            <p className="block md:hidden max-w-md text-xs sm:text-sm text-slate-600">
              Our structured programs are designed to provide both foundational clarity and practical market application across four core pillars of modern finance:
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
            className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  variants={itemGrowVariant}
                  className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-7 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-gold hover:shadow-xl hover:shadow-brand-navy/10"
                >
                  <div>
                    <div className="inline-flex rounded-xl border border-brand-navy/10 bg-slate-50 p-3 text-brand-navy transition-colors duration-300 group-hover:bg-brand-navy group-hover:text-brand-gold">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h4 className="mt-5 text-xl font-bold tracking-tight text-brand-navy">
                      {pillar.title}
                    </h4>

                    <span className="mt-1 inline-block text-xs font-semibold text-brand-gold">
                      {pillar.tagline}
                    </span>

                    <p className="mt-3 text-sm leading-[130%] text-slate-600">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-1.5 border-t border-slate-100 pt-4 text-xs font-semibold text-brand-navy transition-colors group-hover:text-brand-gold">
                    <span>Explore syllabus</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <div className="mt-28">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Left Image Column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={growUpVariant}
              className="relative lg:col-span-5"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-xl shadow-brand-navy/5">
                <div className="relative h-120 w-full overflow-hidden rounded-2xl bg-brand-navy">
                  <Image
                    src="/images/why-us-image.png"
                    alt="Corporate Trading Desk Analysis"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center brightness-95 transition-transform duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-brand-navy/90 via-brand-navy/25 to-transparent" />

                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-brand-navy/80 px-3.5 py-1.5 text-xs font-semibold text-brand-gold backdrop-blur-md">
                    <span className="h-2 w-2 rounded-full bg-brand-gold animate-pulse" />
                    <span>Tested on Corporate Desks</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="flex flex-col justify-center lg:col-span-7">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={growUpVariant}
                className="mb-8"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
                  The Institutional Advantage
                </span>
                <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-brand-navy sm:text-3xl lg:text-4xl">
                  Why Prashanti Academy?
                </h3>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={staggerContainer}
                className="space-y-4"
              >
                {differentiators.map((diff, index) => {
                  const Icon = diff.icon;
                  return (
                    <motion.div
                      key={diff.title}
                      variants={itemGrowVariant}
                      className="group relative flex items-start gap-4 rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs transition-all duration-300 hover:-translate-x-1 hover:border-brand-gold hover:shadow-lg hover:shadow-brand-navy/5"
                    >
                      <div className="inline-flex shrink-0 rounded-xl bg-brand-navy/5 p-3 text-brand-navy transition-colors duration-300 group-hover:bg-brand-navy group-hover:text-brand-gold">
                        <Icon className="h-6 w-6" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-base sm:text-lg font-bold text-brand-navy">
                            {diff.title}
                          </h4>
                          <span className="text-xs font-black text-slate-300 group-hover:text-brand-gold transition-colors">
                            0{index + 1}
                          </span>
                        </div>
                        <p className="mt-1.5 text-xs sm:text-sm leading-[120%] text-slate-600">
                          {diff.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={growUpVariant}
            className="relative mt-16 overflow-hidden rounded-2xl border border-white/10 bg-[#0e1d40] px-6 py-6 shadow-2xl sm:px-8 sm:py-7"
          >
            {/* Right Side Background Image */}
            <div className="pointer-events-none absolute inset-y-0 right-0 z-0 w-full sm:w-3/5 lg:w-1/2 overflow-hidden">
              <Image
                src="/images/summary-chart-bg.jpg"
                alt="Financial Growth Chart"
                fill
                priority={false}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 50vw"
                className="object-cover object-right opacity-35"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to right, #0e1d40 0%, rgba(14, 29, 64, 0.8) 40%, rgba(14, 29, 64, 0.2) 100%)",
                }}
              />
            </div>

            <div className="relative z-10 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6 max-w-4xl">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                    Ready to Navigate Financial Markets with Confidence?
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-300">
                    Whether you are looking to understand global economics, make informed personal investment decisions, or pursue a career in finance, Prashanti Academy provides structured guidance, market insights, and practical tools.
                  </p>
                </div>
              </div>

              <div className="shrink-0 self-start lg:self-center">
                <Link
                  href="#courses"
                  className="group inline-flex items-center gap-2 rounded-xl bg-[#FDB827] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-950 shadow-[0_4px_18px_rgba(253,184,39,0.35)] transition-all duration-300 hover:bg-amber-300 hover:shadow-[0_6px_24px_rgba(253,184,39,0.5)] active:scale-95"
                >
                  <span>VIEW OUR COURSES</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}