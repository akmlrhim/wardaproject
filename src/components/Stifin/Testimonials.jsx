import React, { Fragment } from "react";

const Testimonials = () => {
  return (
    <div>
      <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 text-center">
        Kata Orang Tua yang Sudah Mencoba
      </h3>
      <div className="space-y-4 mb-6">
        <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-5">
          <p className="text-sm md:text-base text-gray-700 mb-3 italic">
            "Anisa (8 tahun) ternyata tipe Intuiting. Setelah metode belajarnya disesuaikan, dia jauh lebih cepat paham
            dan percaya diri."
          </p>
          <p className="text-sm font-semibold text-gray-800">— Dewi, Ibu Anisa</p>
        </div>
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-5">
          <p className="text-sm md:text-base text-gray-700 mb-3 italic">
            "Fikri (15 tahun) menunjukkan tipe Thinking. Sekarang cara belajarnya lebih terstruktur dan dia jadi lebih
            aktif."
          </p>
          <p className="text-sm font-semibold text-gray-800">— Budi, Ayah Fikri</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
