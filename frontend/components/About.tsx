"use client";

import { personal, stats } from "@/lib/data";
import SectionLabel from "./SectionLabel";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section
      id="about"
      style={{
        maxWidth: 960,
        margin: "0 auto",
        padding: "120px 48px",
        borderTop: "1px solid var(--border)",
      }}
    >
      <SectionLabel>About me</SectionLabel>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "start",
        }}
      >
        <Reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {personal.bio.map((para, i) => (
              <p
                key={i}
                style={{ color: "var(--muted)", fontSize: 13, lineHeight: 1.8 }}
                dangerouslySetInnerHTML={{ __html: para }}
              />
            ))}
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {stats.map(({ number, label }) => (
              <div
                key={label}
                style={{
                  padding: 20,
                  border: "1px solid var(--border)",
                  transition: "border-color 0.2s",
                  cursor: "default",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "var(--border)")
                }
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: 36,
                    color: "var(--accent)",
                    letterSpacing: "-2px",
                  }}
                >
                  {number}
                </div>
                <div
                  style={{ fontSize: 12, color: "var(--muted)", marginTop: 4 }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
