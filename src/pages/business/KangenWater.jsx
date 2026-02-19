import React, { useEffect } from "react";
import { Footer } from "../../components/KangenWater/partials/Footer";
import Navbar from "../../components/KangenWater/partials/Navbar";
import Hero from "../../components/KangenWater/sections/Hero";
import { Problem, ProfileStrip } from "../../components/KangenWater/sections/Problem";
import Solution from "../../components/KangenWater/sections/Solution";
import Testimonial from "../../components/KangenWater/sections/Testimonial";
import Urgency from "../../components/KangenWater/sections/Urgency";
import Offering from "../../components/KangenWater/sections/Offering";
import FAQ from "../../components/KangenWater/sections/FAQ";
import CTA from "../../components/KangenWater/sections/CTA";

export default function KangenWater() {
  useEffect(() => {
    document.title = "Kangen Water Indonesia | Solusi Hidup Sehat & Mandiri";

    const metaConfig = {
      description:
        "Ubah air Anda, ubah hidup Anda. Dapatkan edukasi kesehatan dan peluang usaha mandiri bersama Kangen Water.",
      keywords: "Kangen Water, Air Alkali, Mesin Enagic, Hidup Sehat, Peluang Bisnis",
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
        <div className="absolute top-[-10%] right-[-5%] w-[30rem] h-[30rem] bg-blue-100 rounded-full blur-[100px] opacity-60" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[25rem] h-[25rem] bg-blue-50 rounded-full blur-[80px] opacity-40" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <ProfileStrip />
          <Problem />
          <Solution />
          <Testimonial />
          <Urgency />
          <Offering />
          <FAQ />
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}
