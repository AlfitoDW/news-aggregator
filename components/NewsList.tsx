import NewsCard from "./NewsCard";
import { NewsArticle } from "@/lib/news";

export default function NewsList({ articles }: { articles: NewsArticle[] }) {
  if (!articles || articles.length === 0) {
    return (
      <p className="text-center text-sm text-gray-500 py-10">
        No news available.
      </p>
    );
  }

  return (
    <section
      className="
        grid gap-4
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
      "
    >
      {articles.map((article) =>
        article?.url ? (
          <NewsCard key={article.url} article={article} />
        ) : null
      )}
    </section>
  );
}
