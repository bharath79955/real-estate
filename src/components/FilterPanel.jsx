import { RotateCcw, SlidersHorizontal } from "lucide-react";

function FilterPanel({
  filters,
  setFilters,
  onReset,
  onApply,
  mobile = false,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFilters((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 ${
        mobile ? "w-full" : ""
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
            <SlidersHorizontal size={18} />
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white">
              Filters
            </h3>

            <p className="text-xs text-slate-500 dark:text-slate-400">
              Refine your search
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 transition hover:text-blue-700"
        >
          <RotateCcw size={14} />
          Reset
        </button>
      </div>

      <div className="my-5 h-px bg-slate-200 dark:bg-slate-800" />

      {/* Filters */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1">

        {/* Property Type */}
        <div>
          <label
            htmlFor="type"
            className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200"
          >
            Property Type
          </label>

          <select
            id="type"
            name="type"
            value={filters.type}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-3 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
          >
            <option value="">All Types</option>
            <option value="Apartment">Apartment</option>
            <option value="Villa">Villa</option>
            <option value="House">House</option>
            <option value="Office">Office</option>
          </select>
        </div>

        {/* Purpose */}
        <div>
          <label
            htmlFor="purpose"
            className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200"
          >
            Purpose
          </label>

          <select
            id="purpose"
            name="purpose"
            value={filters.purpose}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-3 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
          >
            <option value="">Buy or Rent</option>
            <option value="For Sale">For Sale</option>
            <option value="For Rent">For Rent</option>
          </select>
        </div>

        {/* Bedrooms */}
        <div>
          <label
            htmlFor="bedrooms"
            className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200"
          >
            Bedrooms
          </label>

          <select
            id="bedrooms"
            name="bedrooms"
            value={filters.bedrooms}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-3 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
          >
            <option value="">Any Bedrooms</option>
            <option value="1">1+ Bedroom</option>
            <option value="2">2+ Bedrooms</option>
            <option value="3">3+ Bedrooms</option>
            <option value="4">4+ Bedrooms</option>
            <option value="5">5+ Bedrooms</option>
          </select>
        </div>
      </div>

      {/* Apply Button - Mobile */}
      {mobile && (
        <button
          type="button"
          onClick={onApply}
          className="mt-6 flex w-full items-center justify-center rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Apply Filters
        </button>
      )}
    </div>
  );
}

export default FilterPanel;