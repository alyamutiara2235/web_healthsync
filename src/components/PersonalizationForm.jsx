import React from 'react';
import { ArrowRight } from 'lucide-react';
import InformasiDasar from './InformasiDasar';
import MetrikTubuh from './MetrikTubuh';
import RitmeHarian from './RitmeHarian';
import KebiasaanBaik from './KebiasaanBaik';

function PersonalizationForm({
  usia, setUsia, jenisKelamin, setJenisKelamin, berat, setBerat, tinggi, setTinggi,
  ritmeHarian, setRitmeHarian, kebiasaan, toggleKebiasaan, onSubmit
}) {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <InformasiDasar usia={usia} setUsia={setUsia} jenisKelamin={jenisKelamin} setJenisKelamin={setJenisKelamin} />
      
      <MetrikTubuh berat={berat} setBerat={setBerat} tinggi={tinggi} setTinggi={setTinggi} />
      
      <RitmeHarian ritmeHarian={ritmeHarian} setRitmeHarian={setRitmeHarian} />
      
      <KebiasaanBaik kebiasaan={kebiasaan} toggleKebiasaan={toggleKebiasaan} />

      <div className="flex justify-end pt-4">
        <button type="submit" className="flex items-center gap-2 rounded-xl bg-[#005f54] px-6 py-3 text-sm font-semibold text-white hover:bg-[#004d44] transition-all shadow-md active:scale-[0.98]">
          Simpan Profil & Lihat Rekomendasi <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
}

export default PersonalizationForm;