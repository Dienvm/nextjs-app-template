/*
<ai_context>
This client component provides a theme switcher for the app.
</ai_context>
*/

"use client";

import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import type { HTMLAttributes, ReactNode } from "react";

interface ThemeSwitcherProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const ThemeSwitcher = ({ children, ...props }: ThemeSwitcherProps) => {
  const { setTheme, theme } = useTheme();

  const handleChange = (theme: "dark" | "light") => {
    localStorage.setItem("theme", theme);
    setTheme(theme);
  };

  return (
    <button
      className={cn(
        "p-1 hover:cursor-pointer hover:opacity-50 border-none bg-transparent",
        props.className,
      )}
      onClick={() => handleChange(theme === "light" ? "dark" : "light")}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
      type="button"
    >
      {theme === "dark" ? (
        <Moon className="size-6" />
      ) : (
        <Sun className="size-6" />
      )}
    </button>
  );
};
