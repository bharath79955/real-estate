import { Link } from "react-router-dom";
import {
  Heart,
  MapPin,
  BedDouble,
  Bath,
  Maximize,
  ArrowUpRight,
} from "lucide-react";
import toast from "react-hot-toast";

import { useApp } from "../context/AppContext";

function PropertyCard({ property }) {
  const {
    isWishlisted,
    toggleWishlist,
  } = useApp();

  if (!property) {
    return null;
  }

  const saved = isWishlisted(property.id);

  const handleWishlist = () => {
    toggleWishlist(property.id);

    if (saved) {
      toast.success("Removed from wishlist.");
    } else {
      toast.success("Added to wishlist.");
    }
  };

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">

      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70" />

        {/* Purpose Badge */}
        <div className="absolute left-4 top-4">
          <span
            className={`rounded-full px-3 py-1.5 text-xs font-semibold shadow-sm ${
              property.purpose === "For Rent"
                ? "bg-amber-500 text-white"
                : "bg-blue-600 text-white"
            }`}
          >
            {property.purpose}
          </span>
        </div>

        {/* Wishlist */}
        <button
          type="button"
          onClick={handleWishlist}
          aria-label={
            saved ? "Remove from wishlist" : "Add to wishlist"
          }
          className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full backdrop-blur-md transition-all duration-300 ${
            saved
              ? "bg-red-500 text-white"
              : "bg-white/90 text-slate-700 hover:bg-white hover:text-red-500"
          }`}
        >
          <Heart
            size={19}
            fill={saved ? "currentColor" : "none"}
          />
        </button>

        {/* Property Type */}
        <div className="absolute bottom-4 left-4">
          <span className="rounded-lg bg-black/50 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
            {property.type}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">

        {/* Title */}
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="line-clamp-1 text-lg font-bold text-slate-900 dark:text-white">
              {property.title}
            </h3>

            <div className="mt-2 flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
              <MapPin size={15} className="shrink-0 text-blue-600" />

              <span className="line-clamp-1">
                {property.location}
              </span>
            </div>
          </div>
        </div>

        {/* Price */}
        <div className="mt-4">
          <p className="text-xl font-bold text-blue-600">
            {property.priceLabel || property.price}
          </p>
        </div>

        {/* Stats */}
        <div className="mt-5 grid grid-cols-3 divide-x divide-slate-200 rounded-xl bg-slate-50 py-3 dark:divide-slate-700 dark:bg-slate-800/60">

          <div className="flex flex-col items-center gap-1">
            <BedDouble
              size={17}
              className="text-slate-500 dark:text-slate-400"
            />

            <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
              {property.bedrooms} Beds
            </span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <Bath
              size={17}
              className="text-slate-500 dark:text-slate-400"
            />

            <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
              {property.bathrooms} Baths
            </span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <Maximize
              size={17}
              className="text-slate-500 dark:text-slate-400"
            />

            <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
              {property.area}
            </span>
          </div>
        </div>

        {/* View Button */}
        <Link
          to={`/property/${property.id}`}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600 dark:bg-white dark:text-slate-900 dark:hover:bg-blue-600 dark:hover:text-white"
        >
          View Property
          <ArrowUpRight size={17} />
        </Link>
      </div>
    </article>
  );
}

export default PropertyCard;