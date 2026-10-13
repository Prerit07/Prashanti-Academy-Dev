// export interface WPPost {
//   id: number;
//   slug: string;
//   date: string;
//   title: {
//     rendered: string;
//   };
//   excerpt: {
//     rendered: string;
//   };
//   content?: {
//     rendered: string;
//   };
//   link: string;
//   _embedded?: {
//     "wp:featuredmedia"?: Array<{
//       source_url: string;
//       alt_text?: string;
//     }>;
//     author?: Array<{
//       name: string;
//     }>;
//   };
// }

// const WP_API_BASE =
//   process.env.WP_API_URL || "https://blogs.prashantiacademy.in/wp-json/wp/v2";

// export async function getPosts(limit = 12): Promise<WPPost[]> {
//   try {
//     const res = await fetch(
//       `${WP_API_BASE}/posts?_embed=true&per_page=${limit}&status=publish`,
//       {
//         next: { revalidate: 60, tags: ["wordpress-posts"] },
//       }
//     );

//     if (!res.ok) return [];
//     return await res.json();
//   } catch (error) {
//     console.error("Error fetching posts:", error);
//     return [];
//   }
// }

// // Fetch single post by slug
// export async function getPostBySlug(slug: string): Promise<WPPost | null> {
//   try {
//     const res = await fetch(
//       `${WP_API_BASE}/posts?_embed=true&slug=${encodeURIComponent(slug)}`,
//       {
//         next: { revalidate: 60, tags: ["wordpress-posts"] },
//       }
//     );

//     if (!res.ok) return null;
//     const posts: WPPost[] = await res.json();
//     return posts.length > 0 ? posts[0] : null;
//   } catch (error) {
//     console.error(`Error fetching post for slug ${slug}:`, error);
//     return null;
//   }
// }

export interface WPPost {
  id: number;
  slug: string;
  date: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content?: {
    rendered: string;
  };
  link: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text?: string;
    }>;
    author?: Array<{
      name: string;
    }>;
  };
}

const WP_API_BASE =
  process.env.WP_API_URL || "https://blogs.prashantiacademy.in/wp-json/wp/v2";

export async function getPosts(limit = 12): Promise<WPPost[]> {
  try {
    const res = await fetch(
      `${WP_API_BASE}/posts?_embed=true&per_page=${limit}&status=publish`,
      {
        cache: "no-store", 
      }
    );

    if (!res.ok) return [];
    return await res.json();
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  try {
    const res = await fetch(
      `${WP_API_BASE}/posts?_embed=true&slug=${encodeURIComponent(slug)}`,
      {
        cache: "no-store", 
      }
    );

    if (!res.ok) return null;
    const posts: WPPost[] = await res.json();
    return posts.length > 0 ? posts[0] : null;
  } catch (error) {
    console.error(`Error fetching post for slug ${slug}:`, error);
    return null;
  }
}