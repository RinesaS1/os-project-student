import { useThemeContext } from "@context/ThemeContext/ThemeContext";

export const Preferences = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <div className="flex flex-col flex-1 max-h-full px-6 overflow-y-auto">
      <div className="flex flex-col gap-6 py-6">
        <div>
          <h1 className="text-4xl font-bold text-left">Preferences</h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Choose your preferred theme.
          </p>
        </div>

        <div className="flex flex-col gap-3 p-6 rounded-3xl bg-white/90 border border-slate-200 shadow-sm shadow-slate-200/80 dark:bg-slate-900/80 dark:border-slate-700">
          <label className="flex items-center justify-between gap-4">
            <span className="text-base font-semibold text-slate-900 dark:text-slate-100">
              Theme mode
            </span>
            <button
              type="button"
              onClick={toggleTheme}
              className="px-4 py-2 text-sm font-semibold rounded-xl bg-slate-200 text-slate-900 hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600"
            >
              {theme === "dark" ? "Switch to Light" : "Switch to Dark"}
            </button>
          </label>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Your theme choice is saved and will persist across refresh.
          </p>
        </div>
      </div>
    </div>
  );
};
