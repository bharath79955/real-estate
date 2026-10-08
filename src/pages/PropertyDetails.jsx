import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Bath,
  BedDouble,
  CalendarDays,
  Check,
  Heart,
  Home,
  MapPin,
  Maximize,
  Phone,
  Share2,
} from "lucide-react";
import toast from "react-hot-toast";

import Navbar from "../components/Navbar";
import properties from "../data/properties";

function PropertyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const property = properties.find(
    (item) => item.id === Number(id)
  );

  const [liked, setLiked] = useState(false);
  const [activeImage, setActiveImage] = useState(
    property?.image || ""
  );

  if (!property) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
        <Navbar />

        <div className="flex min-h-[70vh] items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Property Not Found
            </h1>

            <p className="mt-3 text-slate-500">
              The property you're looking for doesn't exist.
            </p>

            <Link
              to="/properties"
              className="mt-6 inline-flex rounded-xl bg-slate-900 px-6 py-3 text-sm font-bold text-white dark:bg-white dark:text-slate-900"
            >
              Browse Properties
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const gallery = [
    property.image,
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
  ];

  const amenities = [
    "24/7 Security",
    "Covered Parking",
    "Swimming Pool",
    "Fitness Center",
    "Power Backup",
    "Garden Area",
  ];

  const handleWishlist = () => {
    setLiked((prev) => !prev);

    if (!liked) {
      toast.success("Property added to wishlist");
    } else {
      toast("Property removed from wishlist");
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: property.title,
      text: `Check out ${property.title} on ShineStone.`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast.success("Property link copied");
      }
    } catch {
      // User closed the share dialog.
    }
  };

  const handleSchedule = () => {
    toast.success("Visit request received!");
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
        >
          <ArrowLeft size={18} />
          Back to Properties
        </button>

        {/* Gallery */}
        <section className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_220px]">

          {/* Main Image */}
          <div className="relative overflow-hidden rounded-3xl bg-slate-200">
            <img
              src={activeImage}
              alt={property.title}
              className="h-[320px] w-full object-cover sm:h-[450px] lg:h-[600px]"
            />

            <div className="absolute left-4 top-4 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-slate-800 shadow">
              {property.purpose}
            </div>

            <div className="absolute right-4 top-4 flex gap-2">
              <button
                onClick={handleShare}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/95 shadow hover:scale-105"
                aria-label="Share property"
              >
                <Share2 size={18} />
              </button>

              <button
                onClick={handleWishlist}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/95 shadow hover:scale-105"
                aria-label="Wishlist property"
              >
                <Heart
                  size={18}
                  className={
                    liked
                      ? "fill-red-500 text-red-500"
                      : "text-slate-700"
                  }
                />
              </button>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-3 lg:grid-cols-1">
            {gallery.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(image)}
                className={`overflow-hidden rounded-2xl border-2 ${
                  activeImage === image
                    ? "border-slate-900 dark:border-white"
                    : "border-transparent"
                }`}
              >
                <img
                  src={image}
                  alt={`${property.title} ${index + 1}`}
                  className="h-20 w-full object-cover sm:h-24 lg:h-[135px]"
                />
              </button>
            ))}
          </div>
        </section>

        {/* Property Info */}
        <section className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_360px]">

          {/* Main Information */}
          <div>
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
              <div>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <MapPin size={17} />
                  {property.location}
                </div>

                <h1 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl dark:text-white">
                  {property.title}
                </h1>

                <p className="mt-3 text-2xl font-bold text-slate-950 dark:text-white">
                  {property.priceLabel}
                </p>
              </div>

              <span className="w-fit rounded-xl bg-slate-100 px-4 py-2 text-sm font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                {property.type}
              </span>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
                <BedDouble size={20} className="text-slate-500" />
                <p className="mt-3 text-lg font-bold dark:text-white">
                  {property.bedrooms}
                </p>
                <p className="text-xs text-slate-500">
                  Bedrooms
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
                <Bath size={20} className="text-slate-500" />
                <p className="mt-3 text-lg font-bold dark:text-white">
                  {property.bathrooms}
                </p>
                <p className="text-xs text-slate-500">
                  Bathrooms
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
                <Maximize size={20} className="text-slate-500" />
                <p className="mt-3 text-lg font-bold dark:text-white">
                  {property.area}
                </p>
                <p className="text-xs text-slate-500">
                  Sq. Ft.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
                <Home size={20} className="text-slate-500" />
                <p className="mt-3 text-lg font-bold dark:text-white">
                  {property.type}
                </p>
                <p className="text-xs text-slate-500">
                  Property
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
                About this property
              </h2>

              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                {property.description}
              </p>

              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                This ShineStone property offers a thoughtfully designed
                living experience with excellent connectivity, modern
                amenities and comfortable spaces for everyday living.
              </p>
            </div>

            {/* Amenities */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
                Amenities
              </h2>

              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {amenities.map((amenity) => (
                  <div
                    key={amenity}
                    className="flex items-center gap-3 rounded-xl bg-white p-4 dark:bg-slate-900"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
                      <Check size={16} />
                    </span>

                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                      {amenity}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Agent / Actions */}
          <aside>
            <div className="sticky top-28 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">

              <p className="text-sm font-semibold text-slate-500">
                Interested in this property?
              </p>

              <h3 className="mt-2 text-xl font-bold text-slate-950 dark:text-white">
                Talk to a ShineStone agent
              </h3>

              <div className="mt-6 flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=85"
                  alt="ShineStone agent"
                  className="h-14 w-14 rounded-full object-cover"
                />

                <div>
                  <p className="font-bold text-slate-900 dark:text-white">
                    Sarah Johnson
                  </p>

                  <p className="text-sm text-slate-500">
                    Senior Property Agent
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <button
                  onClick={() =>
                    toast.success("Calling Sarah Johnson...")
                  }
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3.5 text-sm font-bold text-slate-800 hover:bg-slate-100 dark:border-slate-700 dark:text-white dark:hover:bg-slate-800"
                >
                  <Phone size={18} />
                  Contact Agent
                </button>

                <button
                  onClick={handleSchedule}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3.5 text-sm font-bold text-white hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                >
                  <CalendarDays size={18} />
                  Schedule a Visit
                </button>
              </div>

              <Link
                to={`/agent/1`}
                className="mt-5 flex items-center justify-center gap-2 text-sm font-bold text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
              >
                View Agent Profile
                <ArrowRight size={16} />
              </Link>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}

export default PropertyDetails;