import React from "react";

const CTA = () => {
  return (
    <div
      className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg p-6 mb-6 text-center"
      id="contact"
    >
      <h3 className="text-xl md:text-2xl font-bold mb-3">Jangan Biarkan Arah Masa Depan Anak Kacau!!</h3>
      <p className="text-sm md:text-base mb-4">
        Semakin cepat potensi dikenali, semakin besar peluang anak tumbuh sesuai kekuatannya.
      </p>
      <a
        href="https://wa.me/6283178257986"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-sm sm:text-md whitespace-nowrap hover:bg-green-50 transition"
      >
        Hubungi Promotor via WhatsApp
      </a>
      <p className="text-sm mt-3">No. WhatsApp: 083178257986</p>
    </div>
  );
};

export default CTA;
