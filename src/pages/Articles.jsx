import { useState } from "react";
import { Link } from "react-router-dom";
import articles from "../data/articles";

function Articles() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");

  const categories = ["Semua", ...new Set(articles.map((a) => a.category))];

  const filtered = articles.filter((article) => {
    const cocokSearch =
      article.title.toLowerCase().includes(search.toLowerCase()) ||
      article.summary.toLowerCase().includes(search.toLowerCase());

    const cocokKategori =
      activeCategory === "Semua" || article.category === activeCategory;

    return cocokSearch && cocokKategori;
  });

  return (
    <section className="min-h-screen bg-slate-50 py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">

        <div className="mb-10 animate-fade-in-up">
          <span className="text-emerald-600 font-semibold text-sm">
            RuangSehat
          </span>
          <h1 className="text-4xl font-bold text-slate-900 mt-2">
            Artikel Kesehatan
          </h1>
          <p className="text-slate-600 mt-3 max-w-2xl">
            Baca informasi dan tips kesehatan terpercaya untuk menunjang pola
            hidup sehat Anda setiap hari.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <div className="relative w-full max-w-md">
            <svg
              className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>
            <input
              type="text"
              placeholder="Cari artikel..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 bg-white shadow-sm transition-all"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 " +
                  (activeCategory === cat
                    ? "bg-emerald-600 text-white shadow-sm scale-105"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-emerald-300 hover:text-emerald-600")
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <p className="text-sm text-slate-500 mb-6">
          Menampilkan {filtered.length} artikel
          {activeCategory !== "Semua" && (
            <span>
              {" "}
              dalam kategori <strong>{activeCategory}</strong>
            </span>
          )}
          {search && (
            <span>
              {" "}
              untuk &ldquo;{search}&rdquo;
            </span>
          )}
        </p>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article, i) => (
              <Link
                key={article.id}
                to={`/articles/${article.id}`}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 block animate-fade-in-up"
                style={{ animationDelay: `${0.05 * i}s` }}
              >
                <div className="overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-xs text-slate-400">
                      {article.date}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-emerald-700 transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>

                  <span className="inline-block mt-4 text-sm font-medium text-emerald-600 group-hover:translate-x-1 transition-transform duration-200">
                    Baca selengkapnya &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 animate-fade-in">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
              </svg>
            </div>
            <p className="text-xl font-semibold text-slate-500">
              Artikel tidak ditemukan
            </p>
            <p className="text-slate-400 mt-2">
              Coba ubah kata kunci atau kategori pencarian Anda.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Articles;
