export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 space-y-16">
      {/* HERO */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          About News Aggregator
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          A modern news platform that brings together the most important stories
          from trusted sources—so you can stay informed without the noise.
        </p>
      </section>

      {/* DIVIDER */}
      <div className="h-px bg-gray-200" />

      {/* MISSION */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We believe staying informed should be simple, fast, and accessible.
            Our mission is to aggregate news from reliable publishers around the
            world and present it in a clean, distraction-free experience.
          </p>
          <p className="text-gray-600 leading-relaxed">
            No clickbait. No clutter. Just the news that matters.
          </p>
        </div>

        <div className="rounded-2xl border bg-gray-50 p-6 space-y-4">
          <ul className="space-y-3 text-sm text-gray-700">
            <li>📰 Curated headlines from trusted sources</li>
            <li>⚡ Fast, real-time updates</li>
            <li>🎯 Category-based & search-driven discovery</li>
            <li>🌍 Global news coverage</li>
          </ul>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-xl border p-6 space-y-3">
            <span className="text-sm text-gray-400">01</span>
            <h3 className="font-semibold text-gray-900">
              Aggregation
            </h3>
            <p className="text-sm text-gray-600">
              We collect news articles from verified and reputable publishers
              across multiple categories.
            </p>
          </div>

          <div className="rounded-xl border p-6 space-y-3">
            <span className="text-sm text-gray-400">02</span>
            <h3 className="font-semibold text-gray-900">
              Organization
            </h3>
            <p className="text-sm text-gray-600">
              Stories are organized by topic, relevance, and time—making it easy
              to explore what matters to you.
            </p>
          </div>

          <div className="rounded-xl border p-6 space-y-3">
            <span className="text-sm text-gray-400">03</span>
            <h3 className="font-semibold text-gray-900">
              Discovery
            </h3>
            <p className="text-sm text-gray-600">
              Search, browse categories, or explore top headlines—all in one
              seamless experience.
            </p>
          </div>
        </div>
      </section>

      {/* TECH */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">
          Built With Modern Web Technology
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="rounded-lg border px-4 py-3 text-center">
            Next.js
          </div>
          <div className="rounded-lg border px-4 py-3 text-center">
            React
          </div>
          <div className="rounded-lg border px-4 py-3 text-center">
            Tailwind CSS
          </div>
          <div className="rounded-lg border px-4 py-3 text-center">
            GNews API
          </div>
        </div>
      </section>

      {/* FOOTER NOTE */}
      <section className="pt-12 border-t">
        <p className="text-sm text-gray-500 max-w-3xl">
          News Aggregator is designed as a learning and exploration project,
          focusing on performance, usability, and modern frontend architecture.
        </p>
      </section>
    </main>
  );
}
