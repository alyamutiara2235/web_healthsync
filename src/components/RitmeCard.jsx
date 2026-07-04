import React from 'react';

function RitmeCard({ opsi, isActive, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`p-5 rounded-2xl border cursor-pointer flex flex-col justify-between transition-all ${
        isActive ? 'border-teal-600 bg-slate-50/30 ring-1 ring-teal-600' : 'border-slate-100 bg-slate-50/50 hover:bg-slate-50'
      }`}
    >
      <div className="flex justify-between items-start w-full">
        <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 mb-4">
          {opsi.emo}
        </div>
        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${isActive ? 'border-teal-600' : 'border-slate-300'}`}>
          {isActive && <div className="w-2.5 h-2.5 rounded-full bg-teal-600" />}
        </div>
      </div>
      <div>
        <h3 className="text-sm font-bold text-slate-800 mb-1">{opsi.nama}</h3>
        <p className="text-xs text-slate-400 leading-relaxed">{opsi.desc}</p>
      </div>
    </div>
  );
}

export default RitmeCard;