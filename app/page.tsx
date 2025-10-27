export default function HomePage(){
  return (
    <section className="space-y-8">
      {/* Hero Section */}
      <div className="text-center py-12 bg-white shadow-sm rounded-lg">
        <h1 className="text-3xl font-bold text-blue-600 mb-2">
          Selamat Datang di News Aggregator
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Dapaptkan berita terbaru dan terpercaya dari berbagai sumber di satu tempat.
        </p>
      </div>

      {/* Placeholder Daftar Berita */}
      <div>
        <h2 className="text-xl font-semibold mb-4 text-blue-600">Berita Terbaru</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder untuk news card */}
          <div className="bg-white p-4 rounded-lg shadow-sm h-40 aniate-pulse" />
          <div className="bg-white p-4 rounded-lg shadow-sm h-40 aniate-pulse" />
          <div className="bg-white p-4 rounded-lg shadow-sm h-40 aniate-pulse" />
        </div>
      </div>
    </section>
  )
}