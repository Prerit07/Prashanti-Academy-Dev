import Image from "next/image";
import Link from "next/link";
import { Sparkles, Calendar, User, ArrowUpRight, ChevronLeft } from "lucide-react";
import { getPosts, WPPost } from "@/lib/wordpress";

export const metadata = {
  title: "Market Insights & Articles | Prashanti Academy",
  description:
    "Explore comprehensive research articles on treasury operations, foreign exchange hedging, and wholesale banking.",
};

function cleanHtml(rawText: string) {
  return rawText
    .replace(/<[^>]*>?/gm, "")
    .replace(/&[^;]+;/gm, " ")
    .trim();
}

export default async function BlogsPage() {

  const posts: WPPost[] = await getPosts(18);

  return (
    <main className="relative min-h-screen bg-[#081226] text-white pt-15 pb-20 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(188,149,56,0.12),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-brand-gold transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-gold">
            <span>Academic Knowledge Base</span>
          </div>

          <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Market Insights & <span className="text-brand-gold">Research.</span>
          </h1>

          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Curated analysis, risk management frameworks, and macroeconomic perspectives authored by institutional banking veterans.
          </p>
        </div>

        <div className="mt-14">
          {posts.length === 0 ? (
            <div className="rounded-3xl border border-white/10 bg-white/5 p-16 text-center text-slate-400">
              <p className="text-base font-medium">No published articles found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => {
                const featuredImg =
                  post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                  "/images/previous-trainings-bg.jpg";
                const author =
                  post._embedded?.author?.[0]?.name || "Rajat Prasad";
                const cleanTitle = cleanHtml(post.title.rendered);
                const cleanExcerpt = cleanHtml(post.excerpt.rendered).slice(0, 130);
                const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                });

                return (
                  <article
                    key={post.id}
                    className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-5 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-gold/50 hover:bg-white/8"
                  >
                    <div>
                      <Link href={`/blogs/${post.slug}`} className="block">
                        <div className="relative aspect-16/10 w-full overflow-hidden rounded-2xl border border-white/10 bg-[#060e22]">
                          <Image
                            src={featuredImg}
                            alt={cleanTitle}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-linear-to-t from-[#081226]/80 via-transparent to-transparent" />
                        </div>
                      </Link>

                      <div className="mt-4 flex items-center gap-3 text-[11px] font-medium text-slate-400">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5 text-brand-gold" />
                          <span>{formattedDate}</span>
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1.5">
                          <User className="h-3.5 w-3.5 text-brand-gold" />
                          <span>{author}</span>
                        </span>
                      </div>

                      <h2 className="mt-3 text-lg font-bold leading-snug text-white transition-colors group-hover:text-brand-gold line-clamp-2">
                        <Link href={`/blogs/${post.slug}`}>{cleanTitle}</Link>
                      </h2>

                      <p className="mt-2 text-xs leading-relaxed text-slate-300 line-clamp-3">
                        {cleanExcerpt}...
                      </p>
                    </div>

                    <div className="mt-6 border-t border-white/10 pt-4">
                      <Link
                        href={`/blogs/${post.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-gold transition-colors hover:text-white"
                      >
                        <span>Read Full Article</span>
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>

      </div>
    </main>
  );
}