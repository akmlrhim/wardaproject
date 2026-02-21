import React from "react";
import { MessageCircle } from "lucide-react";
export default function CTA() {
  const handleWhatsApp = () => {
    const phoneNumber = "6283178257986";
    const message = `Halo bu Warda, saya ingin mengetahui lebih lanjut tentang stifin`;

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const baseUrl = isMobile ? "https://api.whatsapp.com/send" : "https://web.whatsapp.com/send";

    const url = `${baseUrl}?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <section
      className="py-12 px-6 relative overflow-hidden"
      id="kontak"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-800 via-emerald-900 to-teal-950"></div>

      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-400 rounded-full blur-[80px] animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-400 rounded-full blur-[80px]"></div>
      </div>

      <div className="relative max-w-3xl mx-auto text-center text-white">
        <div className="mb-8">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 leading-tight">
            Tes ini hanya 15 menit, tapi dampaknya seumur hidup.
          </h2>
          <p className="text-sm text-emerald-100 font-light max-w-xl mx-auto leading-relaxed">
            Bandingkan dengan biaya sekolah, les, dan kuliah senilai jutaan rupiah yang berisiko salah arah. Jangan
            biarkan masa depan anak menjadi kacau. Semakin cepat potensi dikenali, semakin besar peluang anak untuk
            tumbuh sesuai dengan kekuatannya.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 shadow-xl">
          <h3 className="text-xl md:text-2xl font-bold mb-2">Hubungi Promotor via WhatsApp sekarang</h3>

          <button
            onClick={handleWhatsApp}
            className="cursor-pointer redirect-to-wa group bg-white text-emerald-800 px-6 py-3 rounded-xl font-bold text-base hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 inline-flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span>Chat WhatsApp Sekarang</span>
          </button>
        </div>
      </div>
    </section>
  );
}
