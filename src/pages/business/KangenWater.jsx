import { Footer } from "../../components/KangenWater/partials/Footer";
import Navbar from "../../components/KangenWater/partials/Navbar";
import { GLOBAL_STYLES } from "../../components/KangenWater/constant";
import Hero from "../../components/KangenWater/sections/Hero";
import { Problem, ProfileStrip } from "../../components/KangenWater/sections/Problem";
import Solution from "../../components/KangenWater/sections/Solution";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import Testimonial from "../../components/KangenWater/sections/Testimonial";
import Urgency from "../../components/KangenWater/sections/Urgency";
import Offering from "../../components/KangenWater/sections/Offering";
import FAQ from "../../components/KangenWater/sections/FAQ";
import CTA from "../../components/KangenWater/sections/CTA";

export default function KangenWater() {
  useDocumentTitle("Kangen Water");

  return (
    <div className="min-h-screen bg-white text-black">
      <style>{GLOBAL_STYLES}</style>
      <Navbar />
      <Hero />
      <ProfileStrip />
      <Problem />
      <Solution />
      <Testimonial />
      <Urgency />
      <Offering />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
