import React, { useRef, useState } from "react";
import { IMAGES } from "../constant";

const testimonials = [
  {
    initial: "R",
    name: "Rina Wulandari",
    role: "Ibu Rumah Tangga",
    text: "Awalnya beli karena khawatir kualitas air di rumah. Setelah rutin minum, badan terasa lebih segar dan nggak gampang lemas. Yang bikin tenang, anak-anak juga minum air yang lebih terkontrol kualitasnya.",
  },
  {
    initial: "A",
    name: "Andi Pratama",
    role: "Karyawan Swasta",
    text: "Saya tipe yang gampang capek walau sudah minum cukup. Setelah pakai Kangen Water, rasanya lebih ringan dan fokus kerja lebih stabil. Sekarang jadi minuman utama tiap hari.",
  },
  {
    initial: "D",
    name: "Dewi Lestari",
    role: "Pebisnis Online",
    text: "Awalnya tertarik karena konsep antioksidannya. Tapi yang bikin saya bertahan justru peluang bisnisnya. Dari rumah saja sudah bisa dapat income tambahan tanpa harus stok barang banyak.",
  },
];

export default function Testimonial() {
  const [selectedProof, setSelectedProof] = useState(null);

  const sliderRef = useRef(null);
  const isSlider = IMAGES?.proofs?.length > 4;

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section
      id="testimoni"
      className="py-24"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-3">Apa Kata Mereka?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Bukti Nyata Pengguna</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="card-hover bg-white rounded-2xl p-8 border-2 border-slate-100 hover:border-blue-100"
            >
              <p className="text-slate-600 text-md leading-relaxed mb-7 italic">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white text-sm">
                  {t.initial}
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <p className="text-center text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">
            Hasil yang Dirasakan Pengguna
          </p>

          <div className="relative group max-w-5xl mx-auto">
            {isSlider && (
              <button
                onClick={scrollLeft}
                className="hidden lg:flex absolute -left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-xl border border-slate-100 rounded-full items-center justify-center text-slate-600 hover:text-blue-600 hover:bg-slate-50 opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
            )}

            <div
              ref={sliderRef}
              className={`flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbar ${
                isSlider
                  ? "flex-nowrap justify-start scroll-smooth"
                  : "flex-nowrap lg:flex-wrap justify-center lg:overflow-visible lg:pb-0"
              }`}
            >
              {IMAGES.proofs.map((proof, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedProof(proof)}
                  className={`card-hover group flex-none snap-center cursor-pointer ${
                    isSlider ? "w-[200px] lg:w-[240px]" : "w-[200px] lg:w-[calc(25%-1.25rem)] lg:max-w-[280px]"
                  }`}
                >
                  <div className="rounded-2xl overflow-hidden border-2 border-slate-100 group-hover:border-blue-200 transition-colors aspect-[3/4] bg-slate-200 relative">
                    <img
                      src={proof.url}
                      alt={proof.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover:opacity-100 font-bold text-3xl">+</span>
                    </div>
                  </div>
                  <p className="text-center font-bold text-xs text-slate-700 mt-3 px-2 line-clamp-2">{proof.title}</p>
                </div>
              ))}
            </div>

            {isSlider && (
              <button
                onClick={scrollRight}
                className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-xl border border-slate-100 rounded-full items-center justify-center text-slate-600 hover:text-blue-600 hover:bg-slate-50 opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            )}
          </div>

          <p className="text-center text-xs text-slate-400 mt-8 italic">
            * Hasil dapat bervariasi untuk setiap individu. Produk ini bukan obat medis.
          </p>
        </div>
      </div>

      {selectedProof && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedProof(null)}
        >
          <div className="relative max-w-4xl w-full max-h-screen flex flex-col items-center">
            <button
              onClick={() => setSelectedProof(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>

            <img
              src={selectedProof.url}
              alt={selectedProof.title}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            <p className="text-white font-medium mt-4 text-lg text-center">{selectedProof.title}</p>
          </div>
        </div>
      )}
    </section>
  );
}
