import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  const socialLink = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/mompreneurwarda",
      color: "hover:bg-pink-600",
      label: "Instagram",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/share/18C3FaFb4t/",
      color: "hover:bg-blue-600",
      label: "Facebook",
    },
    { icon: Youtube, href: "#", color: "hover:bg-red-600", label: "Youtube" },
    { icon: Linkedin, href: "#", color: "hover:bg-blue-700", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 px-6 border-t border-gray-800">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Social Media Section */}
          <div className="flex flex-col items-center gap-4">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Ikuti Saya</span>
            <div className="flex items-center gap-3">
              {socialLink.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 transition-colors duration-200 hover:text-white hover:bg-gray-700"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-10 pt-6">
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Musdalifa Warda - STIFin
          </p>
        </div>
      </div>
    </footer>
  );
}
