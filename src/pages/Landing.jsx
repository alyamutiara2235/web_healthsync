import React from "react";
import { Link } from "react-router-dom";

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
              <Link 
                to="/login" 
                className="rounded-full bg-emerald-600 px-5 py-2 text-white hover:bg-emerald-700 font-medium text-sm transition-all shadow-sm block text-center"
              >
                Mulai Sekarang
              </Link>

              <a 
                href="#features" 
                className="rounded-full border border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-5 py-2 font-medium text-sm transition-all block text-center"
              >
                Pelajari Lebih Lanjut
              </a>
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

      <section id="features" className="bg-slate-50 py-16 px-6 md:px-12 lg:px-24">
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
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Artikel Kesehatan</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Baca informasi dan tips kesehatan terpercaya yang divalidasi oleh para ahli medis setiap hari.
                </p>
              </div>
              <Link to="/articles" className="text-emerald-600 font-medium text-sm hover:text-emerald-700 flex items-center gap-1 mt-2">
                Buka Artikel &rarr;
              </Link>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Kalkulator BMI</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Hitung Indeks Massa Tubuh Anda secara cepat untuk mengetahui status berat badan yang ideal.
                </p>
              </div>
              <Link to="/calculator" className="text-emerald-600 font-medium text-sm hover:text-emerald-700 flex items-center gap-1 mt-2">
                Hitung Sekarang &rarr;
              </Link>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Progres Personalisasi</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Pantau perkembangan kesehatan Anda dari waktu ke waktu dengan grafik simulasi yang interaktif.
                </p>
              </div>
              <Link to="/personalization" className="text-emerald-600 font-medium text-sm hover:text-emerald-700 flex items-center gap-1 mt-2">
                Lihat Progres &rarr;
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Landing;
