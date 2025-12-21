import { NewsArticle } from "@/lib/news";

const BASE_URL = "https://gnews.io/api/v4/top-headlines";

export async function getNews({
  category,
}: {
  category: string;
}): Promise<NewsArticle[]> {
  const params = new URLSearchParams({
    token: process.env.GNEWS_API_KEY!,
    lang: "en",
    country: "us",
    max: "12",
  });

  if (category !== "top") {
    params.append("category", category);
  }

  const res = await fetch(`${BASE_URL}?${params.toString()}`, {
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch news");
  }

  const data = await res.json();

  
  const articles: NewsArticle[] = data.articles.map((item: any) => ({
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
  }));

  return articles;
}
