import { Heart, MapPin, Trash2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import properties  from "../data/properties";
import { useApp } from "../context/AppContext";

function Wishlist() {
  const { wishlist, toggleWishlist } = useApp();

  const savedProperties = properties.filter((property) =>
    wishlist.includes(property.id)
  );

  const handleRemove = (property) => {
    toggleWishlist(property.id);
    toast.success(`${property.title} removed from wishlist.`);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
      <Navbar />

      {/* Hero */}
      <section className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 lg:px-8">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-500 dark:bg-red-500/10">
            <Heart size={28} fill="currentColor" />
          </div>

          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
            Your Saved Properties
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            My Wishlist
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-slate-500 dark:text-slate-400">
            Keep track of the properties you love and come back to
            them whenever you're ready.
          </p>

          <p className="mt-3 text-sm font-semibold text-slate-400 dark:text-slate-500">
            {savedProperties.length}{" "}
            {savedProperties.length === 1
              ? "property"
              : "properties"}{" "}
            saved
          </p>
        </div>
      </section>

      {/* Wishlist */}
      <main className="bg-slate-50 py-14 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {savedProperties.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {savedProperties.map((property) => (
                <article
                  key={property.id}
                  className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="h-full w-full object-cover transition duration-500 hover:scale-105"
                    />

                    {/* Purpose */}
                    <span className="absolute left-4 top-4 rounded-full bg-blue-600 px-3 py-1.5 text-xs font-bold text-white">
                      {property.purpose}
                    </span>

                    {/* Remove */}
                    <button
                      type="button"
                      onClick={() => handleRemove(property)}
                      className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-red-500 shadow-lg backdrop-blur-sm transition hover:scale-105 hover:bg-red-50 dark:bg-slate-900/95 dark:hover:bg-red-950"
                      aria-label="Remove from wishlist"
                    >
                      <Heart size={19} fill="currentColor" />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                      {property.title}
                    </h2>

                    <div className="mt-2 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                      <MapPin
                        size={16}
                        className="shrink-0 text-blue-600"
                      />
                      <span>{property.location}</span>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <div>
                        <p className="text-xl font-bold text-blue-600">
                          {property.price}
                        </p>

                        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                          {property.type}
                        </p>
                      </div>

                      <Link
                        to={`/property/${property.id}`}
                        className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                      >
                        View
                        <ArrowRight size={16} />
                      </Link>
                    </div>

                    {/* Remove Button */}
                    <button
                      type="button"
                      onClick={() => handleRemove(property)}
                      className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-red-900 dark:hover:bg-red-950/30 dark:hover:text-red-400"
                    >
                      <Trash2 size={16} />
                      Remove from Wishlist
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            /* Empty Wishlist */
            <div className="mx-auto max-w-2xl rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center dark:border-slate-700 dark:bg-slate-900">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-red-500 dark:bg-red-500/10">
                <Heart size={30} />
              </div>

              <h2 className="mt-6 text-2xl font-bold text-slate-900 dark:text-white">
                Your Wishlist is Empty
              </h2>

              <p className="mx-auto mt-3 max-w-md text-slate-500 dark:text-slate-400">
                You haven't saved any properties yet. Explore our
                properties and click the heart icon to save your
                favorites.
              </p>

              <Link
                to="/properties"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Explore Properties
                <ArrowRight size={18} />
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Wishlist;