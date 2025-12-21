import Link from "next/link";
import { NEWS_CATEGORIES } from "@/lib/news-categories";

export default function NewsCategoryNav({
  activeCategory,
}: {
  activeCategory?: string;
}) {
  return (
    <nav className="flex gap-3 overflow-x-auto mb-6">
      {NEWS_CATEGORIES.map((cat) => {
        const isActive = cat.key === activeCategory;

        return (
          <Link
            key={cat.key}
            href={`/news/${cat.key}`}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition
              ${
                isActive
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }
            `}
          >
            {cat.label}
          </Link>
        );
      })}
    </nav>
    
  );
}
