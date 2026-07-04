import { useState } from "react";

function Calculator() {
  const [berat, setBerat] = useState("");
  const [tinggi, setTinggi] = useState("");
  const [hasil, setHasil] = useState(null);

  const hitungBMI = (e) => {
    e.preventDefault();
    const b = parseFloat(berat);
    const t = parseFloat(tinggi) / 100;
    if (b > 0 && t > 0) {
      const bmi = b / (t * t);
      setHasil(bmi);
    }
  };

  const resetForm = () => {
    setBerat("");
    setTinggi("");
    setHasil(null);
  };

  const getKategori = (bmi) => {
    if (bmi < 18.5) return { label: "Berat Badan Kurang", warna: "text-blue-600", bg: "bg-blue-50", border: "border-blue-200" };
    if (bmi < 25) return { label: "Berat Badan Normal", warna: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-200" };
    if (bmi < 30) return { label: "Berat Badan Berlebih", warna: "text-amber-600", bg: "bg-amber-50", border: "border-amber-200" };
    return { label: "Obesitas", warna: "text-red-600", bg: "bg-red-50", border: "border-red-200" };
  };

  const getSaran = (bmi) => {
    if (bmi < 18.5) return "Pertimbangkan untuk menambah asupan kalori harian dengan makanan bergizi. Konsumsi lebih banyak protein, karbohidrat kompleks, dan lemak sehat.";
    if (bmi < 25) return "Berat badan Anda sudah ideal. Pertahankan pola makan seimbang dan rutin berolahraga minimal 30 menit setiap hari.";
    if (bmi < 30) return "Kurangi asupan makanan tinggi gula dan lemak jenuh. Tingkatkan aktivitas fisik seperti jalan cepat, bersepeda, atau berenang.";
    return "Disarankan untuk berkonsultasi dengan dokter atau ahli gizi. Mulai dengan perubahan pola makan bertahap dan olahraga ringan secara rutin.";
  };

  const kategoriList = [
    { range: "< 18.5", label: "Kurang", warna: "text-blue-600" },
    { range: "18.5 - 24.9", label: "Normal", warna: "text-emerald-600" },
    { range: "25 - 29.9", label: "Berlebih", warna: "text-amber-600" },
    { range: "> 30", label: "Obesitas", warna: "text-red-600" },
  ];

  return (
    <section className="min-h-screen bg-slate-50 py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">

        <div className="mb-10 animate-fade-in-up">
          <span className="text-emerald-600 font-semibold text-sm">
            RuangSehat
          </span>
          <h1 className="text-4xl font-bold text-slate-900 mt-2">
            Kalkulator BMI
          </h1>
          <p className="text-slate-600 mt-3 max-w-2xl">
            Hitung Body Mass Index (BMI) Anda untuk mengetahui apakah berat badan
            Anda sudah ideal berdasarkan tinggi badan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 mb-6">
                Masukkan Data Anda
              </h2>

              <form onSubmit={hitungBMI} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Berat Badan (kg)
                  </label>
                  <input
                    type="number"
                    placeholder="Contoh: 65"
                    value={berat}
                    onChange={(e) => setBerat(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    required
                    min="1"
                    step="0.1"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Tinggi Badan (cm)
                  </label>
                  <input
                    type="number"
                    placeholder="Contoh: 170"
                    value={tinggi}
                    onChange={(e) => setTinggi(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    required
                    min="1"
                    step="0.1"
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-1 rounded-full bg-emerald-600 py-3 text-white font-medium hover:bg-emerald-700 transition-all"
                  >
                    Hitung BMI
                  </button>
                  {hasil !== null && (
                    <button
                      type="button"
                      onClick={resetForm}
                      className="rounded-full border border-slate-200 px-6 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50 transition-all"
                    >
                      Reset
                    </button>
                  )}
                </div>
              </form>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 mt-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Kategori BMI</h3>
              <div className="space-y-3">
                {kategoriList.map((k) => (
                  <div key={k.range} className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">{k.range}</span>
                    <span className={"font-medium " + k.warna}>{k.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            {hasil !== null ? (
              <div className={"rounded-2xl p-6 md:p-8 shadow-sm border " + getKategori(hasil).bg + " " + getKategori(hasil).border}>
                <p className="text-sm font-medium text-slate-500 mb-2">Hasil BMI Anda</p>
                <p className={"text-6xl font-bold mb-3 " + getKategori(hasil).warna}>
                  {hasil.toFixed(1)}
                </p>
                <span className={"inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6 " + getKategori(hasil).warna + " bg-white/70"}>
                  {getKategori(hasil).label}
                </span>

                <div className="bg-white/60 rounded-xl p-5 mt-2">
                  <h3 className="font-bold text-slate-900 mb-2">Saran</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {getSaran(hasil)}
                  </p>
                </div>

                <div className="bg-white/60 rounded-xl p-5 mt-4">
                  <h3 className="font-bold text-slate-900 mb-2">Data Anda</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-slate-400">Berat Badan</p>
                      <p className="font-semibold text-slate-800">{berat} kg</p>
                    </div>
                    <div>
                      <p className="text-slate-400">Tinggi Badan</p>
                      <p className="font-semibold text-slate-800">{tinggi} cm</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 flex flex-col items-center justify-center min-h-[400px]">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-lg font-semibold text-slate-500">Belum ada hasil</p>
                <p className="text-slate-400 mt-1 text-sm text-center max-w-xs">
                  Masukkan berat dan tinggi badan Anda di form sebelah kiri, lalu klik Hitung BMI.
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Calculator;
