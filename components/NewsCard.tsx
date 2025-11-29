// components/NewsCard.tsx

type NewsCardProps = {
  news : {
    id : number;
    title : string;
    description : string;
    image: string;
    url: string;
  };
};


export default function NewsCard({ news }:  NewsCardProps ) {
  return (
    <a
      href={news.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all hover:scale-[1.02] cursor-pointer flex flex-col h-full">
        {/* FIX: Gambar seragam */}
        <div className="w-full h-48 overflow-hidden">
          <img
            src={news.image}
            alt={news.title}
            className="w-full h-full object-cover"
          />
        </div>
        {/* FIX: Bagian konten agar konsisten*/}
        <div className="flex flex-col p-5 flex-1">
          <h2 className="text-lg font-semibold text-zinc-900 mb-2 line-clamp-2 min-h-12">
            {news.title}
          </h2>


          <p className="text-sm text-zinc-600 line-clamp-3 flex-1">
            {news.description}
          </p>
        </div>
      </article>
    </a>
  );
}
