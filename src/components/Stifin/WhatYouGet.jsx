import { Award } from "lucide-react";
import React from "react";

const WhatYouGet = () => {
  return (
    <div className="bg-green-50 rounded-lg p-6 mb-6">
      <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Apa yang Akan Anda Dapatkan?</h3>
      <div className="space-y-3">
        {[
          "Pemindaian sidik jari digital",
          "Hasil tipe kecerdasan dominan anak",
          "Laporan potensi & rekomendasi belajar",
          "Konsultasi privat langsung dengan Warda",
          "Sertifikat STIFIn & akses komunitas orang tua",
        ].map((item, idx) => (
          <div
            key={idx}
            className="flex items-start gap-3 bg-white p-3 rounded-lg"
          >
            <Award
              className="text-green-600 flex-shrink-0 mt-0.5"
              size={20}
            />
            <span className="text-sm md:text-base text-gray-700">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatYouGet;
