import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ setUser }) {
  const [inputNama, setInputNama] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (inputNama.trim() !== '') {
      localStorage.setItem("healthsync_isLoggedIn", "true");
      localStorage.setItem("healthsync_userName", inputNama);

      setUser({ name: inputNama }); 

      navigate('/'); 
    }
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-gray-50">
      <form onSubmit={handleLogin} className="p-8 bg-white rounded-xl shadow-md border border-gray-100 w-full max-w-sm">
        <h3 className="mb-6 text-xl font-bold text-center text-gray-800">Login ke HealthSync</h3>
        <input 
          type="text" 
          placeholder="Masukkan Nama Anda" 
          value={inputNama} 
          onChange={(e) => setInputNama(e.target.value)}
          className="border border-gray-300 p-2.5 rounded-lg mb-4 w-full focus:border-emerald-500 focus:outline-none"
          required
        />
        <button type="submit" className="bg-emerald-500 hover:bg-emerald-600 transition text-white font-semibold p-2.5 rounded-lg w-full">
          Masuk
        </button>
      </form>
    </div>
  );
}

export default Login;