import React from 'react';
import { User } from 'lucide-react';

function InformasiDasar({ usia, setUsia, jenisKelamin, setJenisKelamin }) {
  return (
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
  );
}

export default InformasiDasar;