import Link from "next/link";
import { NEWS_CATEGORIES } from "@/lib/news-categories";

export default function NewsCategoryNav({
  activeCategory,
}: {
  activeCategory?: string;
}) {
  return (
    <nav
      className="
        flex gap-3 mb-6
        overflow-x-auto
        scrollbar-hide
        pb-2
      "
    >
      <div className="flex gap-2 w-max">
        {NEWS_CATEGORIES.map((cat) => {
          const isActive = cat.key === activeCategory;

          return (
            <Link
              key={cat.key}
              href={`/news/${cat.key}`}
              className={`
                px-4 py-2
                rounded-full
                text-sm font-medium
                whitespace-nowrap
                transition-all
                ${
                  isActive
                    ? "bg-black text-white shadow"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }
              `}
            >
              {cat.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
