import React from "react";
import Header from "../../components/Header";
import { CheckCircle, XCircle, MessageCircle, Users, Award, Clock } from "lucide-react";
import Footer from "../../components/Footer";
import Hero from "../../components/Stifin/Hero";
import ProblemStatement from "../../components/Stifin/ProblemStatement";
import SmartParent from "../../components/Stifin/SmartParent";
import PainPoint from "../../components/Stifin/PainPoint";
import SolutionBenefit from "../../components/Stifin/SolutionBenefit";
import WhyNotAsk from "../../components/Stifin/WhyNotAsk";
import Introduction from "../../components/Stifin/Introduction";
import Video from "../../components/Stifin/Video";
import WhatIs from "../../components/Stifin/WhatIs";
import WhatYouGet from "../../components/Stifin/WhatYouGet";
import Benefits from "../../components/Stifin/Benefits";
import Testimonials from "../../components/Stifin/Testimonials";
import Promotor from "../../components/Stifin/Promotor";
import Pricing from "../../components/Stifin/Pricing";
import CTA from "../../components/Stifin/CTA";
import FAQ from "../../components/Stifin/FAQ";
import Image from "../../components/Stifin/Image";

const Stifin = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header showBackButton={true} />

      <Hero />

      <Image />

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">
        <ProblemStatement />
        <SmartParent />
        <PainPoint />
        <SolutionBenefit />
        <WhyNotAsk />
        <Introduction />
        <Video />
        <WhatIs />
        <WhatYouGet />
        <Benefits />
        <Testimonials />
        <Promotor />
        <Pricing />
        <CTA />
        <FAQ />
      </div>

      <Footer />
    </div>
  );
};

export default Stifin;
