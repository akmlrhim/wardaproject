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
import useDocumentTitle from "../../hooks/useDocumentTitle";
import { useEffect } from "react";
import ReactPixel from "react-facebook-pixel";

export default function StifinUmum() {
  useDocumentTitle("STIFIn Umum");

  useEffect(() => {
    const pixelId = (import.meta.env.VITE_FB_PIXEL_ID = "4227457170864918");

    if (!window.fbq) {
      !(function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = "2.0";
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");

      window.fbq("init", pixelId);
    }

    window.fbq("track", "PageView");
  }, []);

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
