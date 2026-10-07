// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { ArrowUpRight, Menu, X, Sparkles, Phone } from "lucide-react";
// import { AnimatePresence, motion } from "framer-motion";

// export default function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const navLinks = [
//     { label: "About Academy", href: "#about" },
//     { label: "About Trainer", href: "#trainer" },
//     { label: "Courses", href: "#courses" },
//     { label: "Market Insights", href: "#blogs" },
//   ];

//   return (
//     <>
//       {/* Top Accent Gradient Bar */}
//       <div className="h-1 w-full bg-linear-to-r from-brand-navy via-brand-gold to-brand-navy" />

//       <header className="sticky top-0 z-50 w-full border-b border-brand-navy/10 bg-white/85 backdrop-blur-xl transition-all duration-300">
//         <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
          
//           <Link href="/" className="group flex items-center gap-3">
//             <div className="relative overflow-hidden rounded-lg p-1 transition-transform duration-200 group-hover:scale-[1.02]">
//               <Image
//                 src="/images/prashanti-academy-logo.png"
//                 alt="Prashanti Academy"
//                 width={170}
//                 height={45}
//                 priority
//                 className="h-10 md:h-15 w-auto object-contain"
//               />
//             </div>
//           </Link>

//           <nav className="hidden items-center gap-1 rounded-full border border-slate-200/90 bg-slate-50/80 px-4 py-1.5 shadow-inner backdrop-blur-sm lg:flex">
//             {navLinks.map((item) => (
//               <Link
//                 key={item.label}
//                 href={item.href}
//                 className="group relative px-3.5 py-1.5 text-[13px] font-semibold tracking-wide text-brand-navy/80 transition-colors duration-200 hover:text-brand-navy"
//               >
//                 {item.label}
//                 <span className="absolute inset-x-3.5 -bottom-0.5 h-0.5 scale-x-0 rounded-full bg-brand-gold transition-transform duration-200 ease-out group-hover:scale-x-100" />
//               </Link>
//             ))}
//           </nav>

//           <div className="flex items-center gap-3">
//             <Link
//               href="#contact"
//               className="group relative inline-flex items-center gap-1 md:gap-2 overflow-hidden rounded-xl border border-brand-gold/40 bg-brand-navy px-2 md:px-5 py-2 md:py-2.5 text-xs font-normal md:font-semibold camelcase md:uppercase tracking-wider text-white shadow-[0_4px_14px_rgba(21,37,73,0.18)] transition-all duration-300 hover:border-brand-gold hover:bg-brand-gold hover:text-brand-navy hover:shadow-[0_6px_20px_rgba(188,149,56,0.3)] active:scale-95"
//             >
          
//               <span>Contact us</span>
//               <ArrowUpRight className="h-3 md:h-3.5 w-3 md:w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//             </Link>

//             <button
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="inline-flex items-center justify-center rounded-lg p-2 text-brand-navy hover:bg-slate-100 lg:hidden"
//               aria-label="Toggle Navigation"
//             >
//               {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>

//         {/* {mobileMenuOpen && (
//           <div className="border-b border-brand-navy/10 bg-white/95 px-6 py-5 backdrop-blur-2xl lg:hidden">
//             <div className="flex flex-col space-y-4">
//               {navLinks.map((item) => (
//                 <Link
//                   key={item.label}
//                   href={item.href}
//                   onClick={() => setMobileMenuOpen(false)}
//                   className="text-sm font-semibold text-brand-navy transition-colors hover:text-brand-gold"
//                 >
//                   {item.label}
//                 </Link>
//               ))}
//               <div className="pt-2">
//                 <Link
//                   href="#contact"
//                   onClick={() => setMobileMenuOpen(false)}
//                   className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-navy py-3 text-xs font-semibold uppercase tracking-wider text-white shadow-md transition-colors hover:bg-brand-gold hover:text-brand-navy"
//                 >
//                   Explore Courses
//                   <ArrowUpRight className="h-4 w-4" />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         )} */}
//       </header>
//       <AnimatePresence>
//         {mobileMenuOpen && (
//           <div className="fixed inset-0 z-50 lg:hidden">
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.25 }}
//               onClick={() => setMobileMenuOpen(false)}
//               className="fixed inset-0 bg-brand-navy/50 backdrop-blur-sm"
//             />

//             <motion.aside
//               initial={{ x: "100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "100%" }}
//               transition={{ type: "spring", stiffness: 300, damping: 30 }}
//               className="fixed right-0 top-0 h-full w-[85%] max-w-sm border-l border-brand-navy/10 bg-white p-6 shadow-2xl flex flex-col justify-between"
//             >
//               <div>
//                 <div className="flex items-center justify-between pb-6 border-b border-slate-100">
//                   <Image
//                     src="/images/prashanti-academy-logo.png"
//                     alt="Prashanti Academy"
//                     width={140}
//                     height={38}
//                     className="h-8 w-auto object-contain"
//                   />
//                   <button
//                     onClick={() => setMobileMenuOpen(false)}
//                     className="rounded-lg p-2 text-brand-navy/70 hover:bg-slate-100 hover:text-brand-navy transition-colors"
//                     aria-label="Close Navigation Menu"
//                   >
//                     <X className="h-5 w-5" />
//                   </button>
//                 </div>

//                 <nav className="mt-8 flex flex-col space-y-2">
//                   {navLinks.map((item, index) => (
//                     <motion.div
//                       key={item.label}
//                       initial={{ opacity: 0, x: 20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: 0.05 * index + 0.1 }}
//                     >
//                       <Link
//                         href={item.href}
//                         onClick={() => setMobileMenuOpen(false)}
//                         className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-brand-navy transition-colors hover:bg-slate-50 hover:text-brand-gold"
//                       >
//                         <span>{item.label}</span>
//                         <ArrowUpRight className="h-4 w-4 opacity-40" />
//                       </Link>
//                     </motion.div>
//                   ))}
//                 </nav>
//               </div>

//               <div className="pt-6 border-t border-slate-100 space-y-4">
//                 <Link
//                   href="#contact"
//                   onClick={() => setMobileMenuOpen(false)}
//                   className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-navy py-3.5 text-xs font-semibold uppercase tracking-wider text-white shadow-lg shadow-brand-navy/15 transition-all hover:bg-brand-gold hover:text-brand-navy active:scale-[0.98]"
//                 >
//                   <span>Contact us</span>
//                   <ArrowUpRight className="h-4 w-4" />
//                 </Link>

//                 <p className="text-center text-[11px] text-slate-400">
//                   Prashanti Academy
//                 </p>
//               </div>
//             </motion.aside>
//           </div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { ArrowUpRight, Menu, X } from "lucide-react";

// export default function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const navLinks = [
//     { label: "About Academy", href: "#about" },
//     { label: "About Trainer", href: "#trainer" },
//     { label: "Courses", href: "#courses" },
//     { label: "Market Insights", href: "#blogs" },
//   ];

//   return (
//     <>
//       <div className="h-1 w-full bg-linear-to-r from-brand-navy via-brand-gold to-brand-navy" />

//       <header className="sticky top-0 z-40 w-full border-b border-brand-navy/10 bg-white/85 backdrop-blur-xl transition-all duration-300">
//         <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
          
//           <Link href="/" className="group flex items-center gap-3">
//             <div className="relative overflow-hidden rounded-lg p-1 transition-transform duration-200 group-hover:scale-[1.02]">
//               <Image
//                 src="/images/prashanti-academy-logo.png"
//                 alt="Prashanti Academy"
//                 width={170}
//                 height={45}
//                 priority
//                 className="h-10 md:h-14 w-auto object-contain"
//               />
//             </div>
//           </Link>

//           <nav className="hidden items-center gap-1 rounded-full border border-slate-200/90 bg-slate-50/80 px-4 py-1.5 shadow-inner backdrop-blur-sm lg:flex">
//             {navLinks.map((item) => (
//               <Link
//                 key={item.label}
//                 href={item.href}
//                 className="group relative px-3.5 py-1.5 text-[13px] font-semibold tracking-wide text-brand-navy/80 transition-colors duration-200 hover:text-brand-navy"
//               >
//                 {item.label}
//                 <span className="absolute inset-x-3.5 -bottom-0.5 h-0.5 scale-x-0 rounded-full bg-brand-gold transition-transform duration-200 ease-out group-hover:scale-x-100" />
//               </Link>
//             ))}
//           </nav>

//           <div className="flex items-center gap-3">
//             <Link
//               href="#contact"
//               className="group relative inline-flex items-center gap-1 md:gap-2 overflow-hidden rounded-xl border border-brand-gold/40 bg-brand-navy px-3 md:px-5 py-2 md:py-2.5 text-xs font-medium md:font-semibold capitalize md:uppercase tracking-wider text-white shadow-sm transition-all duration-300 hover:border-brand-gold hover:bg-brand-gold hover:text-brand-navy active:scale-95"
//             >
//               <span>Contact us</span>
//               <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//             </Link>

//             <button
//               onClick={() => setMobileMenuOpen(true)}
//               className="inline-flex items-center justify-center rounded-lg p-2 text-brand-navy hover:bg-slate-100 active:bg-slate-200 lg:hidden"
//               aria-label="Toggle Navigation"
//             >
//               <Menu className="h-6 w-6" />
//             </button>
//           </div>
//         </div>
//       </header>

//       <div
//         className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ease-in-out ${
//           mobileMenuOpen ? "pointer-events-auto visible" : "pointer-events-none invisible"
//         }`}
//       >
//         <div
//           onClick={() => setMobileMenuOpen(false)}
//           className={`absolute inset-0 bg-brand-navy/60 transition-opacity duration-300 ease-out ${
//             mobileMenuOpen ? "opacity-100" : "opacity-0"
//           }`}
//         />

//         <aside
//           className={`absolute right-0 top-0 h-full w-[82%] max-w-xs border-l border-slate-200 bg-white p-6 shadow-2xl flex flex-col justify-between transform transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${
//             mobileMenuOpen ? "translate-x-0" : "translate-x-full"
//           }`}
//         >
//           <div>
//             <div className="flex items-center justify-between pb-5 border-b border-slate-100">
//               <Image
//                 src="/images/prashanti-academy-logo.png"
//                 alt="Prashanti Academy"
//                 width={140}
//                 height={38}
//                 className="h-8 w-auto object-contain"
//                 priority
//               />
//               <button
//                 onClick={() => setMobileMenuOpen(false)}
//                 className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100 hover:text-brand-navy transition-colors active:scale-95"
//                 aria-label="Close Navigation Menu"
//               >
//                 <X className="h-5 w-5" />
//               </button>
//             </div>

//             <nav className="mt-6 flex flex-col space-y-1.5">
//               {navLinks.map((item, idx) => (
//                 <div
//                   key={item.label}
//                   style={{
//                     transitionDelay: mobileMenuOpen ? `${100 + idx * 45}ms` : "0ms",
//                   }}
//                   className={`transform transition-all duration-300 ease-out ${
//                     mobileMenuOpen
//                       ? "opacity-100 translate-x-0"
//                       : "opacity-0 translate-x-5"
//                   }`}
//                 >
//                   <Link
//                     href={item.href}
//                     onClick={() => setMobileMenuOpen(false)}
//                     className="flex items-center justify-between rounded-xl px-3.5 py-3 text-sm font-semibold text-brand-navy transition-colors hover:bg-slate-50 active:bg-slate-100"
//                   >
//                     <span>{item.label}</span>
//                     <ArrowUpRight className="h-4 w-4 opacity-40 text-brand-navy" />
//                   </Link>
//                 </div>
//               ))}
//             </nav>
//           </div>

//           <div
//             style={{
//               transitionDelay: mobileMenuOpen ? "300ms" : "0ms",
//             }}
//             className={`pt-6 border-t border-slate-100 space-y-3 transform transition-all duration-300 ease-out ${
//               mobileMenuOpen
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-4"
//             }`}
//           >
//             <Link
//               href="#contact"
//               onClick={() => setMobileMenuOpen(false)}
//               className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-navy py-3 text-xs font-semibold uppercase tracking-wider text-white shadow-md transition-all active:bg-brand-gold active:text-brand-navy"
//             >
//               <span>Contact us</span>
//               <ArrowUpRight className="h-4 w-4" />
//             </Link>

//             <p className="text-center text-[11px] text-slate-400">
//               Prashanti Academy
//             </p>
//           </div>
//         </aside>
//       </div>
//     </>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X, ChevronDown } from "lucide-react";
import EnquiryModal from "./EnquiryModal";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const aboutDropdownItems = [
    { label: "About Academy", href: "#about" },
    { label: "About Trainer", href: "#trainer" },
    // { label: "Previous Trainings", href: "#previous-trainings" },
  ];

  const directNavLinks = [
    { label: "Courses", href: "#courses" },
    { label: "Student Reviews", href: "#reviews" },
    { label: "Market Insights", href: "#blogs" },
  ];

  useEffect(() => {
    const sectionIds = [
      "about",
      "trainer",
      "previous-trainings",
      "courses",
      "reviews",
      "blogs",
      "contact",
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          return;
        }
      }

      if (window.scrollY < 150) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isAboutActive = ["about", "trainer", "previous-trainings"].includes(
    activeSection
  );

  return (
    <>
      <div className="h-1 w-full bg-linear-to-r from-brand-navy via-brand-gold to-brand-navy" />

      <header className="sticky top-0 z-40 w-full border-b border-brand-navy/10 bg-white/90 backdrop-blur-xl transition-all duration-300">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
          
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative overflow-hidden rounded-lg p-1 transition-transform duration-200 group-hover:scale-[1.02]">
              <Image
                src="/images/prashanti-academy-logo.png"
                alt="Prashanti Academy"
                width={170}
                height={45}
                priority
                loading="eager"
                className="h-10 md:h-14 w-auto object-contain"
              />
            </div>
          </Link>

          <nav className="hidden items-center gap-1 rounded-full border border-slate-200/90 bg-slate-50/80 px-4 py-1.5 shadow-inner backdrop-blur-sm lg:flex">
            
            <div className="group relative">
              <button
                type="button"
                className={`flex items-center gap-1 rounded-full px-3.5 py-1.5 text-[13px] font-semibold tracking-wide transition-all duration-200 ${
                  isAboutActive
                    ? "bg-brand-navy text-white shadow-xs"
                    : "text-brand-navy/80 hover:text-brand-navy"
                }`}
              >
                <span>About</span>
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180 ${
                    isAboutActive ? "text-brand-gold" : "text-slate-400"
                  }`}
                />
              </button>

              <div className="invisible absolute top-full left-0 z-50 pt-2 opacity-0 transition-all duration-200 ease-out group-hover:visible group-hover:opacity-100">
                <div className="w-56 overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-2 shadow-xl shadow-brand-navy/10 backdrop-blur-md">
                  {aboutDropdownItems.map((subItem) => {
                    const isSubActive =
                      activeSection === subItem.href.replace("#", "");
                    return (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className={`flex items-center justify-between rounded-xl px-3.5 py-2.5 text-xs font-semibold transition-colors duration-150 ${
                          isSubActive
                            ? "bg-slate-100 text-brand-gold font-bold"
                            : "text-brand-navy/80 hover:bg-slate-50 hover:text-brand-navy"
                        }`}
                      >
                        <span>{subItem.label}</span>
                        {isSubActive && (
                          <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {directNavLinks.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`group relative rounded-full px-3.5 py-1.5 text-[13px] font-semibold tracking-wide transition-all duration-200 ${
                    isActive
                      ? "bg-brand-navy text-white shadow-xs"
                      : "text-brand-navy/80 hover:text-brand-navy"
                  }`}
                >
                  {item.label}
                  {!isActive && (
                    <span className="absolute inset-x-3.5 -bottom-0.5 h-0.5 scale-x-0 rounded-full bg-brand-gold transition-transform duration-200 ease-out group-hover:scale-x-100" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className={`group relative inline-flex items-center gap-1 md:gap-2 overflow-hidden rounded-xl border border-brand-gold/40 px-3 md:px-5 py-2 md:py-2.5 text-xs font-medium md:font-semibold capitalize md:uppercase tracking-wider transition-all duration-300 active:scale-95 cursor-pointer ${
                activeSection === "contact"
                  ? "bg-brand-gold text-brand-navy font-bold shadow-md shadow-brand-gold/30"
                  : "bg-brand-navy text-white hover:border-brand-gold hover:bg-brand-gold hover:text-brand-navy shadow-sm"
              }`}
            >
              <span>Contact us</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex items-center justify-center rounded-lg p-2 text-brand-navy hover:bg-slate-100 active:bg-slate-200 lg:hidden"
              aria-label="Toggle Navigation"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "pointer-events-auto visible" : "pointer-events-none invisible"
        }`}
      >
        <div
          onClick={() => setMobileMenuOpen(false)}
          className={`absolute inset-0 bg-brand-navy/60 backdrop-blur-xs transition-opacity duration-300 ease-out ${
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        <aside
          className={`absolute right-0 top-0 h-full w-[85%] max-w-xs border-l border-slate-200 bg-white p-6 shadow-2xl flex flex-col justify-between transform transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-5 border-b border-slate-100">
              <Image
                src="/images/prashanti-academy-logo.png"
                alt="Prashanti Academy"
                width={140}
                height={38}
                className="h-8 w-auto object-contain"
                priority
              />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100 hover:text-brand-navy transition-colors active:scale-95"
                aria-label="Close Navigation Menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="mt-5 flex flex-col space-y-1.5">
              
              <div className="rounded-xl border border-slate-200/80 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  className={`flex w-full items-center justify-between px-3.5 py-3 text-sm font-semibold transition-colors ${
                    isAboutActive
                      ? "bg-slate-100 text-brand-navy"
                      : "text-brand-navy hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span>About</span>
                    {isAboutActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
                    )}
                  </div>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      mobileAboutOpen ? "rotate-180 text-brand-gold" : "text-slate-400"
                    }`}
                  />
                </button>

                {mobileAboutOpen && (
                  <div className="bg-slate-50/80 border-t border-slate-100 px-2 py-1.5 space-y-1">
                    {aboutDropdownItems.map((subItem) => {
                      const isSubActive =
                        activeSection === subItem.href.replace("#", "");
                      return (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex items-center justify-between rounded-lg px-3 py-2 text-xs font-semibold transition-colors ${
                            isSubActive
                              ? "bg-white text-brand-gold font-bold shadow-2xs"
                              : "text-slate-600 hover:text-brand-navy"
                          }`}
                        >
                          <span>{subItem.label}</span>
                          <ArrowUpRight className="h-3 w-3 opacity-40" />
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              {directNavLinks.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-3.5 py-3 text-sm font-semibold transition-all ${
                      isActive
                        ? "bg-brand-navy text-white shadow-xs"
                        : "text-brand-navy hover:bg-slate-50 active:bg-slate-100"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight
                      className={`h-4 w-4 ${
                        isActive ? "text-brand-gold" : "text-brand-navy opacity-40"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="pt-6 border-t border-slate-100 space-y-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-navy py-3 text-xs font-semibold uppercase tracking-wider text-white shadow-md transition-all active:bg-brand-gold active:text-brand-navy"
            >
              <span>Contact us</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>

            <p className="text-center text-[11px] text-slate-400">
              Prashanti Academy
            </p>
          </div>
        </aside>
      </div>
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}