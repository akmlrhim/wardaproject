import { ChevronRight } from "lucide-react";
import { WA_LINK } from "../constant";

export default function CTA() {
  return (
    <section className="py-24 bg-blue-600 text-center px-4">
      <div className="max-w-4xl mx-auto">
        <p className="text-blue-200 italic text-lg mb-5 font-medium">
          "Jangan tunggu sampai kesehatan atau rekening bank Anda 'kering'."
        </p>
        <h2 className="text-3xl md:text-6xl font-black text-white mb-10 leading-tight">
          Ambil langkah berani hari ini untuk masa depan yang lebih{" "}
          <span className="text-blue-200">terhidrasi dan sejahtera.</span>
        </h2>
        <a
          href={WA_LINK}
          target="_blank"
          className="bg-white text-blue-700 px-12 py-5 rounded-xl font-black text-xl shadow-2xl inline-flex items-center gap-3 hover:bg-blue-50 transition-all hover:-translate-y-1"
        >
          SAYA MAU HIDUP SEHAT & MANDIRI FINANSIAL! <ChevronRight size={22} />
        </a>
      </div>
    </section>
  );
}
