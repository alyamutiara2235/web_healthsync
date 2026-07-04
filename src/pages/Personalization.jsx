import React, { useState, useEffect } from 'react';
import PersonalizationForm from '../components/PersonalizationForm';
import PersonalizationResult from '../components/PersonalizationResult'; 

function Personalization() {
  const getInitialProfile = () => {
    const saved = localStorage.getItem('ruangsehat_profile');
    return saved ? JSON.parse(saved) : null;
  };

  const initialProfile = getInitialProfile();

  const [usia, setUsia] = useState(initialProfile?.usia || '');
  const [jenisKelamin, setJenisKelamin] = useState(initialProfile?.jenisKelamin || '');
  const [berat, setBerat] = useState(initialProfile?.berat || '');
  const [tinggi, setTinggi] = useState(initialProfile?.tinggi || '');
  const [ritmeHarian, setRitmeHarian] = useState(initialProfile?.ritmeHarian || '');
  const [kebiasaan, setKebiasaan] = useState(initialProfile?.kebiasaan || []);
  const [hasilKalkulasi, setHasilKalkulasi] = useState(initialProfile?.hasilKalkulasi || null);
  
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isValid = 
      usia !== '' && parseFloat(usia) > 0 &&
      berat !== '' && parseFloat(berat) > 0 &&
      tinggi !== '' && parseFloat(tinggi) > 0 &&
      jenisKelamin !== '';
      
    setIsFormValid(isValid);
  }, [usia, berat, tinggi, jenisKelamin]);

  useEffect(() => {
    const profileData = { usia, jenisKelamin, berat, tinggi, ritmeHarian, kebiasaan, hasilKalkulasi };
    localStorage.setItem('ruangsehat_profile', JSON.stringify(profileData));
  }, [usia, jenisKelamin, berat, tinggi, ritmeHarian, kebiasaan, hasilKalkulasi]);

  const toggleKebiasaan = (namaKebiasaan) => {
    if (kebiasaan.includes(namaKebiasaan)) {
      setKebiasaan(kebiasaan.filter((item) => item !== namaKebiasaan));
    } else {
      setKebiasaan([...kebiasaan, namaKebiasaan]);
    }
  };

  const hitungKebutuhanKesehatan = (e) => {
    e.preventDefault();
    
    if (!isFormValid) {
      alert('Silakan lengkapi semua data profil Anda terlebih dahulu dengan benar.');
      return;
    }

    const b = parseFloat(berat);
    const t = parseFloat(tinggi);
    const u = parseFloat(usia);

    let bmr = jenisKelamin === 'Pria' 
      ? (10 * b) + (6.25 * t) - (5 * u) + 5 
      : (10 * b) + (6.25 * t) - (5 * u) - 161;

    let pengaliAktivitas = 1.2; 
    if (ritmeHarian === 'Aktif') pengaliAktivitas = 1.55;
    if (ritmeHarian === 'Intens') pengaliAktivitas = 1.725;

    const totalKalori = Math.round(bmr * pengaliAktivitas);

    let rekomendasiProgram = 'Program Kebugaran Seimbang';
    if (ritmeHarian === 'Ringan') {
      rekomendasiProgram = 'Program Aktivasi Fisik Ringan & Peregangan Fleksibilitas';
    } else if (kebiasaan.includes('Reduksi Stres') && kebiasaan.includes('Kualitas Tidur')) {
      rekomendasiProgram = 'Program Restorasi Tubuh (Fokus Tidur Berkualitas & Meditasi)';
    } else if (ritmeHarian === 'Intens') {
      rekomendasiProgram = 'Program Pengondisian Atletik & Manajemen Nutrisi Makro';
    }

    setHasilKalkulasi({ kalori: totalKalori, program: rekomendasiProgram });

    setTimeout(() => {
      document.getElementById('output-hasil')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <section className="min-h-screen bg-[#f9fafb] py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="w-full max-w-3xl space-y-8">
        
        <div className="space-y-3 text-center">
          <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-teal-600">
            Personalisasi
          </span>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-900">
            Kenalan dengan Tubuhmu
          </h1>
          <p className="mx-auto max-w-2xl text-base text-slate-500">
            Cukup lengkapi profil ini agar kamu bisa memantau kesehatan dengan cara yang paling nyaman untukmu.
          </p>
        </div>

        <PersonalizationForm
          usia={usia} setUsia={setUsia}
          jenisKelamin={jenisKelamin} setJenisKelamin={setJenisKelamin}
          berat={berat} setBerat={setBerat}
          tinggi={tinggi} setTinggi={setTinggi}
          ritmeHarian={ritmeHarian} setRitmeHarian={setRitmeHarian}
          kebiasaan={kebiasaan} toggleKebiasaan={toggleKebiasaan}
          onSubmit={hitungKebutuhanKesehatan}
          isFormValid={isFormValid} 
        />

        <PersonalizationResult hasilKalkulasi={hasilKalkulasi} />

      </div>
    </section>
  );
}

export default Personalization;