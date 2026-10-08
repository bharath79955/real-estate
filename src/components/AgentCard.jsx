import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Star,
  ArrowUpRight,
} from "lucide-react";
import toast from "react-hot-toast";

function AgentCard({ agent }) {
  if (!agent) {
    return null;
  }

  const handleContact = () => {
    toast.success(`Contact request sent to ${agent.name}.`);
  };

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">

      {/* Agent Image */}
      <div className="relative h-64 overflow-hidden bg-slate-100 dark:bg-slate-800 sm:h-72">
        <img
          src={agent.image}
          alt={agent.name}
          loading="lazy"
          className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* Rating */}
        <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-slate-900 shadow-sm backdrop-blur-sm">
          <Star
            size={14}
            fill="currentColor"
            className="text-yellow-500"
          />

          {agent.rating}
        </div>

        {/* Experience */}
        <div className="absolute bottom-4 left-4 rounded-lg bg-black/50 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
          {agent.experience}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">

        {/* Name */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          {agent.name}
        </h3>

        {/* Role */}
        <p className="mt-1 text-sm font-medium text-blue-600">
          {agent.role}
        </p>

        {/* Location */}
        <div className="mt-4 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <MapPin
            size={16}
            className="shrink-0 text-blue-600"
          />

          <span>{agent.location}</span>
        </div>

        {/* Contact */}
        <div className="mt-3 space-y-2">

          <a
            href={`tel:${agent.phone}`}
            className="flex items-center gap-2 text-sm text-slate-500 transition hover:text-blue-600 dark:text-slate-400"
          >
            <Phone size={15} />
            <span className="truncate">{agent.phone}</span>
          </a>

          <a
            href={`mailto:${agent.email}`}
            className="flex items-center gap-2 text-sm text-slate-500 transition hover:text-blue-600 dark:text-slate-400"
          >
            <Mail size={15} />
            <span className="truncate">{agent.email}</span>
          </a>
        </div>

        {/* Stats */}
        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-slate-50 p-3 text-center dark:bg-slate-800">
            <p className="text-lg font-bold text-slate-900 dark:text-white">
              {agent.properties}
            </p>

            <p className="text-xs text-slate-500 dark:text-slate-400">
              Properties
            </p>
          </div>

          <div className="rounded-xl bg-slate-50 p-3 text-center dark:bg-slate-800">
            <p className="text-lg font-bold text-slate-900 dark:text-white">
              {agent.experience}
            </p>

            <p className="text-xs text-slate-500 dark:text-slate-400">
              Experience
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-5 grid grid-cols-2 gap-3">

          <button
            type="button"
            onClick={handleContact}
            className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg"
          >
            Contact
          </button>

          <Link
            to={`/agent/${agent.id}`}
            className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-blue-500 dark:hover:text-blue-400"
          >
            Profile
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default AgentCard;