import { Briefcase, GraduationCap, Heart, TrendingUp, Users } from "lucide-react";

export default function TargetAudience() {
	return (
    <section className="py-16 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Siapa yang Cocok?</h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Tes STIFIn cocok untuk semua kalangan yang ingin berkembang optimal
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5">
          {[
            {
              icon: <GraduationCap size={24} />,
              title: "Anak (2+)",
              desc: "Bimbingan sejak dini untuk potensi maksimal",
              color: "from-blue-500 to-blue-600",
            },
            {
              icon: <Users size={24} />,
              title: "Remaja & Mahasiswa",
              desc: "Temukan jurusan dan karier yang tepat",
              color: "from-purple-500 to-purple-600",
            },
            {
              icon: <Briefcase size={24} />,
              title: "Profesional",
              desc: "Pindah jalur karier dengan percaya diri",
              color: "from-emerald-500 to-emerald-600",
            },
            {
              icon: <TrendingUp size={24} />,
              title: "Pebisnis",
              desc: "Kelola tim sesuai potensi optimal",
              color: "from-orange-500 to-orange-600",
            },
            {
              icon: <Heart size={24} />,
              title: "Pasangan & Keluarga",
              desc: "Pahami satu sama lain lebih dalam",
              color: "from-pink-500 to-pink-600",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition group hover:-translate-y-1 border border-gray-100"
            >
              <div
                className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center mb-3 text-white group-hover:scale-110 transition mx-auto`}
              >
                {item.icon}
              </div>
              <h3 className="font-bold text-base mb-1 text-gray-900 text-center">{item.title}</h3>
              <p className="text-gray-600 text-xs leading-relaxed text-center">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
