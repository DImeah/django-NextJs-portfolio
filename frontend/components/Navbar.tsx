"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { personal } from "@/lib/data";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "24px 48px",
        borderBottom: scrolled
          ? "1px solid var(--border)"
          : "1px solid transparent",
        background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <Link
        href="/"
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: 18,
          letterSpacing: "-0.5px",
          color: "var(--accent)",
          textDecoration: "none",
        }}
      >
        {personal.initials}
      </Link>
      <ul style={{ display: "flex", gap: 32, listStyle: "none" }}>
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              style={{
                color: "var(--muted)",
                textDecoration: "none",
                fontSize: 12,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--text)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--muted)")
              }
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
