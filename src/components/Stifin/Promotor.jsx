import { CheckCircle, Users } from "lucide-react";
import React from "react";

const Promotor = () => {
  return (
    <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg p-6 mb-6">
      <div className="flex items-center gap-3 mb-4">
        <Users size={32} />
        <h3 className="text-xl md:text-2xl font-bold">Tentang Promotor</h3>
      </div>

      <h4 className="text-lg md:text-xl font-bold mb-3">Musdalifa Warda</h4>

      <div className="space-y-2 text-sm md:text-base">
        <p className="flex items-start gap-2">
          <CheckCircle
            size={20}
            className="text-white flex-shrink-0 mt-0.5"
          />
          <span>Promotor STIFIn Banjarmasin dan Banjarbaru</span>
        </p>

        <p className="flex items-start gap-2">
          <CheckCircle
            size={20}
            className="text-white flex-shrink-0 mt-0.5"
          />
          <span>Pengalaman lebih dari 3 tahun</span>
        </p>

        <p className="flex items-start gap-2">
          <CheckCircle
            size={20}
            className="text-white flex-shrink-0 mt-0.5"
          />
          <span>Telah menangani 200++ anak</span>
        </p>

        <p className="flex items-start gap-2">
          <CheckCircle
            size={20}
            className="text-white flex-shrink-0 mt-0.5"
          />
          <span>STIFIn Certified Consultant</span>
        </p>

        <p className="flex items-start gap-2">
          <CheckCircle
            size={20}
            className="text-white flex-shrink-0 mt-0.5"
          />
          <span>Fokus pada analisis potensi & arahan praktis untuk orang tua</span>
        </p>
      </div>
    </div>
  );
};

export default Promotor;
