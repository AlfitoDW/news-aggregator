import NewsCard from "./NewsCard";
import { NewsArticle } from "@/lib/news";

export default function NewsList({ articles }: { articles: NewsArticle[] }) {
  if (!articles || articles.length === 0) {
    return <p className="text-gray-500">No news available.</p>;
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        article?.url && (
          <NewsCard key={article.url} article={article} />
        )
      ))}
    </div>
  );
}
