import { Award, CheckCircle, Droplets, MessageCircle, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-12">
        <div className="max-w-xs">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Droplets className="text-white w-5 h-5" />
            </div>
            <span className="text-lg font-black text-white">
              Kangen<span className="text-blue-400">Pure</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed">
            Teknologi Ionisasi Enagic Jepang untuk hidup yang lebih sehat dan finansial yang lebih bebas.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-12">
          <div>
            <h4 className="text-white font-black mb-5 uppercase tracking-widest text-xs">Kontak</h4>
            <div className="space-y-3 text-sm">
              <p className="flex items-center gap-2 text-blue-400 font-semibold">
                <MessageCircle size={15} /> Musdalifa Warda
              </p>
              <p className="flex items-center gap-2">
                <Award size={15} /> Authorized Distributor
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-white font-black mb-5 uppercase tracking-widest text-xs">Garansi</h4>
            <div className="space-y-3 text-sm">
              <p className="flex items-center gap-2">
                <ShieldCheck size={15} /> Sertifikat Resmi
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle size={15} /> Purna Jual
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800 text-center">
        <p className="text-xs text-slate-600 uppercase tracking-widest">
          © {new Date().getFullYear()} Musdalifa Warda — Kangen Water Indonesia
        </p>
      </div>
    </footer>
  );
}
