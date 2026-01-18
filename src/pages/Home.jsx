import React from "react";
import { businesses } from "../data/business";
import BusinessCard from "../components/BusinessCard";
import { Award, Heart, Users } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import heroPic from "../assets/ibu_warda.jpeg";

const Home = () => {
  return (
    <div>
      <Header />

      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                  Entrepreneur
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight">Musdalifa Warda</h1>
              <p className="text-md font-medium text-black leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem repellat, quis earum dignissimos
                consequuntur incidunt dolorum hic a ducimus laudantium.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-3 bg-white rounded-xl px-5 py-3 shadow-md">
                  <Award className="w-6 h-6 text-green-600" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">8+</div>
                    <div className="text-sm text-gray-600">Tahun Pengalaman</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white rounded-xl px-5 py-3 shadow-md">
                  <Users className="w-6 h-6 text-green-600" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">15K+</div>
                    <div className="text-sm text-gray-600">Pelanggan Puas</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white rounded-xl px-5 py-3 shadow-md">
                  <Heart className="w-6 h-6 text-green-600" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">3</div>
                    <div className="text-sm text-gray-600">Bisnis Aktif</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={heroPic}
                  alt="Sari Wijaya"
                  className="w-full h-[600px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-gradient-to-br from-green-300 to-rose-300 rounded-full blur-3xl opacity-30 -z-0"></div>
              <div className="absolute -top-6 -left-6 w-72 h-72 bg-gradient-to-br from-amber-300 to-green-300 rounded-full blur-3xl opacity-30 -z-0"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Bisnis Kami</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tiga bisnis yang dibangun dengan cinta, dedikasi, dan komitmen untuk memberikan yang terbaik bagi setiap
              pelanggan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businesses.map((business) => (
              <BusinessCard
                key={business.id}
                business={business}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Filosofi Bisnis Saya</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            "Kesuksesan bukan hanya tentang profit, tetapi tentang bagaimana kita memberikan dampak positif bagi orang
            lain. Setiap bisnis yang saya jalankan dimulai dari keinginan untuk melayani dan memberikan nilai terbaik.
            Dengan integritas, kualitas, dan kepedulian, saya yakin setiap bisnis dapat tumbuh berkelanjutan."
          </p>
          <div className="inline-block">
            <div className="text-2xl font-bold text-gray-900">Musdalifa Warda</div>
            <div className="text-green-600 font-semibold">Enterpreneur</div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
