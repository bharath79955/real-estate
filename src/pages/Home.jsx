import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Search,
  MapPin,
  ShieldCheck,
  Users,
  Home as HomeIcon,
  Building2,
  Star,
  CheckCircle2,
} from "lucide-react";
import toast from "react-hot-toast";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PropertyCard from "../components/PropertyCard";
import AgentCard from "../components/AgentCard";

import properties from "../data/properties";
import agents from "../data/agents";

function Home() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [purpose, setPurpose] = useState("");
  const [type, setType] = useState("");

  const featuredProperties = properties
    .filter((property) => property.featured)
    .slice(0, 4);

  const featuredAgents = agents.slice(0, 4);

  const handleSearch = (e) => {
    e.preventDefault();

    const params = new URLSearchParams();

    if (search.trim()) {
      params.set("search", search.trim());
    }

    if (purpose) {
      params.set("purpose", purpose);
    }

    if (type) {
      params.set("type", type);
    }

    navigate(
      params.toString()
        ? `/properties?${params.toString()}`
        : "/properties"
    );
  };

  const handleExplore = () => {
    navigate("/properties");
  };

  const handleAgentContact = () => {
    toast.success("Let's find the right property for you!");
    navigate("/contact");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white">
      <Navbar />

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85"
          alt="Luxury modern home"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-950/65" />

        {/* Hero Content */}
        <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="w-full max-w-4xl">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
              <ShieldCheck
                size={17}
                className="text-blue-400"
              />

              Trusted Real Estate Platform
            </div>

            <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Find your next
              <span className="block text-blue-400">
                dream home.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
              Discover beautiful homes, apartments, villas and commercial
              properties in the best locations with ShineStone.
            </p>

            {/* Search Box */}
            <form
              onSubmit={handleSearch}
              className="mt-9 max-w-4xl rounded-2xl bg-white p-3 shadow-2xl sm:p-4"
            >
              <div className="grid grid-cols-1 gap-3 md:grid-cols-[1fr_160px_160px_auto]">

                {/* Search */}
                <div className="relative">
                  <MapPin
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600"
                  />

                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="City, location or property"
                    className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>

                {/* Purpose */}
                <select
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  className="h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                >
                  <option value="">Buy or Rent</option>
                  <option value="For Sale">For Sale</option>
                  <option value="For Rent">For Rent</option>
                </select>

                {/* Type */}
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-700 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                >
                  <option value="">Property Type</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Villa">Villa</option>
                  <option value="House">House</option>
                  <option value="Office">Office</option>
                </select>

                {/* Search Button */}
                <button
                  type="submit"
                  className="flex h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white transition hover:bg-blue-700 hover:shadow-lg"
                >
                  <Search size={18} />
                  Search
                </button>
              </div>
            </form>

            {/* Stats */}
            <div className="mt-10 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
              <div>
                <p className="text-2xl font-bold text-white sm:text-3xl">
                  500+
                </p>

                <p className="mt-1 text-sm text-slate-300">
                  Properties
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-white sm:text-3xl">
                  100+
                </p>

                <p className="mt-1 text-sm text-slate-300">
                  Trusted Agents
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-white sm:text-3xl">
                  50+
                </p>

                <p className="mt-1 text-sm text-slate-300">
                  Locations
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-white sm:text-3xl">
                  4.9
                </p>

                <p className="mt-1 text-sm text-slate-300">
                  Average Rating
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TRUST FEATURES
      ====================================================== */}
      <section className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-slate-200 px-4 py-8 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-6 lg:px-8 dark:divide-slate-800">

          <div className="flex items-center gap-4 py-5 sm:px-6 sm:py-2">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
              <ShieldCheck size={24} />
            </div>

            <div>
              <h3 className="font-semibold">
                Trusted Listings
              </h3>

              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Verified property information
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 py-5 sm:px-6 sm:py-2">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600 dark:bg-green-500/10 dark:text-green-400">
              <Users size={24} />
            </div>

            <div>
              <h3 className="font-semibold">
                Expert Agents
              </h3>

              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Experienced property professionals
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 py-5 sm:px-6 sm:py-2">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400">
              <HomeIcon size={24} />
            </div>

            <div>
              <h3 className="font-semibold">
                Wide Selection
              </h3>

              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Homes for every lifestyle
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED PROPERTIES
      ====================================================== */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Featured Properties
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Explore our top properties
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base dark:text-slate-400">
              Handpicked properties that offer excellent locations, modern
              amenities and exceptional value.
            </p>
          </div>

          <Link
            to="/properties"
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            View All Properties
            <ArrowRight size={17} />
          </Link>
        </div>

        {featuredProperties.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {featuredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
              />
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-2xl bg-white p-10 text-center dark:bg-slate-900">
            <p className="text-slate-500 dark:text-slate-400">
              Featured properties will be available soon.
            </p>
          </div>
        )}
      </section>

      {/* =====================================================
          ABOUT / EXPERIENCE
      ====================================================== */}
      <section className="bg-white dark:bg-slate-900">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20">

          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85"
                alt="Modern luxury interior"
                loading="lazy"
                className="h-[420px] w-full object-cover sm:h-[500px]"
              />
            </div>

            {/* Experience Card */}
            <div className="absolute -bottom-5 right-4 rounded-2xl bg-white p-5 shadow-xl sm:right-8 dark:bg-slate-800">
              <p className="text-3xl font-bold text-blue-600">
                10+
              </p>

              <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-300">
                Years of Experience
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Why ShineStone
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              We make finding your home simple.
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base dark:text-slate-400">
              At ShineStone, we believe finding a property should be simple,
              transparent and stress-free. Our platform connects you with
              quality properties and experienced agents.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Verified property listings",
                "Experienced local agents",
                "Easy property search and filtering",
                "Personalized property assistance",
                "Transparent communication",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={20}
                    className="shrink-0 text-blue-600"
                  />

                  <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={handleExplore}
              className="mt-9 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700 hover:shadow-lg"
            >
              Explore Properties
              <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROPERTY TYPES
      ====================================================== */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Property Categories
          </p>

          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Find what suits you
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 dark:text-slate-400">
            Browse different property types and find the perfect space for
            your lifestyle or business.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">

          {/* Apartment */}
          <Link
            to="/properties?type=Apartment"
            className="group rounded-2xl border border-slate-200 bg-white p-6 text-center transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-500/10 dark:text-blue-400">
              <Building2 size={26} />
            </div>

            <h3 className="mt-4 font-semibold">
              Apartments
            </h3>

            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Modern city living
            </p>
          </Link>

          {/* Villas */}
          <Link
            to="/properties?type=Villa"
            className="group rounded-2xl border border-slate-200 bg-white p-6 text-center transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-green-600 transition group-hover:bg-green-600 group-hover:text-white dark:bg-green-500/10 dark:text-green-400">
              <HomeIcon size={26} />
            </div>

            <h3 className="mt-4 font-semibold">
              Villas
            </h3>

            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Spacious luxury
            </p>
          </Link>

          {/* Houses */}
          <Link
            to="/properties?type=House"
            className="group rounded-2xl border border-slate-200 bg-white p-6 text-center transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-50 text-purple-600 transition group-hover:bg-purple-600 group-hover:text-white dark:bg-purple-500/10 dark:text-purple-400">
              <HomeIcon size={26} />
            </div>

            <h3 className="mt-4 font-semibold">
              Houses
            </h3>

            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Comfortable family homes
            </p>
          </Link>

          {/* Commercial */}
          <Link
            to="/properties?type=Office"
            className="group rounded-2xl border border-slate-200 bg-white p-6 text-center transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-600 transition group-hover:bg-orange-600 group-hover:text-white dark:bg-orange-500/10 dark:text-orange-400">
              <Building2 size={26} />
            </div>

            <h3 className="mt-4 font-semibold">
              Commercial
            </h3>

            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Business spaces
            </p>
          </Link>
        </div>
      </section>

      {/* =====================================================
          AGENTS
      ====================================================== */}
      <section className="bg-slate-100 dark:bg-slate-900/60">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">

          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Our Experts
              </p>

              <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
                Meet our property experts
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-500 dark:text-slate-400">
                Connect with experienced agents who understand the local
                property market.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              Contact Our Team
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredAgents.map((agent) => (
              <AgentCard
                key={agent.id}
                agent={agent}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          TESTIMONIAL
      ====================================================== */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center gap-1">
            {[1, 2, 3, 4, 5].map((item) => (
              <Star
                key={item}
                size={20}
                fill="currentColor"
                className="text-yellow-500"
              />
            ))}
          </div>

          <blockquote className="mt-6 text-2xl font-semibold leading-relaxed sm:text-3xl">
            "ShineStone made finding our new home simple, transparent and
            completely stress-free."
          </blockquote>

          <p className="mt-5 text-sm text-slate-500 dark:text-slate-400">
            — ShineStone Customer
          </p>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 to-indigo-700 px-6 py-12 text-center sm:px-10 lg:py-16">

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to find your next home?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
            Explore our properties or speak with one of our experienced
            agents today.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">

            <button
              type="button"
              onClick={handleExplore}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-blue-700 transition hover:bg-blue-50 sm:w-auto"
            >
              Explore Properties
              <ArrowRight size={17} />
            </button>

            <button
              type="button"
              onClick={handleAgentContact}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 sm:w-auto"
            >
              Talk to an Agent
              <Users size={17} />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;