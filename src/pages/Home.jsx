import React from "react";
import { Award, Heart, Users } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import heroPic from "../assets/ibu_warda.jpeg";
import BusinessCard from "../components/BusinessCard";
import stifinPic from "../assets/stifin.png";

const Home = () => {
  return (
    <div>
      <Header />

      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-justify">
              {" "}
              <div className="inline-block">
                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold">
                  Entrepreneur
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-green-800 leading-tight">
                Musdalifa Warda
              </h1>
              <p className="text-sm sm:text-base md:text-md font-medium text-green-600 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem repellat, quis earum dignissimos
                consequuntur incidunt dolorum hic a ducimus laudantium. Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Maiores fugit, distinctio ipsa placeat earum, consequatur inventore aliquid vero iusto
                reiciendis iste! Asperiores at ipsa deserunt aut laudantium suscipit ipsam eveniet ea quae sint
                doloribus, officiis aperiam repellat temporibus quidem eos.
              </p>
            </div>

            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={heroPic}
                  alt="Sari Wijaya"
                  className="w-full h-[400px] sm:h-[500px] md:h-[600px] object-cover"
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-800 mb-4">Bisnis Saya</h2>
            <p className="text-sm sm:text-base md:text-md font-medium text-green max-w-2xl mx-auto leading-relaxed text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim sunt porro, fugit aperiam exercitationem
              repellat perspiciatis aliquid aliquam dolor nulla.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BusinessCard
              image={stifinPic}
              name="STIFIn"
              description="Tes STIFIn membantu mengenali potensi genetik anak melalui sidik jari (fingerprint). Pola sidik jari terbentuk sejak lahir dan berkaitan erat dengan fungsi otak. Artinya, dari sidik jari inilah dapat dipetakan gaya kecerdasan alami anak, bukan sekadar kemampuan akademik."
              link="/bisnis/stifin"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-900 mb-6">Filosofi Bisnis Saya</h2>
          <p className="text-sm sm:text-base md:text-md font-medium text-green-600 mb-8 leading-relaxed text-justify">
            "Kesuksesan bukan hanya tentang profit, tetapi tentang bagaimana kita memberikan dampak positif bagi orang
            lain. Setiap bisnis yang saya jalankan dimulai dari keinginan untuk melayani dan memberikan nilai terbaik.
            Dengan integritas, kualitas, dan kepedulian, saya yakin setiap bisnis dapat tumbuh berkelanjutan."
          </p>
          <div className="inline-block">
            <div className="text-xl sm:text-2xl md:text-2xl font-bold text-green-800">Musdalifa Warda</div>
            <div className="text-sm sm:text-base md:text-base text-green-600 font-semibold">Entrepreneur</div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
