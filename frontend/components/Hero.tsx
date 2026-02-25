import Image from "next/image";
import { personal } from "@/lib/data";

export default function Hero() {
  const [first, ...rest] = personal.name.split(" ");

  return (
    <section
      id="hero"
      style={{
        maxWidth: 960,
        margin: "0 auto",
        padding: "0 48px",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: 80,
        paddingBottom: 80,
        position: "relative",
      }}
    >
      {/* Left — text */}
      <div style={{ flex: 1 }}>
        <p
          style={{
            fontSize: 11,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--muted)",
            marginBottom: 20,
            animation: "fadeUp 0.7s ease forwards 0.2s",
            opacity: 0,
          }}
        >
          {personal.availability} · Based in {personal.location}
        </p>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(48px, 7vw, 88px)",
            lineHeight: 1,
            letterSpacing: "-3px",
            color: "var(--text)",
            animation: "fadeUp 0.7s ease forwards 0.4s",
            opacity: 0,
          }}
        >
          {first}
          <br />
          <span style={{ color: "var(--accent)" }}>{rest.join(" ")}.</span>
        </h1>
        <p
          style={{
            fontSize: 15,
            color: "var(--muted)",
            marginTop: 28,
            maxWidth: 420,
            lineHeight: 1.8,
            animation: "fadeUp 0.7s ease forwards 0.6s",
            opacity: 0,
          }}
        >
          {personal.tagline}
        </p>
        <div
          style={{
            display: "flex",
            gap: 16,
            marginTop: 48,
            animation: "fadeUp 0.7s ease forwards 0.8s",
            opacity: 0,
          }}
        >
          <a
            href="#projects"
            style={{
              padding: "12px 24px",
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              letterSpacing: "0.08em",
              textDecoration: "none",
              border: "1px solid var(--accent)",
              background: "var(--accent)",
              color: "#0a0a0a",
            }}
          >
            View my work
          </a>
          <a
            href="#contact"
            style={{
              padding: "12px 24px",
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              letterSpacing: "0.08em",
              textDecoration: "none",
              border: "1px solid var(--border)",
              background: "transparent",
              color: "var(--text)",
            }}
          >
            Get in touch
          </a>
        </div>
      </div>

      {/* Right — avatar */}
      <div
        style={{
          flexShrink: 0,
          marginLeft: 80,
          animation: "fadeUp 0.7s ease forwards 0.5s",
          opacity: 0,
        }}
      >
        {/* Accent border frame */}
        <div
          style={{
            position: "relative",
            width: 280,
            height: 340,
          }}
        >
          {/* Offset accent rectangle */}
          <div
            style={{
              position: "absolute",
              top: 12,
              left: 12,
              width: "100%",
              height: "100%",
              border: "2px solid var(--accent)",
              borderRadius: "50%",
              zIndex: 0,
            }}
          />
          {/* Image */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              overflow: "hidden",
              borderRadius: "50%",
              zIndex: 1,
              filter: "grayscale(20%)",
            }}
          >
            <Image
              src="/avatar.jpg"
              alt="Your Name"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
              priority
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: 48,
          display: "flex",
          alignItems: "center",
          gap: 12,
          color: "var(--muted)",
          fontSize: 11,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          animation: "fadeUp 0.7s ease forwards 1.2s",
          opacity: 0,
        }}
      >
        scroll
      </div>
    </section>
  );
}
