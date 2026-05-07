"use client";

import { useEffect, useState } from "react";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Deteksi preferensi sistem
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const savedTheme = localStorage.getItem("theme");

    // Tentukan tema yang akan digunakan
    let shouldBeDark = false;
    if (savedTheme === "light") {
      shouldBeDark = false;
    } else if (savedTheme === "dark") {
      shouldBeDark = true;
    } else {
      shouldBeDark = prefersDark;
    }

    // Aplikasikan tema ke document
    if (shouldBeDark) {
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
    }

    // Dengarkan perubahan preferensi sistem
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleThemeChange = (e: MediaQueryListEvent) => {
      const savedTheme = localStorage.getItem("theme");
      if (!savedTheme || savedTheme === "system") {
        // Hanya terapkan tema sistem jika user belum menyimpan preferensi manual
        if (e.matches) {
          document.documentElement.classList.remove("light");
        } else {
          document.documentElement.classList.add("light");
        }
      }
    };

    mediaQuery.addEventListener("change", handleThemeChange);
    setMounted(true);

    return () => mediaQuery.removeEventListener("change", handleThemeChange);
  }, []);

  // Hindari hydration mismatch dengan tidak render sampai mounted
  if (!mounted) return <>{children}</>;

  return <>{children}</>;
}
