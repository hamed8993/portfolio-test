"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="w-12 h-6 rounded-full bg-gray-300 dark:bg-gray-700 animate-pulse" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="
      cursor-pointer
        relative w-12 h-6 rounded-full 
        bg-primary-50 dark:bg-gray-700 
        transition-colors duration-300
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
        hover:bg-gray-400 dark:hover:bg-gray-600
      "
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <div
        className={`
          absolute top-1 w-4 h-4 rounded-full
          transition-all duration-300 ease-in-out
          flex items-center justify-center
          shadow-md
          ${isDark ? "left-7" : "left-1"}
        `}
      >
        <div className="relative w-3 h-3">
          <Sun
            className={`
              absolute w-3 h-3 text-white
              transition-all duration-300
              ${
                isDark
                  ? "opacity-100 scale-100 rotate-0"
                  : "opacity-0 scale-0 -rotate-90"
              }
            `}
          />
          <Moon
            className={`
              absolute w-3 h-3 text-black
              transition-all duration-300
              ${
                isDark
                  ? "opacity-0 scale-0 rotate-90"
                  : "opacity-100 scale-100 rotate-0"
              }
            `}
          />
        </div>
      </div>
    </button>
  );
}
