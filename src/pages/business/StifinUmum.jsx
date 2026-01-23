import {
  MessageCircle,
  Users,
  Briefcase,
  GraduationCap,
  Heart,
  CheckCircle,
  Award,
  Clock,
  TrendingUp,
  Shield,
  BarChart3,
} from "lucide-react";

import Testimonial from "../../components/StifinUmum/partials/TestimonialSlide";
import Promotor from "../../components/StifinUmum/Promotor";
import Testimoni from "../../components/StifinUmum/Testimoni";
import Footer from "../../components/StifinUmum/partials/Footer";
import Navbar from "../../components/StifinUmum/partials/Navbar";
import FAQ from "../../components/StifinUmum/FAQ";
import CTA from "../../components/StifinUmum/CTA";
import Hero from "../../components/StifinUmum/Hero";
import Pricing from "../../components/StifinUmum/Pricing";

export default function StifinUmum() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />

      <Hero />

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-emerald-100 text-emerald-700 px-3 py-1.5 rounded-full text-xs font-bold mb-4">
              Mengapa Penting?
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Satu Tes, Panduan Seumur Hidup</h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Banyak orang salah langkah karena belum kenal potensi terbaik dirinya. Salah jurusan, kerja yang tidak
              pas, hubungan yang tidak harmonis, atau tim yang kurang sinkron semua bisa diminimalkan.
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

      {/* Problems Section */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Masalah yang Sering Terjadi</h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Tanpa mengenal tipe kecerdasan diri sendiri, kamu berisiko mengalami:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {[
              {
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                title: "Waktu & Uang Terbuang",
                desc: "Trial and error yang tidak efektif dan hasilnya tidak sebanding",
              },
              {
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                ),
                title: "Karier Stuck",
                desc: "Cepat bosan, merasa salah jalur, dan tidak berkembang",
              },
              {
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                ),
                title: "Metode Belajar Salah",
                desc: "Sudah belajar keras tapi caranya tidak cocok dengan dirimu",
              },
              {
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                ),
                title: "Bisnis Tidak Berkembang",
                desc: "Salah mengatur diri dan tim karena tidak paham karakter",
              },
              {
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    />
                  </svg>
                ),
                title: "Hubungan Tegang",
                desc: "Komunikasi dengan pasangan sering miss karena cara berpikir berbeda",
              },
            ].map((problem, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition border-l-4 border-red-500 group"
              >
                <div className="flex items-start gap-4">
                  <div className="text-red-500 flex-shrink-0 mt-1">{problem.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-base mb-1 text-gray-900">{problem.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{problem.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STIFIn Introduction */}
      <section
        className="py-12 px-6 relative overflow-hidden"
        id="tentang"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-3xl mx-auto text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-5">Memperkenalkan STIFIn?</h2>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 md:p-6 mb-5 border border-white/20">
            <p className="text-base md:text-lg leading-relaxed mb-3 font-light">
              STIFIn adalah konsep ilmu yang memetakan manusia berdasarkan
              <span className="font-bold text-emerald-200"> sistem operasi otak</span>. Dari berbagai teori yang ada,
              STIFIn membaginya menjadi
              <span className="font-bold text-emerald-200"> 5 Mesin Kecerdasan</span> dan
              <span className="font-bold text-emerald-200"> 9 Personality Genetik</span>.
            </p>

            <div className="h-px bg-white/20 my-4"></div>

            <p className="text-sm md:text-base leading-relaxed text-emerald-50">
              Metode STIFIn membantu menemukan karpet merah hidup dan mengoptimalkan fitrah genetik menuju pribadi yang
              hebat dan sukses mulia.
            </p>
          </div>

          <div className="bg-gradient-to-r from-emerald-700 to-teal-700 rounded-lg p-4 shadow-xl border border-emerald-600 inline-block w-full max-w-xl">
            <div className="flex items-center justify-center gap-3">
              <Clock
                size={24}
                className="text-emerald-200"
              />
              <p className="text-lg font-bold">15 Menit Tes = Panduan Seumur Hidup</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Siapa yang Cocok?</h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Tes STIFIn cocok untuk semua kalangan yang ingin berkembang optimal
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5">
            {[
              {
                icon: <GraduationCap size={24} />,
                title: "Anak (2+)",
                desc: "Bimbingan sejak dini untuk potensi maksimal",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: <Users size={24} />,
                title: "Remaja & Mahasiswa",
                desc: "Temukan jurusan dan karier yang tepat",
                color: "from-purple-500 to-purple-600",
              },
              {
                icon: <Briefcase size={24} />,
                title: "Profesional",
                desc: "Pindah jalur karier dengan percaya diri",
                color: "from-emerald-500 to-emerald-600",
              },
              {
                icon: <TrendingUp size={24} />,
                title: "Pebisnis",
                desc: "Kelola tim sesuai potensi optimal",
                color: "from-orange-500 to-orange-600",
              },
              {
                icon: <Heart size={24} />,
                title: "Pasangan & Keluarga",
                desc: "Pahami satu sama lain lebih dalam",
                color: "from-pink-500 to-pink-600",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition group hover:-translate-y-1 border border-gray-100"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center mb-3 text-white group-hover:scale-110 transition mx-auto`}
                >
                  {item.icon}
                </div>
                <h3 className="font-bold text-base mb-1 text-gray-900 text-center">{item.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed text-center">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 px-6 bg-gradient-to-b from-white to-gray-50/50">
        <div className="max-w-5xl mx-auto">
          <div className="mb-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">Apa yang kamu dapat?</h2>
              <p className="text-base text-gray-600 max-w-2xl mx-auto">
                Investasi sekali, manfaat seumur hidup dengan paket lengkap ini.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  icon: <Award size={22} />,
                  title: "Tes STIFIn",
                  desc: "Analisis biometrik digital untuk pemetaan otak",
                },
                { icon: <CheckCircle size={22} />, title: "Sertifikat Resmi", desc: "Dokumen hasil analisis softcopy" },
                { icon: <Users size={22} />, title: "Konsultasi Private", desc: "Sesi eksklusif dengan Promotor" },
                { icon: <GraduationCap size={22} />, title: "Free Ebook", desc: "Panduan Personality Genetik" },
                { icon: <MessageCircle size={22} />, title: "Grup Diskusi", desc: "Komunitas tanya jawab & sharing" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:border-emerald-200 transition-all duration-300 shadow-sm hover:shadow-md group"
                >
                  <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-base mb-1 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">Cara Kerja</h2>
              <p className="text-base text-gray-600">Alur proses dari pendaftaran hingga hasil</p>
            </div>

            <div className="relative">
              <div className="space-y-8 md:space-y-0">
                {[
                  {
                    step: "01",
                    title: "Booking Jadwal",
                    desc: "Hubungi saya untuk menentukan waktu dan lokasi tes yang nyaman.",
                  },
                  {
                    step: "02",
                    title: "Scan Sidik Jari",
                    desc: "Proses pengambilan data 10 sidik jari hanya 5-10 menit.",
                  },
                  {
                    step: "03",
                    title: "Processing Data",
                    desc: "Data dikirim ke server pusat STIFIn untuk dianalisis sistem.",
                  },
                  {
                    step: "04",
                    title: "Penjelasan Hasil",
                    desc: "Hasil keluar instan & sesi penjelasan mendalam oleh Promotor.",
                  },
                ].map((item, idx) => {
                  const isLeft = idx % 2 === 0;
                  return (
                    <div
                      key={idx}
                      className="relative flex md:justify-center items-center"
                    >
                      <div className="md:hidden absolute left-5 top-0 h-full w-0.5 bg-emerald-100"></div>

                      <div
                        className={`flex flex-col md:flex-row items-center w-full ${!isLeft ? "md:flex-row-reverse" : ""}`}
                      >
                        <div className="hidden md:block w-1/2"></div>

                        <div className="absolute left-5 md:left-1/2 transform -translate-x-1/2 w-10 h-10 bg-emerald-500 rounded-full border-[6px] border-white shadow-md flex items-center justify-center z-10">
                          <span className="text-white font-bold text-xs">{item.step}</span>
                        </div>

                        <div
                          className={`w-full md:w-1/2 pl-20 md:pl-0 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"} py-2`}
                        >
                          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative">
                            <span className="md:hidden absolute -left-14 top-6 bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-1 rounded">
                              Step {item.step}
                            </span>

                            <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section
        className="py-16 px-6"
        id="manfaat"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">Manfaat Nyata untuk Hidupmu</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                ),
                title: "Pelajar",
                desc: "Pilih jurusan & cara belajar yang pas",
              },
              {
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                ),
                title: "Profesional",
                desc: "Arah karier yang jelas",
              },
              {
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                ),
                title: "Pebisnis",
                desc: "Susun tim sesuai potensi",
              },
              {
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                ),
                title: "Orangtua",
                desc: "Cara mendidik yang lebih efektif",
              },
              {
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                ),
                title: "Pasangan",
                desc: "Komunikasi jadi lebih paham-memahami",
              },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition border border-gray-100 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center text-white mb-3">
                  {benefit.icon}
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-8 py-3 rounded-xl font-bold text-sm sm:text-lg hover:from-emerald-700 hover:to-emerald-800 transition shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center gap-2">
              <MessageCircle size={24} />
              Konsultasi Gratis di Whatshapp
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimoni />

      {/* Promotor */}
      <Promotor />

      {/* Pricing  */}
      <Pricing />

      {/* CTA Section */}
      <CTA />

      {/* FAQ */}
      <FAQ />

      {/* Footer */}
      <Footer />
    </div>
  );
}
