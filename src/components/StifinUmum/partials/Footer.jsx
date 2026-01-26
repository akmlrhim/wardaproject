import React from "react";
import { Award, Instagram, Facebook, Youtube, Linkedin, Twitter, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-4 pb-4 px-6 border-t border-gray-800 w-full">
      <div className="w-full flex flex-col items-center justify-center text-center space-y-3">
        <div className="flex flex-col items-center gap-4">
          <p className="text-gray-400 leading-relaxed text-base max-w-2xl mx-auto mt-2">
            Kenali potensimu, temukan jati dirimu, raih masa depan yang lebih cerah bersama tes genetik terbaik.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <h5 className="text-sm font-semibold text-gray-300 uppercase tracking-wide">Ikuti Kami</h5>
          <div className="flex items-center justify-center gap-4">
            {[
              {
                icon: Instagram,
                href: "https://www.instagram.com/stifinwithwarda",
                color: "hover:bg-pink-600",
                label: "Instagram",
              },
              { icon: Facebook, href: "#", color: "hover:bg-blue-600", label: "Facebook" },
              { icon: Youtube, href: "#", color: "hover:bg-red-600", label: "Youtube" },
              { icon: Linkedin, href: "#", color: "hover:bg-blue-700", label: "LinkedIn" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className={`w-12 h-12 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 transition-all duration-300 hover:text-white hover:-translate-y-1 hover:border-transparent hover:shadow-lg ${social.color}`}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800/50 w-full max-w-2xl mx-auto mt-2">
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} STIFIn. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
