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
// import ReactPixel from "react-facebook-pixel";

export default function StifinUmum() {
  useDocumentTitle("STIFIn Umum");

  useEffect(() => {
    const gtmId = "GTM-T3XZXZTZ";

    const existingScript = document.getElementById("gtm-script");

    if (!existingScript) {
      (function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
        var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l != "dataLayer" ? "&l=" + l : "";
        j.async = true;
        j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
        j.id = "gtm-script";
        f.parentNode.insertBefore(j, f);
      })(window, document, "script", "dataLayer", gtmId);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-T3XZXZTZ"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>

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
