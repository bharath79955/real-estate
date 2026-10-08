import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  User,
  Phone,
  ArrowLeft,
} from "lucide-react";
import toast from "react-hot-toast";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      toast.error("Please enter your full name.");
      return;
    }

    if (formData.name.trim().length < 3) {
      toast.error("Name must contain at least 3 characters.");
      return;
    }

    if (!formData.email.trim()) {
      toast.error("Please enter your email address.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (!formData.phone.trim()) {
      toast.error("Please enter your phone number.");
      return;
    }

    if (!/^[0-9]{10}$/.test(formData.phone.replace(/\s/g, ""))) {
      toast.error("Please enter a valid 10-digit phone number.");
      return;
    }

    if (!formData.password) {
      toast.error("Please create a password.");
      return;
    }

    if (formData.password.length < 6) {
      toast.error("Password must contain at least 6 characters.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    if (!acceptedTerms) {
      toast.error("Please accept the Terms & Conditions.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      toast.success("Account created successfully!");

      setTimeout(() => {
        navigate("/");
      }, 600);
    }, 1400);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="grid min-h-screen lg:grid-cols-2">

        {/* Left Section */}
        <div className="hidden bg-gradient-to-br from-indigo-700 via-blue-600 to-blue-500 lg:flex lg:flex-col lg:justify-between lg:p-12">
          <Link
            to="/"
            className="flex w-fit items-center gap-2 text-2xl font-bold text-white"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-lg font-bold text-blue-600">
              S
            </div>

            ShineStone
          </Link>

          <div className="max-w-lg text-white">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-200">
              Join ShineStone
            </p>

            <h1 className="text-5xl font-bold leading-tight">
              Your next home could be closer than you think.
            </h1>

            <p className="mt-6 text-lg leading-8 text-blue-100">
              Create your account and start discovering properties that match
              your lifestyle, location and budget.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                <p className="text-2xl font-bold">500+</p>
                <p className="mt-1 text-xs text-blue-100">
                  Properties
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                <p className="text-2xl font-bold">100+</p>
                <p className="mt-1 text-xs text-blue-100">
                  Agents
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                <p className="text-2xl font-bold">4.9</p>
                <p className="mt-1 text-xs text-blue-100">
                  Rating
                </p>
              </div>
            </div>
          </div>

          <p className="text-sm text-blue-200">
            © {new Date().getFullYear()} ShineStone. All rights reserved.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex min-h-screen items-center justify-center px-4 py-10 sm:px-6 lg:px-12">
          <div className="w-full max-w-md">

            {/* Mobile Logo */}
            <div className="mb-8 lg:hidden">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white">
                  S
                </div>

                Shine<span className="text-blue-600">Stone</span>
              </Link>
            </div>

            {/* Back */}
            <Link
              to="/"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-blue-600 dark:text-slate-400"
            >
              <ArrowLeft size={17} />
              Back to Home
            </Link>

            {/* Heading */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
                Create your account
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                Join ShineStone and start exploring your dream property.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-7 space-y-4">

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200"
                >
                  Full Name
                </label>

                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    autoComplete="name"
                    className="w-full rounded-xl border border-slate-300 bg-white py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200"
                >
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                    className="w-full rounded-xl border border-slate-300 bg-white py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200"
                >
                  Phone Number
                </label>

                <div className="relative">
                  <Phone
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="9876543210"
                    maxLength={10}
                    autoComplete="tel"
                    className="w-full rounded-xl border border-slate-300 bg-white py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200"
                >
                  Password
                </label>

                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a password"
                    autoComplete="new-password"
                    className="w-full rounded-xl border border-slate-300 bg-white py-3.5 pl-11 pr-12 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 dark:hover:text-white"
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200"
                >
                  Confirm Password
                </label>

                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    autoComplete="new-password"
                    className="w-full rounded-xl border border-slate-300 bg-white py-3.5 pl-11 pr-12 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword((prev) => !prev)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 dark:hover:text-white"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* Terms */}
              <label className="flex cursor-pointer items-start gap-3 pt-1">
                <input
                  type="checkbox"
                  checked={acceptedTerms}
                  onChange={(e) => setAcceptedTerms(e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                />

                <span className="text-xs leading-5 text-slate-500 dark:text-slate-400">
                  I agree to the{" "}
                  <button
                    type="button"
                    onClick={() =>
                      toast("Terms & Conditions will be available soon.")
                    }
                    className="font-semibold text-blue-600 hover:underline"
                  >
                    Terms & Conditions
                  </button>{" "}
                  and{" "}
                  <button
                    type="button"
                    onClick={() =>
                      toast("Privacy Policy will be available soon.")
                    }
                    className="font-semibold text-blue-600 hover:underline"
                  >
                    Privacy Policy
                  </button>
                  .
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Creating Account...
                  </>
                ) : (
                  "Create Account"
                )}
              </button>
            </form>

            {/* Login */}
            <p className="mt-7 text-center text-sm text-slate-500 dark:text-slate-400">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-blue-600 hover:text-blue-700"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;