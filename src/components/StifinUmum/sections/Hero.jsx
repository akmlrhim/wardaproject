import { MessageCircle } from "lucide-react";
import Testimonial from "../partials/TestimonialSlide";
import { useScroll } from "../../../hooks/useScroll";

export default function Hero() {
  const { handleScrollTo } = useScroll();

  return (
    <section
      className="relative overflow-hidden min-h-screen flex items-center pt-24 sm:pt-18"
      id="beranda"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-800" />

      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-400/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-10">
          <div className="text-white">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
              Temukan Potensi Terbaikmu <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-teal-200 to-emerald-100">
                dalam 15 Menit
              </span>
            </h1>

            <p className="text-base sm:text-lg mb-8 text-slate-300 leading-relaxed max-w-lg">
              Bukan salah kamu kalau kamu ngerasa gak kenal sama diri sendiri. Kamu hanya perlu tahu tipe kecerdasanmu
              dengan metode ilmiah berbasis genetik.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={(e) => handleScrollTo(e, "#kontak")}
                className="wa-btn group bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-xl font-bold text-base hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle
                  size={20}
                  className="group-hover:scale-110 transition-transform"
                />
                Konsultasi Gratis via WhatsApp
              </button>

              <button
                onClick={(e) => handleScrollTo(e, "#tentang")}
                className="group border border-white/20 bg-white/5 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-bold text-base hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                Pelajari Lebih Lanjut
              </button>
            </div>
          </div>

          <Testimonial />
        </div>
      </div>
    </section>
  );
}
