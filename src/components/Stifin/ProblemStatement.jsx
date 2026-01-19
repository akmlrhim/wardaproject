import { XCircle } from "lucide-react";

const ProblemStatement = () => {
  return (
    <div>
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 text-center">Pernahkah Anda Membayangkan Ini?</h2>
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <p className="text-sm md:text-base text-gray-700 mb-4 leading-relaxed">
          Seorang anak sebenarnya punya potensi besar. Namun tumbuh tanpa arah. Masuk sekolah, ikut les, lulus SMA… lalu
          salah jurusan kuliah. Belajar bertahun-tahun di bidang yang tidak sesuai kecerdasannya.
        </p>

        <p className="text-sm md:text-base font-semibold text-gray-800 mb-3">Akhirnya?</p>

        <ul className="space-y-3 mb-4">
          <li className="flex items-start gap-3 text-sm md:text-base text-gray-700">
            <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <span>Lulus tapi bingung.</span>
          </li>

          <li className="flex items-start gap-3 text-sm md:text-base text-gray-700">
            <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <span>Kerja tidak sesuai minat.</span>
          </li>

          <li className="flex items-start gap-3 text-sm md:text-base text-gray-700">
            <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <span>Bahkan menganggur atau hanya bertahan di pekerjaan seadanya.</span>
          </li>
        </ul>

        <p className="text-sm md:text-base text-red-600 font-semibold leading-relaxed">
          Yang terbuang bukan cuma waktu. Tapi juga biaya, energi, dan mimpi anak serta orang tuanya.
        </p>
      </div>
    </div>
  );
};

export default ProblemStatement;
