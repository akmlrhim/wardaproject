import { MessageCircle } from "lucide-react";

export default function Benefits() {
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className="py-16 px-6"
      id="manfaat"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">Manfaat Nyata untuk Hidupmu</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              icon: (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              ),
              title: "Pelajar",
              desc: "Pilih jurusan & cara belajar yang pas",
            },
            {
              icon: (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              ),
              title: "Profesional",
              desc: "Arah karier yang jelas",
            },
            {
              icon: (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              ),
              title: "Pebisnis",
              desc: "Susun tim sesuai potensi",
            },
            {
              icon: (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              ),
              title: "Orangtua",
              desc: "Cara mendidik yang lebih efektif",
            },
            {
              icon: (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              ),
              title: "Pasangan",
              desc: "Komunikasi jadi lebih paham-memahami",
            },
          ].map((benefit, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition border border-gray-100 group hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center text-white mb-3">
                {benefit.icon}
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">{benefit.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={(e) => handleScrollTo(e, "#kontak")}
            className="wa-btn bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-8 py-3 rounded-xl font-bold text-sm sm:text-lg hover:from-emerald-700 hover:to-emerald-800 transition shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center gap-2"
          >
            <MessageCircle size={24} />
            Konsultasi Gratis di Whatshapp
          </button>
        </div>
      </div>
    </section>
  );
}
