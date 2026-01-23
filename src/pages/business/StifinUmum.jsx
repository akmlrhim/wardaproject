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
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />

      <Hero />

      {/* Important Section  */}
      <Important />

      {/* Problems Section */}
      <Problem />

      {/* STIFIn Introduction */}
      <Introduction />

      {/* Target Audience */}
      <TargetAudience />

      {/* What You Get */}
      <WhatYouGet />

      {/* Benefits */}
      <Benefits />

      {/* Testimonials */}
      <Testimoni />

      {/* Promotor */}
      <Promotor />

      {/* Pricing  */}
      <Pricing />

      {/* CTA Section */}
      <CTA />

      {/* FAQ */}
      <FAQ />

      {/* Footer */}
      <Footer />
    </div>
  );
}
	