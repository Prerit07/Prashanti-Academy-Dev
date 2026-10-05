// "use client";

// import { useState, useEffect, useCallback } from "react";
// import Image from "next/image";
// import {
//   ChevronLeft,
//   ChevronRight,
//   Maximize2,
//   X,
//   Award,
//   Building2,
//   Calendar,
//   UserCheck,
// } from "lucide-react";
// import { motion, AnimatePresence, type Variants } from "framer-motion";

// export default function PreviousTrainings() {
//   const trainingSlides = [
//     {
//       id: 1,
//       title: "Basics of Treasury Markets and Bond Mathematics",
//       organizer: "FIMMDA in co-ordination with Dun & Bradstreet",
//       speakerRole: "Rajat Prasad, CEO, Prashanti Forex",
//       dateBadge: "Executive Masterclass",
//       badge: "FIMMDA & D&B",
//       desc: "Institutional training session on treasury market operations, yield dynamics, and fixed-income mathematics delivered under FIMMDA and Dun & Bradstreet.",
//       image: "/images/pt-1.jpeg",
//     },
//     {
//       id: 2,
//       title: "Wholesale Banking Products and MNCs in India (Session - 2)",
//       organizer: "Dun & Bradstreet",
//       speakerRole: "Rajat Prasad, CEO, Prashanti Forex",
//       dateBadge: "13 April 2022",
//       badge: "Dun & Bradstreet",
//       desc: "Executive workshop focusing on structured wholesale banking credit, liquidity architecture, and multinational corporate banking instruments in India.",
//       image: "/images/pt-2.jpeg",
//     },
//     {
//       id: 3,
//       title: "Wholesale Banking Products and MNCs in India (Session - 2)",
//       organizer: "Dun & Bradstreet",
//       speakerRole: "Rajat Prasad, CEO, Prashanti Forex",
//       dateBadge: "06 May 2022",
//       badge: "Dun & Bradstreet",
//       desc: "Advanced executive cohort analyzing cross-border dollar financing, corporate balance sheet hedging, and multinational commercial operations.",
//       image: "/images/pt-3.jpeg",
//     },
//     {
//       id: 4,
//       title: "Wholesale Banking Products and MNCs in India (Session - 2)",
//       organizer: "Dun & Bradstreet",
//       speakerRole: "Rajat Prasad, CEO, Prashanti Forex",
//       dateBadge: "03 June 2022",
//       badge: "Dun & Bradstreet",
//       desc: "Specialized corporate session training working professionals and corporate finance leaders on foreign exchange risk and wholesale product structuring.",
//       image: "/images/pt-4.jpeg",
//     },
//   ];

//   const [[page, direction], setPage] = useState<[number, number]>([0, 0]);
//   const [isPaused, setIsPaused] = useState(false);
//   const [selectedImage, setSelectedImage] = useState<string | null>(null);

//   const currentIndex = Math.abs(page % trainingSlides.length);

//   const paginate = useCallback(
//     (newDirection: number) => {
//       setPage(([prevPage]) => [prevPage + newDirection, newDirection]);
//     },
//     []
//   );

//   useEffect(() => {
//     if (isPaused || selectedImage) return;
//     const interval = setInterval(() => {
//       paginate(1);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [isPaused, selectedImage, paginate]);

//   const slideVariants: Variants = {
//     enter: (direction: number) => ({
//       x: direction > 0 ? "100%" : "-100%",
//       opacity: 0,
//       scale: 0.98,
//     }),
//     center: {
//       zIndex: 1,
//       x: 0,
//       opacity: 1,
//       scale: 1,
//       transition: {
//         x: { type: "spring", stiffness: 260, damping: 28 },
//         opacity: { duration: 0.35 },
//       },
//     },
//     exit: (direction: number) => ({
//       zIndex: 0,
//       x: direction < 0 ? "100%" : "-100%",
//       opacity: 0,
//       scale: 0.98,
//       transition: {
//         x: { type: "spring", stiffness: 260, damping: 28 },
//         opacity: { duration: 0.25 },
//       },
//     }),
//   };

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

//   const current = trainingSlides[currentIndex];

//   return (
//     <section
//       id="previous-trainings"
//       className="relative overflow-hidden bg-white py-24 sm:py-32 border-t border-slate-200/90"
//       onMouseEnter={() => setIsPaused(true)}
//       onMouseLeave={() => setIsPaused(false)}
//     >
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
        
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           variants={growUpVariant}
//           className="mx-auto max-w-3xl text-center"
//         >
//           <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-50/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0b1733] shadow-xs">
//             <span>Executive Training Track Record</span>
//           </div>

//           <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#0b1733] sm:text-4xl lg:text-5xl">
//             Previous Institutional <span className="text-brand-gold">Trainings.</span>
//           </h2>

//           <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-slate-600 max-w-2xl mx-auto">
//             Actual executive deck archives from masterclasses conducted for FIMMDA and Dun & Bradstreet on wholesale banking, bond mathematics, and treasury markets.
//           </p>
//         </motion.div>

//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.15 }}
//           variants={growUpVariant}
//           className="mt-14 relative"
//         >
//           <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-slate-50/70 p-4 sm:p-6 lg:p-8 shadow-xl shadow-[#0b1733]/5">
//             <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
              
//               <div className="lg:col-span-7">
//                 <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-slate-300/80 bg-white shadow-md">
//                   <AnimatePresence initial={false} custom={direction}>
//                     <motion.div
//                       key={page}
//                       custom={direction}
//                       variants={slideVariants}
//                       initial="enter"
//                       animate="center"
//                       exit="exit"
//                       className="absolute inset-0 h-full w-full"
//                     >
//                       <Image
//                         src={current.image}
//                         alt={current.title}
//                         fill
//                         sizes="(max-width: 1024px) 100vw, 60vw"
//                         className="object-contain p-2 sm:p-4"
//                         priority
//                       />
//                     </motion.div>
//                   </AnimatePresence>

//                   <div className="absolute top-4 left-4 z-20 inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/95 px-3 py-1 text-xs font-bold text-[#0b1733] shadow-sm backdrop-blur-md">
//                     <Award className="h-3.5 w-3.5 text-amber-500" />
//                     <span>{current.badge}</span>
//                   </div>

//                   {/* <button
//                     onClick={() => setSelectedImage(current.image)}
//                     className="absolute bottom-4 right-4 z-20 inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-[#0b1733] px-3.5 py-1.5 text-xs font-semibold text-white shadow-md backdrop-blur-md transition-all hover:bg-amber-400 hover:text-slate-950 active:scale-95"
//                   >
//                     <Maximize2 className="h-3.5 w-3.5" />
//                   </button> */}
//                 </div>
//               </div>

//               <div className="flex flex-col justify-between lg:col-span-5">
//                 <AnimatePresence mode="wait">
//                   <motion.div
//                     key={page}
//                     initial={{ opacity: 0, y: 12 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -12 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     {/* <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600">
//                       <Building2 className="h-4 w-4" />
//                       <span>{current.organizer}</span>
//                     </div> */}

//                     <h3 className="mt-3 text-xl font-bold tracking-tight text-[#0b1733] sm:text-2xl leading-snug">
//                       {current.title}
//                     </h3>

//                     <div className="mt-4 flex flex-wrap items-center gap-2.5">
//                       <div className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-[#0b1733] shadow-2xs">
//                         <UserCheck className="h-3.5 w-3.5 text-amber-500" />
//                         <span>{current.speakerRole}</span>
//                       </div>

//                       <div className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-2xs">
//                         <Calendar className="h-3.5 w-3.5 text-amber-500" />
//                         <span>{current.dateBadge}</span>
//                       </div>
//                     </div>

//                     <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-600">
//                       {current.desc}
//                     </p>

//                     <div className="mt-6 inline-flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-xs font-semibold text-emerald-800">
//                       <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
//                       <span>Verified Corporate Session</span>
//                     </div>
//                   </motion.div>
//                 </AnimatePresence>

//                 {/* Controls & Slide Counter */}
//                 <div className="mt-8 flex items-center justify-between border-t border-slate-200/80 pt-6">
//                   <div className="text-xs font-bold tracking-wider text-slate-400">
//                     <span className="text-xl font-extrabold text-[#0b1733]">
//                       0{currentIndex + 1}
//                     </span>{" "}
//                     / 0{trainingSlides.length}
//                   </div>

//                   <div className="flex items-center gap-2">
//                     <button
//                       onClick={() => paginate(-1)}
//                       aria-label="Previous Training Slide"
//                       className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-xs transition-colors hover:border-amber-400 hover:bg-amber-50 hover:text-[#0b1733] active:scale-95"
//                     >
//                       <ChevronLeft className="h-5 w-5" />
//                     </button>
//                     <button
//                       onClick={() => paginate(1)}
//                       aria-label="Next Training Slide"
//                       className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-xs transition-colors hover:border-amber-400 hover:bg-amber-50 hover:text-[#0b1733] active:scale-95"
//                     >
//                       <ChevronRight className="h-5 w-5" />
//                     </button>
//                   </div>
//                 </div>

//               </div>

//             </div>

//             {/* Pagination Dots */}
//             <div className="mt-6 flex justify-center gap-2">
//               {trainingSlides.map((_, idx) => (
//                 <button
//                   key={idx}
//                   onClick={() => {
//                     const diff = idx - currentIndex;
//                     if (diff !== 0) paginate(diff);
//                   }}
//                   className={`h-2 rounded-full transition-all duration-300 ${
//                     idx === currentIndex
//                       ? "w-8 bg-amber-500"
//                       : "w-2 bg-slate-300 hover:bg-slate-400"
//                   }`}
//                   aria-label={`Go to slide ${idx + 1}`}
//                 />
//               ))}
//             </div>

//           </div>
//         </motion.div>

//       </div>

//       {/* ================= FULLSCREEN MODAL ================= */}
//       <AnimatePresence>
//         {selectedImage && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
//             onClick={() => setSelectedImage(null)}
//           >
//             <div
//               className="relative max-h-[92vh] max-w-5xl overflow-hidden rounded-2xl bg-white p-3 shadow-2xl"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <button
//                 onClick={() => setSelectedImage(null)}
//                 className="absolute top-4 right-4 z-10 rounded-full bg-[#0b1733] p-2 text-white hover:bg-amber-400 hover:text-black transition-colors shadow-md"
//                 aria-label="Close Preview"
//               >
//                 <X className="h-5 w-5" />
//               </button>
              
//               <div className="relative aspect-4/3 w-[88vw] max-w-4xl">
//                 <Image
//                   src={selectedImage}
//                   alt="Training Slide Full Preview"
//                   fill
//                   sizes="100vw"
//                   className="object-contain"
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
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Calendar,
  UserCheck,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function PreviousTrainings() {
  const trainingSlides = [
    {
      id: 1,
      title: "Basics of Treasury Markets and Bond Mathematics",
      organizer: "FIMMDA in co-ordination with Dun & Bradstreet",
      speakerRole: "Rajat Prasad, CEO, Prashanti Forex",
      dateBadge: "Executive Masterclass",
      badge: "FIMMDA & D&B",
      desc: "Institutional training session on treasury market operations and fixed-income mathematics delivered under FIMMDA and Dun & Bradstreet.",
      image: "/images/pt-1.jpeg",
    },
    {
      id: 2,
      title: "Wholesale Banking Products and MNCs in India (Session - 2)",
      organizer: "Dun & Bradstreet",
      speakerRole: "Rajat Prasad, CEO, Prashanti Forex",
      dateBadge: "13 April 2022",
      badge: "Dun & Bradstreet",
      desc: "Executive workshop focusing on structured wholesale banking credit, liquidity architecture, and multinational corporate banking instruments in India.",
      image: "/images/pt-2.jpeg",
    },
    {
      id: 3,
      title: "Wholesale Banking Products and MNCs in India (Session - 2)",
      organizer: "Dun & Bradstreet",
      speakerRole: "Rajat Prasad, CEO, Prashanti Forex",
      dateBadge: "06 May 2022",
      badge: "Dun & Bradstreet",
      desc: "Advanced executive cohort analyzing cross-border dollar financing, corporate balance sheet hedging, and multinational commercial operations.",
      image: "/images/pt-3.jpeg",
    },
    {
      id: 4,
      title: "Wholesale Banking Products and MNCs in India (Session - 2)",
      organizer: "Dun & Bradstreet",
      speakerRole: "Rajat Prasad, CEO, Prashanti Forex",
      dateBadge: "03 June 2022",
      badge: "Dun & Bradstreet",
      desc: "Specialized corporate session training working professionals and corporate finance leaders on foreign exchange risk and wholesale product structuring.",
      image: "/images/pt-4.jpeg",
    },
  ];

  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

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

  const current = trainingSlides[currentSlideIndex];

  return (
    <section
      ref={sectionRef}
      id="previous-trainings"
      className="relative overflow-hidden py-24 sm:py-32 text-white border-t border-white/10"
    >
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/pre-trainings-bg.png"
          alt="Executive Training Hall"
          fill
          sizes="100vw"
          priority={false}
          className="object-cover object-center scale-105 blur-sm opacity-100"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#081226] via-[#081226]/20 to-[#081226]/20" />
        <div className="absolute inset-0 bg-[#081226]/40" />
      </div>

      <div
        className="pointer-events-none absolute -bottom-24 -left-20 h-96 w-96 rounded-full opacity-20 blur-2xl z-1"
        style={{ backgroundColor: "#BC9538" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-gold shadow-sm backdrop-blur-md">
            <span>Executive Training Track Record</span>
          </div>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Previous Institutional <span className="text-brand-gold">Trainings.</span>
          </h2>

          <p className="mt-3.5 text-sm sm:text-base leading-[120%] text-slate-300 max-w-2xl mx-auto">
            Actual executive deck archives from masterclasses conducted for FIMMDA and Dun & Bradstreet on wholesale banking, bond mathematics, and treasury markets.
          </p>
        </div>

        <div className="mt-14 relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-4 sm:p-6 lg:p-8 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
            
            <div className="lg:col-span-7">
              <div className="relative w-full overflow-hidden rounded-2xl border border-white/15 bg-white shadow-xl">
                <Swiper
                  modules={[Autoplay, Navigation, Pagination]}
                  direction="horizontal"
                  loop={true}
                  speed={650}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  onSwiper={(swiper) => {
                    setSwiperInstance(swiper);
                    swiper.autoplay.stop();
                  }}
                  onSlideChange={(swiper) => {
                    setCurrentSlideIndex(swiper.realIndex);
                  }}
                  className="w-full"
                >
                  {trainingSlides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                      <div className="group relative aspect-4/3 w-full bg-white">
                        <Image
                          src={slide.image}
                          alt={slide.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 60vw"
                          className="object-contain p-2 sm:p-4 transition-transform duration-500 group-hover:scale-102"
                          priority
                        />

                        <div className="absolute top-4 left-4 z-20 inline-flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-[#081226]/90 px-3 py-1 text-xs font-bold text-brand-gold backdrop-blur-md shadow-md">
                          <span>{slide.badge}</span>
                        </div>

                        <button
                          onClick={() => setSelectedImage(slide.image)}
                          className="absolute bottom-4 right-4 z-20 inline-flex items-center gap-1.5 rounded-xl border border-white/20 bg-[#081226]/90 px-3.5 py-1.5 text-xs font-semibold text-white shadow-md backdrop-blur-md transition-all hover:bg-amber-400 hover:text-black active:scale-95"
                        >
                          <Maximize2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

            <div className="flex flex-col justify-between lg:col-span-5 min-h-85">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlideIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                >
                  <h3 className="mt-2 text-xl font-bold tracking-tight text-white sm:text-2xl leading-snug">
                    {current.title}
                  </h3>

                  <div className="mt-4 flex flex-wrap items-center gap-2.5">
                    <div className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200">
                      <UserCheck className="h-3.5 w-3.5 text-brand-gold" />
                      <span>{current.speakerRole}</span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-brand-gold">
                      <Calendar className="h-3.5 w-3.5 text-brand-gold" />
                      <span>{current.dateBadge}</span>
                    </div>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-300">
                    {current.desc}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-300">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Verified Corporate Deck</span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slider Controls */}
              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                <div className="text-xs font-bold tracking-wider text-slate-400">
                  <span className="text-xl font-extrabold text-brand-gold">
                    0{currentSlideIndex + 1}
                  </span>{" "}
                  / 0{trainingSlides.length}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => swiperInstance?.slidePrev()}
                    aria-label="Previous Slide"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white shadow-xs transition-colors hover:border-amber-400 hover:bg-amber-400 hover:text-black active:scale-95"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => swiperInstance?.slideNext()}
                    aria-label="Next Slide"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white shadow-xs transition-colors hover:border-amber-400 hover:bg-amber-400 hover:text-black active:scale-95"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>

            </div>

          </div>

          <div className="mt-6 flex justify-center gap-2">
            {trainingSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => swiperInstance?.slideToLoop(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentSlideIndex
                    ? "w-8 bg-brand-gold"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-h-[92vh] max-w-5xl overflow-hidden rounded-2xl bg-white p-3 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 rounded-full bg-[#081226] p-2 text-white hover:bg-amber-400 hover:text-black transition-colors shadow-md"
                aria-label="Close Preview"
              >
                <X className="h-5 w-5" />
              </button>
              
              <div className="relative aspect-4/3 w-[88vw] max-w-4xl">
                <Image
                  src={selectedImage}
                  alt="Training Slide Full Preview"
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}