import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ user, onLogout }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between bg-white px-6 py-4 shadow-sm border-b border-gray-100">
      <div className="text-xl font-bold text-emerald-600">
        <Link to="/">RuangSehat</Link>
      </div>

      <div className="flex items-center space-x-6">
        <Link to="/" className="text-gray-600 hover:text-emerald-600 font-medium transition">
          Beranda
        </Link>
        <Link to="/articles" className="text-gray-600 hover:text-emerald-600 font-medium transition">
          Artikel
        </Link>
        <Link to="/calculator" className="text-gray-600 hover:text-emerald-600 font-medium transition">
          Kalkulator
        </Link>
        <Link to="/personalization" className="text-gray-600 hover:text-emerald-600 font-medium transition">
          Personalisasi
        </Link>

        <span className="text-gray-300">|</span>


        {user ? (
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center space-x-1 rounded-full bg-emerald-50 px-4 py-2 font-medium text-emerald-700 hover:bg-emerald-100 focus:outline-none transition"
            >
              <span>Halo, {user.name}</span>
              <span className="text-xs">▼</span>
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-lg border border-gray-100 bg-white py-1 shadow-lg z-50">
                <div className="block px-4 py-2 text-xs text-gray-400 border-b border-gray-50">
                  Nama User
                </div>
                <div className="block px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-50/50 truncate">
                  {user.name}
                </div>
                
                <button
                  onClick={() => {
                    onLogout();
                    setDropdownOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50 transition border-t border-gray-100 mt-1"
                >
                  Keluar
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link
            to="/login"
            className="rounded-full bg-emerald-500 px-5 py-2 font-semibold text-white hover:bg-emerald-600 transition shadow-sm"
          >
            Daftar/Masuk
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;