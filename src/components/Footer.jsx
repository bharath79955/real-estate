import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">

          {/* Brand */}
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-2xl font-bold"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold">
                S
              </div>

              <span>
                Shine<span className="text-blue-500">Stone</span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Find your perfect property with ShineStone. Discover beautiful
              homes, apartments, villas and commercial spaces in the best
              locations.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">

              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-sm font-bold transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600"
              >
                f
              </a>

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition-all duration-300 hover:-translate-y-1 hover:bg-pink-600"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect
                    width="20"
                    height="20"
                    x="2"
                    y="2"
                    rx="5"
                    ry="5"
                  />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="#"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-sm font-bold transition-all duration-300 hover:-translate-y-1 hover:bg-sky-500"
              >
                𝕏
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-sm font-bold transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
              >
                in
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold">Company</h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/properties"
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  Properties
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  to="/login"
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  Login
                </Link>
              </li>

              <li>
                <Link
                  to="/signup"
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold">Services</h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  to="/properties"
                  className="text-sm text-slate-400 hover:text-white"
                >
                  Buy Property
                </Link>
              </li>

              <li>
                <Link
                  to="/properties"
                  className="text-sm text-slate-400 hover:text-white"
                >
                  Rent Property
                </Link>
              </li>

              <li>
                <Link
                  to="/properties"
                  className="text-sm text-slate-400 hover:text-white"
                >
                  Luxury Properties
                </Link>
              </li>

              <li>
                <Link
                  to="/properties"
                  className="text-sm text-slate-400 hover:text-white"
                >
                  Commercial Properties
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-sm text-slate-400 hover:text-white"
                >
                  Property Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>

            <div className="mt-5 space-y-5">

              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-800">
                  <MapPin size={17} className="text-blue-500" />
                </div>

                <div>
                  <p className="text-sm font-medium text-white">
                    Our Office
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    Hyderabad, Telangana,
                    <br />
                    India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-800">
                  <Phone size={17} className="text-blue-500" />
                </div>

                <div>
                  <p className="text-sm font-medium text-white">
                    Phone
                  </p>

                  <a
                    href="tel:+919876543210"
                    className="mt-1 block text-sm text-slate-400 hover:text-white"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-800">
                  <Mail size={17} className="text-blue-500" />
                </div>

                <div>
                  <p className="text-sm font-medium text-white">
                    Email
                  </p>

                  <a
                    href="mailto:hello@shinestone.com"
                    className="mt-1 block break-all text-sm text-slate-400 hover:text-white"
                  >
                    hello@shinestone.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-semibold">
                Looking for your dream property?
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Explore our latest properties and find a place you'll love.
              </p>
            </div>

            <Link
              to="/properties"
              className="inline-flex w-fit items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg"
            >
              Explore Properties
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p className="text-center text-sm text-slate-500 md:text-left">
            © {currentYear} ShineStone. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5">
            <button
              type="button"
              onClick={() =>
                alert("Privacy Policy will be available soon.")
              }
              className="text-sm text-slate-500 hover:text-white"
            >
              Privacy Policy
            </button>

            <button
              type="button"
              onClick={() =>
                alert("Terms & Conditions will be available soon.")
              }
              className="text-sm text-slate-500 hover:text-white"
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;