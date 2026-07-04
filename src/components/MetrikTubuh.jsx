import React from 'react';
import { Activity } from 'lucide-react';

function MetrikTubuh({ berat, setBerat, tinggi, setTinggi }) {
  return (
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
  );
}

export default MetrikTubuh;