"use client";

/* ── Marquee ticker of client logos ─────────────────────────────────── */
const clients = [
  "Blockworks", "VOXE", "Automattic", "WordPress.com",
  "NewNew", "Interprefy", "Players Health", "Galaxy", "Flair",
  "GT Protocol", "Mojo CX", "Myso Finance", "Enzyme",
];

export default function Marquee() {
  // Duplicate so the ticker loops seamlessly
  const items = [...clients, ...clients];

  return (
    <div style={{
      width: "100%",
      overflow: "hidden",
      background: "transparent",
      padding: "2rem 0",
      position: "relative",
    }}>
      {/* Left fade */}
      <div aria-hidden style={{
        position: "absolute", left: 0, top: 0, bottom: 0, width: "120px", zIndex: 2,
        background: "linear-gradient(to right, #08080a, transparent)",
        pointerEvents: "none",
      }}/>
      {/* Right fade */}
      <div aria-hidden style={{
        position: "absolute", right: 0, top: 0, bottom: 0, width: "120px", zIndex: 2,
        background: "linear-gradient(to left, #08080a, transparent)",
        pointerEvents: "none",
      }}/>

      <div style={{
        display: "flex",
        gap: "3.5rem",
        width: "max-content",
        animation: "marqueeScroll 30s linear infinite",
      }}>
        {items.map((client, i) => (
          <span
            key={`${client}-${i}`}
            style={{
              fontSize: "0.9rem",
              fontWeight: 600,
              color: "rgba(255,255,255,0.22)",
              whiteSpace: "nowrap",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              transition: "color 0.2s",
              cursor: "default",
              userSelect: "none",
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)")}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.22)")}
          >
            {client}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marqueeScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
