import React from "react";
import { Waves, TrendingDown, Scale, CheckCircle2, Zap } from "lucide-react";
import { IMAGES } from "../constant";

const solutions = [
  {
    icon: (
      <Waves
        className="text-blue-600"
        size={26}
      />
    ),
    title: "Hidrasi Superior",
    desc: "Air dengan struktur molekul kecil yang mudah diserap, memastikan setiap sel tubuh terhidrasi secara maksimal.",
  },
  {
    icon: (
      <TrendingDown
        className="text-blue-600"
        size={26}
      />
    ),
    title: "Peluang Finansial",
    desc: "Sistem distribusi Enagic 8-Point yang adil, memungkinkan Anda membangun pendapatan mandiri dari rumah.",
  },
  {
    icon: (
      <Scale
        className="text-blue-600"
        size={26}
      />
    ),
    title: "Keseimbangan pH",
    desc: "Air alkali membantu menetralkan kelebihan asam, menciptakan lingkungan internal yang lebih seimbang dan sehat.",
  },
];

const benefits = [
  {
    icon: (
      <CheckCircle2
        size={18}
        className="text-blue-300"
      />
    ),
    title: "Air Alkali pH 8.5 – 9.5",
    desc: "Mendukung keseimbangan pH tubuh dan membantu pencernaan.",
  },
  {
    icon: (
      <Zap
        size={18}
        className="text-blue-300"
      />
    ),
    title: "Kaya Antioksidan (ORP Negatif)",
    desc: "Melindungi sel dari kerusakan radikal bebas, potensial meningkatkan energi.",
  },
  {
    icon: (
      <TrendingDown
        size={18}
        className="text-blue-300"
      />
    ),
    title: "Sistem Distribusi Jaringan",
    desc: "Menciptakan peluang usaha sampingan atau full-time dengan modal berbasis produk.",
  },
];

export default function Solution() {
  return (
    <section
      id="solusi"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-3">Solusi Baru</p>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
            Investasi Holistik untuk Tubuh & Dompet
          </h2>
          <p className="text-slate-500 text-base max-w-2xl mx-auto">
            Kangen Water bukan hanya mesin air. Ini adalah solusi hidrasi alkali berkualitas tinggi dan peluang bisnis
            jaringan yang terstruktur.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {solutions.map((s, i) => (
            <div
              key={i}
              className="card-hover border-2 border-slate-100 rounded-2xl p-8 group hover:border-blue-200"
            >
              <div className="w-14 h-14 bg-blue-50 group-hover:bg-blue-100 rounded-xl flex items-center justify-center mb-6 transition-colors">
                {s.icon}
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-3">{s.title}</h3>
              <p className="text-slate-500 text-md leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-blue-600 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-5 items-stretch min-h-[500px]">
            <div className="lg:col-span-3 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-gradient-to-br from-blue-600 to-blue-500">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-10 tracking-tight">
                Dengan Kangen Water...
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-y-8 gap-x-10">
                {benefits.map((b, i) => (
                  <div
                    key={i}
                    className="flex gap-5 group"
                  >
                    <div className="shrink-0">
                      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 text-white border border-white/20 shadow-inner group-hover:bg-white group-hover:text-blue-600 transition-all duration-300">
                        {b.icon}
                      </div>
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="text-white font-bold text-lg leading-tight">{b.title}</p>
                      <p className="text-white text-sm mt-1.5 leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 grid grid-cols-2 gap-4 p-8 bg-blue-700/40 backdrop-blur-sm border-l border-white/10">
              {IMAGES.machines.map((img, i) => (
                <div
                  key={i}
                  className={`group relative bg-white rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02] ${
                    i === 2 ? "col-span-2 aspect-[16/10]" : "aspect-square"
                  }`}
                >
                  <img
                    src={img}
                    alt="Mesin Enagic"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
