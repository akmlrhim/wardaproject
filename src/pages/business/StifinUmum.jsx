import React, { useState } from "react";
import {
  MessageCircle,
  Users,
  Briefcase,
  GraduationCap,
  Heart,
  CheckCircle,
  Star,
  ChevronDown,
  Award,
  Clock,
  TrendingUp,
  Shield,
} from "lucide-react";

import Navbar from "../../components/StifinUmum/Navbar";
import Testimonial from "../../components/StifinUmum/partials/TestimonialSlide";
import Promotor from "../../components/StifinUmum/Promotor";
import Testimoni from "../../components/StifinUmum/Testimoni";

export default function StifinUmum() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      q: "Usia berapa tes ini cocok?",
      a: "Direkomendasikan mulai usia 2 tahun hingga dewasa. Tidak ada batas usia maksimal.",
    },
    {
      q: "Apakah hasil bisa berubah?",
      a: "Tidak. STIFIn berbasis genetik dan bersifat tetap seumur hidup.",
    },
    {
      q: "Bedanya dengan tes IQ?",
      a: "IQ mengukur kemampuan kognitif, STIFIn mengungkap cara berpikir alami dan potensi genetik.",
    },
    {
      q: "Apakah ada diskon untuk rombongan?",
      a: "Ada, untuk minimal 3 orang (keluarga/teman) mendapat harga spesial Rp 550.000/orang.",
    },
    {
      q: "Berapa lama prosesnya?",
      a: "Hasil keluar maksimal 15 menit dan bisa langsung konsultasi ke promotornya",
    },
    {
      q: "Apakah bisa online?",
      a: "Tidak, harus tatap muka (offline)",
    },
  ];

  const handleWhatsApp = () => {
    window.open("https://wa.me/6283178257986", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />

      <section className="relative overflow-hidden min-h-screen flex items-center">
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
                <button
                  onClick={handleWhatsApp}
                  className="group bg-white text-emerald-800 px-6 py-3 rounded-xl font-bold text-base hover:bg-emerald-50 transition-all duration-300 shadow-xl inline-flex items-center justify-center gap-2"
                >
                  <MessageCircle
                    size={20}
                    className="group-hover:rotate-12 transition-transform"
                  />
                  Konsultasi Gratis via WhatsApp
                </button>
              </div>
            </div>

            <Testimonial />
          </div>
        </div>
      </section>

      {/* Why Important Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Mengapa Penting?
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Satu Tes, Panduan Seumur Hidup</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Banyak orang salah langkah karena belum kenal potensi terbaik dirinya. Salah jurusan, kerja yang tidak
              pas, hubungan yang tidak harmonis, atau tim yang kurang sinkron—semua bisa diminimalkan.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: <Shield size={32} />, title: "Berbasis Genetik", desc: "Hasil tidak berubah seumur hidup" },
              { icon: <Clock size={32} />, title: "Cepat & Akurat", desc: "Hanya butuh 15 menit" },
              { icon: <Award size={32} />, title: "Bersertifikat", desc: "Konsultan profesional" },
              { icon: <TrendingUp size={32} />, title: "Terbukti Efektif", desc: "200+ peserta puas" },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition border border-gray-100 group hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Masalah yang Sering Terjadi</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tanpa mengenal tipe kecerdasan diri sendiri, kamu berisiko mengalami:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: (
                  <svg
                    className="w-10 h-10"
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
                    className="w-10 h-10"
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
                    className="w-10 h-10"
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
                    className="w-10 h-10"
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
                    className="w-10 h-10"
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
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition border-l-4 border-red-500 group"
              >
                <div className="flex items-start gap-4">
                  <div className="text-red-500 flex-shrink-0">{problem.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2 text-gray-900">{problem.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{problem.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STIFIn Introduction */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-5xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Apa itu STIFIn?</h2>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-8 border border-white/20">
            <p className="text-xl md:text-2xl leading-relaxed mb-6 font-light">
              STIFIn adalah konsep ilmu yang memetakan manusia berdasarkan
              <span className="font-bold text-emerald-200"> sistem operasi otak</span>. Dari berbagai teori yang ada,
              STIFIn membaginya menjadi
              <span className="font-bold text-emerald-200"> 5 Mesin Kecerdasan</span> dan
              <span className="font-bold text-emerald-200"> 9 Personality Genetik</span>.
            </p>

            <div className="h-px bg-white/20 my-8"></div>

            <p className="text-lg md:text-xl leading-relaxed text-emerald-50">
              Metode STIFIn membantu menemukan karpet merah hidup dan mengoptimalkan fitrah genetik menuju pribadi yang
              hebat dan sukses mulia.
            </p>
          </div>

          <div className="bg-gradient-to-r from-emerald-700 to-teal-700 rounded-2xl p-8 shadow-2xl border border-emerald-600">
            <Clock
              size={48}
              className="mx-auto mb-4 text-emerald-200"
            />
            <p className="text-3xl font-bold">15 Menit Tes = Panduan Seumur Hidup</p>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Siapa yang Cocok?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tes STIFIn cocok untuk semua kalangan yang ingin berkembang optimal
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              {
                icon: <GraduationCap size={40} />,
                title: "Anak (2+)",
                desc: "Bimbingan sejak dini untuk potensi maksimal",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: <Users size={40} />,
                title: "Remaja & Mahasiswa",
                desc: "Temukan jurusan dan karier yang tepat",
                color: "from-purple-500 to-purple-600",
              },
              {
                icon: <Briefcase size={40} />,
                title: "Profesional",
                desc: "Pindah jalur karier dengan percaya diri",
                color: "from-emerald-500 to-emerald-600",
              },
              {
                icon: <TrendingUp size={40} />,
                title: "Pebisnis",
                desc: "Kelola tim sesuai potensi optimal",
                color: "from-orange-500 to-orange-600",
              },
              {
                icon: <Heart size={40} />,
                title: "Pasangan & Keluarga",
                desc: "Pahami satu sama lain lebih dalam",
                color: "from-pink-500 to-pink-600",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition group hover:-translate-y-2 border border-gray-100"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition mx-auto`}
                >
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900 text-center">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed text-center">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Paket Lengkap untuk Kamu</h2>
            <p className="text-xl text-gray-600">Investasi sekali, manfaat seumur hidup</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: <Award size={28} />, title: "Tes STIFIn", desc: "Sidik jari digital untuk pemetaan otak" },
              { icon: <CheckCircle size={28} />, title: "Sertifikat Hasil Tes", desc: "Dokumen resmi hasil analisis" },
              { icon: <Users size={28} />, title: "Konsultasi Private", desc: "Bersama promotor bersertifikat" },
              { icon: <GraduationCap size={28} />, title: "Free Ebook", desc: "Panduan Personality Genetik lengkap" },
              {
                icon: <MessageCircle size={28} />,
                title: "Group Diskusi",
                desc: "Komunitas untuk sharing & tanya jawab",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-6 bg-gradient-to-br from-emerald-50 to-white rounded-2xl border border-emerald-100 hover:border-emerald-300 transition shadow-sm hover:shadow-md"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Manfaat Nyata untuk Hidupmu</h2>
            <p className="text-xl text-gray-600">Dampak positif yang langsung terasa</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg
                    className="w-12 h-12"
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
                desc: "Pilih jurusan dan cara belajar yang paling efektif sesuai tipe kecerdasan",
              },
              {
                icon: (
                  <svg
                    className="w-12 h-12"
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
                desc: "Arah karier jadi lebih jelas, produktivitas meningkat drastis",
              },
              {
                icon: (
                  <svg
                    className="w-12 h-12"
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
                desc: "Susun tim sesuai potensi, bisnis tumbuh lebih cepat",
              },
              {
                icon: (
                  <svg
                    className="w-12 h-12"
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
                desc: "Cara mendidik yang lebih efektif dan sesuai karakter anak",
              },
              {
                icon: (
                  <svg
                    className="w-12 h-12"
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
                desc: "Komunikasi lebih harmonis, pahami perbedaan dengan baik",
              },
              {
                icon: (
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                ),
                title: "Pencari Jati Diri",
                desc: "Temukan potensi terbaik dan jalur hidup yang sesuai",
              },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition border border-gray-100 group hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center text-white mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimoni />

      {/* Promotor */}
      <Promotor />

      {/* Pricing */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Investasi untuk Masa Depan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nilai tes sejenis bisa mencapai jutaan rupiah. Dapatkan harga spesial hari ini.
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 md:p-12 mb-12 border-2 border-red-200">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">Bandingkan Nilai Layanan Sejenis:</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <p className="text-gray-600 mb-2">Konsultasi Potensi & Karier</p>
                <p className="text-2xl font-bold text-red-600">Rp 1,5 - 3 Juta</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <p className="text-gray-600 mb-2">Tes Psikologi + Interpretasi</p>
                <p className="text-2xl font-bold text-red-600">Rp 1 - 2 Juta</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <p className="text-gray-600 mb-2">Coaching Lanjutan</p>
                <p className="text-2xl font-bold text-red-600">Jutaan Lagi</p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-red-700 mb-2">Total Bisa Lebih dari Rp 3.000.000</p>
              <p className="text-gray-600">dan belum tentu hasilnya sejelas dan sepraktis ini!</p>
            </div>
          </div>

          <h3 className="text-3xl font-bold text-center mb-12 text-emerald-900">Harga Spesial untuk Kamu</h3>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition border-2 border-gray-200 hover:border-emerald-300">
              <div className="text-center">
                <h4 className="font-bold text-2xl mb-2 text-gray-900">Individual</h4>
                <p className="text-gray-500 mb-6">Untuk 1 orang</p>
                <div className="mb-6">
                  <p className="text-5xl font-bold text-emerald-600 mb-2">650K</p>
                  <p className="text-gray-500">per orang</p>
                </div>
                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-emerald-600 text-white py-3 rounded-xl font-semibold hover:bg-emerald-700 transition"
                >
                  Pilih Paket
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl p-8 shadow-2xl transform scale-105 relative border-2 border-emerald-500">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-yellow-900 px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                PALING POPULER
              </div>
              <div className="text-center text-white">
                <h4 className="font-bold text-2xl mb-2">Paket Duo</h4>
                <p className="text-emerald-100 mb-6">Untuk 2 orang</p>
                <div className="mb-6">
                  <p className="text-5xl font-bold mb-2">600K</p>
                  <p className="text-emerald-100">per orang</p>
                  <div className="inline-block bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-bold mt-3">
                    Hemat Rp 100.000
                  </div>
                </div>
                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-white text-emerald-600 py-3 rounded-xl font-semibold hover:bg-emerald-50 transition"
                >
                  Pilih Paket
                </button>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition border-2 border-gray-200 hover:border-emerald-300">
              <div className="text-center">
                <h4 className="font-bold text-2xl mb-2 text-gray-900">Paket Keluarga</h4>
                <p className="text-gray-500 mb-6">Minimal 3 orang</p>
                <div className="mb-6">
                  <p className="text-5xl font-bold text-emerald-600 mb-2">550K</p>
                  <p className="text-gray-500">per orang</p>
                  <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-sm font-bold mt-3">
                    Hemat Rp 300.000
                  </div>
                </div>
                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-emerald-600 text-white py-3 rounded-xl font-semibold hover:bg-emerald-700 transition"
                >
                  Pilih Paket
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto border border-emerald-200">
            <div className="flex items-center justify-center gap-3 mb-6">
              <svg
                className="w-8 h-8 text-emerald-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h4 className="font-bold text-2xl text-center text-gray-900">Kamu merasa ini mahal?</h4>
            </div>
            <p className="text-center text-gray-600 mb-6 text-lg">Bandingkan dengan kerugian jika salah pilih:</p>
            <div className="space-y-4 mb-8">
              {[
                { loss: "Puluhan Juta + 4 Tahun", item: "Kuliah salah jurusan" },
                { loss: "Jutaan Rupiah", item: "Kursus/pelatihan tidak cocok" },
                { loss: "Bertahun-tahun", item: "Trial and error karier" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm"
                >
                  <span className="text-gray-700">{item.item}</span>
                  <span className="font-bold text-red-600">{item.loss}</span>
                </div>
              ))}
            </div>
            <div className="text-center bg-white rounded-2xl p-6 shadow-md">
              <div className="flex items-center justify-center gap-2 mb-2">
                <svg
                  className="w-6 h-6 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-2xl font-bold text-emerald-700">Tes ini hanya 15 menit</p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <svg
                  className="w-6 h-6 text-gray-600"
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
                </svg>
                <p className="text-xl text-gray-600">Tapi dampaknya seumur hidup!</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={handleWhatsApp}
              className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:from-emerald-700 hover:to-emerald-800 transition shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center gap-3"
            >
              <MessageCircle size={28} />
              Daftar Sekarang via WhatsApp
            </button>
            <div className="flex items-center justify-center gap-4 mt-4 text-gray-500 text-sm">
              <div className="flex items-center gap-1">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
                <span>Respon cepat</span>
              </div>
              <div className="flex items-center gap-1">
                <svg
                  className="w-4 h-4"
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
                </svg>
                <span>Gratis konsultasi</span>
              </div>
              <div className="flex items-center gap-1">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Jadwal fleksibel</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-700 via-emerald-800 to-teal-900"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Jangan Biarkan Masa Depanmu
            <br />
            Ditentukan oleh Coba-Coba
          </h2>
          <p className="text-xl md:text-2xl mb-4 text-emerald-100 font-light">
            Semakin cepat potensi dikenali, semakin besar peluang hidup sesuai kekuatan diri
          </p>
          <p className="text-lg mb-10 text-white/90 max-w-2xl mx-auto">
            Investasi terbaik adalah investasi untuk memahami diri sendiri
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 inline-block border border-white/20">
            <p className="text-2xl font-bold mb-4">⏰ Waktu Terbatas!</p>
            <p className="text-lg">Harga spesial ini tidak akan berlaku selamanya</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Pertanyaan yang Sering Diajukan</h2>
            <p className="text-xl text-gray-600">Temukan jawaban untuk pertanyaan umum</p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left hover:bg-gray-50 flex justify-between items-center transition group"
                >
                  <span className="font-bold text-lg text-gray-900 pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`text-emerald-600 transition-transform flex-shrink-0 ${openFaq === idx ? "rotate-180" : ""}`}
                    size={28}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 pt-2">
                    <div className="bg-emerald-50 rounded-xl p-6 border-l-4 border-emerald-500">
                      <p className="text-gray-700 leading-relaxed text-lg">{faq.a}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-400 rounded-full blur-3xl"></div>
          </div>

          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Siap Menemukan Potensi Terbaikmu?</h2>
            <p className="text-xl mb-8 text-emerald-100">
              Hubungi kami sekarang dan mulai perjalananmu menuju kesuksesan yang sesuai dengan jati diri
            </p>
            <button
              onClick={handleWhatsApp}
              className="bg-white text-emerald-700 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-emerald-50 transition shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center gap-3"
            >
              <MessageCircle size={28} />
              Chat WhatsApp Sekarang
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-lg flex items-center justify-center">
                  <Award size={24} />
                </div>
                <span className="text-2xl font-bold">STIFIn</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Kenali potensimu, temukan jati dirimu, raih masa depan yang lebih cerah
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Kontak</h4>
              <div className="space-y-2 text-gray-400">
                <p>Musdalifa Warda</p>
                <p>STIFIn Firdaus Life</p>
                <p>Area Kalimantan</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Informasi</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle
                    size={16}
                    className="text-emerald-500"
                  />
                  <p>Konsultan Bersertifikat</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle
                    size={16}
                    className="text-emerald-500"
                  />
                  <p>200+ Peserta Terlayani</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle
                    size={16}
                    className="text-emerald-500"
                  />
                  <p>Pengalaman lebih dari 3 Tahun</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center">
            <button
              onClick={handleWhatsApp}
              className="bg-emerald-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition mb-6 inline-flex items-center gap-2"
            >
              <MessageCircle size={20} />
              Hubungi Kami
            </button>
            <p className="text-gray-400 text-sm">© 2026 STIFIn - Warda Mompreneur. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
