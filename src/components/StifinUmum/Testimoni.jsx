import { Star } from "lucide-react";
import testimoniVideo from "../../assets/testimoni/video_testimoni.mp4";

export default function Testimoni() {
  const testimonials = [
    {
      name: "Dewi, Ibu Anisa",
      text: "Anisa (8 tahun) ternyata tipe Intuiting. Setelah metode belajarnya disesuaikan, dia jauh lebih cepat paham dan percaya diri.",
      rating: 5,
    },
    {
      name: "Budi, Ayah Fikri",
      text: "Fikri (15 tahun) menunjukkan tipe Thinking. Sekarang cara belajarnya lebih terstruktur dan dia jadi lebih aktif.",
      rating: 5,
    },
    {
      name: "Rini, Entrepreneur",
      text: "Saya umur 28 tahun baru tahu ternyata saya tipe Sensing. Pantas selama ini merasa tidak cocok kerja kantoran. Sekarang saya lebih yakin untuk terjun ke bisnis kuliner.",
      rating: 5,
    },
    {
      name: "Agus & Sari, Pasangan Menikah",
      text: "Tes ini bikin saya dan istri lebih saling paham. Ternyata kami beda tipe, makanya sering miss komunikasi. Sekarang lebih harmonis.",
      rating: 5,
    },
  ];

  return (
    <section
      className="py-16 px-6"
      id="testimoni"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">Mereka Sudah Merasakan Manfaatnya</h2>
          <p className="text-base text-gray-600">200+ peserta telah mengubah hidup mereka</p>
        </div>

        <div className="mb-12">
          <div className="bg-gradient-to-b from-emerald-50 to-teal-50 rounded-3xl p-6 md:p-10 border border-emerald-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute top-10 left-10 w-24 h-24 bg-emerald-200/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 right-10 w-32 h-32 bg-teal-200/20 rounded-full blur-3xl"></div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 relative z-10">
              <div className="text-center md:text-left max-w-sm">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Lihat Apa Kata Mereka</h3>
                <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                  Simak pengalaman langsung dari peserta yang telah mengikuti tes dan menemukan potensi terbaik mereka.
                  Video ini direkam langsung tanpa rekayasa.
                </p>
                <div className="hidden md:flex items-center gap-2 text-emerald-600 font-medium animate-bounce text-sm">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                  <span>Tonton Video</span>
                </div>
              </div>

              <div className="relative mx-auto md:mx-0 w-full max-w-[240px] shadow-xl rounded-[1.5rem] border-4 border-white bg-gray-900 overflow-hidden ring-1 ring-gray-900/5">
                <div className="aspect-[9/16] relative">
                  <video
                    className="w-full h-full object-cover"
                    controls
                    playsInline
                    preload="metadata"
                    src={testimoniVideo}
                  >
                    Browser Anda tidak mendukung tag video.
                  </video>
                </div>
              </div>
            </div>
          </div>
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
              <div className="flex gap-1 mb-3">
                {[...Array(testi.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
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
