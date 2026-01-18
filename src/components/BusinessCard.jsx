import { Link } from "react-router-dom";

const BusinessCard = ({ image, name, description, link }) => {
  return (
    <Link
      to={link}
      className="block max-w-sm rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-white"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold text-green-800">{name}</h3>

        <p className="mt-2 text-sm text-gray-800 font-medium line-clamp-3">{description}</p>
      </div>
    </Link>
  );
};

export default BusinessCard;
