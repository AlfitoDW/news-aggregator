// components/NewsCard.tsx

export default function NewsCard({ news }: { news: any }) {
  return (
    <a href={news.url} target="_blank" rel="noopener noreferrer">
      <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all hover:scale-[1.02] cursor-pointer">
        
        <div className="aspect-video overflow-hidden bg-gray-100">
          <img
            src={news.image || "/placeholder.jpg"}
            alt={news.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-4">
          <h2 className="font-semibold text-lg mb-2">
            {news.title}
          </h2>

          <p className="text-sm text-gray-600 line-clamp-3">
            {news.description}
          </p>

          <p className="text-xs text-gray-400 mt-3">
            {news.publishedAt ? new Date(news.publishedAt).toLocaleString() : ""}
          </p>
        </div>

      </article>
    </a>
  );
}
