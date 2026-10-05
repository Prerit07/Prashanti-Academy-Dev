// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import {
//   Star,
//   Quote,
//   CheckCircle2,
//   ExternalLink,
//   X,
//   Sparkles,
//   ShieldCheck,
// } from "lucide-react";
// import { motion, AnimatePresence, type Variants } from "framer-motion";

// export default function StudentReviews() {
//   const reviews = [
//     {
//       id: 1,
//       name: "Aakanksha",
//       course: "Stock Market Trading",
//       rating: 5,
//       highlight: "A genuine game-changer for my trading journey",
//       feedback:
//         "Attending Rajat Prasad’s stock market classes has been a genuine game-changer for my trading journey. Before joining, the market felt like a chaotic puzzle of technical jargon and emotional guesswork. Rajat sir has a rare gift for demystifying complex concepts, breaking down technical analysis, candlestick patterns, and price action into practical, real-world strategies. What sets his sessions apart is the relentless focus on risk management and discipline rather than empty stock tips. The interactive live market breakdowns gave me clarity and confidence.",
//       screenshot: "/images/rev-1.jpeg",
//       verifiedPlatform: "UrbanPro Verified Student",
//     },
//     {
//       id: 2,
//       name: "Tanishq",
//       course: "Stock Market Trading",
//       rating: 5,
//       highlight: "Focus on disciplined trading & risk management",
//       feedback:
//         "I had the privilege of learning stock market trading from Rajat Prasad, and the experience has been truly valuable. His teaching style is simple, practical, and easy to understand, making even complex market concepts accessible to beginners. What sets him apart is his emphasis on disciplined trading, risk management, and developing the right mindset rather than chasing quick profits. Every session was backed by real market examples, which helped me build confidence in analyzing charts.",
//       screenshot: "/images/rev-2.jpeg",
//       verifiedPlatform: "UrbanPro Verified Student",
//     },
//     {
//       id: 3,
//       name: "Khushboo",
//       course: "Stock Analysis Course",
//       rating: 5,
//       highlight: "Practical approach with real market examples",
//       feedback:
//         "Excellent Stock Analysis Course! Rajat Sir’s teaching style is really nice and easy to understand. He explains candlestick patterns very clearly and supports the concepts with real market examples, which makes it much easier to understand how they work in actual trading. The practical approach and simple explanations make the course very useful, especially for beginners. Highly recommended for anyone who wants to learn stock analysis in a practical way.",
//       screenshot: "/images/rev-3.jpeg",
//       verifiedPlatform: "UrbanPro Verified Student",
//     },
//   ];

//   const [previewImage, setPreviewImage] = useState<string | null>(null);

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
//         staggerChildren: 0.12,
//         delayChildren: 0.05,
//       },
//     },
//   };

//   const cardVariant: Variants = {
//     hidden: { opacity: 0, scale: 0.95, y: 20 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       y: 0,
//       transition: {
//         duration: 0.55,
//         ease: [0.16, 1, 0.3, 1],
//       },
//     },
//   };

//   return (
//     <section
//       id="reviews"
//       className="relative overflow-hidden bg-slate-50/80 py-24 sm:py-32 border-t border-slate-200/90"
//     >
//       {/* Light Blueprint Grid Texture */}
//       <div
//         className="pointer-events-none absolute inset-0 opacity-[0.035]"
//         style={{
//           backgroundImage: `
//             linear-gradient(to right, #0b1733 1px, transparent 1px),
//             linear-gradient(to bottom, #0b1733 1px, transparent 1px)
//           `,
//           backgroundSize: "44px 44px",
//         }}
//       />

//       <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
//         {/* ================= HEADER ================= */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           variants={growUpVariant}
//           className="mx-auto max-w-3xl text-center"
//         >
//           <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0b1733] shadow-xs">
//             <span>Learner Feedback</span>
//           </div>

//           <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#0b1733] sm:text-4xl lg:text-5xl">
//             Real Reviews From <span className="text-brand-gold">Real Students.</span>
//           </h2>

//           <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-slate-600 max-w-2xl mx-auto">
//             Authentic feedback from learners who mastered market discipline, candlestick mechanics, and risk management with Rajat Prasad.
//           </p>

//           {/* Social Proof Strip */}
//           <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-2.5 shadow-2xs">
//             <div className="flex items-center gap-1 text-amber-500">
//               {[...Array(5)].map((_, i) => (
//                 <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
//               ))}
//             </div>
//             <span className="text-xs font-bold text-[#0b1733]">
//               5.0 / 5.0 Rated Instructor
//             </span>
//             <span className="hidden sm:inline text-slate-300">•</span>
//             <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
//               <ShieldCheck className="h-4 w-4 text-emerald-600" />
//               <span>100% Verified UrbanPro Profiles</span>
//             </div>
//           </div>
//         </motion.div>

//         {/* ================= 3-COLUMN REVIEWS GRID ================= */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.1 }}
//           variants={staggerContainer}
//           className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
//         >
//           {reviews.map((rev) => (
//             <motion.div
//               key={rev.id}
//               variants={cardVariant}
//               className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-8 shadow-xl shadow-[#0b1733]/5 transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-400 hover:shadow-2xl"
//             >
//               <div>
//                 {/* Header: Stars & Quote Icon */}
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-1 text-amber-400">
//                     {[...Array(rev.rating)].map((_, i) => (
//                       <Star
//                         key={i}
//                         className="h-4 w-4 fill-amber-400 text-amber-400"
//                       />
//                     ))}
//                   </div>
//                   <Quote className="h-7 w-7 text-amber-500/25 transition-colors group-hover:text-amber-500/40" />
//                 </div>

//                 {/* Highlight Tagline */}
//                 <p className="mt-5 text-base font-bold text-[#0b1733] leading-snug">
//                   "{rev.highlight}"
//                 </p>

//                 {/* Full Feedback Body */}
//                 <p className="mt-3.5 text-xs sm:text-sm leading-relaxed text-slate-600">
//                   {rev.feedback}
//                 </p>
//               </div>

//               <div className="mt-8 border-t border-slate-100 pt-5">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <h3 className="text-sm font-bold text-[#0b1733]">
//                       {rev.name}
//                     </h3>
//                     <p className="text-[11px] font-medium text-brand-gold">
//                       {rev.course}
//                     </p>
//                   </div>

//                   <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/60 rounded-full px-2.5 py-0.5">
//                     <CheckCircle2 className="h-3 w-3" />
//                     <span>Verified</span>
//                   </div>
//                 </div>

//                 {/* View Proof Button */}
//                 <button
//                   type="button"
//                   onClick={() => setPreviewImage(rev.screenshot)}
//                   className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 py-2.5 text-[11px] font-bold text-[#0b1733] transition-colors hover:border-amber-400 hover:bg-amber-50"
//                 >
//                   <span>View </span>
//                   <ExternalLink className="h-3 w-3 text-amber-600" />
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* ================= BOTTOM REDIRECTION STRIP ================= */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           variants={growUpVariant}
//           className="mt-14 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 text-center shadow-xs"
//         >
//           <p className="text-xs sm:text-sm text-slate-600">
//             Want to see all reviews and verified batch metrics directly?{" "}
//             <a
//               href="https://prashantiacademy.urbanpro.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="font-bold text-[#0b1733] underline decoration-amber-400 decoration-2 underline-offset-4 hover:text-brand-gold transition-colors"
//             >
//               Visit Rajat Prasad's Official UrbanPro Profile
//             </a>
//           </p>
//         </motion.div>

//       </div>

//       {/* ================= FULLSCREEN SCREENSHOT PREVIEW MODAL ================= */}
//       <AnimatePresence>
//         {previewImage && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
//             onClick={() => setPreviewImage(null)}
//           >
//             <div
//               className="relative max-h-[92vh] max-w-lg overflow-hidden rounded-2xl bg-white p-2.5 shadow-2xl"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <button
//                 type="button"
//                 onClick={() => setPreviewImage(null)}
//                 className="absolute top-4 right-4 z-10 rounded-full bg-[#0b1733] p-2 text-white hover:bg-amber-400 hover:text-black transition-colors shadow-md"
//                 aria-label="Close Preview"
//               >
//                 <X className="h-4 w-4" />
//               </button>

//               <div className="relative aspect-[3/4] w-[85vw] max-w-md">
//                 <Image
//                   src={previewImage}
//                   alt="UrbanPro Student Review Screenshot"
//                   fill
//                   sizes="(max-width: 768px) 85vw, 450px"
//                   className="object-contain rounded-xl"
//                 />
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }

"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  Star,
  Quote,
  CheckCircle2,
  ExternalLink,
  X,
  Sparkles,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

// Swiper React Components & Modules
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Autoplay, Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";

export default function StudentReviews() {
  const reviews = [
    {
      id: 1,
      name: "Aakanksha",
      course: "Stock Market Trading",
      rating: 5,
      highlight: "A genuine game-changer for my trading journey",
      feedback:
        "Attending Rajat Prasad’s stock market classes has been a genuine game-changer for my trading journey. Before joining, the market felt like a chaotic puzzle of technical jargon and emotional guesswork. Rajat sir has a rare gift for demystifying complex concepts, breaking down technical analysis, candlestick patterns, and price action into practical, real-world strategies. What sets his sessions apart is the relentless focus on risk management and discipline rather than empty stock tips. The interactive live market breakdowns gave me clarity and confidence to trade systematically.",
      screenshot: "/images/rev-1.jpeg",
      hours: "20 hrs completed",
    },
    {
      id: 2,
      name: "Tanishq",
      course: "Stock Market Trading",
      rating: 5,
      highlight: "Focus on disciplined trading & risk management",
      feedback:
        "I had the privilege of learning stock market trading from Rajat Prasad, and the experience has been truly valuable. His teaching style is simple, practical, and easy to understand, making even complex market concepts accessible to beginners. What sets him apart is his emphasis on disciplined trading, risk management, and developing the right mindset rather than chasing quick profits. Every session was backed by real market examples, which helped me build confidence in analyzing charts.",
      screenshot: "/images/rev-2.jpeg",
      hours: "20 hrs completed",
    },
    {
      id: 3,
      name: "Khushboo",
      course: "Stock Analysis Course",
      rating: 5,
      highlight: "Practical approach with real market examples",
      feedback:
        "Excellent Stock Analysis Course! Rajat Sir’s teaching style is really nice and easy to understand. He explains candlestick patterns very clearly and supports the concepts with real market examples, which makes it much easier to understand how they work in actual trading. The practical approach and simple explanations make the course very useful, especially for beginners. Highly recommended for anyone who wants to learn stock analysis in a practical way.",
      screenshot: "/images/rev-3.jpeg",
      hours: "20 hrs completed",
    },
  ];

  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Jab screen par aaye tabhi autoplay trigger ho
  useEffect(() => {
    if (!sectionRef.current || !swiperInstance) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          swiperInstance.autoplay.start();
        } else {
          swiperInstance.autoplay.stop();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [swiperInstance]);

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

  return (
    <section
      ref={sectionRef}
      id="reviews"
      className="relative overflow-hidden bg-slate-50/80 py-24 sm:py-32 border-t border-slate-200/90"
    >
        
      {/* Background Subtle Blueprint Grid */}
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

      <div className="pointer-events-none absolute -top-10 -right-10 z-0 select-none overflow-hidden opacity-[0.14]">
        <Quote className="h-72 w-72 rotate-12 text-brand-gold blur-[2px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={growUpVariant}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0b1733] shadow-xs">
            <span>Learner Feedback</span>
          </div>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#0b1733] sm:text-4xl lg:text-5xl">
            Real Reviews From <span className="text-brand-gold">Real Students.</span>
          </h2>

          <p className="mt-3.5 text-sm sm:text-base leading-[120%] text-slate-600 max-w-2xl mx-auto">
            Authentic feedback from learners who mastered market discipline, candlestick mechanics, and risk management with Rajat Prasad.
          </p>

          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-2.5 shadow-2xs">
            <div className="flex items-center gap-1 text-brand-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-brand-gold" />
              ))}
            </div>
            <span className="text-xs font-bold text-[#0b1733]">
              5.0 / 5.0 Rated Instructor
            </span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              <span>100% Verified UrbanPro Profiles</span>
            </div>
          </div>
        </motion.div>

        <div className="mt-14 mx-auto max-w-3xl relative">
          <Swiper
            grabCursor={true}
            effect={"coverflow"}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: ["-20%", 0, -200],
                opacity: 0.6,
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
            loop={true}
            speed={600}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            onSwiper={(swiper) => {
              setSwiperInstance(swiper);
              swiper.autoplay.stop();
            }}
            modules={[EffectCreative, Autoplay, Navigation, Pagination]}
            className="w-full pb-12"
          >
            {reviews.map((rev) => (
              <SwiperSlide key={rev.id} className="p-2">
                <div className="relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-10 shadow-xl shadow-[#0b1733]/5 h-140 md:h-auto min-h-105">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-amber-400">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4.5 w-4.5 fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>
                      <Quote className="h-8 w-8 text-amber-500/20" />
                    </div>

                    <h3 className="mt-5 text-lg sm:text-xl font-bold text-[#0b1733] leading-snug">
                      "{rev.highlight}"
                    </h3>

                    <p className="mt-3.5 text-xs sm:text-sm leading-relaxed text-slate-600">
                      {rev.feedback}
                    </p>
                  </div>

                  <div className="mt-8 border-t border-slate-100 pt-5">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-base font-bold text-[#0b1733]">
                            {rev.name}
                          </h4>
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/60 rounded-full px-2 py-0.5">
                            <CheckCircle2 className="h-3 w-3" />
                            <span>UrbanPro Verified</span>
                          </span>
                        </div>
                        <p className="text-xs font-medium text-brand-gold mt-0.5">
                          {rev.course}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => setPreviewImage(rev.screenshot)}
                        className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-bold text-[#0b1733] transition-colors hover:border-amber-400 hover:bg-amber-50 active:scale-95"
                      >
                        <span>View</span>
                        <ExternalLink className="h-3.5 w-3.5 text-amber-600" />
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="mt-2 flex items-center justify-center gap-4">
            <button
              onClick={() => swiperInstance?.slidePrev()}
              aria-label="Previous Review"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-xs transition-colors hover:border-amber-400 hover:bg-amber-50 hover:text-[#0b1733] active:scale-95"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => swiperInstance?.slideNext()}
              aria-label="Next Review"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-xs transition-colors hover:border-amber-400 hover:bg-amber-50 hover:text-[#0b1733] active:scale-95"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

      </div>

      <AnimatePresence>
        {previewImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
            onClick={() => setPreviewImage(null)}
          >
            <div
              className="relative max-h-[92vh] max-w-md overflow-hidden rounded-2xl bg-white p-2.5 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setPreviewImage(null)}
                className="absolute top-4 right-4 z-10 rounded-full bg-[#0b1733] p-2 text-white hover:bg-amber-400 hover:text-black transition-colors shadow-md"
                aria-label="Close Preview"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative aspect-3/4 w-[85vw] max-w-sm">
                <Image
                  src={previewImage}
                  alt="UrbanPro Student Review Screenshot"
                  fill
                  sizes="(max-width: 768px) 85vw, 400px"
                  className="object-contain rounded-xl"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}