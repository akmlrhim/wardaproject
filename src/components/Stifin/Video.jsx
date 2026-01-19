import { MessageCircle } from "lucide-react";
import React, { Fragment } from "react";

const Video = () => {
  return (
    <div>
      <div className="bg-green-50 rounded-lg p-6 mb-6 text-center">
        <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">
          Tonton Video Ini Agar Lebih Paham Konsep STIFIn
        </h3>

        <div className="flex justify-center">
          <div className="w-full max-w-3xl aspect-video">
            <iframe
              src="https://www.youtube.com/embed/5nsR8SkYdv0?si=asKAgK6baBlS3KnZ"
              title="YouTube video player"
              className="w-full h-full rounded-lg"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      <div className="text-center mb-6">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
        >
          <MessageCircle size={20} />
          Hubungi WhatsApp
        </a>
      </div>
    </div>
  );
};

export default Video;
