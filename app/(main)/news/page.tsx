import NewsCategoryNav from "@/components/NewsCategory/nav";
import NewsList from "@/components/NewsList";
import { getNews } from "@/lib/gnews";

export default async function NewsPage() {
  const articles = await getNews({ category: "top" });

  return (
    <main className="w-full">
      {/* CONTAINER */}
      <div
        className="
          mx-auto
          max-w-7xl
          px-4
          sm:px-6
          lg:px-8
          py-6
        "
      >
        {/* CATEGORY NAV */}
        <div className="mb-4">
          <NewsCategoryNav />
        </div>

        {/* NEWS LIST */}
        <NewsList articles={articles} />
      </div>
    </main>
  );
}
