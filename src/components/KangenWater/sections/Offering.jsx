import { Award, Info, ShoppingCart, Wallet } from "lucide-react";
import { IMAGES, WA_LINK } from "../constant";

export default function Offering() {
  return (
    <section
      id="produk"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="border-2 border-blue-200 rounded-2xl overflow-hidden">
          <div className="bg-blue-600 px-10 py-5 flex items-center justify-between">
            <p className="text-white font-black uppercase tracking-widest text-sm">Penawaran Spesial</p>
            <span className="bg-yellow-400 text-yellow-900 text-xs font-black px-4 py-1.5 rounded-full uppercase">
              Special Bonus
            </span>
          </div>
          <div className="p-10 md:p-14 grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
                Pesan Mesin Kangen Anda Sekarang!
              </h3>
              <div className="space-y-6 mb-10">
                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center shrink-0">
                    <Wallet size={22} />
                  </div>
                  <div>
                    <p className="text-lg font-black text-slate-900">Investasi mulai Rp 25 Juta</p>
                    <p className="text-slate-400 text-sm">Tersedia cicilan 0% sesuai ketentuan</p>
                  </div>
                </div>
                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 bg-green-500 text-white rounded-xl flex items-center justify-center shrink-0">
                    <Award size={22} />
                  </div>
                  <div>
                    <p className="text-lg font-black text-green-700">Special Mentoring</p>
                    <p className="text-slate-500 text-sm">Sesi mentoring bisnis eksklusif — kuota terbatas per bulan</p>
                  </div>
                </div>
              </div>
              <blockquote className="border-l-4 border-blue-600 pl-5 italic text-slate-600 text-sm leading-relaxed mb-10">
                "Kami menawarkan 'Air yang dapat mengubah hidup Anda', sesuai makna Kangen (回归) dalam bahasa Jepang:
                kembali ke asal. Kembali ke tubuh yang sehat, kembali ke kebebasan finansial."
              </blockquote>
              <a
                href={WA_LINK}
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-xl font-black text-lg shadow-lg inline-flex items-center gap-3 transition-all hover:-translate-y-1"
              >
                SAYA MAU BERUBAH! <ShoppingCart size={20} />
              </a>
              <p className="text-xs text-slate-400 italic mt-3">
                Produk resmi dengan layanan purna jual dari distributor resmi Enagic Indonesia.
              </p>
            </div>
            <div className="space-y-5">
              <div className="rounded-2xl overflow-hidden border-2 border-slate-100 shadow-lg">
                <img
                  src={IMAGES.machines[0]}
                  alt="Mesin K8"
                  className="w-full h-auto"
                />
              </div>
              <div className="bg-amber-50 border-2 border-amber-200 p-5 rounded-xl flex gap-3">
                <Info
                  size={16}
                  className="text-amber-600 shrink-0 mt-0.5"
                />
                <p className="text-amber-800 text-xs font-semibold italic">
                  Kami hanya mencari individu yang serius tentang wellness dan kemakmuran. Jika Anda hanya mencari 'pil
                  ajaib', ini bukan untuk Anda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
