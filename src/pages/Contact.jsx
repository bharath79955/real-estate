import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
} from "lucide-react";
import toast from "react-hot-toast";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

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
      toast.error("Please enter your name.");
      return;
    }

    if (!formData.email.trim()) {
      toast.error("Please enter your email.");
      return;
    }

    if (!formData.email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (!formData.phone.trim()) {
      toast.error("Please enter your phone number.");
      return;
    }

    if (!formData.subject.trim()) {
      toast.error("Please enter a subject.");
      return;
    }

    if (!formData.message.trim()) {
      toast.error("Please enter your message.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      toast.success("Your message has been sent successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setLoading(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700">
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <div className="max-w-3xl">
            <Link
              to="/"
              className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-blue-100 transition hover:text-white"
            >
              <ArrowLeft size={17} />
              Back to Home
            </Link>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Get in Touch
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
              Have questions about a property? Our team is here to help you
              find the perfect place for your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10">

          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Contact Us
              </p>

              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                We're here to help
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
                Whether you're looking to buy, rent, or sell a property,
                contact our team and we'll get back to you as soon as possible.
              </p>
            </div>

            {/* Email */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                  <Mail size={21} />
                </div>

                <div>
                  <h3 className="font-semibold">Email Us</h3>

                  <a
                    href="mailto:hello@shinestone.com"
                    className="mt-1 block text-sm text-slate-500 hover:text-blue-600 dark:text-slate-400"
                  >
                    hello@shinestone.com
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600 dark:bg-green-500/10 dark:text-green-400">
                  <Phone size={21} />
                </div>

                <div>
                  <h3 className="font-semibold">Call Us</h3>

                  <a
                    href="tel:+919876543210"
                    className="mt-1 block text-sm text-slate-500 hover:text-blue-600 dark:text-slate-400"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400">
                  <MapPin size={21} />
                </div>

                <div>
                  <h3 className="font-semibold">Visit Us</h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
                    Hyderabad, Telangana,
                    <br />
                    India
                  </p>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400">
                  <Clock size={21} />
                </div>

                <div>
                  <h3 className="font-semibold">Working Hours</h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
                    Monday - Saturday
                    <br />
                    9:00 AM - 7:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8 lg:p-10 dark:border-slate-800 dark:bg-slate-900">
              <div>
                <h2 className="text-2xl font-bold sm:text-3xl">
                  Send us a message
                </h2>

                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  Fill out the form below and our team will contact you.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-6"
              >
                {/* Name + Email */}
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium"
                    >
                      Full Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-950"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-950"
                    />
                  </div>
                </div>

                {/* Phone + Subject */}
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-950"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-medium"
                    >
                      Subject
                    </label>

                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-950"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    placeholder="Tell us what you're looking for..."
                    className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-950"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {loading ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={17} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;