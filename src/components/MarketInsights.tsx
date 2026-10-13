import Image from "next/image";
import Link from "next/link";
import { Sparkles, Calendar, User, ArrowUpRight, ArrowRight } from "lucide-react";
import { getPosts, WPPost } from "@/lib/wordpress";

function cleanHtml(rawText: string) {
  return rawText
    .replace(/<[^>]*>?/gm, "")
    .replace(/&[^;]+;/gm, " ")
    .trim();
}

export default async function MarketInsights() {
  const posts: WPPost[] = await getPosts(3);

  return (
    <section
      id="blogs"
      className="relative overflow-hidden bg-[#081226] py-24 sm:py-32 text-white border-t border-white/10"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(188,149,56,0.08),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(14,35,71,0.7),transparent_50%)]" />
      
      <div
        className="pointer-events-none absolute -top-32 right-10 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ backgroundColor: "#BC9538" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-gold shadow-sm backdrop-blur-md">
            <span>Market Research & Articles</span>
          </div>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Latest Market <span className="text-brand-gold">Insights.</span>
          </h2>

          <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-slate-300 max-w-2xl mx-auto">
            Practical breakdowns on wholesale banking liquidity, treasury yield
            curves, and disciplined foreign exchange risk management.
          </p>
        </div>

        <div className="mt-16">
          {posts.length === 0 ? (
            <div className="rounded-3xl border border-white/10 bg-white/5 p-12 text-center text-slate-400">
              <p className="text-sm">No articles published yet. Check back soon!</p>
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
                const cleanExcerpt = cleanHtml(post.excerpt.rendered).slice(0, 125);
                const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                });

                return (
                  <article
                    key={post.id}
                    className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-5 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-gold/50 hover:bg-white/8 hover:shadow-2xl"
                  >
                    <div>
                      <Link href={`/blogs/${post.slug}`} className="block">
                        <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-[#060e22]">
                          <Image
                            src={featuredImg}
                            alt={cleanTitle}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
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

                      <h3 className="mt-3 text-lg font-bold leading-snug text-white transition-colors group-hover:text-brand-gold line-clamp-2">
                        <Link href={`/blogs/${post.slug}`}>{cleanTitle}</Link>
                      </h3>

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

        <div className="mt-14 text-center">
          <Link
            href="/blogs"
            className="group inline-flex items-center gap-2 rounded-xl border border-brand-gold/40 bg-brand-gold/10 px-8 py-3 text-xs font-bold uppercase tracking-wider text-brand-gold transition-all duration-300 hover:bg-brand-gold hover:text-slate-950 active:scale-95 shadow-md shadow-brand-gold/5"
          >
            <span>View More</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}