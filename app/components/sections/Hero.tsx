"use client";
import { useState, useRef } from "react";

const wordIcons: Record<string, { icon: React.ReactNode; color: string; bgStyle?: React.CSSProperties }[]> = {
  brand: [
    { icon: "✦", color: "#a855f7" },
    { icon: "✧", color: "#c084fc" },
    { icon: "◆",  color: "#9333ea" },
  ],
  website: [
    { icon: "▣", color: "#22c55e" },
    { icon: "⊞", color: "#4ade80" },
    { icon: "▤", color: "#16a34a" },
  ],
  "ux/ui design": [
    { /* Smartphone */
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><path d="M12 18h.01"/></svg>,
      color: "#00e5ff",
      bgStyle: { borderRadius: "50% 50% 50% 0", padding: "12px", background: "rgba(255,255,255,0.06)", backdropFilter: "blur(8px)", border: "1px solid rgba(0,229,255,0.25)", boxShadow: "0 8px 32px rgba(0,229,255,0.15)" }
    },
    { /* Stack/Layers */
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 12 12 17 22 12"/><polyline points="2 17 12 22 22 17"/></svg>,
      color: "#00e5ff",
      bgStyle: { borderRadius: "0 50% 50% 50%", padding: "12px", background: "rgba(255,255,255,0.06)", backdropFilter: "blur(8px)", border: "1px solid rgba(0,229,255,0.25)", boxShadow: "0 8px 32px rgba(0,229,255,0.15)" }
    },
    { /* Grid */
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>,
      color: "#00e5ff",
      bgStyle: { borderRadius: "50% 50% 50% 0", padding: "12px", background: "rgba(255,255,255,0.06)", backdropFilter: "blur(8px)", border: "1px solid rgba(0,229,255,0.25)", boxShadow: "0 8px 32px rgba(0,229,255,0.15)" }
    },
  ],
};

const floatPositions = [
  { top: "-55%", left: "-30%",  delay: "0s" },
  { top: "60%",  left: "-15%", delay: "0.15s" },
  { top: "-40%", left: "75%",  delay: "0.08s" },
];

/* ─── CodeBraces icon `{/}` ─────────────────────────────────────────── */
function Braces() {
  return (
    <span style={{
      fontFamily: "monospace",
      fontSize: "0.8rem",
      color: "rgba(255,255,255,0.35)",
      letterSpacing: "-0.05em",
      lineHeight: 1,
      display: "inline-block",
      marginBottom: "0.35rem",
    }}>
      {"{/}"}
    </span>
  );
}

/* ─── Interactive accent word pill ──────────────────────────────────── */
function AccentWord({ word, isHovered, onEnter, onLeave }: {
  word: string;
  isHovered: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const icons = wordIcons[word] ?? [];
  return (
    <span
      style={{ position: "relative", display: "inline-block" }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {/* Floating icons */}
      {isHovered && icons.map((ic, i) => (
        <span
          key={i}
          aria-hidden
          style={{
            position: "absolute",
            top: floatPositions[i].top,
            left: floatPositions[i].left,
            fontSize: "1.1rem",
            color: ic.color,
            animation: `floatBob 1.4s ease-in-out infinite alternate`,
            animationDelay: floatPositions[i].delay,
            pointerEvents: "none",
            zIndex: 10,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            ...(ic.bgStyle ? ic.bgStyle : { filter: "drop-shadow(0 0 6px currentColor)" }),
          }}
        >
          {ic.icon}
        </span>
      ))}

      {/* Pill */}
      <em
        style={{
          display: "inline-block",
          fontStyle: "italic",
          fontFamily: "var(--font-baskerville), 'Libre Baskerville', Georgia, serif",
          fontWeight: 400,
          fontSize: "clamp(2rem, 4.5vw, 4.5rem)",
          lineHeight: 1.05,
          color: isHovered
            ? word === "brand" ? "#c084fc"
            : word === "website" ? "#4ade80"
            : "#60a5fa"
            : "#fff",
          transition: "color 0.25s ease",
          background: "rgba(30,30,40,0.72)",
          border: isHovered
            ? `1px solid ${word === "brand" ? "rgba(192,132,252,0.4)" : word === "website" ? "rgba(74,222,128,0.4)" : "rgba(96,165,250,0.4)"}`
            : "1px solid rgba(255,255,255,0.10)",
          borderRadius: "999px",
          padding: "0.05em 0.45em",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          cursor: "default",
          boxShadow: isHovered
            ? `0 0 30px ${word === "brand" ? "rgba(168,85,247,0.25)" : word === "website" ? "rgba(34,197,94,0.2)" : "rgba(59,130,246,0.2)"}`
            : "none",
          transition2: "color 0.25s, border-color 0.25s, box-shadow 0.25s",
        } as React.CSSProperties}
      >
        {word}
      </em>
    </span>
  );
}

export default function Hero() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
        paddingTop: "84px",
        background: "#08080a",
      }}
    >
      {/* ── Radial gradient backgrounds ── */}
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 90% 70% at 20% 50%, rgba(20, 80, 255, 0.50) 0%, transparent 60%)",
      }}/>
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 60% 60% at 70% 30%, rgba(10, 60, 220, 0.35) 0%, transparent 70%)",
      }}/>
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 50% 40% at 50% 80%, rgba(0, 50, 200, 0.25) 0%, transparent 70%)",
      }}/>

      {/* ── Content ── */}
      <div style={{
        maxWidth: "1360px",
        margin: "0 auto",
        padding: "clamp(2.5rem, 6vw, 5rem) clamp(1rem, 3vw, 2.5rem) clamp(2rem, 4vw, 3rem)",
        width: "100%",
        position: "relative",
        zIndex: 1,
      }}>

        {/* Sub-label */}
        <p style={{
          fontSize: "clamp(0.78rem, 1.4vw, 0.9rem)",
          color: "rgba(255,255,255,0.45)",
          fontWeight: 400,
          textAlign: "center",
          letterSpacing: "0.01em",
          marginBottom: "clamp(1rem, 2.5vw, 1.75rem)",
        }}>
          Digital Product Design And Development Company
        </p>

        {/* ── Main Headline ── */}
        <h1 style={{
          fontFamily: "var(--font-outfit), sans-serif",
          fontSize: "clamp(2.5rem, 5vw, 4.4rem)",
          fontWeight: 800,
          lineHeight: 1.15,
          letterSpacing: "-0.025em",
          color: "#fff",
          textAlign: "center",
          margin: "0 auto",
          maxWidth: "1400px", /* widened to prevent early wrapping */
        }}>
          {/* Line 1 */}
          Your design &amp; dev partner that unites
          <br className="hide-mobile" />
          
          {/* Line 2 */}
          <span style={{ display: "inline-flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "0.2em", verticalAlign: "middle", margin: "0.15em 0" }}>
            <AccentWord word="brand" isHovered={hovered==="brand"} onEnter={()=>setHovered("brand")} onLeave={()=>setHovered(null)}/>
            <span style={{ fontWeight: 800 }}>, </span>
            <AccentWord word="website" isHovered={hovered==="website"} onEnter={()=>setHovered("website")} onLeave={()=>setHovered(null)}/>
            <span style={{ fontWeight: 800 }}>, </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "0.2em", whiteSpace: "nowrap" }}>
              <AccentWord word="ux/ui design" isHovered={hovered==="ux/ui design"} onEnter={()=>setHovered("ux/ui design")} onLeave={()=>setHovered(null)}/>
              <span> into</span>
            </span>
          </span>
          <br className="hide-mobile" />
          
          {/* Line 3 */}
          a holistic{" "}
          <span style={{
              display: "inline-flex",
              alignItems: "center",
              background: "rgba(80,40,180,0.35)",
              border: "1px solid rgba(150,100,255,0.3)",
              borderRadius: "16px",
              padding: "6px 12px 6px 6px",
              gap: "8px",
              backdropFilter: "blur(10px)",
              fontSize: "0.6em",
              fontWeight: 500,
              letterSpacing: "0.01em",
              transition: "transform 0.3s ease",
              cursor: "pointer",
              verticalAlign: "middle",
              margin: "0 0.15em",
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = "scale(1.05) translateY(-3px)"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = "scale(1) translateY(0)"}
          >
              <span style={{
                width: "52px",
                height: "40px",
                borderRadius: "10px",
                background: "linear-gradient(135deg, #5b21b6 0%, #7c3aed 50%, #312e81 100%)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.4em",
                flexShrink: 0,
                overflow: "hidden",
                position: "relative",
              }}>
                <span style={{ opacity: 0.9 }}>🖥️</span>
              </span>
              <span style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                color: "rgba(255,255,255,0.85)",
              }}>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
                  <circle cx="8" cy="8" r="7" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
                  <path d="M6 5.5l5 2.5-5 2.5V5.5z" fill="#fff"/>
                </svg>
                Play
              </span>
          </span>
          {" "}
          <em style={{
            fontFamily: "var(--font-baskerville), 'Libre Baskerville', Georgia, serif",
            fontStyle: "italic",
            fontWeight: 400,
            color: "#a78bfa",
            letterSpacing: "-0.01em",
          }}>
            product
          </em>
        </h1>

        {/* ── Info blocks + Tags ── */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          marginTop: "clamp(2rem, 4vw, 3.5rem)",
          justifyContent: "flex-start",
          alignItems: "flex-end",
        }}>
          {/* Left block */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem", flex: "1 1 200px", maxWidth: "280px" }}>
            <Braces/>
            <p style={{ fontSize: "clamp(0.82rem, 1.3vw, 0.94rem)", color: "rgba(255,255,255,0.62)", lineHeight: 1.55, margin: 0 }}>
              Works closely with reputable brands, businesses and fortune 500 companies
            </p>
            {/* Industry tags */}
            <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginTop: "0.75rem" }}>
              {["SaaS", "AI", "Web 3.0"].map(tag => (
                <span key={tag} style={{
                  padding: "0.25rem 0.75rem",
                  borderRadius: "999px",
                  border: "1px solid rgba(255,255,255,0.16)",
                  fontSize: "0.78rem",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.7)",
                  background: "rgba(255,255,255,0.05)",
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right block */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem", flex: "1 1 200px", maxWidth: "280px" }}>
            <Braces/>
            <p style={{ fontSize: "clamp(0.82rem, 1.3vw, 0.94rem)", color: "rgba(255,255,255,0.62)", lineHeight: 1.55, margin: 0 }}>
              Since 2016, we&apos;ve helped to achieve business goals and deliver results that inspire
            </p>
          </div>
        </div>

        {/* ── Book a Call CTA ── */}
        <div style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "clamp(-3rem, -2vw, -1.5rem)",
          paddingRight: "clamp(0rem, 2vw, 2rem)",
        }} className="hero-cta-row">
          <a
            href="#contact"
            id="hero-book-call"
            className="hero-call-btn"
          >
            {/* Arrow icon square */}
            <span className="hero-call-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="hero-call-arrow">
                <path d="M4 16L16 4M16 4H6M16 4V14" stroke="#0a0a0a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            {/* Text */}
            <span className="hero-call-text">
              Book a Call
            </span>
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div aria-hidden style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: "120px",
        background: "linear-gradient(to bottom, transparent, #08080a)",
        pointerEvents: "none",
      }}/>

      <style>{`
        .hero-call-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          text-decoration: none;
          box-shadow: 0 4px 30px rgba(196,255,0,0.25);
          transition: all 0.3s ease;
          border-radius: 99px; /* Outer shadow wrapper shape approx */
        }
        .hero-call-icon {
          width: 54px;
          height: 54px;
          background: #c6ff00;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border-radius: 50% 50% 0 50%; /* Tear drop points bottom-right */
          transition: all 0.3s ease;
        }
        .hero-call-text {
          padding: 0 1.75rem;
          height: 54px;
          display: inline-flex;
          align-items: center;
          background: #c6ff00; /* Match lime green explicitly */
          font-weight: 700;
          font-size: 1rem;
          color: #0a0a0a;
          letter-spacing: -0.01em;
          white-space: nowrap;
          border-radius: 99px;
          transition: all 0.3s ease;
        }
        .hero-call-arrow {
          transform: rotate(90deg); /* From ↗ to ↘ */
          transition: all 0.3s ease;
        }
        
        /* Hover states */
        .hero-call-btn:hover {
          box-shadow: 0 8px 40px rgba(255,255,255,0.25);
          transform: translateY(-2px);
        }
        .hero-call-btn:hover .hero-call-icon {
          border-radius: 0 50% 50% 50%; /* Tear drop points top-left */
          background: #fff;
        }
        .hero-call-btn:hover .hero-call-text {
          background: #fff;
        }
        .hero-call-btn:hover .hero-call-arrow {
          transform: rotate(-45deg); /* From ↗ to ↑ */
        }

        @keyframes floatBob {
          from { transform: translateY(0) rotate(0deg) scale(1); }
          to   { transform: translateY(-12px) rotate(15deg) scale(1.15); }
        }
        @media (max-width: 640px) {
          .hide-mobile { display: none; }
          .hero-cta-row {
            justify-content: center !important;
            margin-top: 2rem !important;
            padding-right: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
