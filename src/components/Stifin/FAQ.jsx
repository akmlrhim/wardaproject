import React from 'react'

const FAQ = () => {
	return (
    <div
      className="bg-white rounded-lg shadow-md p-6"
      id="contact"
    >
      <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 text-center">FAQ</h3>
      <div className="space-y-4">
        <div className="border-l-4 border-green-600 pl-4 py-2">
          <p className="font-semibold text-gray-800 mb-2 text-sm md:text-base">Q: Usia berapa tes ini cocok?</p>
          <p className="text-gray-700 text-sm md:text-base">
            A: Direkomendasikan untuk anak usia 5–12 tahun (bisa lebih luas).
          </p>
        </div>
        <div className="border-l-4 border-green-600 pl-4 py-2">
          <p className="font-semibold text-gray-800 mb-2 text-sm md:text-base">Q: Apakah hasil bisa berubah?</p>
          <p className="text-gray-700 text-sm md:text-base">A: Tidak. STIFIn berbasis genetik dan bersifat tetap.</p>
        </div>
        <div className="border-l-4 border-green-600 pl-4 py-2">
          <p className="font-semibold text-gray-800 mb-2 text-sm md:text-base">Q: Bedanya dengan tes IQ?</p>
          <p className="text-gray-700 text-sm md:text-base">
            A: IQ mengukur kemampuan, STIFIn mengungkap cara berpikir alami.
          </p>
        </div>
        <div className="border-l-4 border-green-600 pl-4 py-2">
          <p className="font-semibold text-gray-800 mb-2 text-sm md:text-base">Q: Apakah ada diskon keluarga?</p>
          <p className="text-gray-700 text-sm md:text-base">A: Ada, untuk minimal 3 orang.</p>
        </div>
      </div>
    </div>
  );
}

export default FAQ