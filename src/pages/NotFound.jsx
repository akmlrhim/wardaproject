import { ArrowLeft, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center animate-in fade-in duration-500">
      <h1 className="text-8xl font-black text-green-900 mb-2 tracking-tighter">404</h1>
      <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">Halaman Tidak Ditemukan</h2>
      <p className="text-slate-600 max-w-md mb-10 leading-relaxed">
        Maaf, sepertinya halaman yang Anda cari telah dipindahkan, dihapus, atau tidak pernah ada.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => navigate(-1)}
          className="cursor-pointer flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-green-600 text-green-700 font-bold hover:bg-green-50 transition-all"
        >
          <ArrowLeft size={18} />
          Kembali
        </button>

        <button
          onClick={() => navigate("/")}
          className="cursor-pointer flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-green-600 text-white font-bold shadow-lg shadow-green-200 hover:bg-green-700 hover:-translate-y-1 transition-all"
        >
          <Home size={18} />
          Ke Beranda
        </button>
      </div>
    </div>
  );
}
