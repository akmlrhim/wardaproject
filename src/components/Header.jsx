import { ArrowLeft, Menu, X, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";

const Header = ({ showBackButton }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Beranda", path: "/" },
    { name: "Tentang Saya", path: "#" },
    { name: "Portfolio", path: "#" },
    { name: "Blog", path: "#" },
    { name: "Sertifikat", path: "#" },
  ];

  const handleNavigate = (path) => {
    navigate(path);
    setIsMenuOpen(false); // tutup menu mobile setelah klik
  };

  return (
    <nav className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo / Back Button */}
          <div className="flex items-center gap-4">
            {showBackButton ? (
              <button
                onClick={() => navigate("/")}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Kembali</span>
              </button>
            ) : (
              <button
                onClick={() => navigate("/")}
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src={logo}
                  alt="Personal Brand"
                  className="h-10 w-auto object-contain"
                />
              </button>
            )}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigate(item.path)}
                className="cursor-pointer text-gray-700 hover:text-green-600 transition-colors font-medium"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* CTA Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => handleNavigate("/contact")}
              className="cursor-pointer flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all"
            >
              <Mail className="w-4 h-4" />
              Hubungi Saya
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden p-2 text-gray-700 hover:text-green-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col gap-2 py-4 border-t border-gray-200">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigate(item.path)}
                  className="cursor-pointer px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition-all font-medium text-left"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => handleNavigate("/contact")}
                className="flex items-center justify-center gap-2 mt-2 px-4 py-3 bg-green-800 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                <Mail className="w-5 h-5" />
                Hubungi Saya
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
