import { MessageCircle } from "lucide-react";
import { useScroll } from "../../../hooks/useScroll";

export default function Pricing() {
  const { handleScrollTo } = useScroll();
  return (
    <>
      <section className="py-16 sm:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-emerald-900">Berapa Biaya Investasi nya?</h3>

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
        </div>
      </section>
    </>
  );
}
