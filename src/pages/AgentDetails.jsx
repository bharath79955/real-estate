import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  CalendarDays,
  Mail,
  MapPin,
  Phone,
  Send,
  Star,
} from "lucide-react";

import toast from "react-hot-toast";

import Navbar from "../components/Navbar";
import agents from "../data/agents";
import properties from "../data/properties";

function AgentDetails() {
  const { id } = useParams();

  const agent = agents.find(
    (item) => item.id === Number(id)
  );

  const [message, setMessage] = useState("");

  if (!agent) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
        <Navbar />

        <div className="flex min-h-[70vh] items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Agent Not Found
            </h1>

            <p className="mt-3 text-slate-500">
              The agent you're looking for doesn't exist.
            </p>

            <Link
              to="/"
              className="mt-6 inline-flex rounded-xl bg-slate-900 px-6 py-3 text-sm font-bold text-white hover:bg-slate-700 dark:bg-white dark:text-slate-900"
            >
              Back Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const agentProperties = properties.slice(0, 3);

  const handleMessage = (e) => {
    e.preventDefault();

    if (!message.trim()) {
      toast.error("Please enter your message");
      return;
    }

    toast.success("Message sent successfully!");
    setMessage("");
  };

  const handleCall = () => {
    toast.success(`Calling ${agent.name}...`);
  };

  const handleSchedule = () => {
    toast.success("Visit request sent successfully!");
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        {/* Back Button */}
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-slate-900 dark:hover:text-white"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        {/* Agent Profile */}
        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">

          <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr]">

            {/* Agent Image */}
            <div className="relative h-[380px] sm:h-[450px] lg:h-full lg:min-h-[520px]">
              <img
                src={agent.image}
                alt={agent.name}
                className="h-full w-full object-cover"
              />

              {/* Rating */}
              <div className="absolute bottom-5 left-5 flex items-center gap-1 rounded-full bg-white/95 px-4 py-2 text-sm font-bold text-slate-900 shadow-lg">
                <Star
                  size={16}
                  className="fill-yellow-400 text-yellow-400"
                />
                {agent.rating}
              </div>
            </div>

            {/* Agent Information */}
            <div className="p-6 sm:p-8 lg:p-10">

              <p className="text-sm font-bold uppercase tracking-wider text-slate-500">
                ShineStone Agent
              </p>

              <div className="mt-2 flex flex-col justify-between gap-4 sm:flex-row sm:items-start">

                <div>
                  <h1 className="text-3xl font-bold text-slate-950 sm:text-4xl dark:text-white">
                    {agent.name}
                  </h1>

                  <p className="mt-2 text-base text-slate-500">
                    {agent.role}
                  </p>
                </div>

                <div className="flex w-fit items-center gap-1 rounded-full bg-slate-100 px-4 py-2 text-sm font-bold dark:bg-slate-800 dark:text-white">
                  <Star
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                  {agent.rating} Rating
                </div>
              </div>

              {/* Description */}
              <p className="mt-6 max-w-2xl leading-7 text-slate-600 dark:text-slate-400">
                {agent.description}
              </p>

              {/* Agent Stats */}
              <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">

                <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800">
                  <p className="text-xl font-bold text-slate-900 dark:text-white">
                    {agent.properties}+
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Properties
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800">
                  <p className="text-xl font-bold text-slate-900 dark:text-white">
                    {agent.experience}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Experience
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800">
                  <p className="text-xl font-bold text-slate-900 dark:text-white">
                    {agent.rating}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Rating
                  </p>
                </div>
              </div>

              {/* Contact Details */}
              <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">

                <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-4 dark:bg-slate-800">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white dark:bg-slate-700">
                    <MapPin
                      size={18}
                      className="text-slate-600 dark:text-slate-300"
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs text-slate-500">
                      Location
                    </p>

                    <p className="truncate text-sm font-semibold text-slate-900 dark:text-white">
                      {agent.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-4 dark:bg-slate-800">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white dark:bg-slate-700">
                    <Phone
                      size={18}
                      className="text-slate-600 dark:text-slate-300"
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs text-slate-500">
                      Phone
                    </p>

                    <p className="truncate text-sm font-semibold text-slate-900 dark:text-white">
                      {agent.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-4 dark:bg-slate-800">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white dark:bg-slate-700">
                    <Mail
                      size={18}
                      className="text-slate-600 dark:text-slate-300"
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs text-slate-500">
                      Email
                    </p>

                    <p className="truncate text-sm font-semibold text-slate-900 dark:text-white">
                      {agent.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-4 dark:bg-slate-800">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white dark:bg-slate-700">
                    <CalendarDays
                      size={18}
                      className="text-slate-600 dark:text-slate-300"
                    />
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">
                      Experience
                    </p>

                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      {agent.experience}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">

                <button
                  onClick={handleCall}
                  className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                >
                  <Phone size={18} />
                  Call Agent
                </button>

                <button
                  onClick={handleSchedule}
                  className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3.5 text-sm font-bold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-white dark:hover:bg-slate-800"
                >
                  <CalendarDays size={18} />
                  Schedule Visit
                </button>

              </div>
            </div>
          </div>
        </section>

        {/* Lower Section */}
        <section className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_360px]">

          {/* Properties */}
          <div>

            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-slate-500">
                Agent Properties
              </p>

              <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl dark:text-white">
                Properties handled by {agent.name.split(" ")[0]}
              </h2>

              <p className="mt-2 text-slate-500">
                Explore some of the properties available through this agent.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">

              {agentProperties.map((property) => (
                <Link
                  key={property.id}
                  to={`/property/${property.id}`}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
                >

                  <div className="overflow-hidden">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-4">

                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      {property.type}
                    </span>

                    <h3 className="mt-2 line-clamp-1 font-bold text-slate-900 dark:text-white">
                      {property.title}
                    </h3>

                    <div className="mt-2 flex items-center gap-1.5 text-sm text-slate-500">
                      <MapPin size={15} />
                      <span className="line-clamp-1">
                        {property.location}
                      </span>
                    </div>

                    <p className="mt-4 font-bold text-slate-900 dark:text-white">
                      {property.priceLabel}
                    </p>

                    <div className="mt-4 text-sm font-bold text-slate-500 transition group-hover:text-slate-900 dark:group-hover:text-white">
                      View Property →
                    </div>

                  </div>
                </Link>
              ))}

            </div>
          </div>

          {/* Contact Form */}
          <aside>
            <div className="sticky top-28 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">

              <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                Contact {agent.name.split(" ")[0]}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Have questions about a property? Send a message and our
                agent will get back to you.
              </p>

              <form
                onSubmit={handleMessage}
                className="mt-6 space-y-4"
              >

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Your Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    placeholder="Enter your phone"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Message
                  </label>

                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="I'm interested in a property..."
                    rows="5"
                    required
                    className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                >
                  <Send size={17} />
                  Send Message
                </button>

              </form>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}

export default AgentDetails;