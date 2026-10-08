import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Lock, Mail, ArrowLeft } from "lucide-react";
import toast from "react-hot-toast";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
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

    if (!formData.email.trim()) {
      toast.error("Please enter your email address.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (!formData.password) {
      toast.error("Please enter your password.");
      return;
    }

    if (formData.password.length < 6) {
      toast.error("Password must contain at least 6 characters.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast.success("Login successful!");

      setTimeout(() => {
        navigate("/");
      }, 500);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="grid min-h-screen lg:grid-cols-2">

        {/* Left Section */}
        <div className="hidden bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 lg:flex lg:flex-col lg:justify-between lg:p-12">
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
              Welcome Back
            </p>

            <h1 className="text-5xl font-bold leading-tight">
              Find a place you'll love to call home.
            </h1>

            <p className="mt-6 text-lg leading-8 text-blue-100">
              Sign in to explore properties, save your favourites and connect
              with trusted property agents.
            </p>
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
                Welcome back
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                Sign in to your ShineStone account to continue.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">

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
                    className="w-full rounded-xl border border-slate-300 bg-white py-3.5 pl-11 pr-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm font-semibold text-slate-700 dark:text-slate-200"
                  >
                    Password
                  </label>

                  <button
                    type="button"
                    onClick={() =>
                      toast("Password reset feature will be available soon.")
                    }
                    className="text-xs font-medium text-blue-600 hover:text-blue-700"
                  >
                    Forgot password?
                  </button>
                </div>

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
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    className="w-full rounded-xl border border-slate-300 bg-white py-3.5 pl-11 pr-12 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
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

              {/* Remember */}
              <label className="flex cursor-pointer items-center gap-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                />

                <span className="text-sm text-slate-500 dark:text-slate-400">
                  Remember me
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Signing in...
                  </>
                ) : (
                  "Sign In"
                )}
              </button>
            </form>

            {/* Signup */}
            <p className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-semibold text-blue-600 hover:text-blue-700"
              >
                Create an account
              </Link>
            </p>

            {/* Footer */}
            <p className="mt-8 text-center text-xs text-slate-400">
              By continuing, you agree to our Terms & Conditions and Privacy
              Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;