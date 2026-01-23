import { MessageCircle } from "lucide-react";
import Testimonial from "./partials/TestimonialSlide";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden min-h-screen flex items-center"
      id="beranda"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800"></div>
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-300 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-10">
          <div className="text-white">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
              Temukan Potensi Terbaikmu <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-teal-100">
                dalam 15 Menit
              </span>
            </h1>

            <p className="text-base sm:text-lg mb-8 text-white/90 leading-relaxed max-w-lg">
              Bukan salah kamu kalau kamu ngerasa gak kenal sama diri sendiri. Kamu hanya perlu tahu tipe kecerdasanmu
              dengan metode ilmiah berbasis genetik.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#kontak"
                className="group bg-white text-emerald-800 px-6 py-3 rounded-xl font-bold text-base hover:bg-emerald-50 transition-all duration-300 shadow-xl inline-flex items-center justify-center gap-2"
              >
                <MessageCircle
                  size={20}
                  className="group-hover:rotate-12 transition-transform"
                />
                Konsultasi Gratis via WhatsApp
              </a>
            </div>
          </div>

          <Testimonial />
        </div>
      </div>
    </section>
  );
}
