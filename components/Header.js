"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button, Drawer } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import ThemeToggle from "./ui/ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#courses", label: "Courses" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const elementId = href.replace("/#", "");
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setMobileMenuOpen(false);
    } else {
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Skip link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-lg py-2.5"
            : "bg-[var(--primary)] shadow-md py-3"
        }`}
        role="banner"
      >
        <div className="container-custom">
          <nav
            className="flex items-center justify-between"
            role="navigation"
            aria-label="Main navigation"
          >
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 text-xl md:text-2xl font-bold"
              style={{ color: isScrolled ? "var(--primary)" : "white" }}
            >
              <span className="hidden sm:inline">ABC Computronics</span>
              <span className="sm:hidden">ABC</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`font-medium text-base transition-colors ${
                    isScrolled
                      ? "text-[var(--foreground)] hover:text-[var(--primary)]"
                      : "!text-white hover:text-[var(--secondary)]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <ThemeToggle isScrolled={isScrolled} />
              <Link href="/contact" className="hidden sm:block">
                <Button
                  type="primary"
                  size="large"
                  className="!text-white"
                  style={{
                    borderColor: "var(--secondary)",
                    fontWeight: 600,
                    height: "44px",
                    paddingInline: "24px",
                    fontSize: "15px",
                  }}
                >
                  Enroll Now
                </Button>
              </Link>

              {/* Mobile Menu Button - Only visible on mobile */}
              <div className="block md:hidden">
                <Button
                  type="text"
                  icon={<MenuOutlined style={{ fontSize: "20px" }} />}
                  onClick={() => setMobileMenuOpen(true)}
                  style={{
                    color: isScrolled ? "var(--primary)" : "white",
                    height: "44px",
                    width: "44px",
                  }}
                  aria-label="Open menu"
                />
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <Drawer
        title={
          <span style={{ color: "var(--primary)", fontWeight: "bold" }}>
            ABC Computronics
          </span>
        }
        placement="right"
        onClose={() => setMobileMenuOpen(false)}
        open={mobileMenuOpen}
        closeIcon={<CloseOutlined style={{ color: "var(--foreground)" }} />}
        styles={{
          body: { padding: 0, backgroundColor: "var(--background)" },
          header: {
            backgroundColor: "var(--background)",
            borderColor: "var(--card-border)",
          },
        }}
      >
        <nav
          className="flex flex-col p-4"
          role="navigation"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="py-4 px-2 text-lg font-medium border-b border-[var(--card-border)] hover:text-[var(--primary)] transition-colors"
              style={{ color: "var(--foreground)" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Button
              type="primary"
              size="large"
              block
              style={{
                backgroundColor: "var(--primary)",
                borderColor: "var(--primary)",
              }}
            >
              Enroll Now
            </Button>
          </Link>
        </nav>
      </Drawer>
    </>
  );
}
