"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  User,
  ChevronLeft,
  ShieldCheck,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
} from "lucide-react";
import EnquiryModal from "@/components/EnquiryModal";
import { WPPost } from "@/lib/wordpress";

interface BlogDetailClientProps {
  post: WPPost;
  relatedPosts: WPPost[];
}

function cleanHtml(rawText: string) {
  return rawText
    .replace(/<[^>]*>?/gm, "")
    .replace(/&[^;]+;/gm, " ")
    .trim();
}

export default function BlogDetailClient({
  post,
  relatedPosts,
}: BlogDetailClientProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const featuredImg =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    "/images/previous-trainings-bg.jpg";
  const author = post._embedded?.author?.[0]?.name || "Rajat Prasad";
  const cleanTitle = cleanHtml(post.title.rendered);
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800">
      
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-[#081226] transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Back to All Articles</span>
          </Link>
        
        </div>
      </div>

      <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-16">
        <header className="mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-gold mb-3">
            <BookOpen className="h-3.5 w-3.5" />
            <span>Market Analysis</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.2]">
            {cleanTitle}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-4 sm:gap-6 border-b border-slate-200 pb-6 text-xs sm:text-sm text-slate-500">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-brand-gold" />
              <span>{formattedDate}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4 text-brand-gold" />
              <span>By <strong className="text-slate-800 font-semibold">{author}</strong></span>
            </span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-100 shadow-md mb-10 sm:mb-14">
          <Image
            src={featuredImg}
            alt={cleanTitle}
            fill
            priority
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-cover"
          />
        </div>

        <div
          className="wp-blog-content text-slate-700"
          dangerouslySetInnerHTML={{ __html: post.content?.rendered || "" }}
        />

        {/* <div className="mt-14 sm:mt-20 rounded-2xl sm:rounded-3xl border border-brand-gold-200/80 bg-linear-to-br from-brand-gold-50/70 via-white to-brand-gold-50/40 p-6 sm:p-10 shadow-sm text-center">
          <div className="mx-auto max-w-xl">
            <span className="inline-block rounded-full bg-brand-gold/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#936c1e]">
              Admissions Open
            </span>
            <h3 className="mt-3 text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
              Apply Institutional Risk & Treasury Frameworks
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Step directly into live cohorts mentored by <strong>Rajat Prasad</strong>. Learn dealing desk models, bond math, and currency risk mitigation firsthand.
            </p>
            <div className="mt-6 flex justify-center">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex items-center gap-2 rounded-xl bg-[#081226] px-7 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-md shadow-slate-900/10 transition-all hover:bg-brand-gold hover:text-slate-950 active:scale-95 cursor-pointer"
              >
                <span>Enroll in Next Batch</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div> */}
      </main>

      {relatedPosts.length > 0 && (
        <section className="border-t border-slate-200 bg-white py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
                  Continue Reading
                </span>
                <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                  Read More Articles
                </h2>
              </div>
              <Link
                href="/blogs"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-brand-gold transition-colors"
              >
                <span>All Articles</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {relatedPosts.map((item) => {
                const itemImg =
                  item._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                  "/images/previous-trainings-bg.jpg";
                const itemTitle = cleanHtml(item.title.rendered);
                const itemExcerpt = cleanHtml(item.excerpt.rendered).slice(0, 110);
                const itemDate = new Date(item.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                });

                return (
                  <article
                    key={item.id}
                    className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md hover:border-brand-gold-300 transition-all duration-300"
                  >
                    <div>
                      <Link href={`/blogs/${item.slug}`} className="block">
                        <div className="relative aspect-16/10 w-full overflow-hidden rounded-xl bg-slate-100">
                          <Image
                            src={itemImg}
                            alt={itemTitle}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      </Link>

                      <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-500">
                        <Calendar className="h-3 w-3 text-brand-gold" />
                        <span>{itemDate}</span>
                      </div>

                      <h3 className="mt-2 text-base font-bold text-slate-900 line-clamp-2 group-hover:text-brand-gold transition-colors">
                        <Link href={`/blogs/${item.slug}`}>{itemTitle}</Link>
                      </h3>

                      <p className="mt-1.5 text-xs text-slate-600 line-clamp-3 leading-relaxed">
                        {itemExcerpt}...
                      </p>
                    </div>

                    <div className="mt-4 border-t border-slate-100 pt-3">
                      <Link
                        href={`/blogs/${item.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#936c1e] hover:text-[#081226] transition-colors"
                      >
                        <span>Read Article</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}