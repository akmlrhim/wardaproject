import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      q: "Usia berapa tes ini cocok?",
      a: "Direkomendasikan untuk anak usia 5–12 tahun (bisa lebih luas).",
    },
    {
      q: "Apakah hasil bisa berubah?",
      a: "Tidak. STIFIn berbasis genetik dan bersifat tetap seumur hidup.",
    },
    {
      q: "Bedanya dengan tes IQ?",
      a: "IQ mengukur kemampuan kognitif, STIFIn mengungkap cara berpikir alami dan potensi genetik.",
    },
    {
      q: "Apakah ada diskon untuk keluarga?",
      a: "Ada, untuk minimal 3 orang.",
    },
  ];

  return (
    <section
      className="py-16 sm:py-24 px-6"
      id="faq"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">FAQ</h2>
          <p className="text-base text-gray-600">Temukan jawaban untuk pertanyaan umum</p>
        </div>

        <div className="space-y-3">
          {faqData.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden h-fit"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-4 text-left flex justify-between items-start transition group"
              >
                <span className="font-bold text-base text-gray-900 pr-3 leading-snug">{faq.q}</span>
                <ChevronDown
                  className={`text-gray-400 transition-transform flex-shrink-0 mt-0.5 ${openFaq === idx ? "rotate-180" : ""}`}
                  size={20}
                />
              </button>
              {openFaq === idx && (
                <div className="px-4 pb-4">
                  <p className="text-gray-600 leading-relaxed text-sm pt-2 border-t border-gray-100">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
