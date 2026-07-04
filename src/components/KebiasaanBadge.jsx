import React from 'react';

function KebiasaanBadge({ item, terpilih, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border transition-all ${
        terpilih ? 'bg-[#005f54] border-[#005f54] text-white shadow-sm' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
      }`}
    >
      {item.ikon}
      {item.nama}
    </button>
  );
}

export default KebiasaanBadge;