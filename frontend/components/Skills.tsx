"use client";

import { useEffect, useRef, useState } from "react";
import { skills } from "@/lib/data";
import SectionLabel from "./SectionLabel";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        maxWidth: 960,
        margin: "0 auto",
        padding: "120px 48px",
        borderTop: "1px solid var(--border)",
      }}
    >
      <SectionLabel>Skills</SectionLabel>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 40,
        }}
      >
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 80}>
            <SkillCategory {...group} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function SkillCategory({
  category,
  items,
}: {
  category: string;
  items: { name: string; level: number }[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <h3
        style={{
          fontSize: 11,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--muted)",
          marginBottom: 20,
          paddingBottom: 12,
          borderBottom: "1px solid var(--border)",
        }}
      >
        {category}
      </h3>
      {items.map(({ name, level }) => (
        <div
          key={name}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 12,
            color: "var(--text)",
            padding: "8px 0",
          }}
        >
          {name}
          <div
            style={{
              width: 60,
              height: 2,
              background: "var(--border)",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                background: "var(--accent)",
                width: animate ? `${level}%` : "0%",
                transition: "width 1s ease",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
