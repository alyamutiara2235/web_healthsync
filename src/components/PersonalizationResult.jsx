import React from 'react';
import { Flame, Sparkles, CheckCircle2 } from 'lucide-react';

function PersonalizationResult({ hasilKalkulasi }) {
  if (!hasilKalkulasi) return null;

  return (
    <div id="output-hasil" className="bg-gradient-to-br from-teal-800 to-[#004d44] rounded-3xl p-8 text-white shadow-xl space-y-6 transition-all duration-500 animate-fade-in">
      <div className="flex items-center gap-3 border-b border-teal-700/50 pb-4">
        <CheckCircle2 className="w-7 h-7 text-teal-300" />
        <div>
          <h2 className="text-xl font-bold tracking-wide">Analisis Profil Kesehatan</h2>
          <p className="text-xs text-teal-200/80">Disusun berdasarkan data personalisasi anda</p>
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
  );
}

export default PersonalizationResult;