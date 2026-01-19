import { XCircle } from 'lucide-react';

const PainPoint = () => {
	return (
    <div>
      <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">Apakah Ini yang Anda Rasakan Sekarang?</h3>
      <div className="space-y-3 mb-6">
        {[
          "Bingung memilih aktivitas, les, atau kursus yang cocok untuk anak",
          "Anak terlihat cepat bosan atau frustrasi saat belajar",
          "Sudah banyak biaya keluar, tapi hasilnya tidak maksimal",
          "Khawatir melihat tren pengangguran muda dan takut itu menimpa anak sendiri",
        ].map((pain, idx) => (
          <div
            key={idx}
            className="flex items-start gap-3 bg-red-50 p-4 rounded-lg"
          >
            <XCircle
              className="text-red-500 flex-shrink-0 mt-0.5"
              size={20}
            />
            <span className="text-sm md:text-base text-gray-700">{pain}</span>
          </div>
        ))}
      </div>
      <p className="text-sm md:text-base text-gray-700 text-center mb-6 italic">
        Jika iya, Anda tidak sendirian. Banyak orang tua merasakan hal yang sama.
      </p>
    </div>
  );
}

export default PainPoint