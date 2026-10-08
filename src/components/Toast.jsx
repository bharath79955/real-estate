import {
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Info,
  X,
} from "lucide-react";

function Toast({
  message,
  type = "success",
  onClose,
}) {
  const styles = {
    success: {
      icon: CheckCircle2,
      iconClass: "text-green-500",
      borderClass: "border-green-200 dark:border-green-900",
    },

    error: {
      icon: XCircle,
      iconClass: "text-red-500",
      borderClass: "border-red-200 dark:border-red-900",
    },

    warning: {
      icon: AlertTriangle,
      iconClass: "text-yellow-500",
      borderClass: "border-yellow-200 dark:border-yellow-900",
    },

    info: {
      icon: Info,
      iconClass: "text-blue-500",
      borderClass: "border-blue-200 dark:border-blue-900",
    },
  };

  const selectedStyle = styles[type] || styles.success;
  const Icon = selectedStyle.icon;

  if (!message) {
    return null;
  }

  return (
    <div
      className={`fixed right-4 top-4 z-[9999] flex w-[calc(100%-2rem)] max-w-sm items-start gap-3 rounded-xl border bg-white p-4 shadow-xl dark:bg-slate-900 ${selectedStyle.borderClass}`}
      role="alert"
    >
      <Icon
        size={21}
        className={`mt-0.5 shrink-0 ${selectedStyle.iconClass}`}
      />

      <p className="flex-1 text-sm font-medium leading-6 text-slate-700 dark:text-slate-200">
        {message}
      </p>

      {onClose && (
        <button
          type="button"
          onClick={onClose}
          aria-label="Close notification"
          className="shrink-0 rounded-lg p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-white"
        >
          <X size={17} />
        </button>
      )}
    </div>
  );
}

export default Toast;