import { Clock } from "lucide-react";

export default function Introduction() {
  return (
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
  );
}
