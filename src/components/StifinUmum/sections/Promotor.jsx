import { useState } from "react";
import promotorImg from "../../assets/ibu_warda.jpeg";
import testimonial1 from "../../assets/testimoni/1.mp4";
import testimonial2 from "../../assets/testimoni/2.jpeg";
import testimonial3 from "../../assets/testimoni/3.jpeg";
import testimonial4 from "../../assets/testimoni/4.jpeg";
import testimonial5 from "../../assets/testimoni/5.jpeg";
import testimonial6 from "../../assets/testimoni/6.jpeg";
import sertifikatImg from "../../assets/sertifikat.jpg";
import { ChevronLeft, ChevronRight, CheckCircle, Award, X, ZoomIn } from "lucide-react";

export default function Promotor() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedMedia, setSelectedMedia] = useState(null);

  const activityMedia = [
    { id: 1, src: testimonial1, type: "video" },
    { id: 2, src: testimonial2, type: "image" },
    { id: 3, src: testimonial3, type: "image" },
    { id: 4, src: testimonial4, type: "image" },
    { id: 5, src: testimonial5, type: "image" },
    { id: 6, src: testimonial6, type: "image" },
  ];

  const nextSlide = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev === activityMedia.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev === 0 ? activityMedia.length - 1 : prev - 1));
  };

  const currentMedia = activityMedia[activeIndex];
  const isVideo = currentMedia.src.endsWith(".mp4") || currentMedia.type === "video";

  const handleOpenCertificate = () => {
    setSelectedMedia({
      type: "image",
      src: sertifikatImg,
      caption: "Sertifikat Resmi Promotor",
    });
  };

  const handleOpenGallery = () => {
    setSelectedMedia(currentMedia);
  };

  return (
    <>
      <section className="py-16 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 rounded-3xl shadow-2xl overflow-hidden border border-emerald-700/50">
            <div className="grid lg:grid-cols-2 min-h-[500px]">
              <div className="p-8 md:p-12 flex flex-col justify-center relative">
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Promotor Berpengalaman</h2>
                  <p className="text-emerald-100/80 text-sm mb-10 max-w-md leading-relaxed">
                    Dibimbing langsung oleh praktisi bersertifikat resmi untuk hasil analisis yang akurat dan solusi
                    yang tepat sasaran.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
                    <div className="relative shrink-0">
                      <div className="w-32 h-32 rounded-2xl overflow-hidden border-2 border-white/20 shadow-lg">
                        <img
                          src={promotorImg}
                          alt="Musdalifa Warda"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-yellow-500 text-black px-3 py-0.5 rounded-full font-bold text-[10px] shadow-lg flex items-center gap-1 whitespace-nowrap border border-yellow-300">
                        <CheckCircle size={10} />
                        VERIFIED
                      </div>
                    </div>

                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white">Musdalifa Warda</h3>
                        <p className="text-emerald-400 text-sm font-medium tracking-wide">STIFIn Licensed Promotor</p>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2 justify-center sm:justify-start text-emerald-100/90 text-sm">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                          3+ Tahun Pengalaman
                        </div>
                        <div className="flex items-center gap-2 justify-center sm:justify-start text-emerald-100/90 text-sm">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                          200++ Peserta Ditangani
                        </div>
                      </div>

                      <button
                        onClick={handleOpenCertificate}
                        className="mt-2 px-5 py-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-lg text-sm font-semibold transition-all hover:scale-105 flex items-center justify-center sm:justify-start gap-2 w-full sm:w-auto"
                      >
                        <Award
                          size={16}
                          className="text-yellow-400"
                        />
                        Lihat Sertifikat
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="relative h-[500px] lg:h-auto bg-black overflow-hidden group cursor-zoom-in"
                onClick={handleOpenGallery}
              >
                <div className="absolute inset-0 z-0">
                  {isVideo ? (
                    <video
                      src={currentMedia.src}
                      className="w-full h-full object-cover blur-xl opacity-50"
                      muted
                    />
                  ) : (
                    <img
                      src={currentMedia.src}
                      alt=""
                      className="w-full h-full object-cover blur-xl opacity-50"
                    />
                  )}
                </div>

                <div className="relative z-10 w-full h-full flex items-center justify-center p-6">
                  {isVideo ? (
                    <video
                      key={currentMedia.src}
                      src={currentMedia.src}
                      className="w-full h-full max-h-[400px] object-contain shadow-2xl rounded-lg"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  ) : (
                    <img
                      src={currentMedia.src}
                      className="w-full h-full max-h-[400px] object-contain shadow-2xl rounded-lg transition-transform duration-500 group-hover:scale-105"
                    />
                  )}

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="bg-black/40 backdrop-blur-sm p-3 rounded-full text-white">
                      <ZoomIn size={24} />
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-20 pointer-events-none"></div>

                <div className="absolute bottom-0 left-0 w-full p-6 z-30 pointer-events-none">
                  <div className="flex items-center justify-between pointer-events-auto">
                    <div className="flex gap-1.5">
                      {activityMedia.map((_, idx) => (
                        <div
                          key={idx}
                          className={`h-1 rounded-full transition-all duration-300 ${idx === activeIndex ? "w-8 bg-emerald-400" : "w-2 bg-white/30"}`}
                        />
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={prevSlide}
                        className="p-2 rounded-full bg-white/10 hover:bg-emerald-500 text-white backdrop-blur-md transition-all border border-white/10 hover:scale-110"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={nextSlide}
                        className="p-2 rounded-full bg-white/10 hover:bg-emerald-500 text-white backdrop-blur-md transition-all border border-white/10 hover:scale-110"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedMedia && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-5xl h-full max-h-[90vh] flex flex-col justify-center animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute top-0 right-0 z-50 p-2 m-4 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-colors"
            >
              <X size={24} />
            </button>

            <div className="flex-1 flex items-center justify-center overflow-hidden rounded-lg">
              {selectedMedia.type === "video" || selectedMedia.src.endsWith(".mp4") ? (
                <video
                  src={selectedMedia.src}
                  className="max-w-full max-h-full object-contain shadow-2xl"
                  controls
                  autoPlay
                />
              ) : (
                <img
                  src={selectedMedia.src}
                  className="max-w-full max-h-full object-contain shadow-2xl"
                />
              )}
            </div>
          </div>
          <div
            className="absolute inset-0 -z-10 cursor-pointer"
            onClick={() => setSelectedMedia(null)}
          />
        </div>
      )}
    </>
  );
}
