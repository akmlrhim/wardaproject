import { CheckCircle } from "lucide-react";
import React from "react";

const SolutionBenefit = () => {
  return (
    <div className="bg-gradient-to-r from-green-100 to-green-50 rounded-lg p-6 mb-6">
      <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4 text-center">
        Bayangkan Jika Anda Sudah Tahu Ini Sejak Sekarang…
      </h3>
      <div className="space-y-3">
        {[
          "Tahu tipe kecerdasan utama anak (S, T, I, F, atau Insting)",
          "Bisa memilih metode belajar yang sesuai gaya pikir alaminya",
          "Anak merasa dipahami, bukan dipaksa",
          "Arah pendidikan dan karir ke depan lebih jelas",
          "Risiko salah jurusan dan salah arah hidup bisa diminimalkan",
        ].map((benefit, idx) => (
          <div
            key={idx}
            className="flex items-start gap-3"
          >
            <CheckCircle
              className="text-green-600 flex-shrink-0 mt-0.5"
              size={20}
            />
            <span className="text-sm md:text-base text-gray-700">{benefit}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolutionBenefit;
