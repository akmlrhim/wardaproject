import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = ({ showBackButton }) => {
  const navigate = useNavigate();

  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
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
                className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
              >
                <img
                  src={logo}
                  alt="Sari's Enterprise"
                  className="h-10 w-auto object-contain"
                />
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
