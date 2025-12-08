"use client";

import { Button } from "antd";
import { SunOutlined, MoonOutlined } from "@ant-design/icons";
import { useTheme } from "@/lib/ThemeContext";

export default function ThemeToggle({ isScrolled = false }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      type="text"
      icon={theme === "light" ? <MoonOutlined /> : <SunOutlined />}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-[var(--accent)] transition-colors"
      style={{
        color: isScrolled ? "var(--primary)" : "white",
        fontSize: "18px",
      }}
    />
  );
}
