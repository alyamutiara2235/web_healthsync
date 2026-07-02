import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="h-auto flex items-center bg-white pt-16 pb-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-items-center w-full">
        
        <div className="flex flex-col justify-center w-full">
          <span className="text-emerald-600 font-semibold mb-2 block text-sm">RuangSehat</span>
          <h1 className="text-4xl font-bold text-slate-900 md:text-5xl leading-tight mb-4">
            Langkah Kecil untuk Tubuh Lebih Sehat
          </h1>
          <p className="max-w-xl text-slate-600 text-sm md:text-base leading-relaxed mb-6">
            RuangSehat hadir sebagai solusi praktis untuk mendukung gaya hidup sehatmu. Temukan panduan nutrisi lewat artikel kesehatan, hitung indeks massa tubuh (BMI) secara instan, dan pantau progres fisikmu dalam satu ruang digital yang sederhana.
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
  );
}

export default Hero;