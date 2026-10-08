import { useState } from "react";
import {
  Menu,
  X,
  Sun,
  Moon,
  LogOut,
  Heart,
} from "lucide-react";
import {
  Link,
  NavLink,
  useNavigate,
} from "react-router-dom";
import toast from "react-hot-toast";

import { useApp } from "../context/AppContext";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const {
    darkMode,
    toggleDarkMode,
    wishlist,
    isLoggedIn,
    logout,
  } = useApp();

  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Properties", path: "/properties" },
    { name: "Agents", path: "/agents" },
    { name: "Contact", path: "/contact" },
  ];

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    closeMenu();

    toast.success("Logged out successfully.");

    navigate("/");
  };

  const handleWishlist = () => {
    navigate("/wishlist");
    closeMenu();
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b shadow-sm backdrop-blur-md ${
        darkMode
          ? "border-slate-800 bg-slate-950"
          : "border-slate-200 bg-white"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= DESKTOP / MAIN HEADER ================= */}
        <div className="flex h-16 items-center justify-between">
          
          {/* LOGO */}
          <Link
            to="/"
            onClick={closeMenu}
            className="group flex items-center gap-3"
          >
            <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 shadow-lg shadow-blue-600/25 transition duration-300 group-hover:scale-105 group-hover:shadow-blue-600/40">
              <div className="absolute inset-[2px] rounded-[14px] border border-white/20" />

              <span className="relative text-lg font-extrabold tracking-tight text-white">
                S
              </span>
            </div>

            <div className="leading-none">
              <span
                className={`block text-[21px] font-extrabold tracking-tight sm:text-[23px] ${
                  darkMode ? "text-white" : "text-slate-900"
                }`}
              >
                Shine<span className="text-blue-600">Stone</span>
              </span>

              <span
                className={`mt-1 block text-[8px] font-semibold uppercase tracking-[0.28em] ${
                  darkMode ? "text-slate-400" : "text-slate-400"
                }`}
              >
                Real Estate
              </span>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center gap-4 md:flex lg:gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-sm font-medium ${
                    isActive
                      ? "text-blue-500"
                      : darkMode
                        ? "text-slate-200 hover:text-blue-400"
                        : "text-slate-600 hover:text-blue-600"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* DESKTOP ACTIONS */}
          <div className="hidden items-center gap-2 md:flex">
            
            {/* Wishlist */}
            <button
              type="button"
              onClick={handleWishlist}
              className={`relative flex h-10 w-10 items-center justify-center rounded-lg ${
                darkMode
                  ? "text-slate-200 hover:bg-slate-800 hover:text-blue-400"
                  : "text-slate-600 hover:bg-slate-100 hover:text-blue-600"
              }`}
              aria-label="Open wishlist"
              title="Wishlist"
            >
              <Heart
                size={19}
                className={
                  wishlist.length > 0
                    ? "fill-red-500 text-red-500"
                    : ""
                }
              />

              {wishlist.length > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Theme */}
            <button
              type="button"
              onClick={toggleDarkMode}
              className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                darkMode
                  ? "text-slate-200 hover:bg-slate-800 hover:text-blue-400"
                  : "text-slate-600 hover:bg-slate-100 hover:text-blue-600"
              }`}
              aria-label="Toggle dark mode"
              title={
                darkMode
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              {darkMode ? (
                <Sun size={20} />
              ) : (
                <Moon size={20} />
              )}
            </button>

            {/* Login / Logout */}
            {isLoggedIn ? (
              <button
                type="button"
                onClick={handleLogout}
                className={`ml-1 flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold ${
                  darkMode
                    ? "border-slate-700 text-slate-200 hover:border-blue-500 hover:text-blue-400"
                    : "border-slate-300 text-slate-700 hover:border-blue-500 hover:text-blue-600"
                }`}
              >
                <LogOut size={17} />
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className={`rounded-xl px-4 py-2.5 text-sm font-semibold ${
                    darkMode
                      ? "text-slate-200 hover:text-blue-400"
                      : "text-slate-700 hover:text-blue-600"
                  }`}
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* MOBILE ACTIONS */}
          <div className="flex items-center gap-1 md:hidden">
            
            {/* Wishlist */}
            <button
              type="button"
              onClick={handleWishlist}
              className={`relative flex h-10 w-10 items-center justify-center rounded-lg ${
                darkMode
                  ? "text-slate-200 hover:bg-slate-800"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
              aria-label="Open wishlist"
            >
              <Heart
                size={19}
                className={
                  wishlist.length > 0
                    ? "fill-red-500 text-red-500"
                    : ""
                }
              />

              {wishlist.length > 0 && (
                <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[9px] font-bold text-white">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Theme */}
            <button
              type="button"
              onClick={toggleDarkMode}
              className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                darkMode
                  ? "text-yellow-300 hover:bg-slate-800"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun size={20} />
              ) : (
                <Moon size={20} />
              )}
            </button>

            {/* Menu */}
            <button
              type="button"
              onClick={() =>
                setMobileMenuOpen((value) => !value)
              }
              className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                darkMode
                  ? "text-slate-200 hover:bg-slate-800"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <X size={22} />
              ) : (
                <Menu size={22} />
              )}
            </button>
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {mobileMenuOpen && (
          <div
            className={`border-t py-4 md:hidden ${
              darkMode
                ? "border-slate-800 bg-slate-950"
                : "border-slate-200 bg-white"
            }`}
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-sm font-medium ${
                      isActive
                        ? darkMode
                          ? "bg-blue-950 text-blue-400"
                          : "bg-blue-50 text-blue-600"
                        : darkMode
                          ? "text-slate-200 hover:bg-slate-800 hover:text-white"
                          : "text-slate-700 hover:bg-slate-100 hover:text-blue-600"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              {/* Wishlist */}
              <button
                type="button"
                onClick={handleWishlist}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium ${
                  darkMode
                    ? "text-slate-200 hover:bg-slate-800"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                <Heart
                  size={18}
                  className={
                    wishlist.length > 0
                      ? "fill-red-500 text-red-500"
                      : ""
                  }
                />

                <span>Wishlist</span>

                {wishlist.length > 0 && (
                  <span className="ml-auto rounded-full bg-red-500 px-2 py-0.5 text-xs font-bold text-white">
                    {wishlist.length}
                  </span>
                )}
              </button>

              {/* Login / Logout */}
              {isLoggedIn ? (
                <button
                  type="button"
                  onClick={handleLogout}
                  className="mt-2 flex items-center gap-3 rounded-xl border border-red-500/30 px-4 py-3 text-sm font-semibold text-red-500"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              ) : (
                <div className="mt-2 grid grid-cols-2 gap-2">
                  <Link
                    to="/login"
                    onClick={closeMenu}
                    className={`rounded-xl border px-4 py-3 text-center text-sm font-semibold ${
                      darkMode
                        ? "border-slate-700 text-slate-200 hover:bg-slate-800"
                        : "border-slate-300 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    Login
                  </Link>

                  <Link
                    to="/signup"
                    onClick={closeMenu}
                    className="rounded-xl bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-blue-700"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;