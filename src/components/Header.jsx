import { ArrowLeft, Menu, X, Mail } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

const Header = ({ showBackButton }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(location.pathname);

  // Close menu when route changes
  if (location.pathname !== prevPathname) {
    setPrevPathname(location.pathname);
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest("header")) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Handle scroll to section when navigating from another page
  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace("#", "");
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  }, [location]);

  const menuItems = [
    { name: "Beranda", path: "/" },
    { name: "Tentang Saya", path: "#about" },
    { name: "Bisnis Saya", path: "#bisnis" },
    { name: "Blog", path: "#blog" },
    { name: "Sertifikat", path: "#sertifikat" },
  ];

  const scrollToElement = (elementId) => {
    setTimeout(() => {
      const element = document.getElementById(elementId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  const handleNavigate = (path) => {
    setIsMenuOpen(false);

    // Jika path bukan hash (anchor)
    if (!path.startsWith("#")) {
      navigate(path);
      if (path === "/") {
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 100);
      }
      return;
    }

    const elementId = path.replace("#", "");

    // Jika sudah di homepage, langsung scroll
    if (location.pathname === "/") {
      scrollToElement(elementId);
    } else {
      // Jika belum di homepage, navigate dulu lalu scroll
      navigate("/");
      scrollToElement(elementId);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Back Button */}
          {showBackButton ? (
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Kembali</span>
            </button>
          ) : (
            <button
              onClick={() => handleNavigate("/")}
              className="hover:opacity-80 transition-opacity"
            >
              <img
                src={logo}
                alt="Logo"
                className="h-10 w-auto"
              />
            </button>
          )}

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigate(item.path)}
                className={`transition-colors font-medium bg-transparent border-none cursor-pointer ${
                  (item.path === "/" && location.pathname === "/") ||
                  (item.path.startsWith("#") && location.hash === item.path)
                    ? "text-green-600"
                    : "text-gray-700 hover:text-green-600"
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* CTA Desktop */}
          <button
            onClick={() => handleNavigate("/contact")}
            className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all cursor-pointer"
          >
            <Mail size={18} />
            Hubungi Saya
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden p-2 text-gray-700 hover:text-green-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg animate-fadeIn">
          <nav className="px-4 py-4 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigate(item.path)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all font-medium cursor-pointer ${
                  (item.path === "/" && location.pathname === "/") ||
                  (item.path.startsWith("#") && location.hash === item.path)
                    ? "bg-green-100 text-green-700"
                    : "text-gray-700 hover:bg-green-50 hover:text-green-600"
                }`}
              >
                {item.name}
              </button>
            ))}

            <button
              onClick={() => handleNavigate("/contact")}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all shadow-md mt-4 cursor-pointer"
            >
              <Mail size={18} />
              Hubungi Saya
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
