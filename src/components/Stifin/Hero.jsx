import { MessageCircle } from "lucide-react";
import overlayImage from "../../assets/stifin/1.jpeg";

const Hero = () => {
  return (
    <div>
      <div className="relative bg-gradient-to-r from-green-600 to-green-700 text-white py-42 px-4 overflow-hidden">
        <img
          src={overlayImage}
          alt="Overlay"
          className="absolute inset-0 w-[120%] h-full object-cover opacity-20 left-1/2 -translate-x-1/2"
        />

        <div className="relative max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-2xl md:text-3xl font-bold">Kenali Potensi Anak dengan STIFIN</h1>
          <p className="text-sm md:text-base opacity-90">STIFIN membantu memahami karakter dan bakat unik anak Anda.</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-green-100 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-md md:text-xl font-bold mb-3 text-green-800">
            Jangan Biarkan Anak Anda Salah Arah Hingga Dewasa
          </h1>
          <p className="text-sm md:text-base text-green-800 mb-6 opacity-90 font-medium">
            Satu keputusan kecil hari ini bisa menentukan arah hidup anak Anda puluhan tahun ke depan.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition"
          >
            <MessageCircle size={20} />
            Hubungi WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
