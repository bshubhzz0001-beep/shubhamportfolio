"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { profile } from "@/lib/profile";

const navLinks = [
  { href: profile.resumePath, label: "Resume", external: true },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/95 shadow-md backdrop-blur-sm"
          : "bg-white/80 backdrop-blur-sm"
      )}
    >
      <nav className="section-container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#hero");
          }}
          className="font-display text-lg font-bold text-primary sm:text-xl"
        >
          {profile.shortName}
        </a>

        <ul className="hidden items-center gap-6 lg:gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                download={link.external ? profile.resumeFileName : undefined}
                onClick={(e) => {
                  if (link.external) return;
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm font-medium text-text-secondary transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="rounded-lg p-2 text-primary md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-accent bg-white px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  download={link.external ? profile.resumeFileName : undefined}
                  onClick={(e) => {
                    if (link.external) {
                      setMobileOpen(false);
                      return;
                    }
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="block py-2 text-text-secondary hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
