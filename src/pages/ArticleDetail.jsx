import { useParams, Link } from "react-router-dom";
import articles from "../data/articles";

function ArticleDetail() {
  const { id } = useParams();
  const article = articles.find((a) => a.id === Number(id));

  const related = article
    ? articles.filter((a) => a.category === article.category && a.id !== article.id).slice(0, 2)
    : [];

  if (!article) {
    return (
      <section className="min-h-screen bg-slate-50 py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto text-center py-20 animate-fade-in">
          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-xl font-semibold text-slate-500">
            Artikel tidak ditemukan
          </p>
          <Link
            to="/articles"
            className="inline-block mt-4 text-emerald-600 font-medium hover:text-emerald-700 transition-colors"
          >
            &larr; Kembali ke daftar artikel
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-slate-50 py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto">

        <Link
          to="/articles"
          className="inline-flex items-center gap-1 text-sm text-emerald-600 font-medium hover:text-emerald-700 mb-6 hover:-translate-x-0.5 transition-all"
        >
          &larr; Kembali ke Artikel
        </Link>

        <div className="mb-6 animate-fade-in-up">
          <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
            {article.category}
          </span>

          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4 leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center gap-3 mt-4 text-sm text-slate-500">
            <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-semibold text-xs">
              {article.author.split(" ").map(w => w[0]).join("").slice(0, 2)}
            </div>
            <div>
              <p className="font-medium text-slate-700">{article.author}</p>
              <p className="text-xs text-slate-400">{article.date}</p>
            </div>
          </div>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-64 md:h-96 object-cover rounded-2xl mb-8 shadow-sm"
          />
        </div>

        <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-100 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          <p className="text-slate-800 font-medium text-lg leading-relaxed mb-6 border-l-4 border-emerald-500 pl-4">
            {article.summary}
          </p>

          <hr className="border-slate-100 mb-6" />

          {article.content.map((paragraph, index) => (
            <p
              key={index}
              className="text-slate-600 leading-relaxed mb-5 last:mb-0 text-base"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {related.length > 0 && (
          <div className="mt-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-xl font-bold text-slate-900 mb-6">Artikel Terkait</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/articles/${rel.id}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 block"
                >
                  <div className="overflow-hidden">
                    <img
                      src={rel.image}
                      alt={rel.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                      {rel.category}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 mt-2 leading-snug group-hover:text-emerald-700 transition-colors">
                      {rel.title}
                    </h3>
                    <p className="text-sm text-slate-500 mt-1 line-clamp-2">{rel.summary}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

export default ArticleDetail;
