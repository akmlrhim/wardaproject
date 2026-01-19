import { CheckCircle } from "lucide-react";
import React from "react";

const WhatIs = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Apa Itu Tes STIFIn?</h3>
      <p className="text-sm md:text-base text-gray-700 mb-4">
        Tes STIFIn adalah metode pemetaan mesin kecerdasan dominan otak. Anak diklasifikasikan ke dalam 5 tipe
        kecerdasan utama:
      </p>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-4">
        {["Sensing", "Thinking", "Intuiting", "Feeling", "Insting"].map((type, idx) => (
          <div
            key={idx}
            className="bg-green-100 text-green-700 text-center py-3 rounded-lg font-semibold text-sm"
          >
            {type}
          </div>
        ))}
      </div>
      <p className="text-sm md:text-base text-gray-700 mb-3">Tes ini:</p>
      <div className="space-y-2">
        {[
          "Praktis",
          "Tidak membuat anak stres",
          "Cukup sekali seumur hidup",
          "Memberi panduan nyata, bukan sekadar angka",
        ].map((feature, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2"
          >
            <CheckCircle
              className="text-green-600 flex-shrink-0"
              size={18}
            />
            <span className="text-sm md:text-base text-gray-700">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatIs;
