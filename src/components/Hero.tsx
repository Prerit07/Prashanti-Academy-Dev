// LIGHT HERO SECTION

// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";
// import { 
//   ArrowUpRight, 
//   TrendingUp, 
//   Globe2, 
//   Landmark, 
//   ShieldCheck, 
//   Sparkles,
//   Building2
// } from "lucide-react";

// export default function Hero() {
//   const markets = [
//     { title: "Stocks", icon: TrendingUp },
//     { title: "Forex", icon: Globe2 },
//     { title: "Bonds", icon: Landmark },
//     { title: "Derivatives", icon: ShieldCheck },
//   ];

//   return (
//     <section className="relative overflow-hidden bg-slate-50/70 py-20 sm:py-28 lg:py-32">
//       {/* Dynamic Animated Ambient Blur Orbs */}
//       <motion.div
//         animate={{
//           scale: [1, 1.15, 1],
//           opacity: [0.35, 0.55, 0.35],
//           x: [0, 25, 0],
//         }}
//         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//         className="pointer-events-none absolute -left-20 -top-20 h-96 w-96 rounded-full bg-brand-gold/20 blur-3xl"
//       />
//       <motion.div
//         animate={{
//           scale: [1, 1.2, 1],
//           opacity: [0.25, 0.45, 0.25],
//           y: [0, 30, 0],
//         }}
//         transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
//         className="pointer-events-none absolute -right-20 top-1/4 h-[420px] w-[420px] rounded-full bg-brand-navy/15 blur-3xl"
//       />

//       {/* Financial Matrix Grid Line Pattern */}
//       <div 
//         className="pointer-events-none absolute inset-0 opacity-[0.05]"
//         style={{
//           backgroundImage: `
//             linear-gradient(to right, #152549 1px, transparent 1px),
//             linear-gradient(to bottom, #152549 1px, transparent 1px)
//           `,
//           backgroundSize: "40px 40px",
//         }}
//       />

//       {/* Subtle Trend Line Silhouette */}
//       <div className="pointer-events-none absolute inset-x-0 bottom-0 top-16 overflow-hidden opacity-25">
//         <svg
//           viewBox="0 0 1200 350"
//           className="h-full w-full object-cover"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <motion.path
//             d="M0,280 C200,260 300,160 500,210 C700,260 800,80 1000,130 C1100,160 1150,50 1200,30"
//             stroke="url(#hero-chart-gradient)"
//             strokeWidth="3"
//             strokeDasharray="6 6"
//             initial={{ pathLength: 0 }}
//             animate={{ pathLength: 1 }}
//             transition={{ duration: 3, ease: "easeOut" }}
//           />
//           <defs>
//             <linearGradient id="hero-chart-gradient" x1="0" y1="0" x2="1" y2="0">
//               <stop offset="0%" stopColor="#152549" stopOpacity="0.2" />
//               <stop offset="50%" stopColor="#BC9538" stopOpacity="0.9" />
//               <stop offset="100%" stopColor="#152549" stopOpacity="0.4" />
//             </linearGradient>
//           </defs>
//         </svg>
//       </div>

//       <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        
//         {/* Crisp Trust Tag */}
//         <motion.div
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.4 }}
//           className="inline-flex items-center rounded-full border border-brand-gold/40 bg-white/80 px-4 py-1.5 text-xs font-semibold tracking-wide text-brand-navy shadow-sm backdrop-blur-md"
//         >
//           {/* <Building2 className="h-3.5 w-3.5 text-brand-gold" /> */}
//           <span>Corporate Training Heritage • Now Open to Learners</span>
//         </motion.div>

//         {/* High-Impact Headline */}
//         <motion.h1
//           initial={{ opacity: 0, y: 15 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.1 }}
//           className="mt-6 text-4xl font-extrabold tracking-tight text-brand-navy sm:text-6xl lg:text-7xl"
//         >
//           Master How <br className="hidden sm:inline" />
//           <span className="relative inline-block text-brand-gold">
//             Money Moves.
//             <span className="absolute -bottom-1 left-0 h-1.5 w-full bg-brand-gold/30 rounded-full" />
//           </span>
//         </motion.h1>

//         {/* Clean, 2-Line Subheading */}
//         <motion.p
//           initial={{ opacity: 0, y: 15 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg"
//         >
//           Corporate-grade trading discipline, institutional research, and risk management-simplified 
//           for ambitious learners and investors.
//         </motion.p>

//         {/* Direct Action Buttons */}
//         <motion.div
//           initial={{ opacity: 0, y: 15 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.3 }}
//           className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
//         >
//           <Link
//             href="#courses"
//             className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-brand-gold/60 bg-brand-navy px-8 py-4 text-sm font-semibold tracking-wide text-white shadow-[0_10px_25px_-5px_rgba(21,37,73,0.25)] transition-all duration-300 hover:border-brand-gold hover:bg-brand-gold hover:text-brand-navy sm:w-auto"
//           >
//             <Sparkles className="h-4 w-4 text-brand-gold transition-colors group-hover:text-brand-navy" />
//             <span>Explore Online Courses</span>
//             <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//           </Link>

//           <Link
//             href="#contact"
//             className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white/90 px-8 py-4 text-sm font-semibold tracking-wide text-brand-navy shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-brand-navy hover:bg-slate-50 sm:w-auto"
//           >
//             <span>Offline & Corporate Batches</span>
//             <ArrowUpRight className="h-4 w-4 text-slate-400" />
//           </Link>
//         </motion.div>

//         {/* Minimal 4 Pillars Badges */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="mt-14 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
//         >
//           {markets.map((item) => {
//             const Icon = item.icon;
//             return (
//               <div
//                 key={item.title}
//                 className="flex items-center gap-2 rounded-xl border border-slate-200/90 bg-white/80 px-4 py-2 text-xs font-semibold text-brand-navy shadow-sm backdrop-blur-md transition-all hover:border-brand-gold/60 hover:text-brand-gold"
//               >
//                 <Icon className="h-4 w-4 text-brand-gold" />
//                 <span>{item.title}</span>
//               </div>
//             );
//           })}
//         </motion.div>

//       </div>
//     </section>
//   );
// }

// DARK HERO SECTION

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowUpRight, 
  TrendingUp, 
  Globe2, 
  Landmark, 
  ShieldCheck, 
  Sparkles,
  Building2
} from "lucide-react";

export default function Hero() {
  const markets = [
    { title: "Stocks", icon: TrendingUp },
    { title: "Forex", icon: Globe2 },
    { title: "Bonds", icon: Landmark },
    { title: "Derivatives", icon: ShieldCheck },
  ];

  return (
    <section className="relative h-auto overflow-hidden bg-brand-navy py-28 sm:py-28 lg:py-32 text-white">
     <motion.div
        initial={{ scale: 1, opacity: 0.7 }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.7, 0.9, 0.7],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-24 -top-24 h-105 w-105 rounded-full blur-2xl"
        style={{
          background: "radial-gradient(circle, rgba(188, 149, 56, 0.35) 0%, rgba(188, 149, 56, 0.08) 50%, transparent 75%)",
        }}
      />

      <motion.div
        initial={{ scale: 1, opacity: 0.6 }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 0.85, 0.6],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="pointer-events-none absolute -right-24 -bottom-16 h-115 w-115 rounded-full blur-2xl"
        style={{
          background: "radial-gradient(circle, rgba(188, 149, 56, 0.3) 0%, rgba(188, 149, 56, 0.06) 55%, transparent 80%)",
        }}
      />

      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #FFFFFF 1px, transparent 1px),
            linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
        }}
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-16 overflow-hidden opacity-30">
        <svg
          viewBox="0 0 1200 350"
          className="h-full w-full object-cover"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M0,280 C200,260 300,160 500,210 C700,260 800,80 1000,130 C1100,160 1150,50 1200,30"
            stroke="url(#navy-hero-chart)"
            strokeWidth="3"
            strokeDasharray="6 6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeOut" }}
          />
          <defs>
            <linearGradient id="navy-hero-chart" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#BC9538" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#BC9538" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 rounded-full border border-brand-gold/40 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-brand-gold shadow-sm backdrop-blur-md"
        >
          <span>Corporate Training Heritage • Now Open to Learners</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-8xl"
        >
          Master How <br className="hidden sm:inline" />
          <span className="relative inline-block text-brand-gold">
            Money Moves.
            <span className="absolute -bottom-1 left-0 h-1.5 w-full bg-brand-gold/40 rounded-full" />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg"
        >
          Corporate-grade trading discipline, institutional research, and risk management - simplified 
          for ambitious learners and investors.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="https://prashantiacademy.urbanpro.com/" target="_blank"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-gold px-8 py-4 text-sm font-semibold tracking-wide text-brand-navy shadow-lg shadow-brand-gold/20 transition-all duration-300 hover:bg-white sm:w-auto"
          >
            <span>Explore Online Courses</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <Link
            href="https://rajatprasad.creator-betterme.com/products" target="_blank"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold tracking-wide text-white backdrop-blur-sm transition-all duration-300 hover:border-brand-gold hover:bg-white/10 sm:w-auto"
          >
            <span>Offline & Corporate Batches</span>
            <ArrowUpRight className="h-4 w-4 text-slate-300" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          {markets.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-200 backdrop-blur-md transition-all hover:border-brand-gold/50 hover:text-brand-gold"
              >
                <Icon className="h-4 w-4 text-brand-gold" />
                <span>{item.title}</span>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}