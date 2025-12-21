import { NewsArticle } from "@/lib/news";

export default function NewsCard({ article }: { article: NewsArticle }) {
 
  if (!article?.url || !article?.title) return null;

  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-xl border bg-white overflow-hidden hover:shadow-md transition"
    >
      {/* IMAGE */}
      <div className="h-48 bg-gray-100 overflow-hidden">
        <img
          src={article.image || "/news-placeholder.jpg"}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      {/* CONTENT */}
      <div className="p-4 space-y-2">
        <h3 className="text-sm font-semibold line-clamp-2 text-gray-900">
          {article.title}
        </h3>

        {article.description && (
          <p className="text-xs text-gray-600 line-clamp-3">
            {article.description}
          </p>
        )}

        <div className="flex justify-between items-center text-xs text-gray-400 pt-2">
          <span>{article.source?.name || "Unknown"}</span>
          {article.publishedAt && (
            <span>
              {new Date(article.publishedAt).toLocaleDateString()}
            </span>
          )}
        </div>
      </div>
    </a>
  );
}
