import React from 'react'

const Pricing = () => {
	return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 text-center">Berapa Biaya Investasinya?</h3>
      <div className="space-y-3 mb-4">
        <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 flex justify-between items-center">
          <span className="text-sm md:text-base font-semibold text-gray-800">1 orang</span>
          <span className="text-lg md:text-xl font-bold text-green-600">Rp 650.000</span>
        </div>
        <div className="bg-green-100 border-2 border-green-300 rounded-lg p-4 flex justify-between items-center">
          <span className="text-sm md:text-base font-semibold text-gray-800">2 orang</span>
          <span className="text-lg md:text-xl font-bold text-green-600">Rp 600.000 / orang</span>
        </div>
        <div className="bg-green-200 border-2 border-green-400 rounded-lg p-4 flex justify-between items-center">
          <span className="text-sm md:text-base font-semibold text-gray-800">Minimal 3 orang (keluarga)</span>
          <span className="text-lg md:text-xl font-bold text-green-600">Rp 550.000 / orang</span>
        </div>
      </div>
      <p className="text-sm md:text-base text-gray-700 text-center">
        Bandingkan dengan jutaan rupiah biaya sekolah, les, dan kuliah yang bisa salah arah.
      </p>
      <p className="text-sm md:text-base text-green-600 font-semibold text-center mt-2">
        Tes ini hanya 15 menit, tapi dampaknya seumur hidup.
      </p>
    </div>
  );
}

export default Pricing