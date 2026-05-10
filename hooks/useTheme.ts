import { useState, useEffect } from "react";

export type ThemeMode = "light" | "dark" | "system";

const THEME_MODE_KEY = "theme_mode";

const basePalette = {
  accent: "#F08A34",
  accentMuted: "#FFF0DE",
  accentSoft: "rgba(240, 138, 52, 0.18)",
  accentGlow: "rgba(240, 138, 52, 0.28)",
  success: "#3E9B67",
  successMuted: "#EAF7EF",
  danger: "#D9485F",
  dangerMuted: "#FFF0F3",
};

const lightPalette = {
  background: "#FFF9F2",
  surface: "#F8EBDD",
  card: "#FFFFFF",
  textPrimary: "#2B1E18",
  textSecondary: "#7E6354",
  buttonPrimary: "#2B1E18",
  buttonPrimaryText: "#FFFFFF",
  border: "rgba(126, 99, 84, 0.14)",
};

const darkPalette = {
  background: "#1A120E",
  surface: "#251A15",
  card: "#211812",
  textPrimary: "#FFF4EA",
  textSecondary: "#D1B29E",
  buttonPrimary: "#F08A34",
  buttonPrimaryText: "#1A120E",
  border: "rgba(209, 178, 158, 0.12)",
};

const getStoredTheme = (): ThemeMode => {
  if (typeof window === "undefined") return "system";
  const value = localStorage.getItem(THEME_MODE_KEY);
  if (value === "light" || value === "dark" || value === "system") {
    return value;
  }
  return "system";
};

const getSystemTheme = (): "light" | "dark" => {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export const useTheme = () => {
  const [mode, setMode] = useState<ThemeMode>("system");

  useEffect(() => {
    setMode(getStoredTheme());
  }, []);

  const setThemeMode = (next: ThemeMode) => {
    setMode(next);
    localStorage.setItem(THEME_MODE_KEY, next);
  };

  const system = getSystemTheme();

  const resolvedMode = mode === "system" ? system : mode;

  const isDark = resolvedMode === "dark";

  const palette = isDark ? darkPalette : lightPalette;

  return {
    mode,
    resolvedMode,
    isDark,
    setThemeMode,
    ...basePalette,
    ...palette,
  };
};
