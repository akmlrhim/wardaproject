import { Users } from "lucide-react";
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
        <p>✓ Promotor STIFIn Banjarmasin dan Banjarbaru</p>
        <p>✓ Pengalaman lebih dari 3 tahun</p>
        <p>✓ Telah menangani 200++ anak</p>
        <p>✓ STIFIn Certified Consultant</p>
        <p>✓ Fokus pada analisis potensi & arahan praktis untuk orang tua</p>
      </div>
    </div>
  );
};

export default Promotor;
