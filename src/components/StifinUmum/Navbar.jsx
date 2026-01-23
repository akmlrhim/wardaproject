import { Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsApp = () => {
    window.open("https://wa.me/", "_blank");
  };

  const navLinks = [
    { name: "Tentang", href: "#tentang" },
    { name: "Manfaat", href: "#manfaat" },
    { name: "Testimoni", href: "#testimoni" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-white/50 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group">
            <img
              src={logo}
              alt="Logo STIFIn"
              className="h-10 w-auto group-hover:scale-105 transition-transform"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-800 bg-clip-text text-transparent">
              STIFIn
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-green hover:text-emerald-700 font-medium transition-colors text-sm font-medium capitalize tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={handleWhatsApp}
              className="hidden sm:inline-flex bg-emerald-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-emerald-700 transition-all shadow-sm hover:shadow-emerald-200 hover:-translate-y-0.5 items-center gap-2"
            >
              <MessageCircle size={18} />
              <span>Konsultasi</span>
            </button>

            <button
              className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden absolute w-full bg-white border-b border-gray-100 transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
      >
        <div className="px-6 py-4 space-y-4 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-gray-600 hover:text-emerald-600 font-medium py-2 border-b border-gray-50 last:border-0"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={handleWhatsApp}
            className="w-full mt-4 bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 inline-flex justify-center items-center gap-2"
          >
            <MessageCircle size={18} />
            Konsultasi Gratis
          </button>
        </div>
      </div>
    </nav>
  );
}
