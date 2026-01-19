import React from "react";
import Header from "../../components/Header";
import { CheckCircle, XCircle, MessageCircle, Users, Award, Clock } from "lucide-react";
import Footer from "../../components/Footer";

const Stifin = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-3">Jangan Biarkan Anak Anda Salah Arah Hingga Dewasa</h1>
          <p className="text-sm md:text-base mb-6 opacity-90">
            Satu keputusan kecil hari ini bisa menentukan arah hidup anak Anda puluhan tahun ke depan.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition"
          >
            <MessageCircle size={20} />
            Hubungi WhatsApp
          </a>
        </div>
      </div>

      {/* Problem Section */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 text-center">
          Pernahkah Anda Membayangkan Ini?
        </h2>
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <p className="text-sm md:text-base text-gray-700 mb-4 leading-relaxed">
            Seorang anak sebenarnya punya potensi besar. Namun tumbuh tanpa arah. Masuk sekolah, ikut les, lulus SMA…
            lalu salah jurusan kuliah. Belajar bertahun-tahun di bidang yang tidak sesuai kecerdasannya.
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

        {/* Smart Parents */}
        <div className="bg-green-50 border-l-4 border-green-600 rounded-lg p-6 mb-6">
          <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3">
            Orang Tua Cerdas Tidak Menunggu Masalah Terjadi
          </h3>
          <p className="text-sm md:text-base text-gray-700 mb-3">
            Mereka sadar satu hal penting:{" "}
            <span className="font-semibold">Mencegah selalu lebih murah daripada memperbaiki.</span>
          </p>
          <p className="text-sm md:text-base text-gray-700 mb-2">
            Mengenali potensi anak sejak dini membuat perbedaan besar:
          </p>
          <ul className="space-y-2 text-sm md:text-base text-gray-700">
            <li className="flex items-start gap-2">
              <CheckCircle
                className="text-green-600 flex-shrink-0 mt-0.5"
                size={18}
              />
              <span>Cara belajar jadi tepat</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle
                className="text-green-600 flex-shrink-0 mt-0.5"
                size={18}
              />
              <span>Anak lebih percaya diri</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle
                className="text-green-600 flex-shrink-0 mt-0.5"
                size={18}
              />
              <span>Pilihan sekolah dan jurusan lebih terarah</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle
                className="text-green-600 flex-shrink-0 mt-0.5"
                size={18}
              />
              <span>Risiko salah langkah di masa depan bisa ditekan</span>
            </li>
          </ul>
        </div>

        {/* Pain Points */}
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

        {/* Solution Benefits */}
        <div className="bg-gradient-to-r from-green-100 to-green-50 rounded-lg p-6 mb-6">
          <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4 text-center">
            Bayangkan Jika Anda Sudah Tahu Ini Sejak Sekarang…
          </h3>
          <div className="space-y-3">
            {[
              "Tahu tipe kecerdasan utama anak (S, T, I, F, atau Insting)",
              "Bisa memilih metode belajar yang sesuai gaya pikir alaminya",
              "Anak merasa dipahami, bukan dipaksa",
              "Arah pendidikan dan karir ke depan lebih jelas",
              "Risiko salah jurusan dan salah arah hidup bisa diminimalkan",
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3"
              >
                <CheckCircle
                  className="text-green-600 flex-shrink-0 mt-0.5"
                  size={20}
                />
                <span className="text-sm md:text-base text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Why Not Ask */}
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

        {/* STIFIn Introduction */}
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
            Tes STIFIn membantu mengenali potensi genetik anak melalui sidik jari (fingerprint). Pola sidik jari
            terbentuk sejak lahir dan berkaitan erat dengan fungsi otak.
          </p>
          <p className="text-sm md:text-base text-gray-700">
            Artinya, dari sidik jari inilah dapat dipetakan gaya kecerdasan alami anak, bukan sekadar kemampuan
            akademik.
          </p>
        </div>

        {/* Video Section */}
        <div className="bg-green-50 rounded-lg p-6 mb-6 text-center">
          <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">
            Tonton Video Ini Agar Lebih Paham Konsep STIFIn
          </h3>

          <div className="flex justify-center">
            <div className="w-full max-w-3xl aspect-video">
              <iframe
                src="https://www.youtube.com/embed/5nsR8SkYdv0?si=asKAgK6baBlS3KnZ"
                title="YouTube video player"
                className="w-full h-full rounded-lg"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <div className="text-center mb-6">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            <MessageCircle size={20} />
            Hubungi WhatsApp
          </a>
        </div>

        {/* What is STIFIn */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Apa Itu Tes STIFIn?</h3>
          <p className="text-sm md:text-base text-gray-700 mb-4">
            Tes STIFIn adalah metode pemetaan mesin kecerdasan dominan otak. Anak diklasifikasikan ke dalam 5 tipe
            kecerdasan utama:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-4">
            {["Sensing", "Thinking", "Intuiting", "Feeling", "Insting"].map((type, idx) => (
              <div
                key={idx}
                className="bg-green-100 text-green-700 text-center py-3 rounded-lg font-semibold text-sm"
              >
                {type}
              </div>
            ))}
          </div>
          <p className="text-sm md:text-base text-gray-700 mb-3">Tes ini:</p>
          <div className="space-y-2">
            {[
              "Praktis",
              "Tidak membuat anak stres",
              "Cukup sekali seumur hidup",
              "Memberi panduan nyata, bukan sekadar angka",
            ].map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2"
              >
                <CheckCircle
                  className="text-green-600 flex-shrink-0"
                  size={18}
                />
                <span className="text-sm md:text-base text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* What You Get */}
        <div className="bg-green-50 rounded-lg p-6 mb-6">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Apa yang Akan Anda Dapatkan?</h3>
          <div className="space-y-3">
            {[
              "Pemindaian sidik jari digital",
              "Hasil tipe kecerdasan dominan anak",
              "Laporan potensi & rekomendasi belajar",
              "Konsultasi privat langsung dengan Warda",
              "Sertifikat STIFIn & akses komunitas orang tua",
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 bg-white p-3 rounded-lg"
              >
                <Award
                  className="text-green-600 flex-shrink-0 mt-0.5"
                  size={20}
                />
                <span className="text-sm md:text-base text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Manfaat Nyata Setelah Tes</h3>
          <div className="space-y-3">
            {[
              "Orang tua lebih cepat memahami potensi anak",
              "Metode belajar jadi lebih efektif",
              "Anak lebih percaya diri dan termotivasi",
              "Waktu & biaya pendidikan jadi lebih efisien",
              "Keputusan pendidikan tidak lagi berdasarkan tebak-tebakan",
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3"
              >
                <CheckCircle
                  className="text-green-600 flex-shrink-0 mt-0.5"
                  size={20}
                />
                <span className="text-sm md:text-base text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 text-center">
          Kata Orang Tua yang Sudah Mencoba
        </h3>
        <div className="space-y-4 mb-6">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-5">
            <p className="text-sm md:text-base text-gray-700 mb-3 italic">
              "Anisa (8 tahun) ternyata tipe Intuiting. Setelah metode belajarnya disesuaikan, dia jauh lebih cepat
              paham dan percaya diri."
            </p>
            <p className="text-sm font-semibold text-gray-800">— Dewi, Ibu Anisa</p>
            <div className="text-yellow-500 mt-1">⭐⭐⭐⭐⭐</div>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-5">
            <p className="text-sm md:text-base text-gray-700 mb-3 italic">
              "Fikri (15 tahun) menunjukkan tipe Thinking. Sekarang cara belajarnya lebih terstruktur dan dia jadi lebih
              aktif."
            </p>
            <p className="text-sm font-semibold text-gray-800">— Budi, Ayah Fikri</p>
            <div className="text-yellow-500 mt-1">⭐⭐⭐⭐⭐</div>
          </div>
        </div>

        {/* About Promotor */}
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

        {/* Pricing */}
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

        {/* CTA */}
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

        {/* FAQ */}
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
              <p className="text-gray-700 text-sm md:text-base">
                A: Tidak. STIFIn berbasis genetik dan bersifat tetap.
              </p>
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
      </div>

      <Footer />
    </div>
  );
};

export default Stifin;
