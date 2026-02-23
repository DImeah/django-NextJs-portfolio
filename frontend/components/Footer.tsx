import { personal } from "@/lib/data";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "32px 48px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: 960,
        margin: "0 auto",
        fontSize: 11,
        color: "var(--muted)",
      }}
    >
      <span>
        © {new Date().getFullYear()} {personal.name}
      </span>
      <span>Built with care — no frameworks harmed</span>
    </footer>
  );
}
