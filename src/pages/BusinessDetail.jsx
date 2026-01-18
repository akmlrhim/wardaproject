import { Award, Check, ChefHat, Mail, MapPin, Phone, Shirt, Sparkles } from "lucide-react";
import { useParams } from "react-router-dom";
import { businesses } from "../data/business";
import Footer from "../components/Footer";
import Header from "../components/Header";

const iconMap = {
  "chef-hat": ChefHat,
  shirt: Shirt,
  sparkles: Sparkles,
};

const BusinessDetail = () => {
  const { id } = useParams();
  const business = businesses.find((b) => b.id === id);

  if (!business) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Bisnis tidak ditemukan</h1>
          <a
            href="/"
            className="text-orange-600 hover:text-orange-700 font-semibold"
          >
            Kembali ke halaman utama
          </a>
        </div>
      </div>
    );
  }

  const IconComponent = iconMap[business.icon];

  return (
    <div className="min-h-screen">
      <Header showBackButton />

      <div className="relative h-[500px] overflow-hidden">
        <img
          src={business.image}
          alt={business.name}
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${business.color} opacity-70`} />
        <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4">
          <div className="max-w-4xl">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl">
                {IconComponent && <IconComponent className="w-16 h-16" />}
              </div>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-4">{business.name}</h1>
            <p className="text-2xl font-medium opacity-95">{business.tagline}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Tentang Kami</h2>
              <p className="text-lg text-gray-700 leading-relaxed">{business.description}</p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Layanan Kami</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {business.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className={`bg-gradient-to-br ${business.color} p-2 rounded-lg flex-shrink-0`}>
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Hubungi Kami</h3>

                <div className="space-y-4">
                  {business.contact.phone && (
                    <div className="flex items-start gap-4">
                      <div className={`bg-gradient-to-br ${business.color} p-3 rounded-xl`}>
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Telepon</div>
                        <a
                          href={`tel:${business.contact.phone}`}
                          className="text-gray-900 font-semibold hover:text-orange-600 transition-colors"
                        >
                          {business.contact.phone}
                        </a>
                      </div>
                    </div>
                  )}

                  {business.contact.email && (
                    <div className="flex items-start gap-4">
                      <div className={`bg-gradient-to-br ${business.color} p-3 rounded-xl`}>
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Email</div>
                        <a
                          href={`mailto:${business.contact.email}`}
                          className="text-gray-900 font-semibold hover:text-orange-600 transition-colors break-all"
                        >
                          {business.contact.email}
                        </a>
                      </div>
                    </div>
                  )}

                  {business.contact.location && (
                    <div className="flex items-start gap-4">
                      <div className={`bg-gradient-to-br ${business.color} p-3 rounded-xl`}>
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Lokasi</div>
                        <p className="text-gray-900 font-semibold">{business.contact.location}</p>
                      </div>
                    </div>
                  )}
                </div>

                <button
                  className={`w-full mt-8 bg-gradient-to-r ${business.color} text-white font-semibold py-4 rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200`}
                >
                  Hubungi Sekarang
                </button>
              </div>

              <div className={`bg-gradient-to-br ${business.color} rounded-2xl p-8 text-white`}>
                <h4 className="text-xl font-bold mb-3">Siap Untuk Memulai?</h4>
                <p className="text-white/90 text-sm leading-relaxed">
                  Kami siap melayani kebutuhan Anda dengan profesional dan dedikasi penuh. Hubungi kami untuk konsultasi
                  gratis!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BusinessDetail;
