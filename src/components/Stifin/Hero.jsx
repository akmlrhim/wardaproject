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
          <h1 className="text-2xl md:text-3xl font-bold">15 Menit yang Bikin Hidup Lebih Jelas</h1>
          <p className="text-sm md:text-base opacity-90">Kenali Potensimu Sekarang Juga!</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-green-100 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-md md:text-xl font-bold mb-3 text-green-800">
            Bukan salah kamu kalau kamu ngerasa gak kenal sama diri sendiri. Kamu hanya perlu tahu tipe kecerdasanmu.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
