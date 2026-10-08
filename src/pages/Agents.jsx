import {
  Award,
  BriefcaseBusiness,
  Mail,
  MapPin,
  Phone,
  Search,
  Star,
} from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import agents from "../data/agents";

function Agents() {
  const [search, setSearch] = useState("");

  /* =========================================
     FILTER AGENTS
  ========================================= */

  const filteredAgents = useMemo(() => {
    const value = search.trim().toLowerCase();

    if (!value) {
      return agents;
    }

    return agents.filter((agent) => {
      return (
        agent.name.toLowerCase().includes(value) ||
        agent.role.toLowerCase().includes(value) ||
        agent.location.toLowerCase().includes(value)
      );
    });
  }, [search]);

  /* =========================================
     CONTACT
  ========================================= */

  const handleContact = (agent) => {
    toast.success(`Contact request sent to ${agent.name}.`);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">

      {/* =========================================
          NAVBAR
      ========================================= */}

      <Navbar />

      {/* =========================================
          HERO
      ========================================= */}

      <section className="relative overflow-hidden bg-slate-900">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1800&q=85"
            alt="Real estate professionals"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-slate-950/75" />
        </div>

        {/* Hero Content */}
        <div className="relative mx-auto flex min-h-[430px] max-w-7xl items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
          <div className="max-w-3xl">

            {/* Icon */}
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/30">
              <Award size={27} />
            </div>

            {/* Small Heading */}
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Our Professionals
            </p>

            {/* Main Heading */}
            <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Meet Our Trusted
              <span className="block text-blue-400">
                Agents
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Connect with experienced real estate professionals
              who understand the market and can help you find the
              right property.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          SEARCH SECTION
      ========================================= */}

      <section className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8">

          <div className="relative mx-auto max-w-2xl">

            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search agents by name, role or location..."
              className="h-13 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-12 pr-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />

          </div>
        </div>
      </section>

      {/* =========================================
          AGENTS SECTION
      ========================================= */}

      <main className="bg-slate-50 py-16 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* =====================================
              CENTERED SECTION HEADER
          ===================================== */}

          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
              ShineStone Experts
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
              Find Your Property Expert
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-slate-500 dark:text-slate-400">
              Connect with our experienced agents and find the
              right professional for your real estate journey.
            </p>

            <p className="mt-3 text-sm font-medium text-slate-400 dark:text-slate-500">
              {filteredAgents.length}{" "}
              {filteredAgents.length === 1
                ? "agent"
                : "agents"}{" "}
              available
            </p>

          </div>

          {/* =====================================
              AGENT GRID
          ===================================== */}

          {filteredAgents.length > 0 ? (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

              {filteredAgents.map((agent) => (
                <article
                  key={agent.id}
                  className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
                >

                  {/* ===============================
                      IMAGE
                  =============================== */}

                  <div className="relative h-72 overflow-hidden bg-slate-100 dark:bg-slate-800">

                    <img
                      src={agent.image}
                      alt={agent.name}
                      className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                    />

                    {/* Rating */}
                    <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white/95 px-3 py-1.5 text-sm font-bold text-slate-900 shadow-lg backdrop-blur-sm dark:bg-slate-900/95 dark:text-white">
                      <Star
                        size={15}
                        className="fill-amber-400 text-amber-400"
                      />

                      {agent.rating}
                    </div>

                  </div>

                  {/* ===============================
                      CONTENT
                  =============================== */}

                  <div className="p-5">

                    {/* Name */}
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {agent.name}
                    </h3>

                    {/* Role */}
                    <p className="mt-1 text-sm font-medium text-blue-600">
                      {agent.role}
                    </p>

                    {/* Details */}
                    <div className="mt-4 space-y-2.5">

                      {/* Location */}
                      <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                        <MapPin
                          size={16}
                          className="shrink-0 text-blue-600"
                        />

                        <span>{agent.location}</span>
                      </div>

                      {/* Experience */}
                      <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                        <BriefcaseBusiness
                          size={16}
                          className="shrink-0 text-blue-600"
                        />

                        <span>
                          {agent.experience} experience
                        </span>
                      </div>

                    </div>

                    {/* ===============================
                        STATS
                    =============================== */}

                    <div className="mt-5 grid grid-cols-2 divide-x divide-slate-200 rounded-xl bg-slate-50 py-3 dark:divide-slate-700 dark:bg-slate-800">

                      <div className="text-center">
                        <p className="text-lg font-bold text-slate-900 dark:text-white">
                          {agent.properties}
                        </p>

                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          Properties
                        </p>
                      </div>

                      <div className="text-center">
                        <p className="text-lg font-bold text-slate-900 dark:text-white">
                          {agent.rating}
                        </p>

                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          Rating
                        </p>
                      </div>

                    </div>

                    {/* ===============================
                        ACTION BUTTONS
                    =============================== */}

                    <div className="mt-5 grid grid-cols-2 gap-2">

                      {/* View Profile */}
                      <Link
                        to={`/agent/${agent.id}`}
                        className="rounded-xl border border-slate-200 px-3 py-2.5 text-center text-sm font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-blue-500 dark:hover:text-blue-400"
                      >
                        View Profile
                      </Link>

                      {/* Contact */}
                      <button
                        type="button"
                        onClick={() => handleContact(agent)}
                        className="flex items-center justify-center gap-1.5 rounded-xl bg-blue-600 px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                      >
                        <Mail size={15} />
                        Contact
                      </button>

                    </div>

                    {/* ===============================
                        QUICK CONTACT
                    =============================== */}

                    <div className="mt-3 flex items-center justify-center gap-5 border-t border-slate-200 pt-4 dark:border-slate-800">

                      {/* Phone */}
                      <a
                        href={`tel:${agent.phone}`}
                        className="flex items-center gap-1.5 text-xs font-medium text-slate-500 transition hover:text-blue-600 dark:text-slate-400"
                      >
                        <Phone size={14} />
                        Call
                      </a>

                      {/* Email */}
                      <a
                        href={`mailto:${agent.email}`}
                        className="flex items-center gap-1.5 text-xs font-medium text-slate-500 transition hover:text-blue-600 dark:text-slate-400"
                      >
                        <Mail size={14} />
                        Email
                      </a>

                    </div>

                  </div>
                </article>
              ))}

            </div>
          ) : (

            /* =====================================
               EMPTY STATE
            ===================================== */

            <div className="mx-auto mt-10 max-w-2xl rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center dark:border-slate-700 dark:bg-slate-900">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                <Search size={24} />
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">
                No agents found
              </h3>

              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Try searching with another name, role or
                location.
              </p>

              <button
                type="button"
                onClick={() => setSearch("")}
                className="mt-5 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Clear Search
              </button>

            </div>
          )}

        </div>
      </main>

      {/* =========================================
          CTA
      ========================================= */}

      <section className="bg-blue-600">
        <div className="mx-auto max-w-7xl px-4 py-14 text-center sm:px-6 lg:px-8">

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Need help finding the right property?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-blue-100">
            Our experienced agents are ready to help you find a
            property that matches your needs and budget.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              to="/properties"
              className="rounded-xl bg-white px-6 py-3.5 font-semibold text-blue-600 shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-100"
            >
              Explore Properties
            </Link>

            <Link
              to="/contact"
              className="rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Contact Us
            </Link>

          </div>

        </div>
      </section>

      {/* =========================================
          FOOTER
      ========================================= */}

      <Footer />
    </div>
  );
}

export default Agents;