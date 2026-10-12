import { notFound } from "next/navigation";
import { getPostBySlug, getPosts } from "@/lib/wordpress";
import BlogDetailClient from "./BlogDetailClient";
import type { Metadata } from "next";

interface BlogDetailProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: BlogDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: "Article Not Found | Prashanti Academy" };
  }

  const cleanTitle = post.title.rendered.replace(/<[^>]*>?/gm, "");
  const cleanExcerpt = post.excerpt.rendered
    .replace(/<[^>]*>?/gm, "")
    .slice(0, 160);

  return {
    title: `${cleanTitle} | Prashanti Academy`,
    description: cleanExcerpt,
  };
}

export default async function BlogDetailPage({ params }: BlogDetailProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Fetch recent posts and exclude the current post
  const allPosts = await getPosts(6);
  const relatedPosts = allPosts
    .filter((item) => item.slug !== slug)
    .slice(0, 3);

  return <BlogDetailClient post={post} relatedPosts={relatedPosts} />;
}