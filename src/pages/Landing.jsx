function Landing() {
  return (
    <section className="min-h-[80vh] bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-sm font-semibold text-emerald-600">
          HealthSync
        </p>

        <h1 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">
          Simulasi Website Kesehatan Digital
        </h1>

        <p className="max-w-2xl text-slate-600">
          HealthSync membantu pengguna membaca artikel kesehatan, menghitung BMI,
          dan melihat personalisasi progress kesehatan secara sederhana.
        </p>
      </div>
    </section>
  );
}

export default Landing;