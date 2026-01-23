import { Award, CheckCircle, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-lg flex items-center justify-center">
                <Award size={24} />
              </div>
              <span className="text-2xl font-bold">STIFIn</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Kenali potensimu, temukan jati dirimu, raih masa depan yang lebih cerah
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Kontak</h4>
            <div className="space-y-2 text-gray-400">
              <p>Musdalifa Warda</p>
              <p>STIFIn</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Informasi</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle
                  size={16}
                  className="text-emerald-500"
                />
                <p>Konsultan Bersertifikat</p>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle
                  size={16}
                  className="text-emerald-500"
                />
                <p>200+ Peserta Terlayani</p>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle
                  size={16}
                  className="text-emerald-500"
                />
                <p>Pengalaman lebih dari 3 Tahun</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
