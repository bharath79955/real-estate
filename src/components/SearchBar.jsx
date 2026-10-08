import { useState } from "react";
import { Search, X, MapPin } from "lucide-react";

function SearchBar({
  search = "",
  setSearch,
  onSearch,
}) {
  const [localSearch, setLocalSearch] = useState(search);

  const handleChange = (e) => {
    const value = e.target.value;

    setLocalSearch(value);

    if (setSearch) {
      setSearch(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (onSearch) {
      onSearch(localSearch.trim());
    }
  };

  const handleClear = () => {
    setLocalSearch("");

    if (setSearch) {
      setSearch("");
    }

    if (onSearch) {
      onSearch("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full"
    >
      <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-lg shadow-slate-200/50 sm:flex-row sm:items-center dark:border-slate-700 dark:bg-slate-900 dark:shadow-none">

        {/* Search Input */}
        <div className="relative flex-1">
          <MapPin
            size={19}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600"
          />

          <input
            type="text"
            value={localSearch}
            onChange={handleChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSubmit(e);
              }
            }}
            placeholder="Search by city, location or property..."
            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-11 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:bg-slate-800"
          />

          {/* Clear */}
          {localSearch && (
            <button
              type="button"
              onClick={handleClear}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-200 hover:text-slate-700 dark:hover:bg-slate-700 dark:hover:text-white"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Search Button */}
        <button
          type="submit"
          className="flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 active:scale-[0.98] sm:min-w-[130px]"
        >
          <Search size={18} />
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBar;