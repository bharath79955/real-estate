import { useMemo, useState } from "react";
import {
  SlidersHorizontal,
  X,
  SearchX,
  Home,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import FilterPanel from "../components/FilterPanel";
import PropertyCard from "../components/PropertyCard";
import Loader from "../components/Loader";

import properties from "../data/properties";

function Properties() {
  const [search, setSearch] = useState("");

  const [filters, setFilters] = useState({
    type: "",
    purpose: "",
    bedrooms: "",
  });

  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  // -----------------------------------------
  // Search
  // -----------------------------------------
  const handleSearch = (value) => {
    setSearch(value);
  };

  // -----------------------------------------
  // Reset Filters
  // -----------------------------------------
  const resetFilters = () => {
    setSearch("");

    setFilters({
      type: "",
      purpose: "",
      bedrooms: "",
    });
  };

  // -----------------------------------------
  // Filter Properties
  // -----------------------------------------
  const filteredProperties = useMemo(() => {
    const searchValue = search.trim().toLowerCase();

    return properties.filter((property) => {
      const matchesSearch =
        !searchValue ||
        property.title?.toLowerCase().includes(searchValue) ||
        property.location?.toLowerCase().includes(searchValue) ||
        property.city?.toLowerCase().includes(searchValue) ||
        property.type?.toLowerCase().includes(searchValue);

      const matchesType =
        !filters.type ||
        property.type === filters.type;

      const matchesPurpose =
        !filters.purpose ||
        property.purpose === filters.purpose;

      const matchesBedrooms =
        !filters.bedrooms ||
        Number(property.bedrooms) >= Number(filters.bedrooms);

      return (
        matchesSearch &&
        matchesType &&
        matchesPurpose &&
        matchesBedrooms
      );
    });
  }, [search, filters]);

  // -----------------------------------------
  // Loading
  // -----------------------------------------
  const handleApplyFilters = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setMobileFilterOpen(false);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white">

      <Navbar />

      {/* Page Header */}
      <section className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-14 lg:px-8">

          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              ShineStone Properties
            </p>

            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Find Your Perfect Property
            </h1>

            <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base dark:text-slate-400">
              Explore apartments, villas, houses and commercial properties
              available for sale and rent.
            </p>
          </div>

          {/* Search */}
          <div className="mt-8">
            <SearchBar
              search={search}
              setSearch={setSearch}
              onSearch={handleSearch}
            />
          </div>
        </div>
      </section>

      {/* Main */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">

        {/* Mobile Filter Button */}
        <div className="mb-6 flex items-center justify-between lg:hidden">
          <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
            {filteredProperties.length}{" "}
            {filteredProperties.length === 1
              ? "property"
              : "properties"}{" "}
            found
          </p>

          <button
            type="button"
            onClick={() => setMobileFilterOpen(true)}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
          >
            <SlidersHorizontal size={17} />
            Filters
          </button>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr]">

          {/* Desktop Filters */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <FilterPanel
                filters={filters}
                setFilters={setFilters}
                onReset={resetFilters}
              />
            </div>
          </aside>

          {/* Properties */}
          <section>

            {/* Result Header */}
            <div className="mb-6 hidden items-center justify-between lg:flex">
              <div>
                <h2 className="text-xl font-bold">
                  Available Properties
                </h2>

                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  Showing {filteredProperties.length} of{" "}
                  {properties.length} properties
                </p>
              </div>

              {(search ||
                filters.type ||
                filters.purpose ||
                filters.bedrooms) && (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  Clear All
                </button>
              )}
            </div>

            {/* Loading */}
            {loading ? (
              <Loader
                size="large"
                text="Updating properties..."
              />
            ) : filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProperties.map((property) => (
                  <PropertyCard
                    key={property.id}
                    property={property}
                  />
                ))}
              </div>
            ) : (
              /* Empty State */
              <div className="flex min-h-[420px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white px-6 text-center dark:border-slate-700 dark:bg-slate-900">

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                  <SearchX size={30} />
                </div>

                <h2 className="mt-5 text-xl font-bold">
                  No properties found
                </h2>

                <p className="mt-2 max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400">
                  We couldn't find any properties matching your search
                  criteria. Try changing your search or filters.
                </p>

                <button
                  type="button"
                  onClick={resetFilters}
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  <Home size={17} />
                  View All Properties
                </button>
              </div>
            )}
          </section>
        </div>
      </main>

      {/* Mobile Filter Drawer */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">

          {/* Overlay */}
          <button
            type="button"
            aria-label="Close filters"
            onClick={() => setMobileFilterOpen(false)}
            className="absolute inset-0 bg-black/50"
          />

          {/* Drawer */}
          <div className="absolute bottom-0 left-0 right-0 max-h-[90vh] overflow-y-auto rounded-t-3xl bg-slate-50 p-5 dark:bg-slate-950 sm:p-6">

            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-lg font-bold">
                Filter Properties
              </h2>

              <button
                type="button"
                onClick={() => setMobileFilterOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-600 shadow-sm dark:bg-slate-900 dark:text-slate-300"
              >
                <X size={19} />
              </button>
            </div>

            <FilterPanel
              filters={filters}
              setFilters={setFilters}
              onReset={resetFilters}
              onApply={handleApplyFilters}
              mobile
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Properties;