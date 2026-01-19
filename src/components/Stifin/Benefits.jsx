import { CheckCircle } from "lucide-react";
import React from "react";

const Benefits = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Manfaat Nyata Setelah Tes</h3>
      <div className="space-y-3">
        {[
          "Orang tua lebih cepat memahami potensi anak",
          "Metode belajar jadi lebih efektif",
          "Anak lebih percaya diri dan termotivasi",
          "Waktu & biaya pendidikan jadi lebih efisien",
          "Keputusan pendidikan tidak lagi berdasarkan tebak-tebakan",
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

export default Benefits;
