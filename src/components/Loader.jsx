function Loader({
  size = "medium",
  text = "Loading...",
  fullScreen = false,
}) {
  const sizes = {
    small: "h-5 w-5 border-2",
    medium: "h-8 w-8 border-3",
    large: "h-12 w-12 border-4",
  };

  const loaderSize = sizes[size] || sizes.medium;

  if (fullScreen) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 dark:bg-slate-950">
        <div className="flex flex-col items-center justify-center">
          <div
            className={`${loaderSize} animate-spin rounded-full border-blue-600 border-t-transparent`}
          />

          {text && (
            <p className="mt-4 text-sm font-medium text-slate-500 dark:text-slate-400">
              {text}
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center py-10">
      <div className="flex flex-col items-center justify-center">
        <div
          className={`${loaderSize} animate-spin rounded-full border-blue-600 border-t-transparent`}
        />

        {text && (
          <p className="mt-3 text-sm font-medium text-slate-500 dark:text-slate-400">
            {text}
          </p>
        )}
      </div>
    </div>
  );
}

export default Loader;