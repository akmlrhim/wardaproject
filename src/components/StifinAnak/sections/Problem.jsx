import React from "react";
import { CheckCircle, XCircle, Lightbulb, Target, BookOpen, Compass } from "lucide-react";

export default function Problem() {
  return (
    <div className="w-full bg-slate-50 text-slate-800">
      <section className="py-12 md:py-20 px-4 md:px-6 max-w-5xl mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-lg md:text-3xl font-extrabold text-slate-800 mb-4 md:mb-5 tracking-tight">
            Pernahkah Anda Membayangkan Ini?
          </h2>
          <p className="text-sm md:text-base text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Seorang anak sebenarnya punya potensi besar. Namun tumbuh tanpa arah. Masuk sekolah, ikut les, lulus SMA...
            lalu salah jurusan kuliah. Belajar bertahun-tahun di bidang yang tidak sesuai kecerdasannya.
          </p>
        </div>

        <div className="bg-white rounded-2xl md:rounded-3xl shadow-sm border border-slate-100 p-6 md:p-10 mb-8 md:mb-10">
          <h3 className="text-lg md:text-xl font-bold text-center mb-6 md:mb-8">Akhirnya?</h3>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-slate-50 p-5 md:p-6 rounded-xl md:rounded-2xl border border-slate-100 flex flex-col items-center text-center transition-all hover:border-rose-200">
              <XCircle className="w-8 h-8 md:w-10 md:h-10 text-rose-500 mb-3 md:mb-4" />
              <span className="font-bold text-sm md:text-base text-slate-800">Lulus tapi bingung.</span>
            </div>
            <div className="bg-slate-50 p-5 md:p-6 rounded-xl md:rounded-2xl border border-slate-100 flex flex-col items-center text-center transition-all hover:border-rose-200">
              <XCircle className="w-8 h-8 md:w-10 md:h-10 text-rose-500 mb-3 md:mb-4" />
              <span className="font-bold text-sm md:text-base text-slate-800">Kerja tidak sesuai minat.</span>
            </div>
            <div className="bg-slate-50 p-5 md:p-6 rounded-xl md:rounded-2xl border border-slate-100 flex flex-col items-center text-center transition-all hover:border-rose-200">
              <XCircle className="w-8 h-8 md:w-10 md:h-10 text-rose-500 mb-3 md:mb-4" />
              <span className="font-bold text-sm md:text-base text-slate-800 leading-snug">
                Bahkan menganggur atau hanya bertahan di pekerjaan seadanya.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 md:py-16 px-4 md:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <h2 className="text-xl md:text-3xl font-extrabold text-slate-800 mb-4 md:mb-5 tracking-tight">
                Apakah Ini yang Anda Rasakan Sekarang?
              </h2>
              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-start gap-3 md:gap-4">
                  <XCircle className="w-5 h-5 md:w-6 md:h-6 text-rose-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm md:text-base text-slate-700 font-medium">
                    Bingung memilih aktivitas, les, atau kursus yang cocok untuk anak
                  </p>
                </li>
                <li className="flex items-start gap-3 md:gap-4">
                  <XCircle className="w-5 h-5 md:w-6 md:h-6 text-rose-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm md:text-base text-slate-700 font-medium">
                    Anak terlihat cepat bosan atau frustrasi saat belajar
                  </p>
                </li>
                <li className="flex items-start gap-3 md:gap-4">
                  <XCircle className="w-5 h-5 md:w-6 md:h-6 text-rose-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm md:text-base text-slate-700 font-medium">
                    Sudah banyak biaya keluar, tapi hasilnya tidak maksimal
                  </p>
                </li>
                <li className="flex items-start gap-3 md:gap-4">
                  <XCircle className="w-5 h-5 md:w-6 md:h-6 text-rose-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm md:text-base text-slate-700 font-medium">
                    Khawatir melihat tren pengangguran muda dan takut itu menimpa anak sendiri
                  </p>
                </li>
              </ul>
              <div className="mt-6 md:mt-8 p-4 md:p-5 bg-slate-50 rounded-xl md:rounded-2xl border border-slate-100">
                <p className="text-sm md:text-base font-bold text-slate-800">
                  Jika iya, Anda tidak sendirian. Banyak orang tua merasakan hal yang sama.
                </p>
              </div>
            </div>

            <div className="bg-emerald-800 rounded-2xl md:rounded-3xl p-6 md:p-10 text-white shadow-xl">
              <div className="flex justify-center mb-5 md:mb-6">
                <div className="bg-emerald-700 p-2 md:p-3 rounded-full">
                  <Lightbulb className="w-6 h-6 md:w-8 md:h-8 text-emerald-300" />
                </div>
              </div>
              <h2 className="text-lg md:text-2xl font-bold text-center mb-4 leading-tight">
                Orang Tua Cerdas Tidak Menunggu Masalah Terjadi
              </h2>
              <p className="text-emerald-100 text-center mb-6 md:mb-8 text-sm md:text-base">
                Mereka sadar satu hal penting: Mencegah selalu lebih murah daripada memperbaiki.
              </p>

              <div className="space-y-3 md:space-y-4">
                <p className="font-bold text-white mb-2 text-sm md:text-base">
                  Mengenali potensi anak sejak dini membuat perbedaan besar:
                </p>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-sm md:text-base">Cara belajar jadi tepat</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-sm md:text-base">Anak lebih percaya diri</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-sm md:text-base">Pilihan sekolah dan jurusan lebih terarah</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-sm md:text-base">Risiko salah langkah di masa depan bisa ditekan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 px-4 md:px-6 max-w-7xl mx-auto">
        <h2 className="text-xl md:text-3xl font-extrabold text-center text-slate-800 mb-4 md:mb-5 tracking-tight">
          Bayangkan Jika Anda Sudah Tahu Ini Sejak Sekarang...
        </h2>

        <div className="grid md:grid-cols-2 gap-4 md:gap-5 mb-10 md:mb-12">
          <div className="bg-white p-5 md:p-6 rounded-xl md:rounded-3xl shadow-sm border border-slate-100 flex items-start gap-3 md:gap-4">
            <Target className="w-5 h-5 md:w-6 md:h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm md:text-base text-slate-700 font-bold">Tahu tipe kecerdasan utama anak</p>
          </div>
          <div className="bg-white p-5 md:p-6 rounded-xl md:rounded-3xl shadow-sm border border-slate-100 flex items-start gap-3 md:gap-4">
            <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm md:text-base text-slate-700 font-bold">
              Bisa memilih metode belajar yang sesuai gaya pikir alaminya
            </p>
          </div>
          <div className="bg-white p-5 md:p-6 rounded-xl md:rounded-3xl shadow-sm border border-slate-100 flex items-start gap-3 md:gap-4">
            <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm md:text-base text-slate-700 font-bold">Anak merasa dipahami, bukan dipaksa</p>
          </div>
          <div className="bg-white p-5 md:p-6 rounded-xl md:rounded-3xl shadow-sm border border-slate-100 flex items-start gap-3 md:gap-4">
            <Compass className="w-5 h-5 md:w-6 md:h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm md:text-base text-slate-700 font-bold">
              Arah pendidikan dan karir ke depan lebih jelas
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
