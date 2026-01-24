import { MessageCircle } from "lucide-react";

export default function Pricing() {
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <section className="py-16 px-6 bg-gradient-to-b from-white to-emerald-50/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Investasi Kecil untuk <br />
                <span className="text-emerald-600">Dampak Seumur Hidup</span>
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Tes ini dirancang untuk memberikan peta jalan yang jelas bagi masa depanmu. Dengan satu kali tes, kamu
                akan terbantu untuk:
              </p>

              <div className="space-y-4">
                {[
                  "Menemukan jati dirimu yang sesungguhnya",
                  "Menentukan cara belajar efektif & arah karier tepat",
                  "Mengenali karakter pasangan untuk hubungan harmonis",
                  "Mengelola tim bisnis sesuai karakter & potensi alami",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-700 font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-red-100 transform rotate-2 rounded-3xl opacity-50"></div>
              <div className="relative bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-red-50 p-6 border-b border-red-100">
                  <h3 className="text-lg font-bold text-red-800 text-center">Perbandingan Nilai Pasar</h3>
                  <p className="text-center text-red-600/80 text-sm">Biaya normal untuk layanan sejenis</p>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center text-sm pb-4 border-b border-gray-50">
                    <span className="text-gray-600">Konsultasi Karier Privat</span>
                    <span className="font-semibold text-gray-900">Rp 1.500.000+</span>
                  </div>
                  <div className="flex justify-between items-center text-sm pb-4 border-b border-gray-50">
                    <span className="text-gray-600">Tes Psikologi Lengkap</span>
                    <span className="font-semibold text-gray-900">Rp 1.000.000+</span>
                  </div>
                  <div className="flex justify-between items-center text-sm pb-4 border-b border-gray-50">
                    <span className="text-gray-600">Coaching / Trial & Error</span>
                    <span className="font-semibold text-gray-900">Jutaan Rupiah</span>
                  </div>

                  <div className="pt-2">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-500 text-sm">Total Nilai</span>
                      <span className="text-lg font-bold text-red-500 line-through decoration-2">Rp 3.000.000+</span>
                    </div>
                    <p className="text-xs text-center text-gray-400 mt-4 italic">
                      *Belum tentu hasilnya sejelas & sepraktis STIFIn
                    </p>
                  </div>
                </div>

                <div className="bg-emerald-600 p-4 text-center">
                  <p className="text-emerald-100 text-xs uppercase tracking-widest font-semibold mb-1">
                    Harga Spesial STIFIn
                  </p>
                  <p className="text-white font-bold text-2xl">Jauh Lebih Hemat!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
              Tapi Tenang, Kamu Tidak Bayar Sebesar Itu.
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Karena misi kami bukan menjual tes mahal, tapi membantu orang tidak salah arah hidup.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-center mb-8 text-emerald-900">Harga Spesial untuk Kamu</h3>

          <div className="grid md:grid-cols-3 gap-5 mb-10 items-end">
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition border border-gray-200 hover:border-emerald-300">
              <div className="text-center">
                <h4 className="font-bold text-xl mb-1 text-gray-900">Individual</h4>
                <p className="text-xs text-gray-500 mb-4">Untuk 1 orang</p>
                <div className="mb-5">
                  <p className="text-4xl font-bold text-emerald-600 mb-1">650K</p>
                  <p className="text-xs text-gray-500">per orang</p>
                </div>

                <button
                  className="wa-btn block w-full bg-emerald-600 text-white py-2.5 rounded-lg font-semibold hover:bg-emerald-700 transition text-sm"
                  onClick={(e) => handleScrollTo(e, "#kontak")}
                >
                  Pilih Paket
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl p-6 shadow-xl transform md:scale-105 relative border-2 border-emerald-500 z-10">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-xs font-bold shadow-md">
                PALING POPULER
              </div>
              <div className="text-center text-white">
                <h4 className="font-bold text-xl mb-1">Paket Duo</h4>
                <p className="text-emerald-100 mb-4 text-xs">Untuk 2 orang</p>
                <div className="mb-5">
                  <p className="text-4xl font-bold mb-1">600K</p>
                  <p className="text-emerald-100 text-xs">per orang</p>
                  <div className="inline-block bg-yellow-400 text-yellow-900 px-3 py-0.5 rounded-full text-xs font-bold mt-2">
                    Hemat Rp 100.000
                  </div>
                </div>
                <button
                  className="wa-btn block w-full bg-white text-emerald-600 py-2.5 rounded-lg font-semibold hover:bg-emerald-50 transition text-sm"
                  onClick={(e) => handleScrollTo(e, "#kontak")}
                >
                  Pilih Paket
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition border border-gray-200 hover:border-emerald-300">
              <div className="text-center">
                <h4 className="font-bold text-xl mb-1 text-gray-900">Paket Keluarga</h4>
                <p className="text-xs text-gray-500 mb-4">Minimal 3 orang</p>
                <div className="mb-5">
                  <p className="text-4xl font-bold text-emerald-600 mb-1">550K</p>
                  <p className="text-xs text-gray-500">per orang</p>
                  <div className="inline-block bg-emerald-100 text-emerald-700 px-3 py-0.5 rounded-full text-xs font-bold mt-2">
                    Hemat Rp 300.000
                  </div>
                </div>
                <button
                  className="wa-btn block w-full bg-emerald-600 text-white py-2.5 rounded-lg font-semibold hover:bg-emerald-700 transition text-sm"
                  onClick={(e) => handleScrollTo(e, "#kontak")}
                >
                  Pilih Paket
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-5 md:p-8 max-w-3xl mx-auto border border-emerald-200">
            <div className="flex flex-col items-center justify-center gap-2 mb-5">
              <svg
                className="w-8 h-8 text-emerald-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h4 className="font-bold text-lg md:text-xl text-center text-gray-900 leading-tight">
                Kamu merasa ini mahal?
              </h4>
            </div>

            <p className="text-center text-gray-600 mb-6 text-sm">Bandingkan dengan kerugian jika salah pilih:</p>

            <div className="space-y-3 mb-8">
              {[
                { loss: "Puluhan Juta + 4 Tahun", item: "Kuliah salah jurusan" },
                { loss: "Jutaan Rupiah", item: "Kursus/pelatihan tidak cocok" },
                { loss: "Bertahun-tahun", item: "Trial and error karier" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 bg-white rounded-xl shadow-sm border border-emerald-100/50 gap-1 sm:gap-4"
                >
                  <span className="text-gray-600 text-sm font-medium order-2 sm:order-1">{item.item}</span>
                  <span className="font-bold text-red-600 text-base sm:text-sm order-1 sm:order-2">{item.loss}</span>
                </div>
              ))}
            </div>

            <div className="text-center bg-white rounded-xl p-5 shadow-sm border border-emerald-100">
              <div className="flex items-center justify-center gap-2 mb-2">
                <svg
                  className="w-5 h-5 text-emerald-600 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-base md:text-lg font-bold text-emerald-700">Tes ini hanya 15 menit</p>
              </div>
              <div className="flex items-start justify-center gap-2">
                <svg
                  className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-sm text-gray-600 text-left md:text-center leading-relaxed">
                  Tapi dampaknya seumur hidup!
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <button
              onClick={(e) => handleScrollTo(e, "#kontak")}
              className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-8 py-3 rounded-xl font-bold text-sm sm:text-lg hover:from-emerald-700 hover:to-emerald-800 transition shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center gap-2"
            >
              <MessageCircle size={24} />
              Daftar Sekarang via WhatsApp
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
