import React from "react";

export const landingFeatureData = [
  {
    id: 1,
    title: "Artikel Kesehatan",
    description: "Baca informasi dan tips kesehatan terpercaya yang divalidasi oleh para ahli medis setiap hari.",
    linkTo: "/articles",
    linkText: "Buka Artikel",
    icon: React.createElement(
      "svg",
      { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" },
      React.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z",
      })
    ),
  },
  {
    id: 2,
    title: "Kalkulator BMI",
    description: "Hitung Indeks Massa Tubuh Anda secara cepat untuk mengetahui status berat badan yang ideal.",
    linkTo: "/calculator",
    linkText: "Hitung Sekarang",
    icon: React.createElement(
      "svg",
      { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" },
      React.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin:"round",
        strokeWidth: 1.5,
        d: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
      })
    ),
  },
  {
    id: 3,
    title: "Analisis Personalisasi",
    description: "Dapatkan analisis estimasi energi harian (TDEE) dan rekomendasi program kesehatan yang dirancang khusus untuk tubuhmu.",
    linkTo: "/personalization",
    linkText: "Mulai Analisis",
    icon: React.createElement(
      "svg",
      { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" },
      React.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 1.5,
        d: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
      })
    ),
  },
];