import React from 'react';
import { ArrowRight } from 'lucide-react';
import InformasiDasar from './InformasiDasar';
import MetrikTubuh from './MetrikTubuh';
import RitmeHarian from './RitmeHarian';
import KebiasaanBaik from './KebiasaanBaik';

function PersonalizationForm({
  usia, setUsia, jenisKelamin, setJenisKelamin, berat, setBerat, tinggi, setTinggi,
  ritmeHarian, setRitmeHarian, kebiasaan, toggleKebiasaan, onSubmit,
  isFormValid 
}) {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <InformasiDasar usia={usia} setUsia={setUsia} jenisKelamin={jenisKelamin} setJenisKelamin={setJenisKelamin} />
      
      <MetrikTubuh berat={berat} setBerat={setBerat} tinggi={tinggi} setTinggi={setTinggi} />
      
      <RitmeHarian ritmeHarian={ritmeHarian} setRitmeHarian={setRitmeHarian} />
      
      <KebiasaanBaik kebiasaan={kebiasaan} toggleKebiasaan={toggleKebiasaan} />

      <div className="flex justify-end pt-4">
        <button 
          type="submit" 
          disabled={!isFormValid}
          className={`flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white transition-all shadow-md ${
            isFormValid 
              ? 'bg-[#005f54] hover:bg-[#004d44] active:scale-[0.98] cursor-pointer' 
              : 'bg-slate-300 text-slate-500 cursor-not-allowed shadow-none'
          }`}
        >
          Simpan Profil & Lihat Rekomendasi <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
}

export default PersonalizationForm;