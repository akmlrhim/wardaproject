import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useState } from "react";

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "Alhamdulillah wasilah STIFIn jadi semakin mengenali pasangan. Awal nikah sering cekcok, setelah ikut STIFIn udah jarang banget cekcok. Sudah tahu karakter masing-masing. Selain itu, hidup jadi berasa lebih terarah, tahu goal hidup, dan gak gampang FOMO dengan kehidupan orang lain.",
    },
    {
      id: 2,
      text: "Setelah mengikuti tes STIFIn saya jadi tau potensi diri saya dan anak saya. Jadi lebih fokus mengasah kelebihan yang sudah digariskan. Sangat berguna bagi orang tua agar lebih memahami karakter anak, supaya pendekatannya pas dan fokus mensupport kelebihannya.",
    },
  ];

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === testimonials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full max-w-md mx-auto lg:ml-auto">
      <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl transition-all duration-500 min-h-[320px] flex flex-col justify-between">
        <div className="absolute -top-4 -left-4 bg-emerald-500 text-white p-3 rounded-full shadow-lg">
          <Quote
            size={20}
            fill="currentColor"
          />
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <div className="flex gap-1 mb-4 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                fill="currentColor"
              />
            ))}
          </div>

          <div
            key={currentIndex}
            className="animate-fade-in-up"
          >
            <p className="text-white text-base italic leading-relaxed mb-4 font-light">
              "{testimonials[currentIndex].text}"
            </p>

            <div className="border-t border-white/10 pt-3">
              <p className="text-emerald-200 font-bold text-base">{testimonials[currentIndex].role}</p>
              <p className="text-white/60 text-xs">{testimonials[currentIndex].tag}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4 pt-2">
          <button
            onClick={prevSlide}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex gap-1.5">
            {testimonials.map((_, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => setCurrentIndex(slideIndex)}
                className={`transition-all duration-300 h-1.5 rounded-full cursor-pointer ${
                  currentIndex === slideIndex ? "w-6 bg-emerald-400" : "w-1.5 bg-white/30"
                }`}
              ></div>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="absolute -top-8 -right-8 w-32 h-32 bg-teal-400/30 rounded-full blur-2xl -z-0"></div>
    </div>
  );
}
