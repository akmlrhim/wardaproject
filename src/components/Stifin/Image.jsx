import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { images } from "../../data/stifin_image";

const Image = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isAutoPlay = true;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Autoplay tanpa currentIndex sebagai dependency
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  return (
    <div className="flex flex-col items-center px-4 py-8 sm:py-12">
      <div className="w-full max-w-5xl">
        <div className="relative group">
          <div className="relative h-60 sm:h-72 md:h-96 overflow-hidden">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-contain mx-auto"
                />
              </div>
            ))}
          </div>

          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="cursor-pointer absolute left-3 top-1/2 -translate-y-1/2 bg-green-800 hover:bg-green-600 text-white p-2.5 sm:p-3 rounded-full backdrop-blur-sm transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-20"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 bg-green-800 hover:bg-green-600 text-white p-2.5 sm:p-3 rounded-full backdrop-blur-sm transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-20"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`cursor-pointer transition-all duration-300 rounded-full ${
                  index === currentIndex ? "bg-green-900 w-6 h-2" : "bg-green-500 w-2 h-2 hover:bg-green-700"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Image;
