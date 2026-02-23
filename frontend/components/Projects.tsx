"use client";

import { projects } from "@/lib/data";
import SectionLabel from "./SectionLabel";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        maxWidth: 960,
        margin: "0 auto",
        padding: "120px 48px",
        borderTop: "1px solid var(--border)",
      }}
    >
      <SectionLabel>Projects</SectionLabel>
      <Reveal>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 1,
            background: "var(--border)",
            border: "1px solid var(--border)",
          }}
        >
          {projects.map((p) => (
            <div
              key={p.title}
              style={{
                background: "var(--bg)",
                padding: 32,
                gridColumn: p.featured ? "1 / -1" : undefined,
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (
                  e.currentTarget.querySelector(".ov") as HTMLElement
                ).style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                (
                  e.currentTarget.querySelector(".ov") as HTMLElement
                ).style.opacity = "0";
              }}
            >
              <div
                className="ov"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "var(--accent-dim)",
                  opacity: 0,
                  transition: "opacity 0.2s",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  fontSize: 10,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: 12,
                }}
              >
                {p.tag}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: 20,
                  color: "var(--text)",
                  marginBottom: 10,
                }}
              >
                {p.title}
              </div>
              <p
                style={{ fontSize: 12, color: "var(--muted)", lineHeight: 1.7 }}
              >
                {p.description}
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 24,
                  paddingTop: 16,
                  borderTop: "1px solid var(--border)",
                }}
              >
                <span style={{ fontSize: 11, color: "var(--muted)" }}>
                  {p.stack}
                </span>
                <a
                  href={p.link}
                  style={{
                    fontSize: 11,
                    color: "var(--accent)",
                    textDecoration: "none",
                  }}
                >
                  {p.linkLabel}
                </a>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
