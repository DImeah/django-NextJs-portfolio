"use client";

import { useState } from "react";
import { personal } from "@/lib/data";
import SectionLabel from "./SectionLabel";
import Reveal from "./Reveal";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const inputStyle: React.CSSProperties = {
    background: "var(--surface)",
    border: "1px solid var(--border)",
    color: "var(--text)",
    fontFamily: "var(--font-mono)",
    fontSize: 13,
    padding: "12px 16px",
    outline: "none",
    width: "100%",
    transition: "border-color 0.2s",
  };

  const links = [
    { href: `mailto:${personal.email}`, label: personal.email },
    { href: personal.github, label: personal.github.replace("https://", "") },
    {
      href: personal.linkedin,
      label: personal.linkedin.replace("https://", ""),
    },
    { href: personal.twitter, label: personal.twitter.replace("https://", "") },
  ];

  return (
    <section
      id="contact"
      style={{
        maxWidth: 960,
        margin: "0 auto",
        padding: "120px 48px",
        borderTop: "1px solid var(--border)",
      }}
    >
      <SectionLabel>Contact</SectionLabel>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "start",
        }}
      >
        <Reveal>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: 40,
              letterSpacing: "-2px",
              lineHeight: 1.1,
              marginBottom: 20,
            }}
          >
            Let&apos;s build
            <br />
            <span style={{ color: "var(--accent)" }}>something.</span>
          </h2>
          <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.8 }}>
            I&apos;m open to freelance projects, full-time opportunities, and
            interesting conversations.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              marginTop: 32,
            }}
          >
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                style={{
                  color: "var(--muted)",
                  textDecoration: "none",
                  fontSize: 12,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--muted)")
                }
              >
                → {label}
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            style={{ display: "flex", flexDirection: "column", gap: 16 }}
          >
            {[
              { label: "Name", type: "text", placeholder: "Your name" },
              { label: "Email", type: "email", placeholder: "your@email.com" },
            ].map(({ label, type, placeholder }) => (
              <div
                key={label}
                style={{ display: "flex", flexDirection: "column", gap: 6 }}
              >
                <label
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                  }}
                >
                  {label}
                </label>
                <input
                  type={type}
                  placeholder={placeholder}
                  required
                  style={inputStyle}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "var(--accent)")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "var(--border)")
                  }
                />
              </div>
            ))}
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label
                style={{
                  fontSize: 10,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                }}
              >
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Tell me about your project..."
                required
                style={{ ...inputStyle, resize: "none" }}
                onFocus={(e) =>
                  (e.currentTarget.style.borderColor = "var(--accent)")
                }
                onBlur={(e) =>
                  (e.currentTarget.style.borderColor = "var(--border)")
                }
              />
            </div>
            <button
              type="submit"
              disabled={sent}
              style={{
                alignSelf: "flex-start",
                padding: "12px 24px",
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                letterSpacing: "0.08em",
                border: "1px solid var(--accent)",
                background: sent ? "transparent" : "var(--accent)",
                color: sent ? "var(--accent)" : "#0a0a0a",
                cursor: sent ? "default" : "pointer",
                transition: "all 0.2s",
              }}
            >
              {sent ? "Sent ✓" : "Send message →"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
