import NewsCategoryNav from "@/components/NewsCategory/nav";
import NewsList from "@/components/NewsList";
import { getNews } from "@/lib/gnews";

export default async function NewsPage() {
    const articles = await getNews({ category: "top"});

    return (
        <>
            <NewsCategoryNav/>
            <NewsList articles = {articles}/>
        </>
    );
}