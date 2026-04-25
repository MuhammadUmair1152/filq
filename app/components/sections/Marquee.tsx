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
      {/* Continuation glow for zoomed-out navoq look */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: "-55% -12% -45% -22%",
          pointerEvents: "none",
          background:
            "radial-gradient(62% 46% at 16% 28%, rgba(109, 103, 255, 0.75) 0%, rgba(68, 108, 255, 0.34) 42%, transparent 80%)",
          filter: "blur(34px)",
          opacity: 0.9,
          mixBlendMode: "screen",
          zIndex: 0,
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: "-26% -18% -55% -14%",
          pointerEvents: "none",
          background:
            "linear-gradient(108deg, transparent 24%, rgba(109, 118, 255, 0.2) 40%, rgba(67, 103, 255, 0.48) 52%, rgba(44, 88, 255, 0.2) 63%, transparent 82%)",
          filter: "blur(30px)",
          transform: "rotate(-4deg) scale(1.1)",
          opacity: 0.75,
          mixBlendMode: "screen",
          zIndex: 0,
        }}
      />

      {/* Left fade */}
      <div aria-hidden style={{
        position: "absolute", left: 0, top: 0, bottom: 0, width: "120px", zIndex: 2,
        background: "linear-gradient(to right, #08080a, transparent)",
        pointerEvents: "none",
      }} />
      {/* Right fade */}
      <div aria-hidden style={{
        position: "absolute", right: 0, top: 0, bottom: 0, width: "120px", zIndex: 2,
        background: "linear-gradient(to left, #08080a, transparent)",
        pointerEvents: "none",
      }} />

      <div style={{
        display: "flex",
        gap: "3.5rem",
        width: "max-content",
        animation: "marqueeScroll 30s linear infinite",
        position: "relative",
        zIndex: 1,
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