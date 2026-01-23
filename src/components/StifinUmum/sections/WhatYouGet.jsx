import { Award, CheckCircle, GraduationCap, MessageCircle, Users } from "lucide-react";

export default function WhatYouGet() {
  return (
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
  );
}
