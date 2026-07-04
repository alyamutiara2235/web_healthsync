import React from 'react';
import { Dumbbell } from 'lucide-react';
import RitmeCard from './RitmeCard';
import { ritmeOpsi } from '../data/personalizationData';

function RitmeHarian({ ritmeHarian, setRitmeHarian }) {
  return (
    <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><Dumbbell className="w-5 h-5" /></div>
        <h2 className="text-lg font-bold text-slate-800">Ritme Harian</h2>
      </div>
      <p className="text-sm text-slate-500 mb-6">Bagaimana Anda menggambarkan tingkat aktivitas harian Anda?</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {ritmeOpsi.map((opsi) => (
          <RitmeCard
            key={opsi.id}
            opsi={opsi}
            isActive={ritmeHarian === opsi.id}
            onClick={() => setRitmeHarian(opsi.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default RitmeHarian;