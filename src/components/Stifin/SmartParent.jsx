import { CheckCircle } from "lucide-react";
import React from "react";

const SmartParent = () => {
  return (
    <div className="bg-green-50 border-l-4 border-green-600 rounded-lg p-6 mb-6">
      <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3">
        Orang Tua Cerdas Tidak Menunggu Masalah Terjadi
      </h3>
      <p className="text-sm md:text-base text-gray-700 mb-3">
        Mereka sadar satu hal penting:{" "}
        <span className="font-semibold">Mencegah selalu lebih murah daripada memperbaiki.</span>
      </p>
      <p className="text-sm md:text-base text-gray-700 mb-2">
        Mengenali potensi anak sejak dini membuat perbedaan besar:
      </p>
      <ul className="space-y-2 text-sm md:text-base text-gray-700">
        <li className="flex items-start gap-2">
          <CheckCircle
            className="text-green-600 flex-shrink-0 mt-0.5"
            size={18}
          />
          <span>Cara belajar jadi tepat</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle
            className="text-green-600 flex-shrink-0 mt-0.5"
            size={18}
          />
          <span>Anak lebih percaya diri</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle
            className="text-green-600 flex-shrink-0 mt-0.5"
            size={18}
          />
          <span>Pilihan sekolah dan jurusan lebih terarah</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle
            className="text-green-600 flex-shrink-0 mt-0.5"
            size={18}
          />
          <span>Risiko salah langkah di masa depan bisa ditekan</span>
        </li>
      </ul>
    </div>
  );
};

export default SmartParent;
