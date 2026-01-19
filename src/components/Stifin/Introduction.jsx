import { Clock } from "lucide-react";

const Introduction = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg p-8 mb-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">STIFIn</h2>
        <p className="text-base md:text-lg mb-2">15 Menit untuk Mengetahui Arah Potensi Anak Seumur Hidup</p>
        <div className="flex justify-center mt-4">
          <Clock
            className="text-white"
            size={40}
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <p className="text-sm md:text-base text-gray-700 mb-4">
          Tes STIFIn membantu mengenali potensi genetik anak melalui sidik jari (fingerprint). Pola sidik jari terbentuk
          sejak lahir dan berkaitan erat dengan fungsi otak.
        </p>
        <p className="text-sm md:text-base text-gray-700">
          Artinya, dari sidik jari inilah dapat dipetakan gaya kecerdasan alami anak, bukan sekadar kemampuan akademik.
        </p>
      </div>
    </div>
  );
};

export default Introduction;
