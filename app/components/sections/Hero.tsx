"use client";
import { useState } from "react";
import ButtonPrimary from "../ui/ButtonPrimary";

/* ─── Floating icon sets per keyword (purple / green / blue) ────────────── */
const wordIcons: Record<string, string[]> = {
  brand: [
    "https://cdn.prod.website-files.com/65647bbe0d57c8abad78e939/68b04f2d1b2bf2aaede8546b_tag_icon-.svg",
    "https://cdn.prod.website-files.com/65647bbe0d57c8abad78e939/68b04f2d287d42bae4264281_tag_icon--4.svg",
    "https://cdn.prod.website-files.com/65647bbe0d57c8abad78e939/68b04f2d4809843bd2954ca4_tag_icon--2.svg",
  ],
  website: [
    "https://cdn.prod.website-files.com/65647bbe0d57c8abad78e939/68b04f2dfe8bbf7eb56114d8_tag_icon--3.svg",
    "https://cdn.prod.website-files.com/65647bbe0d57c8abad78e939/68b04f2d287d42bae4264285_tag_icon--1.svg",
    "https://cdn.prod.website-files.com/65647bbe0d57c8abad78e939/68b04f2d14ee21bf64c5f97b_tag_icon--5.svg",
  ],
  "ux/ui design": [
    "https://cdn.prod.website-files.com/65647bbe0d57c8abad78e939/68b04f2d4b59b9f9721b3908_tag_icon--7.svg",
    "https://cdn.prod.website-files.com/65647bbe0d57c8abad78e939/68b04f2d60272d7359aa5d6c_tag_icon--8.svg",
    "https://cdn.prod.website-files.com/65647bbe0d57c8abad78e939/68b04f2d2e8445f3acc238d3_tag_icon--6.svg",
  ],
};

/* positions for the 3 floating orbit icons around each pill */
const floatPositions = [
  { top: "-45%", left: "-20%", delay: "0s" },
  { top: "50%", left: "-10%", delay: "0.15s" },
  { top: "-30%", left: "70%", delay: "0.08s" },
];

/* ─── {/} code-bracket decoration ──────────────────────────────────────── */
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

/* ─── Keyword pill — italic serif with hover effects (Arounda style) ──── */
function AccentWord({
  word,
  isHovered,
  onEnter,
  onLeave,
}: {
  word: string;
  isHovered: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const icons = wordIcons[word] ?? [];

  // Match exact colors from original
  const hoverColor =
    word === "brand" ? "#7B12FF" :
      word === "website" ? "#36FF12" : "#12FBFF";

  const borderColor =
    word === "brand" ? "rgba(123,18,255,0.4)" :
      word === "website" ? "rgba(54,255,18,0.4)" : "rgba(18,251,255,0.4)";

  const glowColor =
    word === "brand" ? "rgba(123,18,255,0.35)" :
      word === "website" ? "rgba(54,255,18,0.35)" : "rgba(18,251,255,0.35)";

  const tiltDeg = word === "website" ? 3 : -3;

  return (
    <span
      style={{ position: "relative", display: "inline-block" }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {/* 3 floating orbit icons — render unconditionally but transition opacity/transform */}
      {icons.map((ic, i) => {
        // Initial offset to match the scattering in Arounda CSS before assembling
        let offsetX = "0px", offsetY = "0px";
        if (word === "brand") {
          if (i === 0) { offsetX = "-20px"; offsetY = "-20px"; }
          if (i === 1) { offsetX = "0px"; offsetY = "20px"; }
          if (i === 2) { offsetX = "20px"; offsetY = "-20px"; }
        } else {
          // Both green and blue have the same initial offsets in CSS
          if (i === 0) { offsetX = "-20px"; offsetY = "20px"; }
          if (i === 1) { offsetX = "0px"; offsetY = "-20px"; }
          if (i === 2) { offsetX = "20px"; offsetY = "20px"; }
        }

        // Drop shapes based on position: 
        // 0: top-left (pointy bottom-right)
        // 1: bottom-left (pointy top-right)
        // 2: top-right (pointy bottom-left)
        let bubbleRadius = "50%";
        if (i === 0) bubbleRadius = "50% 50% 0 50%";
        else if (i === 1) bubbleRadius = "50% 0 50% 50%";
        else if (i === 2) bubbleRadius = "50% 50% 50% 0";

        return (
          <span
            key={i}
            aria-hidden
            style={{
              position: "absolute",
              top: floatPositions[i].top,
              left: floatPositions[i].left,
              pointerEvents: "none",
              zIndex: 10,

              // New Wrapper logic: shapes, center icon, backdrop
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "80px",
              height: "80px",
              borderRadius: bubbleRadius,
              background: "rgba(18, 22, 33, 0.65)",
              border: "1px solid rgba(255,255,255,0.06)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              boxShadow: `0 0 24px ${hoverColor}40, inset 0 0 20px ${hoverColor}33, inset 0 0 10px rgba(0,0,0,0.5)`,

              // Bouncy appearance animation logic
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? "translate(0, 0) scale(1)" : `translate(${offsetX}, ${offsetY}) scale(0.8)`,
              transition: isHovered
                ? "opacity 0.2s ease, transform 0.5s cubic-bezier(0.34, 1.6, 0.64, 1)"
                : "opacity 0.15s ease, transform 0.2s ease",
            }}
          >
            <img
              src={ic}
              alt=""
              loading="lazy"
              style={{
                display: "block",
                width: "70px",
                height: "auto",
                // Extra safety for ensuring the SVG inherits glow smoothly
                filter: `drop-shadow(0 0 26px ${hoverColor}99)`,
              }}
            />
          </span>
        );
      })}

      {/* ── The italic serif pill ── */}
      <em
        style={{
          display: "inline-block",
          fontStyle: "italic",
          fontFamily: "var(--font-baskerville), 'Libre Baskerville', Georgia, serif",
          fontWeight: 400,
          fontSize: "clamp(2rem, 4.5vw, 4.5rem)",
          lineHeight: 1.05,
          color: isHovered ? hoverColor : "#fff",
          background: "rgba(30,30,40,0.72)",
          border: `1px solid ${isHovered ? borderColor : "rgba(255,255,255,0.10)"}`,
          borderRadius: "999px",
          padding: "0.05em 0.45em",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          cursor: "default",
          transform: isHovered ? `rotate(${tiltDeg}deg)` : "rotate(0deg)",
          boxShadow: isHovered ? `0 0 30px ${glowColor}` : "none",
          transition: "color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease",
        } as React.CSSProperties}
      >
        {word}
      </em>
    </span>
  );
}

/* ─── Ticker logo row ───────────────────────────────────────────────────── */
function TickerRow() {
  const logos = ["Automattic", "WordPress", "BlockWorks", "Interprefy", "Players Health", "New New", "Voxe"];
  return (
    <>
      {logos.map((name) => (
        <span key={name} className="hero-ticker-logo">{name}</span>
      ))}
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   HERO SECTION
═══════════════════════════════════════════════════════════════════════════ */
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
        background: "transparent",
      }}
    >
      {/* ── Background layers (Arounda-exact gradients) ── */}
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "linear-gradient(to bottom, rgba(3,6,20,0.95) 0%, rgba(3,6,20,0.84) 40%, rgba(3,6,20,0.7) 100%)",
      }} />
      <div aria-hidden style={{
        position: "absolute",
        inset: "-8% 46% 6% -20%",
        pointerEvents: "none",
        background: "radial-gradient(106% 78% at 10% 50%, rgba(126,112,255,0.96) 0%, rgba(77,114,255,0.7) 35%, rgba(32,92,255,0.22) 60%, transparent 84%)",
        filter: "blur(26px)",
        opacity: 0.98,
        maskImage: "radial-gradient(120% 108% at 18% 56%, black 0%, rgba(0,0,0,0.92) 42%, rgba(0,0,0,0.34) 72%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(120% 108% at 18% 56%, black 0%, rgba(0,0,0,0.92) 42%, rgba(0,0,0,0.34) 72%, transparent 100%)",
      }} />
      <div aria-hidden style={{
        position: "absolute",
        inset: "58% -6% -30% -8%",
        pointerEvents: "none",
        background: "linear-gradient(111deg, transparent 18%, rgba(126,123,255,0.26) 36%, rgba(74,112,255,0.52) 50%, rgba(43,90,255,0.22) 62%, transparent 82%)",
        transform: "rotate(-7deg) scale(1.06)",
        filter: "blur(28px)",
        opacity: 0.74,
        mixBlendMode: "screen",
      }} />
      <div aria-hidden style={{
        position: "absolute",
        inset: "62% 20% -34% 54%",
        pointerEvents: "none",
        background: "radial-gradient(62% 44% at 82% 84%, rgba(36,98,255,0.22) 0%, rgba(36,98,255,0.08) 42%, transparent 78%)",
        filter: "blur(30px)",
        opacity: 0.26,
        mixBlendMode: "screen",
      }} />

      {/* ── Content ── */}
      <div style={{
        maxWidth: "1360px",
        margin: "0 auto",
        padding: "clamp(5rem, 9vw, 1rem) clamp(1rem, 3vw, 2.5rem) clamp(2rem, 4vw, 3rem)",
        width: "100%",
        position: "relative",
        zIndex: 1,
      }}>

        {/* Subtitle — centered, small, muted */}
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

        {/* ── Main headline — centered, 3-line layout matching Arounda ── */}
        <h1 style={{
          fontFamily: "var(--font-outfit), sans-serif",
          fontSize: "clamp(2.5rem, 4.8vw, 4.8rem)",
          fontWeight: 800,
          lineHeight: 1.15,
          letterSpacing: "-0.025em",
          color: "#fff",
          textAlign: "center",
          margin: "0 auto",
          maxWidth: "1400px",
        }}>
          {/* Line 1 */}
          Your design &amp; dev partner that unites
          <br className="hide-mobile" />

          {/* Line 2 — keyword pills */}
          <span style={{
            display: "inline-flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.2em",
            verticalAlign: "middle",
            margin: "0.15em 0",
          }}>
            <AccentWord
              word="brand"
              isHovered={hovered === "brand"}
              onEnter={() => setHovered("brand")}
              onLeave={() => setHovered(null)}
            />
            <span style={{ fontWeight: 800 }}>, </span>
            <AccentWord
              word="website"
              isHovered={hovered === "website"}
              onEnter={() => setHovered("website")}
              onLeave={() => setHovered(null)}
            />
            <span style={{ fontWeight: 800 }}>,</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "0.2em", whiteSpace: "nowrap" }}>
              <AccentWord
                word="ux/ui design"
                isHovered={hovered === "ux/ui design"}
                onEnter={() => setHovered("ux/ui design")}
                onLeave={() => setHovered(null)}
              />
              <span> into</span>
            </span>
          </span>
          <br className="hide-mobile" />

          {/* Line 3 — play button + "a holistic product" */}
          a holistic{" "}
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              background: "rgba(80,40,180,0.35)",
              border: "1px solid rgba(150,100,255,0.3)",
              borderRadius: "16px",
              padding: "6px 12px 6px 6px",
              gap: "8px",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              fontSize: "0.6em",
              fontWeight: 500,
              letterSpacing: "0.01em",
              transition: "transform 0.3s ease",
              cursor: "pointer",
              verticalAlign: "middle",
              margin: "0 0.15em",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1.05) translateY(-3px) rotate(5.94deg)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; }}
          >
            {/* Preview thumbnail */}
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
            }}>
              <span style={{ opacity: 0.9 }}>🖥️</span>
            </span>
            {/* Play text */}
            <span style={{ display: "flex", alignItems: "center", gap: "6px", color: "rgba(255,255,255,0.85)" }}>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
                <circle cx="8" cy="8" r="7" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                <path d="M6 5.5l5 2.5-5 2.5V5.5z" fill="#fff" />
              </svg>
              Play
            </span>
          </span>
          {" "}
          {/* "product" — italic serif, purple-to-white gradient (Arounda exact) */}
          <em style={{
            fontFamily: "var(--font-baskerville), 'Libre Baskerville', Georgia, serif",
            fontStyle: "italic",
            fontWeight: 400,
            background: "linear-gradient(352deg, #7824E2 -120%, #FFFFFF 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "-0.01em",
          } as React.CSSProperties}>
            product
          </em>
        </h1>

        {/* ── Info blocks row: two quote columns ── */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          marginTop: "clamp(2rem, 4vw, 3.5rem)",
          justifyContent: "flex-start",
          alignItems: "flex-end",
        }}>
          {/* Left column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem", flex: "1 1 200px", maxWidth: "280px" }}>
            <Braces />
            <p style={{ fontSize: "clamp(0.82rem, 1.3vw, 0.94rem)", color: "rgba(255,255,255,0.62)", lineHeight: 1.55, margin: 0 }}>
              Works closely with reputable brands, businesses and fortune 500 companies
            </p>
            {/* Industry tags */}
            <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginTop: "0.75rem" }}>
              {["SaaS", "AI", "Web 3.0"].map((tag) => (
                <span
                  key={tag}
                  className="hero-tag-pill"
                  style={{
                    padding: "0.25rem 0.75rem",
                    borderRadius: "999px",
                    border: "1px solid rgba(255,255,255,0.16)",
                    fontSize: "0.78rem",
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.7)",
                    background: "rgba(255,255,255,0.05)",
                    cursor: "pointer",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem", flex: "1 1 200px", maxWidth: "280px" }}>
            <Braces />
            <p style={{ fontSize: "clamp(0.82rem, 1.3vw, 0.94rem)", color: "rgba(255,255,255,0.62)", lineHeight: 1.55, margin: 0 }}>
              Since 2016, we&apos;ve helped to achieve business goals and deliver results that inspire
            </p>
          </div>
        </div>

        {/* ── Book a Call CTA — right-aligned (Arounda button-primary) ── */}
        <div style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "clamp(-3rem, -2vw, -1.5rem)",
          paddingRight: "clamp(16rem, 8vw, 10rem)",
        }} className="hero-cta-row">
          <ButtonPrimary 
            text="Book a Call"
            href="#contact"
          />
        </div>

        {/* ── Logo Ticker (Arounda: 3 rows × logoloop 60s linear infinite) ── */}
        <div className="hero_logos-ticker">
          <div className="hero_logos-ticker-row"><TickerRow /></div>
          <div className="hero_logos-ticker-row"><TickerRow /></div>
          <div className="hero_logos-ticker-row"><TickerRow /></div>
        </div>
      </div>

      {/* Bottom vignette */}
      <div aria-hidden style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: "84px",
        background: "linear-gradient(to bottom, transparent, rgba(8,8,10,0.68))",
        pointerEvents: "none",
      }} />

      <style>{`
        /* ── Keyword tag hover ────────────────────────────────────── */
        .hero-tag-pill {
          transition: background 0.3s ease, color 0.3s ease;
        }
        .hero-tag-pill:hover {
          background: #fff !important;
          color: #0A0A0A !important;
        }

        /* ── Book a Call button (Arounda button-primary exact) ───── */

        /* Arrow circle */
        .hero-book-arrow {
          width: 54px;
          height: 54px;
          background: #D0F601;
          border-radius: 0 50% 50% 50%;         /* Arounda initial */
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #0a0a0a;
          transition:
            border-radius  .25s cubic-bezier(.4,0,.2,1),
            background-color .35s cubic-bezier(.72,-.22,.13,1.18);
        }
        /* Arrow icon */
        .hero-book-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          transform: rotate(0deg);
          transition: transform .45s cubic-bezier(.23,1,.32,1); /* Arounda */
        }
        /* Text pill */

        /* Hover — Arounda: arrow→50% 50% 50% 0, icon→-135deg, bg→#fff */


        /* ── Logo ticker (Arounda exact) ──────────────────────────── */
        .hero_logos-ticker {
          display: flex;
          overflow: hidden;
          margin-top: clamp(3rem, 5vw, 5rem);
          padding-bottom: 2rem;
          mask-image: linear-gradient(to right,
            rgba(0,0,0,0), rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, rgba(0,0,0,0));
          -webkit-mask-image: linear-gradient(to right,
            rgba(0,0,0,0), rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, rgba(0,0,0,0));
        }
        .hero_logos-ticker-row {
          display: flex;
          align-items: center;
          gap: 5rem;
          padding-right: 5rem;
          flex-shrink: 0;
          -webkit-animation: logoloop 60s linear infinite;
          animation:         logoloop 60s linear infinite;
        }
        .hero-ticker-logo {
          font-size: .88rem;
          font-weight: 600;
          color: rgba(255,255,255,.3);
          letter-spacing: .05em;
          text-transform: uppercase;
          white-space: nowrap;
          user-select: none;
        }
        @-webkit-keyframes logoloop { 0%{transform:translateX(0%)} 100%{transform:translateX(-100%)} }
        @keyframes         logoloop { 0%{transform:translateX(0%)} 100%{transform:translateX(-100%)} }

        /* ── Float-bob for orbit icons ────────────────────────────── */
        @keyframes floatBob {
          from { transform: translateY(0) rotate(0deg) scale(1); }
          to   { transform: translateY(-12px) rotate(15deg) scale(1.15); }
        }

        /* ── Responsive ───────────────────────────────────────────── */
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
