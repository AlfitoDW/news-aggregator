import { searchNews } from "@/lib/gnews";
import NewsList from "@/components/NewsList";

type Props = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export default async function SearchPage({ searchParams }: Props) {
  const params = await searchParams;
  const query = params.q?.trim() || "";

  const articles = query ? await searchNews(query) : [];

  return (
    <main className="max-w-7xl mx-auto px-6 py-8">
      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">
          Search results for{" "}
          <span className="text-blue-600">“{query}”</span>
        </h1>

        <p className="text-sm text-gray-500 mt-1">
          {articles.length} articles found
        </p>
      </div>

      {/* EMPTY STATE */}
      {!query && (
        <p className="text-gray-500">
          Please enter a search keyword.
        </p>
      )}

      {query && articles.length === 0 && (
        <p className="text-gray-500">
          No results found for <b>“{query}”</b>
        </p>
      )}

      {/* RESULTS */}
      {articles.length > 0 && (
        <NewsList articles={articles} />
      )}
    </main>
  );
}
