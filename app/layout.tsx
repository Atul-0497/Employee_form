"use client";

import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Sun, Moon, IdCardLanyard } from "lucide-react";
import "./globals.css";

export default function RootLayout({ children }: any) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "light";
    setTheme(saved);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    theme === "dark"
      ? root.classList.add("dark")
      : root.classList.remove("dark");

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <html>
      <body className="min-h-screen transition bg-gradient-to-br from-blue-100 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* HEADER */}
        <div className="relative w-full px-6 py-4 bg-white/40 dark:bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-md flex items-center">
          {/* LEFT ICON */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-xl shadow-lg">
              <IdCardLanyard size={20} />
            </div>
          </div>

          {/* CENTER TITLE */}
          <div className="absolute left-1/2 -translate-x-1/2 text-center">
            <h1 className="text-lg font-semibold text-black dark:text-white">
              NEW STAFF RECRUITMENT
            </h1>
          </div>

          {/* RIGHT BUTTON */}
          <div className="ml-auto">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-white/10 backdrop-blur-md border border-white/20 text-black dark:text-white"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
        <Toaster position="top-center" />
        <div className="p-4">{children}</div>
      </body>
    </html>
  );
}
