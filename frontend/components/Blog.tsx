"use client";

import Link from "next/link";
import { posts } from "@/lib/data";
import SectionLabel from "./SectionLabel";
import Reveal from "./Reveal";

export default function Blog() {
  return (
    <section
      id="blog"
      style={{
        maxWidth: 960,
        margin: "0 auto",
        padding: "120px 48px",
        borderTop: "1px solid var(--border)",
      }}
    >
      <SectionLabel>Writing</SectionLabel>
      <Reveal>
        <div>
          {posts.map((post) => (
            <Link
              key={post.title}
              href={post.href}
              style={{
                display: "grid",
                gridTemplateColumns: "100px 1fr auto",
                alignItems: "start",
                gap: 32,
                padding: "28px 0",
                borderBottom: "1px solid var(--border)",
                textDecoration: "none",
                color: "inherit",
              }}
              onMouseEnter={(e) => {
                (
                  e.currentTarget.querySelector(".bt") as HTMLElement
                ).style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                (
                  e.currentTarget.querySelector(".bt") as HTMLElement
                ).style.color = "var(--text)";
              }}
            >
              <div
                style={{ fontSize: 11, color: "var(--muted)", paddingTop: 3 }}
              >
                {post.date}
              </div>
              <div>
                <div
                  className="bt"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: 16,
                    color: "var(--text)",
                    transition: "color 0.2s",
                    marginBottom: 6,
                  }}
                >
                  {post.title}
                </div>
                <div style={{ fontSize: 12, color: "var(--muted)" }}>
                  {post.excerpt}
                </div>
              </div>
              <span
                style={{
                  fontSize: 10,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  border: "1px solid var(--accent)",
                  padding: "3px 8px",
                  whiteSpace: "nowrap",
                }}
              >
                {post.tag}
              </span>
            </Link>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
