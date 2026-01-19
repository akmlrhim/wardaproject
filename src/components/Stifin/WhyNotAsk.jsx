import React from "react";

const WhyNotAsk = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3">"Kenapa Tidak Tanya Anak Saja?"</h3>
      <p className="text-sm md:text-base text-gray-700 mb-3">
        Masalahnya… <span className="font-semibold">anak belum mengenal dirinya sendiri.</span>
      </p>
      <p className="text-sm md:text-base text-gray-700 mb-2">Mengamati keseharian saja sering kali:</p>
      <ul className="space-y-2 mb-4 text-sm md:text-base text-gray-700">
        <li className="flex items-start gap-2">
          <span className="text-red-500">•</span>
          <span>Terlalu subjektif</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-red-500">•</span>
          <span>Tidak detail</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-red-500">•</span>
          <span>Tidak memberi arahan bagaimana mengembangkannya</span>
        </li>
      </ul>
      <p className="text-sm md:text-base text-gray-700 font-semibold">
        Karena itulah dibutuhkan alat bantu yang objektif.
      </p>
      <p className="text-sm md:text-base text-green-600 font-semibold mt-2">
        Dan kabar baiknya, solusinya cukup dilakukan 1 kali seumur hidup.
      </p>
    </div>
  );
};

export default WhyNotAsk;
