import React from "react";
import Hero from "../../components/StifinAnak/sections/Hero";
import Problem from "../../components/StifinAnak/sections/Problem";
import Introduction from "../../components/StifinAnak/sections/Introduction";
import Testimoni from "../../components/StifinAnak/sections/Testimonial";
import Promotor from "../../components/StifinAnak/sections/Promotor";
import Pricing from "../../components/StifinAnak/sections/Pricing";
import CTA from "../../components/StifinAnak/sections/CTA";
import Footer from "../../components/StifinAnak/partials/Footer";
import FAQ from "../../components/StifinAnak/sections/FAQ";
import Navbar from "../../components/StifinAnak/partials/Navbar";

const Stifin = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Navbar  */}
      <Navbar />

      <Hero />
      <Problem />
      <Introduction />
      <Testimoni />
      <Promotor />
      <Pricing />
      <CTA />
      <FAQ />

      {/* Footer  */}
      <Footer />
    </div>
  );
};

export default Stifin;
