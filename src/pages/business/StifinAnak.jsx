import React from "react";
import Header from "../../components/Header";
import Hero from "../../components/StifinAnak/sections/Hero";
import Problem from "../../components/StifinAnak/sections/Problem";
import Introduction from "../../components/StifinAnak/sections/Introduction";
import Testimoni from "../../components/StifinAnak/sections/Testimonial";

const Stifin = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />

      <Hero />
      <Problem />
      <Introduction />
      <Testimoni />
    </div>
  );
};

export default Stifin;
