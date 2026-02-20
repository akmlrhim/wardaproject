import { ChevronRight } from "lucide-react";
import { WA_LINK } from "../constant";

export default function CTA() {
  return (
    <section
      className="py-16 bg-blue-600 text-center px-4"
      id="kontak"
    >
      <div className="max-w-3xl mx-auto">
        <p className="text-blue-200 italic text-base mb-4 font-medium">
          "Jangan tunggu sampai kesehatan atau rekening bank Anda 'kering'."
        </p>
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-8 leading-tight">
          Ambil langkah berani hari ini untuk masa depan yang lebih{" "}
          <span className="text-blue-200">terhidrasi dan sejahtera.</span>
        </h2>
        <a
          href={WA_LINK}
          target="_blank"
          className="sm:text-lg text-xs bg-white text-blue-700 px-4 py-3 rounded-xl capitalize font-bold text-base shadow-xl inline-flex items-center gap-2 hover:bg-blue-50 transition-all hover:-translate-y-1 whitespace-nowrap"
        >
          Saya mau hidup sehat & mandiri finansial <ChevronRight size={18} />
        </a>
      </div>
    </section>
  );
}
