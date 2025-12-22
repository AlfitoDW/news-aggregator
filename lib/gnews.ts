import { NewsArticle } from "@/lib/news";

const BASE_URL = "https://gnews.io/api/v4";
const API_KEY = process.env.GNEWS_API_KEY!;


function mapArticle(item: any): NewsArticle {
  return {
    title: item.title,
    description: item.description,
    content: item.content,
    url: item.url,
    image: item.image,
    publishedAt: item.publishedAt,
    source: {
      name: item.source?.name || "Unknown",
      url: item.source?.url || "",
    },
  };
}


export async function getNews({
  category,
}: {
  category: string;
}): Promise<NewsArticle[]> {
  const params = new URLSearchParams({
    token: API_KEY,
    lang: "en",
    country: "us",
    max: "12",
  });

  if (category !== "top") {
    params.append("category", category);
  }

  try {
    const res = await fetch(
      `${BASE_URL}/top-headlines?${params.toString()}`,
      {
        next: { revalidate: 300 },
      }
    );

    if (!res.ok) {
      console.error("GNews error:", res.status);
      return [];
    }

    const data = await res.json();

    if (!Array.isArray(data.articles)) return [];

    return data.articles.map(mapArticle);
  } catch (error) {
    console.error("getNews failed:", error);
    return [];
  }
}


export async function searchNews(
  query: string
): Promise<NewsArticle[]> {
  if (!query) return [];

  const params = new URLSearchParams({
    q: query,
    token: API_KEY,
    lang: "en",
    country: "us",
    max: "12",
  });

  try {
    const res = await fetch(
      `${BASE_URL}/search?${params.toString()}`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      console.error("GNews search error:", res.status);
      return [];
    }

    const data = await res.json();

    if (!Array.isArray(data.articles)) return [];

    return data.articles.map(mapArticle);
  } catch (error) {
    console.error("searchNews failed:", error);
    return [];
  }
}
