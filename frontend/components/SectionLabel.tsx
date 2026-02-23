export default function SectionLabel({ children }: { children: string }) {
  return (
    <div
      style={{
        fontSize: 11,
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        color: "var(--accent)",
        marginBottom: 40,
        display: "flex",
        alignItems: "center",
        gap: 12,
      }}
    >
      <span
        style={{
          display: "block",
          width: 24,
          height: 1,
          background: "var(--accent)",
        }}
      />
      {children}
    </div>
  );
}
