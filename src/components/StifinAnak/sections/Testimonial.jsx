import { Star } from "lucide-react";
import testimoniVideo from "../../../assets/testimoni/video_testimoni.mp4";

const testimonials = [
  {
    initial: "D",
    name: "Dewi",
    role: "Ibu Anisa",
    text: "Anisa (8 tahun) ternyata tipe Intuiting. Setelah metode belajarnya disesuaikan, dia jauh lebih cepat paham dan percaya diri.",
  },
  {
    initial: "B",
    name: "Budi",
    role: "Ayah Fikri",
    text: "Fikri (15 tahun) menunjukkan tipe Thinking. Sekarang cara belajarnya lebih terstruktur dan dia jadi lebih aktif.",
  },
];

export default function Testimoni() {
  return (
    <section
      className="py-8 sm:py-16 px-6"
      id="testimoni"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">Kata Orang Tua yang Sudah Mencoba</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {testimonials.map((testi, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition border border-gray-100 relative"
            >
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
                "
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed text-sm italic">"{testi.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-base">
                  {testi.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{testi.name}</p>
                  <p className="text-xs text-emerald-600">Verified User</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
