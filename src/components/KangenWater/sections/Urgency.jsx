import { CheckCircle } from "lucide-react";

export default function Urgency() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h3 className="text-3xl md:text-5xl font-bold text-white mb-10 leading-tight">
          Masih Ragu? Apa yang Sebenarnya Anda Tunggu?
        </h3>
        <div className="space-y-3 max-w-2xl mx-auto mb-12">
          {[
            "Teknologinya sudah digunakan puluhan tahun.",
            "Jutaan keluarga di seluruh dunia sudah mempercayainya.",
            "Ribuan orang telah merasakan manfaatnya dan membangun peluangnya.",
          ].map((txt, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-xl text-left"
            >
              <CheckCircle
                size={18}
                className="text-blue-400 shrink-0"
              />
              <span className="text-slate-300 text-md">{txt}</span>
            </div>
          ))}
        </div>
        <p className="text-xl text-white font-semibold leading-relaxed">
          Pertanyaannya bukan lagi, <span className="text-blue-400 italic">"Apakah ini benar-benar bekerja?"</span>
          <br />
          Tapi... <span className="text-yellow-400 font-bold">"Apakah saya siap mengambil langkah untuk berubah?"</span>
        </p>
      </div>
    </section>
  );
}
