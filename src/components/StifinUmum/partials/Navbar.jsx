import { FingerprintIcon, Lamp, Menu, MessageCircle, X } from "lucide-react";
import { useScroll } from "../../../hooks/useScroll";

const navLinks = [
  { name: "Beranda", href: "#beranda" },
  { name: "Tentang", href: "#tentang" },
  { name: "Manfaat", href: "#manfaat" },
  { name: "Testimoni", href: "#testimoni" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const { isScrolled, isOpen, setIsOpen, handleScrollTo } = useScroll();

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
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="w-9 h-9 bg-emerald-600 rounded-lg flex items-center justify-center shadow-blue-200 shadow-lg">
              <FingerprintIcon className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold text-emerald-700 tracking-tight">STIFIn</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-black hover:text-emerald-700 font-medium transition-colors text-sm capitalize tracking-wide cursor-pointer relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-700 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={(e) => handleScrollTo(e, "#kontak")}
              className="wa-btn hidden sm:inline-flex bg-emerald-600 text-white px-6 py-2.5 rounded-full shadow-md font-bold hover:bg-emerald-700 transition-all shadow-sm hover:shadow-emerald-200 hover:-translate-y-0.5 items-center gap-2 cursor-pointer"
            >
              <MessageCircle size={18} />
              <span>Chat Sekarang</span>
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
        className={`md:hidden absolute w-full bg-white border-b border-gray-100 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-6 py-4 space-y-4 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="block text-gray-600 hover:text-emerald-600 font-medium py-2 border-b border-gray-50 last:border-0 cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={(e) => handleScrollTo(e, "#kontak")}
            className="w-full mt-4 bg-emerald-600 text-white px-6 py-3 rounded-sm font-semibold hover:bg-emerald-700 inline-flex justify-center items-center gap-2"
          >
            <MessageCircle size={18} />
            Chat Sekarang
          </button>
        </div>
      </div>
    </nav>
  );
}
