"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import IconButton from "./lib/IconButton";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <IconButton disabled={true}>
        <div className="size-5 rounded-full animate-none bg-gray-200 dark:bg-gray-700" />
      </IconButton>
    );
  }

  return (
    <div
      onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
    >
      <IconButton tooltip={theme === "dark" ? "Light Mode" : "Dark Mode"}>
        {theme === "dark" ? (
          <Sun className="size-5 transition-colors duration-100" />
        ) : (
          <Moon className="size-5 transition-colors duration-100" />
        )}
      </IconButton>
    </div>
  );
}
