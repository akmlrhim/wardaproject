import { Award, Clock, Shield, TrendingUp } from "lucide-react";

export default function Important() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-emerald-100 text-emerald-700 px-3 py-1.5 rounded-full text-xs font-bold mb-4">
            Mengapa Penting?
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Satu Tes, Panduan Seumur Hidup</h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Banyak orang salah langkah karena belum kenal potensi terbaik dirinya. Salah jurusan, kerja yang tidak pas,
            hubungan yang tidak harmonis, atau tim yang kurang sinkron semua bisa diminimalkan.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-5">
          {[
            { icon: <Shield size={24} />, title: "Berbasis Genetik", desc: "Hasil tidak berubah seumur hidup" },
            { icon: <Clock size={24} />, title: "Cepat & Akurat", desc: "Hanya butuh 15 menit" },
            { icon: <Award size={24} />, title: "Bersertifikat", desc: "Konsultan profesional" },
            { icon: <TrendingUp size={24} />, title: "Terbukti Efektif", desc: "200+ peserta puas" },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition border border-gray-100 group hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4 text-white group-hover:scale-110 transition">
                {feature.icon}
              </div>
              <h3 className="font-bold text-base mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
