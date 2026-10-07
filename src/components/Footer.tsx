// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import {
//   ArrowUpRight,
//   ShieldCheck,
//   Mail,
//   Phone,
//   MapPin,
//   ExternalLink,
//   ChevronRight,
// } from "lucide-react";

// export default function Footer() {
//   const navSections = [
//     {
//       title: "Quick Links",
//       links: [
//         { label: "About Academy", href: "#about" },
//         { label: "Mentor Profile", href: "#trainer" },
//         { label: "Previous Trainings", href: "#previous-trainings" },
//         { label: "Learning Formats", href: "#courses" },
//         { label: "Student Reviews", href: "#reviews" },
//       ],
//     },
//   ];

//   return (
//     <footer className="relative overflow-hidden bg-[#081226] text-slate-300 border-t border-white/10 pt-20 pb-12">
    

//       <div
//         className="pointer-events-none absolute -bottom-32 right-0 h-96 w-96 rounded-full opacity-15 blur-3xl"
//         style={{ backgroundColor: "#BC9538" }}
//       />

//       <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
//         <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 pb-16 border-b border-white/10">
          
//           <div className="lg:col-span-4 flex flex-col justify-between">
//             <div>
//               <Link href="/" className="inline-block">
//                 <Image
//                   src="/images/prashanti-academy-logo.png"
//                   alt="Prashanti Academy"
//                   width={180}
//                   height={48}
//                   className="h-10 md:h-18 w-auto object-contain brightness-0 invert"
//                 />
//               </Link>

//               <p className="mt-5 text-xs sm:text-sm leading-relaxed text-slate-400 max-w-sm">
//                 Premier institutional training academy led by <strong>Rajat Prasad</strong>. Imparting real-world mastery across Treasury Markets, Wholesale Banking, Foreign Exchange, and Systematic Risk Frameworks.
//               </p>

//               <div className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-semibold text-brand-gold backdrop-blur-md">
//                 <ShieldCheck className="h-4 w-4 text-brand-gold" />
//                 <span>Executive Corporate Training Excellence</span>
//               </div>
//             </div>

//             <div className="mt-8">
//               <a
//                 href="https://prashantiacademy.urbanpro.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="group inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-gold transition-colors hover:text-white"
//               >
//                 <span>Verified UrbanPro Profile</span>
//                 <ExternalLink className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//               </a>
//             </div>
//           </div>

//           <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 gap-8">
//             {navSections.map((sec) => (
//               <div key={sec.title}>
//                 <h4 className="text-xs font-bold uppercase tracking-wider text-white">
//                   {sec.title}
//                 </h4>
//                 <ul className="mt-4 space-y-2.5">
//                   {sec.links.map((link) => (
//                     <li key={link.label}>
//                       <Link
//                         href={link.href}
//                         className="group inline-flex items-center gap-1.5 text-xs text-slate-400 transition-colors duration-200 hover:text-brand-gold"
//                       >
//                         <ChevronRight className="h-3 w-3 text-slate-600 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-brand-gold" />
//                         <span>{link.label}</span>
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>

//           <div className="lg:col-span-4">
//             <h4 className="text-xs font-bold uppercase tracking-wider text-white">
//               Executive Inquiries
//             </h4>
//             <p className="mt-4 text-xs leading-relaxed text-slate-400">
//               For corporate workshop bookings, live cohort admissions, or institutional guest lectures:
//             </p>

//             <ul className="mt-5 space-y-3">
//               <li>
//                 <a
//                   href="mailto:contact@prashantiacademy.com"
//                   className="group flex items-center gap-2.5 text-xs text-slate-300 transition-colors hover:text-brand-gold"
//                 >
//                   <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors group-hover:border-brand-gold/40 group-hover:bg-brand-gold/10">
//                     <Mail className="h-3.5 w-3.5 text-brand-gold" />
//                   </div>
//                   <span>contact@prashantiacademy.com</span>
//                 </a>
//               </li>
//               <li>
//                 <Link
//                   href="#contact"
//                   className="group flex items-center gap-2.5 text-xs text-slate-300 transition-colors hover:text-brand-gold"
//                 >
//                   <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors group-hover:border-brand-gold/40 group-hover:bg-brand-gold/10">
//                     <Phone className="h-3.5 w-3.5 text-brand-gold" />
//                   </div>
//                   <span>Schedule Consultation Call</span>
//                 </Link>
//               </li>
//               {/* <li className="flex items-center gap-2.5 text-xs text-slate-400 pt-1">
//                 <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 shrink-0">
//                   <MapPin className="h-3.5 w-3.5 text-brand-gold" />
//                 </div>
//                 <span>India • Institutional Virtual & Classroom Delivery</span>
//               </li> */}
//             </ul>

//             <div className="mt-6">
//               <Link
//                 href="#contact"
//                 className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-brand-gold/40 bg-brand-gold/10 py-2.5 text-xs font-bold uppercase tracking-wider text-brand-gold transition-all duration-300 hover:bg-brand-gold hover:text-slate-950 active:scale-98"
//               >
//                 <span>Enroll Now</span>
//                 <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//               </Link>
//             </div>
//           </div>

//         </div>

//         <div className="py-6 border-b border-white/10 text-[11px] leading-relaxed text-slate-400">
//           <p>
//             <strong className="text-slate-300">Statutory & Educational Disclaimer:</strong> Prashanti Academy provides financial market training, macroeconomic workshops, and risk management education for analytical and academic purposes only. We do not offer advisory services, guaranteed return schemes, or speculative trading tips. Securities trading and derivative markets involve substantial risk of capital loss. Past performance of institutional decks or historical market case studies does not guarantee future financial results.
//           </p>
//         </div>

//         <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-slate-400">
//           <p>
//             © {new Date().getFullYear()} Prashanti Academy. All rights reserved. Directed by Rajat Prasad.
//           </p>

//           {/* <div className="flex items-center gap-6">
//             <Link href="#about" className="hover:text-brand-gold transition-colors">
//               Privacy Policy
//             </Link>
//             <span>•</span>
//             <Link href="#about" className="hover:text-brand-gold transition-colors">
//               Terms of Engagement
//             </Link>
//             <span>•</span>
//             <Link href="#contact" className="hover:text-brand-gold transition-colors">
//               Support
//             </Link>
//           </div> */}
//         </div>

//       </div>
//     </footer>
//   );
// }

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import {
//   ArrowUpRight,
//   ShieldCheck,
//   Mail,
//   Phone,
//   MapPin,
//   ExternalLink,
//   ChevronRight,
// } from "lucide-react";

// export default function Footer() {
//   const socialLinks = [
//     {
//       name: "Youtube",
//       href: "https://youtube.com",
//       iconPath: "/images/youtube.svg",
//       hoverColor: "hover:border-[#FF0000] hover:bg-[#FF0000]/15",
//     },
//     {
//       name: "LinkedIn",
//       href: "https://linkedin.com",
//       iconPath: "/images/linkedin.svg",
//       hoverColor: "hover:border-[#0A66C2] hover:bg-[#0A66C2]/15",
//     },
//     {
//       name: "Instagram",
//       href: "https://instagram.com",
//       iconPath: "/images/instagram.svg",
//       hoverColor: "hover:border-[#E4405F] hover:bg-[#E4405F]/15",
//     },
//     {
//       name: "Facebook",
//       href: "https://facebook.com",
//       iconPath: "/images/facebook.svg",
//       hoverColor: "hover:border-[#1877F2] hover:bg-[#1877F2]/15",
//     },
//   ];

//   const navSections = [
//     {
//       title: "Quick Links",
//       links: [
//         { label: "About Academy", href: "#about" },
//         { label: "Mentor Profile", href: "#trainer" },
//         { label: "Previous Trainings", href: "#previous-trainings" },
//         { label: "Learning Formats", href: "#courses" },
//         { label: "Student Reviews", href: "#reviews" },
//       ],
//     },
//   ];

//   return (
//     <footer className="relative overflow-hidden bg-[#081226] text-slate-300 border-t border-white/10 pt-20 pb-12">
     

//       <div
//         className="pointer-events-none absolute -bottom-32 right-0 h-96 w-96 rounded-full opacity-20 blur-2xl"
//         style={{ backgroundColor: "#BC9538" }}
//       />

//       <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
//         <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 pb-16 border-b border-white/10">
          
//           <div className="lg:col-span-4 flex flex-col justify-between">
//             <div>
//               <Link href="/" className="inline-block">
//                 <Image
//                   src="/images/prashanti-academy-logo.png"
//                   alt="Prashanti Academy"
//                   width={180}
//                   height={48}
//                   className="h-10 md:h-12 w-auto object-contain brightness-0 invert"
//                 />
//               </Link>

//               <p className="mt-5 text-xs sm:text-sm leading-relaxed text-slate-400 max-w-sm">
//                 Premier institutional training academy led by <strong>Rajat Prasad</strong>. Imparting real-world mastery across Treasury Markets, Wholesale Banking, Foreign Exchange, and Systematic Risk Frameworks.
//               </p>

//               <div className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-semibold text-brand-gold backdrop-blur-md">
//                 <ShieldCheck className="h-4 w-4 text-brand-gold" />
//                 <span>Executive Corporate Training Excellence</span>
//               </div>

//               {/* SVG Social Icons */}
//               <div className="mt-6">
//                 <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
//                   Connect With Us
//                 </p>
//                 <div className="mt-3 flex items-center gap-2.5">
//                   {socialLinks.map((social) => (
//                     <a
//                       key={social.name}
//                       href={social.href}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       aria-label={social.name}
//                       className={`flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-200 hover:-translate-y-0.5 active:scale-95 ${social.hoverColor}`}
//                     >
//                       <Image
//                         src={social.iconPath}
//                         alt={social.name}
//                         width={18}
//                         height={18}
//                         className="h-4.5 w-4.5 object-contain invert brightness-0"
//                       />
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <div className="mt-8">
//               <a
//                 href="https://prashantiacademy.urbanpro.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="group inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-gold transition-colors hover:text-white"
//               >
//                 <span>Verified UrbanPro Profile</span>
//                 <ExternalLink className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//               </a>
//             </div>
//           </div>

//           <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-1">
//             {navSections.map((sec) => (
//               <div key={sec.title}>
//                 <h4 className="text-xs font-bold uppercase tracking-wider text-white">
//                   {sec.title}
//                 </h4>
//                 <ul className="mt-4 space-y-2.5">
//                   {sec.links.map((link) => (
//                     <li key={link.label}>
//                       <Link
//                         href={link.href}
//                         className="group inline-flex items-center gap-1.5 text-xs text-slate-400 transition-colors duration-200 hover:text-brand-gold"
//                       >
//                         <ChevronRight className="h-3 w-3 text-slate-600 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-brand-gold" />
//                         <span>{link.label}</span>
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>

//           <div className="lg:col-span-3">
//             <h4 className="text-xs font-bold uppercase tracking-wider text-white">
//               Executive Inquiries
//             </h4>
//             <p className="mt-4 text-xs leading-relaxed text-slate-400">
//               For corporate workshop bookings, live cohort admissions, or institutional guest lectures:
//             </p>

//             <ul className="mt-5 space-y-3">
//               <li>
//                 <a
//                   href="mailto:contact@prashantiacademy.com"
//                   className="group flex items-center gap-2.5 text-xs text-slate-300 transition-colors hover:text-brand-gold"
//                 >
//                   <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors group-hover:border-brand-gold/40 group-hover:bg-brand-gold/10">
//                     <Mail className="h-3.5 w-3.5 text-brand-gold" />
//                   </div>
//                   <span>contact@prashantiacademy.com</span>
//                 </a>
//               </li>
//               <li>
//                 <Link
//                   href="#contact"
//                   className="group flex items-center gap-2.5 text-xs text-slate-300 transition-colors hover:text-brand-gold"
//                 >
//                   <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors group-hover:border-brand-gold/40 group-hover:bg-brand-gold/10">
//                     <Phone className="h-3.5 w-3.5 text-brand-gold" />
//                   </div>
//                   <span>Schedule Consultation Call</span>
//                 </Link>
//               </li>
//               <li className="flex items-center gap-2.5 text-xs text-slate-400 pt-1">
//                 <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 shrink-0">
//                   <MapPin className="h-3.5 w-3.5 text-brand-gold" />
//                 </div>
//                 <span>India • Institutional Virtual & Classroom Delivery</span>
//               </li>
//             </ul>

//             <div className="mt-6">
//               <Link
//                 href="#contact"
//                 className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-brand-gold/40 bg-brand-gold/10 py-2.5 text-xs font-bold uppercase tracking-wider text-brand-gold transition-all duration-300 hover:bg-brand-gold hover:text-slate-950 active:scale-98"
//               >
//                 <span>Enroll in Next Batch</span>
//                 <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//               </Link>
//             </div>
//           </div>

//         </div>

//         {/* <div className="py-6 border-b border-white/10 text-[11px] leading-relaxed text-slate-400">
//           <p>
//             <strong className="text-slate-300">Statutory & Educational Disclaimer:</strong> Prashanti Academy provides financial market training, macroeconomic workshops, and risk management education for analytical and academic purposes only. We do not offer advisory services, guaranteed return schemes, or speculative trading tips. Securities trading and derivative markets involve substantial risk of capital loss. Past performance of institutional decks or historical market case studies does not guarantee future financial results.
//           </p>
//         </div> */}

//         <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-slate-400">
//           <p>
//             © {new Date().getFullYear()} Prashanti Academy. All rights reserved. Directed by Rajat Prasad.
//           </p>

//         </div>

//       </div>
//     </footer>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import EnquiryModal from "./EnquiryModal";

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const socialLinks = [
    {
      name: "Youtube",
      href: "https://youtube.com",
      iconPath: "/images/youtube.svg",
      hoverColor: "hover:border-[#FF0000] hover:bg-[#FF0000]/15",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      iconPath: "/images/linkedin.svg",
      hoverColor: "hover:border-[#0A66C2] hover:bg-[#0A66C2]/15",
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      iconPath: "/images/instagram.svg",
      hoverColor: "hover:border-[#E4405F] hover:bg-[#E4405F]/15",
    },
    {
      name: "Facebook",
      href: "https://facebook.com",
      iconPath: "/images/facebook.svg",
      hoverColor: "hover:border-[#1877F2] hover:bg-[#1877F2]/15",
    },
  ];

  const quickLinks = [
    { label: "About Academy", href: "#about" },
    { label: "Mentor Profile", href: "#trainer" },
    { label: "Previous Trainings", href: "#previous-trainings" },
    { label: "Learning Formats", href: "#courses" },
    { label: "Student Reviews", href: "#reviews" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#081226] text-slate-300 border-t border-white/10 pt-16 pb-10">
      
      <div
        className="pointer-events-none absolute -bottom-32 right-0 h-96 w-96 rounded-full opacity-15 blur-3xl"
        style={{ backgroundColor: "#BC9538" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-10 pb-12 border-b border-white/10">
          
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/images/prashanti-academy-logo.png"
                alt="Prashanti Academy"
                width={170}
                height={45}
                className="h-9 md:h-11 w-auto object-contain brightness-0 invert"
              />
            </Link>

            <p className="text-xs sm:text-sm leading-relaxed text-slate-400 max-w-md">
              Premier institutional training academy led by <strong className="text-slate-200">Rajat Prasad</strong>. Imparting real-world mastery across Treasury Markets, Wholesale Banking, Foreign Exchange, and Systematic Risk Frameworks.
            </p>

            <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-brand-gold backdrop-blur-md">
              <ShieldCheck className="h-4 w-4 text-brand-gold" />
              <span>Executive Corporate Training Excellence</span>
            </div>

            <div className="pt-1">
              <a
                href="https://prashantiacademy.urbanpro.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-gold transition-colors hover:text-white"
              >
                <span>Verified UrbanPro Profile</span>
                <ExternalLink className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-xs text-slate-400 transition-colors duration-200 hover:text-brand-gold"
                  >
                    <ChevronRight className="h-3 w-3 text-slate-600 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-brand-gold" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                Executive Inquiries
              </h4>
            </div>

            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:contact@prashantiacademy.com"
                  className="group flex items-center gap-2.5 text-xs text-slate-300 transition-colors hover:text-brand-gold"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors group-hover:border-brand-gold/40 group-hover:bg-brand-gold/10">
                    <Mail className="h-3.5 w-3.5 text-brand-gold" />
                  </div>
                  <span>contact@prashantiacademy.com</span>
                </a>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="group flex items-center gap-2.5 text-xs text-slate-300 transition-colors hover:text-brand-gold"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors group-hover:border-brand-gold/40 group-hover:bg-brand-gold/10">
                    <Phone className="h-3.5 w-3.5 text-brand-gold" />
                  </div>
                  <span>Schedule Consultation Call</span>
                </Link>
              </li>
            
            </ul>

            <div className="pt-2">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Connect With Us
              </p>
              <div className="mt-2.5 flex items-center gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={`flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-200 hover:-translate-y-0.5 active:scale-95 ${social.hoverColor}`}
                  >
                    <Image
                      src={social.iconPath}
                      alt={social.name}
                      width={16}
                      height={16}
                      className="h-4 w-4 object-contain invert brightness-0"
                    />
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-brand-gold/40 bg-brand-gold/10 py-2.5 text-xs font-bold uppercase tracking-wider text-brand-gold transition-all duration-300 hover:bg-brand-gold hover:text-slate-950 active:scale-98 cursor-pointer"
              >
                <span>Enroll Now</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Prashanti Academy. All rights reserved.
          </p>
        </div>

      </div>
      <EnquiryModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                  />
    </footer>
  );
}