import { useState } from "react";
import { FAQS } from "../constant";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section
      id="faq"
      className="py-24 bg-slate-50"
    >
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Pertanyaan yang Sering Diajukan</h2>
        </div>
        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className={`bg-white rounded-xl border-2 transition-all overflow-hidden ${openFaq === i ? "border-blue-300 shadow-sm" : "border-slate-100"}`}
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center gap-4"
              >
                <span className="font-bold text-slate-800 text-md">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`text-blue-600 shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                />
              </button>
              {openFaq === i && (
                <div className="px-6 pb-6 text-slate-600 text-md leading-relaxed border-t border-slate-100 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
