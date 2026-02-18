import { Footer } from "../../components/KangenWater/partials/Footer";
import Navbar from "../../components/KangenWater/partials/Navbar";
import { GLOBAL_STYLES } from "../../components/KangenWater/constant";
import Hero from "../../components/KangenWater/sections/Hero";
import { ProblemSection, ProfileStrip } from "../../components/KangenWater/sections/Problem";
import Solution from "../../components/KangenWater/sections/Solution";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import Testimonial from "../../components/KangenWater/sections/Testimonial";

export default function KangenWater() {
  useDocumentTitle("Kangen Water");

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <style>{GLOBAL_STYLES}</style>
      <Navbar />
      <Hero />
      <ProfileStrip />
      <ProblemSection />
      <Solution />
      <Testimonial />
      <Footer />
    </div>
  );
}
