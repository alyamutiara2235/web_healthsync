function Landing() {
  return (
  <>
  <section className="h-auto flex items-center bg-white pt-16 pb-12 px-6 md:px-12 lg:px-24">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-items-center w-full">
      
      <div className="flex flex-col justify-center w-full">
        <span className="text-emerald-600 font-semibold mb-2 block text-sm">HealthSync</span>
        
        <h1 className="text-4xl font-bold text-slate-900 md:text-5xl leading-tight mb-4">
          Simulasi Website Kesehatan Digital
        </h1>
        
        <p className="max-w-xl text-slate-600 text-sm md:text-base leading-relaxed mb-6">
          HealthSync membantu pengguna membaca artikel kesehatan, menghitung BMI, dan melihat personalisasi progress kesehatan secara sederhana.
        </p>
        
        <div className="flex gap-4">
          <button className="rounded-full bg-emerald-600 px-5 py-2 text-white hover:bg-emerald-700 font-medium text-sm transition-all shadow-sm">
            Mulai Sekarang
          </button>
          <button className="rounded-full border border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-5 py-2 font-medium text-sm transition-all">
            Pelajari Lebih Lanjut
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center w-full">
        <div className="max-w-md w-full">
          <img 
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFrYW4lMjBzZWhhdHxlbnwwfHwwfHx8MA%3D%3D"
            alt="Healthy Food" 
            className="w-full h-auto rounded-[2rem] object-cover shadow-md" 
          />
        </div>
      </div>
    </div>
</section>

<section className="bg-slate-50 py-16 px-6 md:px-12 lg:px-24">
  <div className="max-w-7xl mx-auto">
    
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-slate-900 mb-3">
        Fitur Unggulan Kami
      </h2>
      <p className="text-slate-600 max-w-lg mx-auto text-sm md:text-base">
        Eksplorasi berbagai alat simulasi kesehatan yang dirancang khusus untuk mempermudah pola hidup sehat Anda.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
        <div>
          <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-4 font-bold text-xl">
            📰
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Artikel Kesehatan</h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Baca informasi dan tips kesehatan terpercaya yang divalidasi oleh para ahli medis setiap hari.
          </p>
        </div>
        <a href="#artikel" className="text-emerald-600 font-medium text-sm hover:text-emerald-700 flex items-center gap-1 mt-2">
          Buka Artikel &rarr;
        </a>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
        <div>
          <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-4 font-bold text-xl">
            🧮
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Kalkulator BMI</h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Hitung Indeks Massa Tubuh Anda secara cepat untuk mengetahui status berat badan yang ideal.
          </p>
        </div>
        <a href="#bmi" className="text-emerald-600 font-medium text-sm hover:text-emerald-700 flex items-center gap-1 mt-2">
          Hitung Sekarang &rarr;
        </a>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
        <div>
          {/* Ikon Mini */}
          <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-4 font-bold text-xl">
            📈
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Progres Personalisasi</h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Pantau perkembangan kesehatan Anda dari waktu ke waktu dengan grafik simulasi yang interaktif.
          </p>
        </div>
        <a href="#progress" className="text-emerald-600 font-medium text-sm hover:text-emerald-700 flex items-center gap-1 mt-2">
          Lihat Progres &rarr;
        </a>
      </div>

    </div>
  </div>
</section>
</>
  );
}

export default Landing;