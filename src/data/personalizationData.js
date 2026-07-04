import React from 'react';
import { Droplets, Moon, Brain, Utensils } from 'lucide-react';

export const ritmeOpsi = [
  { id: 'Ringan', emo: '🖥️', nama: 'Ringan', desc: 'Banyak duduk, pergerakan minim. Pekerjaan ditempat.' },
  { id: 'Aktif', emo: '🚶‍♂️', nama: 'Aktif', desc: 'Sering berdiri/berjalan, olahraga ringan teratur.' },
  { id: 'Intens', emo: '💪', nama: 'Intens', desc: 'Pekerjaan fisik berat atau latihan harian intensif.' }
];

export const kebiasaanOpsi = [
  { nama: 'Hidrasi', ikon: React.createElement(Droplets,{className:"w-4 h-4"}) },
  { nama: 'Kualitas Tidur', ikon: React.createElement(Moon,{className:"w-4 h-4"}) },
  { nama: 'Reduksi Stres', ikon: React.createElement(Brain,{className:"w-4 h-4"}) },
  { nama: 'Makan', ikon: React.createElement(Utensils,{className:"w-4 h-4"}) }
];