import { notFound } from "next/navigation";
import NewsCategoryNav from "@/components/NewsCategory/nav";
import NewsList from "@/components/NewsList";
import { getNews } from "@/lib/gnews";
import { NEWS_CATEGORIES } from "@/lib/news-categories";

type Props = {
  params: Promise<{
    category: string;
  }>;
};

export default async function NewsCategoryPage({ params }: Props) {
  
  const { category } = await params;

  
  const isValid = NEWS_CATEGORIES.some(
    (c) => c.key === category
  );

  if (!isValid) {
    notFound();
  }

  
  const articles = await getNews({ category });

  return (
    <>
      <NewsCategoryNav activeCategory={category} />
      <NewsList articles={articles} />
    </>
  );
}
