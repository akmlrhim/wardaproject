import { ArrowRight, ChefHat, Shirt, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const iconMap = {
  "chef-hat": ChefHat,
  shirt: Shirt,
  sparkles: Sparkles,
};

const BusinessCard = ({ business }) => {
  const navigate = useNavigate();
  const IconComponent = iconMap[business.icon];

  return (
    <div
      onClick={() => navigate(`/bisnis/${business.id}`)}
      className="group cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={business.image}
          alt={business.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        <div className="absolute inset-0 bg-green-600 opacity-40 group-hover:opacity-50 transition-opacity" />

        <div className="absolute bottom-6 left-6 text-white">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
              {IconComponent && <IconComponent className="w-6 h-6" />}
            </div>
            <h3 className="text-2xl font-bold">{business.name}</h3>
          </div>
          <p className="text-sm font-medium opacity-90">{business.tagline}</p>
        </div>
      </div>

      <div className="p-6">
        <p className="text-gray-600 line-clamp-2 mb-4">{business.description}</p>

        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">{business.achievements.length} Pencapaian</span>

          <div className="flex items-center gap-2 text-green-600 font-semibold group-hover:gap-3 transition-all">
            Selengkapnya
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
