// "use client";

// import {
//   Award,
//   Landmark,
//   ShieldCheck,
//   GraduationCap,
//   Briefcase,
// } from "lucide-react";
// import { motion, type Variants } from "framer-motion";

// export default function AboutTrainer() {
//   const credentials = [
//     { label: "Experience", value: "20+ Years" },
//     { label: "Foundation", value: "Bank of India Desk" },
//     { label: "Corporate Role", value: "11 Yrs Treasury Head" },
//     { label: "Advisory", value: "BSE Empaneled" },
//   ];

//   const highlights = [
//     {
//       title: "Executive Profile & Focus",
//       icon: Briefcase,
//       desc: "Rajat Prasad is a Certified Treasury Manager with over two decades of hands-on experience across institutional banking, corporate treasury, and global capital markets. At Prashanti Academy, he translates complex financial systems into practical, structured learning for ambitious market enthusiasts, emphasizing disciplined risk management and capital preservation.",
//     },
//     {
//       title: "Institutional Banking & Leadership",
//       icon: Landmark,
//       desc: "Built his foundation at Bank of India with seven years on the Treasury Front Office dealing desk and tenures in core banking operations. He subsequently served for 11 years as Group Treasury Head at Abans Group and a premier export house, leading proprietary trading, FX hedging, cross-currency arbitrage, and dollar financing.",
//     },
//     {
//       title: "BSE Risk Management Advisory",
//       icon: ShieldCheck,
//       desc: "Empaneled with the Bombay Stock Exchange (BSE) Risk Management team, advising exporters and importers on managing currency and interest rate volatility via exchange-traded derivatives. He has also spearheaded nationwide risk awareness campaigns and published educational guides.",
//     },
//     {
//       title: "Mentorship & Executive Training",
//       icon: GraduationCap,
//       desc: "Regularly conducts executive training sessions for working professionals and MBA candidates at premier institutions including the BSE Institute, NIBM, Dun & Bradstreet, and IIBF, delivering institutional insights in a practical, straightforward format.",
//     },
//   ];

//   const growUpVariant: Variants = {
//     hidden: { opacity: 0, scale: 0.94, y: 25 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: [0.16, 1, 0.3, 1],
//       },
//     },
//   };

//   const staggerContainer: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.05,
//       },
//     },
//   };

//   const itemGrowVariant: Variants = {
//     hidden: { opacity: 0, scale: 0.95, y: 15 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       y: 0,
//       transition: {
//         duration: 0.5,
//         ease: [0.16, 1, 0.3, 1],
//       },
//     },
//   };

//   return (
//     <section
//       id="trainer"
//       style={{ backgroundColor: "#0b1733" }}
//       className="relative overflow-hidden py-20 sm:py-28 text-white border-t border-white/10"
//     >
//       <div
//         className="pointer-events-none absolute inset-0 opacity-[0.05]"
//         style={{
//           backgroundImage: `
//             linear-gradient(to right, #ffffff 1px, transparent 1px),
//             linear-gradient(to bottom, #ffffff 1px, transparent 1px)
//           `,
//           backgroundSize: "40px 40px",
//         }}
//       />

//       <div
//         className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full opacity-20 blur-3xl"
//         style={{ backgroundColor: "#BC9538" }}
//       />

//       <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           variants={growUpVariant}
//           className="mx-auto max-w-3xl text-center"
//         >
//           <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-gold shadow-sm backdrop-blur-md">
//             <span>About Trainer</span>
//           </div>

//           <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl max-w-xl mx-auto">
//             Master the Markets with{" "}
//             <span className="text-brand-gold">Rajat Prasad.</span>
//           </h2>

//           <p className="mt-3 text-sm text-slate-300 sm:text-base max-w-2xl mx-auto">
//             Certified Treasury Manager with 20+ years of institutional banking
//             and global markets experience, bringing real trading-desk discipline
//             directly to learners.
//           </p>
//         </motion.div>

//         <div className="mt-14 grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//             variants={growUpVariant}
//             className="lg:col-span-5 lg:sticky lg:top-28"
//           >
//             <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-3 shadow-2xl backdrop-blur-md">
//               <div className="relative h-110 w-full overflow-hidden rounded-2xl bg-[#060e22]">
//                 <img
//                   src="/images/rajat-ji-image.png"
//                   onError={(e) => {
//                     e.currentTarget.src = "/images/rajat-prasad.jpg";
//                   }}
//                   alt="Rajat Prasad - Certified Treasury Manager"
//                   className="h-full w-full object-cover object-top brightness-95 transition-transform duration-700 hover:scale-105"
//                 />

//                 <div className="absolute inset-0 bg-linear-to-t from-[#060e22] via-transparent to-transparent" />

//                 <div className="absolute bottom-0 left-0 right-0 rounded-xl border border-white/10 bg-[#0b1733]/90 p-3.5 backdrop-blur-lg shadow-lg">
//                   <h3 className="text-lg font-bold text-white">Rajat Prasad</h3>
//                   <p className="text-[11px] font-medium text-amber-400 uppercase tracking-wider">
//                     Institutional Treasury Veteran • BSE Risk Advisor
//                   </p>
//                 </div>
//               </div>

//               <div className="mt-3 grid grid-cols-2 gap-2">
//                 {credentials.map((stat) => (
//                   <div
//                     key={stat.label}
//                     className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-center"
//                   >
//                     <p className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">
//                       {stat.label}
//                     </p>
//                     <p className="mt-0.5 text-xs font-bold text-white">
//                       {stat.value}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>

//           <div className="flex flex-col justify-center lg:col-span-7">
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.15 }}
//               variants={staggerContainer}
//               className="space-y-3.5"
//             >
//               {highlights.map((item) => {
//                 const Icon = item.icon;
//                 return (
//                   <motion.div
//                     key={item.title}
//                     variants={itemGrowVariant}
//                     className="group relative rounded-2xl border border-white/10 bg-white/5 p-4.5 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-amber-400/50 hover:bg-white/8"
//                   >
//                     <div className="flex items-start gap-3.5">
//                       <div className="rounded-xl border border-amber-400/30 bg-amber-400/10 p-2.5 text-amber-400 shrink-0 transition-colors group-hover:bg-amber-400 group-hover:text-[#0b1733]">
//                         <Icon className="h-4.5 w-4.5" />
//                       </div>

//                       <div>
//                         <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-amber-400 transition-colors">
//                           {item.title}
//                         </h4>
//                         <p className="mt-1 text-xs sm:text-sm leading-relaxed text-slate-300">
//                           {item.desc}
//                         </p>
//                       </div>
//                     </div>
//                   </motion.div>
//                 );
//               })}
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import {
  Award,
  Landmark,
  ShieldCheck,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";

export default function AboutTrainer() {
  const credentials = [
    { label: "Experience", value: "20+ Years" },
    { label: "Foundation", value: "Bank of India Desk" },
    { label: "Corporate Role", value: "11 Yrs Treasury Head" },
    { label: "Advisory", value: "BSE Empaneled" },
  ];

  const highlights = [
    {
      title: "Executive Profile & Focus",
      icon: Briefcase,
      desc: "Rajat Prasad is a Certified Treasury Manager with over two decades of hands-on experience across institutional banking, corporate treasury, and global capital markets. At Prashanti Academy, he translates complex financial systems into practical, structured learning for ambitious market enthusiasts, emphasizing disciplined risk management and capital preservation.",
    },
    {
      title: "Institutional Banking & Leadership",
      icon: Landmark,
      desc: "Built his foundation at Bank of India with seven years on the Treasury Front Office dealing desk and tenures in core banking operations. He subsequently served for 11 years as Group Treasury Head at Abans Group and a premier export house, leading proprietary trading, FX hedging, cross-currency arbitrage, and dollar financing.",
    },
    {
      title: "BSE Risk Management Advisory",
      icon: ShieldCheck,
      desc: "Empaneled with the Bombay Stock Exchange (BSE) Risk Management team, advising exporters and importers on managing currency and interest rate volatility via exchange-traded derivatives. He has also spearheaded nationwide risk awareness campaigns and published educational guides.",
    },
    {
      title: "Mentorship & Executive Training",
      icon: GraduationCap,
      desc: "Regularly conducts executive training sessions for working professionals and MBA candidates at premier institutions including the BSE Institute, NIBM, Dun & Bradstreet, and IIBF, delivering institutional insights in a practical, straightforward format.",
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
    hidden: { opacity: 0, scale: 0.95, y: 15 },
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
    <section
      id="trainer"
      style={{ backgroundColor: "#0b1733" }}
      className="relative overflow-hidden py-20 sm:py-28 text-white border-t border-white/10"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div
        className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ backgroundColor: "#BC9538" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={growUpVariant}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-gold shadow-sm backdrop-blur-md">
            <span>About Trainer</span>
          </div>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl max-w-xl mx-auto">
            Master the Markets with{" "}
            <span className="text-brand-gold">Rajat Prasad.</span>
          </h2>

          <p className="mt-3 text-sm text-slate-300 sm:text-base max-w-2xl mx-auto">
            Certified Treasury Manager with 20+ years of institutional banking
            and global markets experience, bringing real trading-desk discipline
            directly to learners.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={growUpVariant}
            className="lg:col-span-5 h-full flex"
          >
            <div className="relative flex flex-col justify-between w-full h-full overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-3.5 shadow-2xl backdrop-blur-md">
              
              <div className="relative flex-1 min-h-95 w-full overflow-hidden rounded-2xl bg-[#060e22]">
                <img
                  src="/images/rajat-ji-image.png"
                  onError={(e) => {
                    e.currentTarget.src = "/images/rajat-prasad.jpg";
                  }}
                  alt="Rajat Prasad - Certified Treasury Manager"
                  className="h-full w-full object-cover object-top brightness-95 transition-transform duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-linear-to-t from-[#060e22] via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 rounded-xl border border-white/10 bg-[#0b1733]/90 p-3.5 backdrop-blur-lg shadow-lg">
                  <h3 className="text-lg font-bold text-white">Rajat Prasad</h3>
                  <p className="text-[11px] font-medium text-amber-400 uppercase tracking-wider">
                    Institutional Treasury Veteran • BSE Risk Advisor
                  </p>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2 shrink-0">
                {credentials.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-center"
                  >
                    <p className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">
                      {stat.label}
                    </p>
                    <p className="mt-0.5 text-xs font-bold text-white">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-7 h-full flex flex-col">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={staggerContainer}
              className="flex flex-col justify-between h-full gap-3.5"
            >
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    variants={itemGrowVariant}
                    className="group relative flex-1 flex flex-col justify-center rounded-2xl border border-white/10 bg-white/5 p-4.5 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-amber-400/50 hover:bg-white/8"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="rounded-xl border border-amber-400/30 bg-amber-400/10 p-2.5 text-amber-400 shrink-0 transition-colors group-hover:bg-amber-400 group-hover:text-[#0b1733]">
                        <Icon className="h-4.5 w-4.5" />
                      </div>

                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-xs sm:text-sm leading-relaxed text-slate-300">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
