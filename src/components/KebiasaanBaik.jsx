import React from 'react';
import { Sparkles } from 'lucide-react';
import KebiasaanBadge from './KebiasaanBadge';
import { kebiasaanOpsi } from '../data/personalizationData';

function KebiasaanBaik({ kebiasaan, toggleKebiasaan }) {
  return (
    <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><Sparkles className="w-5 h-5" /></div>
        <h2 className="text-lg font-bold text-slate-800">Kebiasaan Baik</h2>
      </div>
      <p className="text-sm text-slate-500 mb-6">Pilih area yang ingin Anda fokuskan untuk pendekatan kesehatan holistik.</p>
      <div className="flex flex-wrap gap-3">
        {kebiasaanOpsi.map((item) => (
          <KebiasaanBadge
            key={item.nama}
            item={item}
            terpilih={kebiasaan.includes(item.nama)}
            onClick={() => toggleKebiasaan(item.nama)}
          />
        ))}
      </div>
    </div>
  );
}

export default KebiasaanBaik;