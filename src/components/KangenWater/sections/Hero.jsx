import { Award, ChevronRight } from "lucide-react";
import { IMAGES } from "../constant.js";
import { useScroll } from "../../../hooks/useScroll.jsx";

export default function Hero() {
  const { handleScrollTo } = useScroll();
  return (
    <section className="pt-24 lg:pt-16 min-h-screen flex items-center bg-blue-600 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div
        className="absolute right-0 top-0 w-1/2 h-full bg-blue-700 hidden lg:block"
        style={{ clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center py-12 lg:py-20 relative z-10">
        <div className="order-1">
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/30 text-white px-4 py-1.5 rounded-full text-xs font-bold mb-8 uppercase tracking-widest">
            <Award size={12} /> Official Enagic Distributor
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
            Transformasi Total Dimulai dari
            <br />
            <span className="text-blue-200">Keran Dapur Anda.</span>
          </h1>
          <p className="text-blue-100 text-lg mb-8 leading-relaxed font-medium max-w-lg">
            Raih kesehatan optimal dan kebebasan finansial bersama teknologi ionisasi air Enagic Jepang.
          </p>
          <div className="flex flex-wrap gap-3 mb-10">
            {["Hidrasi Optimal", "Antioksidan", "pH Seimbang", "Peluang Bisnis"].map((t) => (
              <span
                key={t}
                className="bg-white/15 border border-white/25 text-white text-xs font-bold px-4 py-2 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={(e) => handleScrollTo(e, "#kontak")}
              className="cursor-pointer bg-white text-blue-700 px-8 py-4 rounded-xl font-black text-base shadow-lg hover:bg-blue-50 transition-all flex items-center justify-center gap-2"
            >
              Mulai Sekarang <ChevronRight size={18} />
            </button>
            <button
              onClick={(e) => handleScrollTo(e, "#solusi")}
              className="cursor-pointer border-2 border-white/40 text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>

        <div className="relative mt-12 lg:mt-0 order-2">
          <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 transform rotate-1 hover:rotate-0 transition-transform duration-500">
            <img
              src={IMAGES.group}
              alt="Kangen Water Team"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
