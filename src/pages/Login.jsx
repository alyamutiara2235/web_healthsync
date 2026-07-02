import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Activity, UserPlus, LogIn, AlertCircle, User, AtSign } from 'lucide-react';

function Login({ setUser }) {
 
  const [isModeDaftar, setIsModeDaftar] = useState(false);
  
  
  const [namaLengkap, setNamaLengkap] = useState('');
  const [username, setUsername] = useState('');
  

  const [pesanError, setPesanError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setPesanError('');

    const usernameBersih = username.trim().toLowerCase(); 
    const namaBersih = namaLengkap.trim();

    if (usernameBersih === '') return;

   
    const listPengguna = JSON.parse(localStorage.getItem("ruangsehat_users_db")) || [];

    if (isModeDaftar) {
    
      if (namaBersih === '') {
        setPesanError('Nama lengkap tidak boleh kosong, ya.');
        return;
      }

   
      const usernameSudahAda = listPengguna.some(user => user.username === usernameBersih);
      if (usernameSudahAda) {
        setPesanError('Waduh, username ini sudah dipakai orang lain. Coba cari nama unik yang lain, yuk!');
        return;
      }

   
      const penggunaBaru = {
        username: usernameBersih,
        namaLengkap: namaBersih
      };

    
      const dbTerbaru = [...listPengguna, penggunaBaru];
      localStorage.setItem("ruangsehat_users_db", JSON.stringify(dbTerbaru));

  
      prosesMasukAplikasi(penggunaBaru);

    } else {
   
      const userDitemukan = listPengguna.find(user => user.username === usernameBersih);

      if (!userDitemukan) {
        setPesanError('Username tidak ditemukan. Periksa kembali atau daftar akun baru dulu, yuk.');
        return;
      }

      prosesMasukAplikasi(userDitemukan);
    }
  };


  const prosesMasukAplikasi = (userObject) => {
    localStorage.setItem("ruangsehat_isLoggedIn", "true");
    localStorage.setItem("ruangsehat_username", userObject.username);
    localStorage.setItem("ruangsehat_namaLengkap", userObject.namaLengkap);

   
    setUser({ 
      username: userObject.username,
      name: userObject.namaLengkap 
    });

  
    navigate('/');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f9fafb] px-4">
      <div className="w-full max-w-md bg-white rounded-2xl p-8 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] space-y-6">
        
 
        <div className="text-center space-y-2">
          <div className="inline-flex p-3 bg-teal-50 text-teal-600 rounded-2xl mb-2">
            <Activity className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            {isModeDaftar ? 'Mulai Hidup Sehat' : 'Selamat Datang Kembali'}
          </h2>
          <p className="text-sm text-slate-500">
            {isModeDaftar 
              ? 'Daftar akun RuangSehat untuk memantau kesehatanmu.' 
              : 'Silakan masuk untuk melanjutkan rekam progresmu.'}
          </p>
        </div>

     
        {pesanError && (
          <div className="flex items-start gap-2.5 bg-rose-50 border border-rose-100 text-rose-800 text-xs p-3.5 rounded-xl">
            <AlertCircle className="w-4 h-4 text-rose-600 mt-0.5 flex-shrink-0" />
            <span>{pesanError}</span>
          </div>
        )}

       
        <form onSubmit={handleSubmit} className="space-y-4">
          
        
          {isModeDaftar && (
            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-2">Nama Lengkap</label>
              <div className="relative flex items-center">
                <User className="absolute left-4 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Contoh: Ahmad Ramadhan" 
                  value={namaLengkap} 
                  onChange={(e) => setNamaLengkap(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 pl-11 text-sm outline-none focus:bg-white focus:ring-2 focus:ring-teal-600/20 focus:border-teal-600 transition-all"
                  required
                />
              </div>
            </div>
          )}

       
          <div>
            <label className="block text-xs font-semibold text-slate-500 mb-2">Username</label>
            <div className="relative flex items-center">
              <AtSign className="absolute left-4 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="contoh: user123" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 pl-11 text-sm outline-none focus:bg-white focus:ring-2 focus:ring-teal-600/20 focus:border-teal-600 transition-all"
                required
              />
            </div>
          </div>

    
          <button 
            type="submit" 
            className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#005f54] py-3.5 text-sm font-semibold text-white hover:bg-[#004d44] transition-all shadow-md active:scale-[0.99] pt-3"
          >
            {isModeDaftar ? (
              <>
                <UserPlus className="w-4 h-4" />
                Daftar Sekarang
              </>
            ) : (
              <>
                <LogIn className="w-4 h-4" />
                Masuk ke Akun Anda
              </>
            )}
          </button>
        </form>


        <div className="text-center pt-2 border-t border-slate-100">
          <p className="text-xs text-slate-500">
            {isModeDaftar ? 'Sudah punya akun sebelumnya?' : 'Belum bergabung di RuangSehat?'}
            <button
              type="button"
              onClick={() => {
                setIsModeDaftar(!isModeDaftar);
                setPesanError('');
                setNamaLengkap('');
                setUsername('');
              }}
              className="text-teal-600 font-bold ml-1 hover:underline outline-none"
            >
              {isModeDaftar ? 'Masuk di Sini' : 'Buat Akun Baru'}
            </button>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Login;