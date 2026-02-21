import React, { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { images } from "../../../data/stifin_image";
import overlayImage from "../../../assets/stifin/1.jpeg";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isAutoPlay = true;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const handleScrollTo = (e, target) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative overflow-hidden min-h-screen flex items-center pt-24 sm:pt-28 pb-20 bg-slate-900"
      id="beranda"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900" />
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />

      <img
        src={overlayImage}
        alt="Overlay"
        className="absolute inset-0 w-full h-full object-cover opacity-[0.03] pointer-events-none mix-blend-screen"
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-teal-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 text-white order-2 lg:order-1 mt-8 lg:mt-0 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-[1.15] tracking-tight">
              Jangan Biarkan Anak Anda Salah Arah Hingga Dewasa
            </h1>

            <p className="text-xs sm:text-lg mb-10 text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
              Satu keputusan kecil hari ini bisa menentukan arah hidup anak Anda puluhan tahun ke depan. Kenali
              potensinya sejak dini.
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

          <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-lg lg:max-w-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-teal-500/20 rounded-[2.5rem] transform rotate-3 scale-105 blur-lg opacity-50 animate-pulse"></div>

              <div className="relative bg-slate-800/50 backdrop-blur-md rounded-[2.5rem] p-4 sm:p-6 border border-slate-700/50 shadow-2xl">
                <div className="relative aspect-square sm:aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-900/50">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                      }`}
                    >
                      <img
                        src={image.url}
                        alt={image.title}
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 opacity-0 transition-all duration-500">
                        <p className="text-white font-medium text-lg">{image.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
