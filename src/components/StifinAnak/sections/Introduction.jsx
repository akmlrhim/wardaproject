import stifinIl from "../../../assets/stifin/stifin.jpeg";
import { Brain, CheckCircle2, ClipboardList, Fingerprint, PlayCircle, ShieldCheck, Star } from "lucide-react";

export default function Introduction() {
  return (
    <div
      className="min-h-screen text-slate-800"
      id=""
    >
      <section
        className="relative bg-white py-16 sm:py-24 px-6 lg:px-8"
        id="tentang"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="md:text-3xl text-lg font-extrabold text-slate-900 tracking-tight leading-tight mb-8">
            15 Menit untuk Mengetahui Arah <span className="text-emerald-600">Potensi Anak Seumur Hidup</span>
          </h1>

          <div className="relative mx-auto max-w-4xl mt-12">
            <div className="aspect-video bg-slate-100 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 relative group cursor-pointer">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube-nocookie.com/embed/5nsR8SkYdv0?si=R4Z9hJR9_70pYgk_"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="md:text-3xl text-lg font-bold text-slate-900">Mengapa Memilih Tes Ini?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Star, title: "Praktis", desc: "Proses cepat dan mudah dipahami oleh anak maupun orang tua" },
              { icon: ShieldCheck, title: "Bebas Stres", desc: "Sama sekali tidak membebani kondisi mental anak" },
              { icon: Fingerprint, title: "Satu Kali Saja", desc: "Hasil tes genetik berlaku untuk seumur hidup" },
              { icon: Brain, title: "Panduan Nyata", desc: "Bukan sekadar deretan angka akademis tanpa makna" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl shadow-sm border border-emerald-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-md font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="md:py-20 py-8 bg-white px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 space-y-8">
            <h2 className="md:text-3xl text-lg font-extrabold text-slate-900 leading-tight">Apa Itu Tes STIFIn?</h2>
            <div className="space-y-6 text-xs md:text-sm text-slate-600 leading-relaxed">
              <p>
                Tes STIFIn membantu mengenali potensi genetik anak melalui sidik jari. Pola sidik jari terbentuk sejak
                lahir dan berkaitan erat dengan fungsi sistem otak.
              </p>
              <p>
                Dari sidik jari inilah dapat dipetakan gaya kecerdasan alami anak secara akurat, memberikan panduan
                nyata melebihi sekadar kemampuan akademik biasa.
              </p>
            </div>

            <div className="pt-6">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
                5 Tipe Kecerdasan Utama:
              </h4>
              <div className="flex flex-wrap gap-3">
                {["Sensing", "Thinking", "Intuiting", "Feeling", "Insting"].map((tipe) => (
                  <span
                    key={tipe}
                    className="px-5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-bold text-emerald-700 text-xs md:text-sm shadow-sm"
                  >
                    {tipe}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="bg-emerald-50 rounded-[3rem] p-3 lg:p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-emerald-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
              <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-40 h-40 bg-emerald-300 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
              <img
                src={stifinIl}
                alt="Ilustrasi Kecerdasan"
                className="relative rounded-2xl shadow-xl w-full object-cover border border-white"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="md:text-3xl text-lg font-extrabold mb-6">Manfaat Nyata Setelah Tes</h2>
            <p className="text-md text-slate-400 max-w-2xl mx-auto">
              Transformasi nyata dalam mendidik dan membimbing arah masa depan anak Anda.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {[
              "Orang tua jauh lebih cepat memahami potensi anak",
              "Metode belajar menjadi lebih efektif dan relevan",
              "Anak tampil lebih percaya diri dan termotivasi",
              "Waktu & biaya pendidikan menjadi sangat efisien",
              "Keputusan masa depan tidak berdasarkan tebak-tebakan",
            ].map((text, idx) => (
              <div
                key={idx}
                className="flex items-start space-x-5 bg-slate-800/50 p-3 rounded-2xl border border-slate-700/50 hover:bg-slate-800 transition-colors"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  </div>
                </div>
                <p className="text-sm sm:text-base lg:text-md text-slate-200 self-center leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-24 bg-white px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-12 sm:mb-16">
            Apa yang Akan Anda Dapatkan?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-emerald-200 hover:shadow-lg transition-all">
              <Fingerprint className="w-12 h-12 text-emerald-600 mb-6" />
              <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">Pemindaian Digital</h4>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Proses pemindaian sidik jari digital yang cepat, aman, dan dijamin sangat akurat.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-emerald-200 hover:shadow-lg transition-all">
              <ClipboardList className="w-12 h-12 text-emerald-600 mb-6" />
              <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">Laporan Komprehensif</h4>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Mendapatkan hasil tipe kecerdasan dominan, laporan potensi lengkap, dan rekomendasi belajar.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-emerald-600 text-white shadow-xl transform md:-translate-y-4">
              <ShieldCheck className="w-12 h-12 text-emerald-200 mb-6" />
              <h4 className="text-xl sm:text-2xl font-bold mb-3">Sesi Konsultasi Eksklusif</h4>
              <p className="text-sm sm:text-base text-emerald-100 mb-8 leading-relaxed">
                Konsultasi privat langsung dengan Warda, sertifikat resmi STIFIn, serta akses ke komunitas eksklusif.
              </p>
              <a
                href="#whatsapp"
                className="inline-block w-full text-center bg-white text-emerald-700 font-extrabold py-4 px-6 rounded-xl hover:bg-slate-50 hover:scale-105 transition-all shadow-md text-sm sm:text-base"
              >
                Hubungi WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
