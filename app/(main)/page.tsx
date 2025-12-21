// app/page.tsx
import NewsCard from "@/components/NewsCard";

export default async function Home() {
  const apiKey = process.env.GNEWS_API_KEY;

  const res = await fetch(
    `https://gnews.io/api/v4/top-headlines?country=us&lang=en&max=10&apikey=${apiKey}`,
    { cache: "no-store" }
  );

  const data = await res.json();

  const news = data.articles || [];

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-900">Top News</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((item: any, index: number) => (
          <NewsCard key={index} article={item} />
        ))}
      </div>
    </main>
  );
}
