import React, { useEffect } from "react";
import Promotor from "../../components/StifinUmum/sections/Promotor";
import Testimoni from "../../components/StifinUmum/sections/Testimoni";
import Footer from "../../components/StifinUmum/partials/Footer";
import Navbar from "../../components/StifinUmum/partials/Navbar";
import FAQ from "../../components/StifinUmum/sections/FAQ";
import CTA from "../../components/StifinUmum/sections/CTA";
import Hero from "../../components/StifinUmum/sections/Hero";
import Pricing from "../../components/StifinUmum/sections/Pricing";
import Benefits from "../../components/StifinUmum/sections/Benefit";
import WhatYouGet from "../../components/StifinUmum/sections/WhatYouGet";
import TargetAudience from "../../components/StifinUmum/sections/TargetAudience";
import Introduction from "../../components/StifinUmum/sections/Introduction";
import Problem from "../../components/StifinUmum/sections/Problem";
import Important from "../../components/StifinUmum/sections/Important";

export default function StifinUmum() {
  useEffect(() => {
    document.title = "STIFIn Umum | Temukan Potensi Genetik Anda";

    const metaConfig = {
      description:
        "Kenali mesin kecerdasan dan kepribadian genetik Anda melalui tes STIFIn untuk hidup yang lebih fokus dan sukses.",
      keywords: "STIFIn, Tes STIFIn, Potensi Genetik, Mesin Kecerdasan, Pengembangan Diri",
    };

    Object.entries(metaConfig).forEach(([name, content]) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (element) {
        element.setAttribute("content", content);
      } else {
        const meta = document.createElement("meta");
        meta.name = name;
        meta.content = content;
        document.head.appendChild(meta);
      }
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[30rem] h-[30rem] bg-emerald-50 rounded-full blur-[100px] opacity-60" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[25rem] h-[25rem] bg-green-100 rounded-full blur-[80px] opacity-40" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <Important />
          <Problem />
          <Introduction />
          <TargetAudience />
          <WhatYouGet />
          <Benefits />
          <Testimoni />
          <Promotor />
          <Pricing />
          <CTA />
          <FAQ />
        </main>
        <Footer />
      </div>
    </div>
  );
}
