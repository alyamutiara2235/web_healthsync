import React, { useState } from 'react';
import { User, Activity, Dumbbell, Sparkles, ArrowRight, Droplets, Moon, Brain, Utensils, Flame, CheckCircle2 } from 'lucide-react';

function Personalization() {

  const [usia, setUsia] = useState('');
  const [jenisKelamin, setJenisKelamin] = useState('');
  const [berat, setBerat] = useState('');
  const [tinggi, setTinggi] = useState('');
  const [ritmeHarian, setRitmeHarian] = useState('');
  const [kebiasaan, setKebiasaan] = useState('');

 
  const [hasilKalkulasi, setHasilKalkulasi] = useState(null);

  const toggleKebiasaan = (item) => {
    setKebiasaan(prev =>
      prev.includes(item) ? prev.filter(k => k !== item) : [...prev, item]
    );
  };

  const hitungKebutuhanKesehatan = (e) => {
    e.preventDefault();
    if (!usia || !berat || !tinggi) {
      alert('Silakan isi usia, berat badan, dan tinggi badan terlebih dahulu.');
      return;
    }

    const b = parseFloat(berat);
    const t = parseFloat(tinggi);
    const u = parseFloat(usia);

  
    let bmr = 0;
    if (jenisKelamin === 'Pria') {
      bmr = 10 * b + 6.25 * t - 5 * u + 5;
    } else {
      bmr = 10 * b + 6.25 * t - 5 * u - 161;
    }

  
    let pengaliAktivitas = 1.2; 
    if (ritmeHarian === 'Aktif') pengaliAktivitas = 1.55;
    if (ritmeHarian === 'Intens') pengaliAktivitas = 1.725;

    const totalKalori = Math.round(bmr * pengaliAktivitas);

  
    let rekomendasiProgram = 'Program Kebugaran Seimbang';
    if (ritmeHarian === 'Ringan') {
      rekomendasiProgram = 'Program Aktivasi Fisik Ringan & Peregangan Fleksibilitas';
    } else if (kebiasaan.includes('Reduksi Stres') && kebiasaan.includes('Kualitas Tidur')) {
      rekomendasiProgram = 'Program Restorasi Tubuh (Fokus Tidur Berkualitas & Meditasi)';
    } else if (ritmeHarian === 'Intens') {
      rekomendasiProgram = 'Program Pengondisian Atletik & Manajemen Nutrisi Makro';
    }

  
    setHasilKalkulasi({
      kalori: totalKalori,
      program: rekomendasiProgram
    });

  
    setTimeout(() => {
      document.getElementById('output-hasil')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <section className="min-h-screen bg-[#f9fafb] py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="w-full max-w-3xl space-y-8">
        
  
        <div className="text-center space-y-3">
          <span className="text-teal-600 font-bold text-xs uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full">Personalisasi</span>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
            Kenalan dengan Tubuhmu
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-base">
            Cukup lengkapi profil ini agar kamu bisa memantau kesehatan dengan cara yang paling nyaman untukmu.
          </p>
        </div>

        <form onSubmit={hitungKebutuhanKesehatan} className="space-y-6">
          
    
          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><User className="w-5 h-5" /></div>
              <h2 className="text-lg font-bold text-slate-800">Informasi Dasar</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-2">Usia</label>
                <div className="relative flex items-center">
                  <input
                    type="number" value={usia} onChange={(e) => setUsia(e.target.value)} required placeholder="misal: 32"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 pr-16 text-sm outline-none focus:bg-white focus:ring-2 focus:ring-teal-600/20 focus:border-teal-600 transition-all"
                  />
                  <span className="absolute right-4 text-xs font-medium text-slate-400">tahun</span>
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-2">Jenis Kelamin</label>
                <div className="grid grid-cols-2 gap-3">
                  {['Wanita', 'Pria'].map((jk) => (
                    <button
                      key={jk} type="button" onClick={() => setJenisKelamin(jk)}
                      className={`p-3.5 rounded-xl text-sm font-medium border transition-all ${jenisKelamin === jk ? 'border-teal-600 bg-teal-50/50 text-teal-700 font-semibold' : 'border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                    >
                      {jk}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>


          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><Activity className="w-5 h-5" /></div>
              <h2 className="text-lg font-bold text-slate-800">Metrik Tubuh</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-2">Berat Badan (kg)</label>
                <input
                  type="number" step="0.1" value={berat} onChange={(e) => setBerat(e.target.value)} required placeholder="0.0"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 text-sm outline-none focus:bg-white focus:ring-2 focus:ring-teal-600/20 focus:border-teal-600 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-2">Tinggi Badan (cm)</label>
                <input
                  type="number" value={tinggi} onChange={(e) => setTinggi(e.target.value)} required placeholder="165"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 text-sm outline-none focus:bg-white focus:ring-2 focus:ring-teal-600/20 focus:border-teal-600 transition-all"
                />
              </div>
            </div>
          </div>


          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><Dumbbell className="w-5 h-5" /></div>
              <h2 className="text-lg font-bold text-slate-800">Ritme Harian</h2>
            </div>
            <p className="text-sm text-slate-500 mb-6">Bagaimana Anda menggambarkan tingkat aktivitas harian Anda?</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { id: 'Ringan', emo: '🖥️', desc: 'Banyak duduk, pergerakan minim. Pekerjaan meja.' },
                { id: 'Aktif', emo: '🚶‍♂️', desc: 'Sering berdiri/berjalan, olahraga ringan teratur.' },
                { id: 'Intens', emo: '💪', desc: 'Pekerjaan fisik berat atau latihan harian intensif.' }
              ].map((opsi) => (
                <div
                  key={opsi.id} onClick={() => setRitmeHarian(opsi.id)}
                  className={`p-5 rounded-2xl border cursor-pointer flex flex-col justify-between transition-all ${ritmeHarian === opsi.id ? 'border-teal-600 bg-slate-50/30 ring-1 ring-teal-600' : 'border-slate-100 bg-slate-50/50 hover:bg-slate-50'}`}
                >
                  <div className="flex justify-between items-start w-full">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 mb-4">{opsi.emo}</div>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${ritmeHarian === opsi.id ? 'border-teal-600' : 'border-slate-300'}`}>
                      {ritmeHarian === opsi.id && <div className="w-2.5 h-2.5 rounded-full bg-teal-600" />}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-800 mb-1">{opsi.id}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{opsi.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>


          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><Sparkles className="w-5 h-5" /></div>
              <h2 className="text-lg font-bold text-slate-800">Kebiasaan Baik</h2>
            </div>
            <p className="text-sm text-slate-500 mb-6">Pilih area yang ingin Anda fokuskan untuk pendekatan kesehatan holistik.</p>
            <div className="flex flex-wrap gap-3">
              {[
                { nama: 'Hidrasi', ikon: <Droplets className="w-4 h-4" /> },
                { nama: 'Kualitas Tidur', ikon: <Moon className="w-4 h-4" /> },
                { nama: 'Reduksi Stres', ikon: <Brain className="w-4 h-4" /> },
                { nama: 'Makan dengan Sadar', ikon: <Utensils className="w-4 h-4" /> }
              ].map((item) => {
                const terpilih = kebiasaan.includes(item.nama);
                return (
                  <button
                    key={item.nama} type="button" onClick={() => toggleKebiasaan(item.nama)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border transition-all ${terpilih ? 'bg-[#005f54] border-[#005f54] text-white shadow-sm' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                  >
                    {item.ikon}
                    {item.nama}
                  </button>
                );
              })}
            </div>
          </div>


          <div className="flex justify-end pt-4">
            <button
              type="submit"
              className="flex items-center gap-2 rounded-xl bg-[#005f54] px-6 py-3 text-sm font-semibold text-white hover:bg-[#004d44] transition-all shadow-md active:scale-[0.98]"
            >
              Simpan Profil & Lihat Rekomendasi
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>


        {hasilKalkulasi && (
          <div id="output-hasil" className="bg-gradient-to-br from-teal-800 to-[#004d44] rounded-3xl p-8 text-white shadow-xl space-y-6 transition-all duration-500 animate-fade-in">
            <div className="flex items-center gap-3 border-b border-teal-700/50 pb-4">
              <CheckCircle2 className="w-7 h-7 text-teal-300" />
              <div>
                <h2 className="text-xl font-bold tracking-wide">Analisis Profil Kesehatan</h2>
                <p className="text-xs text-teal-200/80">Disusun berdasarkan data personalisasi biologis anda</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
         
              <div className="bg-teal-900/40 border border-teal-700/30 p-6 rounded-2xl flex items-center gap-5">
                <div className="p-4 bg-teal-500/20 text-teal-300 rounded-full">
                  <Flame className="w-8 h-8 animate-pulse" />
                </div>
                <div>
                  <p className="text-xs text-teal-200 font-medium tracking-wider uppercase">Estimasi Energi Harian (TDEE)</p>
                  <p className="text-3xl font-black text-white mt-1">
                    {hasilKalkulasi.kalori} <span className="text-sm font-normal text-teal-200">Kalori / hari</span>
                  </p>
                </div>
              </div>

              <div className="bg-teal-900/40 border border-teal-700/30 p-6 rounded-2xl flex items-center gap-5">
                <div className="p-4 bg-teal-500/20 text-teal-300 rounded-full">
                  <Sparkles className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-xs text-teal-200 font-medium tracking-wider uppercase">Rekomendasi Program</p>
                  <p className="text-md font-bold text-teal-100 mt-1 leading-snug">
                    {hasilKalkulasi.program}
                  </p>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-teal-200/60 text-center pt-2">
              *Hasil ini merupakan estimasi awal sistem untuk memahami kondisi awal metabolisme tubuh Anda.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}

export default Personalization;