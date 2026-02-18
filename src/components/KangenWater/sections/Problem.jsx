import React from "react";
import ibuWarda from "../../../assets/ibu_warda.jpeg";
import { Activity, HeartPulse, Wallet, AlertCircle, Quote } from "lucide-react";

export function ProfileStrip() {
  return (
    <section className="py-12 bg-slate-900 border-b border-slate-800">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
        <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 shadow-lg border-2 border-blue-600/50">
          <img
            src={ibuWarda}
            alt="Musdalifa Warda"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="text-xs text-blue-400 font-bold uppercase tracking-widest mb-1">
            Distributor Resmi Enagic Indonesia
          </p>
          <h3 className="text-2xl font-bold text-white mb-1">Musdalifa Warda</h3>
          <p className="text-white italic text-sm max-w-xl">
            "Teknologi ionisasi air teruji selama puluhan tahun, dipercaya oleh jutaan keluarga di seluruh dunia."
          </p>
        </div>
      </div>
    </section>
  );
}

const problems = [
  {
    icon: (
      <Activity
        className="text-blue-600"
        size={22}
      />
    ),
    title: "Kelelahan kronis meskipun sudah cukup istirahat.",
  },
  {
    icon: (
      <HeartPulse
        className="text-blue-600"
        size={22}
      />
    ),
    title: "Masalah pencernaan atau asam lambung yang kambuh-kambuhan.",
  },
  {
    icon: (
      <Wallet
        className="text-blue-600"
        size={22}
      />
    ),
    title: "Ketidakpastian finansial dan bosan dengan gaji bulanan.",
  },
  {
    icon: (
      <AlertCircle
        className="text-blue-600"
        size={22}
      />
    ),
    title: "Kekhawatiran terhadap kualitas air yang dikonsumsi keluarga.",
  },
];

export function Problem() {
  return (
    <section
      id="masalah"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-2xl mb-16">
          <p className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-3">Masalahnya...</p>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-4">
            Sudah minum cukup air, tapi tetap lesu?
          </h2>
          <p className="text-slate-500 text-lg">Saatnya mengubah air minum dan jalan hidup Anda.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {problems.map((p, i) => (
            <div
              key={i}
              className="card-hover bg-white border-2 border-slate-100 rounded-2xl p-7 group hover:border-blue-200"
            >
              <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-100 rounded-xl flex items-center justify-center mb-5 transition-colors">
                {p.icon}
              </div>
              <p className="font-semibold text-slate-700 leading-relaxed text-md">{p.title}</p>
            </div>
          ))}
        </div>

        <div className="bg-blue-600 rounded-2xl p-10 md:p-14 flex flex-col md:flex-row gap-8 items-start">
          <div className="text-blue-300 shrink-0 mt-1">
            <Quote size={40} />
          </div>
          <p className="text-white text-xl md:text-2xl font-semibold italic leading-relaxed">
            "Setiap hari kita mencari solusi instan untuk energi dan uang, padahal rahasia terbesar terletak pada dua
            hal paling mendasar: air yang kita minum dan cara kita menghasilkan uang."
          </p>
        </div>
      </div>
    </section>
  );
}
