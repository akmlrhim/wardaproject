import { Award, ChevronRight } from "lucide-react";
import { IMAGES } from "../constant.js";
import { useScroll } from "../../../hooks/useScroll.jsx";

export default function Hero() {
  const { handleScrollTo } = useScroll();
  return (
    <section
      className="min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden pt-24 sm:36"
      id="beranda"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div
          className="absolute right-0 top-0 w-2/3 h-full bg-gradient-to-l from-blue-600/20 to-transparent hidden lg:block"
          style={{ clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center py-12 lg:py-20 relative z-10">
        <div className="order-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
            Transformasi Total Dimulai dari
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200">
              Keran Dapur Anda.
            </span>
          </h1>

          <p className="text-slate-300 text-lg mb-8 leading-relaxed font-medium max-w-lg">
            Raih kesehatan optimal dan kebebasan finansial bersama teknologi ionisasi air Enagic Jepang.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            {["Hidrasi Optimal", "Antioksidan", "pH Seimbang", "Peluang Bisnis"].map((t) => (
              <span
                key={t}
                className="bg-slate-800/50 backdrop-blur-sm border border-blue-400/20 text-blue-100 text-xs font-bold px-4 py-2 rounded-full hover:bg-blue-500/20 transition-colors"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={(e) => handleScrollTo(e, "#kontak")}
              className="cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-bold text-base shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              Mulai Sekarang <ChevronRight size={18} />
            </button>
            <button
              onClick={(e) => handleScrollTo(e, "#solusi")}
              className="cursor-pointer border border-slate-600 bg-slate-800/30 backdrop-blur-sm text-slate-200 px-8 py-4 rounded-xl font-bold text-base hover:bg-slate-700/50 hover:border-blue-400/30 transition-all flex items-center justify-center gap-2"
            >
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>

        <div className="relative mt-12 lg:mt-0 order-2">
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl" />

          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/50 border border-white/10 transform rotate-1 hover:rotate-0 transition-transform duration-500">
            <img
              src={IMAGES.group}
              alt="Kangen Water Team"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
