"use client";
import { useState } from "react";

const testimonials = [
  {
    company: "FinFlow",
    logo: "FF",
    logoColor: "#3B78FF",
    quote:
      "Working with filq was a game-changer. They didn't just execute our brief — they challenged our assumptions and pushed us to think bigger. The final product exceeded every expectation.",
    author: "James Carter",
    position: "Chief Product Officer",
    rating: 5,
  },
  {
    company: "ChainVault",
    logo: "CV",
    logoColor: "#D9FF00",
    quote:
      "We'd worked with 3 other agencies before filq. None came close. Their Web3 understanding is genuine — they solved UX problems we didn't even know were losing us users.",
    author: "Mia Thompson",
    position: "CEO & Co-founder",
    rating: 5,
  },
  {
    company: "NexusAI",
    logo: "NA",
    logoColor: "#FF59D6",
    quote:
      "The design system they built is a living asset. Our engineers reference it daily, our brand is consistent across 12 product surfaces, and new features ship in half the time.",
    author: "David Kim",
    position: "Chief Technology Officer",
    rating: 5,
  },
  {
    company: "PaySwift",
    logo: "PS",
    logoColor: "#59FFD6",
    quote:
      "The UX audit revealed $2M worth of problems we were leaving on the table. ROI on this project was 8x in the first year. Best investment we ever made.",
    author: "Sophie Martin",
    position: "Head of Product",
    rating: 5,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section
      id="testimonials"
      className="section-spacing"
      style={{}}
    >
      <div className="container-site">
        {/* Header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <span
            className="pill"
            style={{
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              fontSize: "0.72rem",
              marginBottom: "1.25rem",
              display: "inline-flex",
            }}
          >
            Testimonials
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.18,
              marginTop: "1rem",
              maxWidth: "520px",
            }}
          >
            Trusted by founders{" "}
            <em className="font-serif-italic" style={{ fontWeight: 400 }}>
              worldwide
            </em>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "200px 1fr",
            gap: "1.5rem",
            alignItems: "start",
          }}
          className="testimonials-grid"
        >
          {/* Company tabs */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            {testimonials.map((t_, i) => (
              <button
                key={t_.company}
                onClick={() => setActive(i)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.875rem 1rem",
                  borderRadius: "14px",
                  border: `1px solid ${i === active ? t_.logoColor + "44" : "transparent"}`,
                  background:
                    i === active ? `${t_.logoColor}10` : "transparent",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all var(--transition-base)",
                  fontFamily: "inherit",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    background: `${t_.logoColor}20`,
                    border: `1px solid ${t_.logoColor}40`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.7rem",
                    fontWeight: 800,
                    color: t_.logoColor,
                    flexShrink: 0,
                    letterSpacing: "0.02em",
                  }}
                >
                  {t_.logo}
                </div>
                <span
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: i === active ? 600 : 400,
                    color:
                      i === active ? "var(--text-primary)" : "var(--text-muted)",
                    transition: "color var(--transition-fast)",
                  }}
                >
                  {t_.company}
                </span>
              </button>
            ))}
          </div>

          {/* Quote card */}
          <div
            className="card card-lg"
            style={{
              padding: "2.5rem",
              background: `${t.logoColor}08`,
              border: `1px solid ${t.logoColor}22`,
              transition: "all var(--transition-slow)",
            }}
          >
            {/* Stars */}
            <div style={{ display: "flex", gap: "3px", marginBottom: "1.5rem" }}>
              {[...Array(t.rating)].map((_, i) => (
                <span key={i} style={{ color: "#F5B731", fontSize: "1rem" }}>★</span>
              ))}
            </div>

            {/* Quote */}
            <blockquote
              style={{
                fontSize: "clamp(1.05rem, 2vw, 1.3rem)",
                lineHeight: 1.65,
                color: "var(--text-primary)",
                fontStyle: "italic",
                fontFamily: "var(--font-baskerville), 'Libre Baskerville', Georgia, serif",
                fontWeight: 400,
                marginBottom: "2rem",
              }}
            >
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            {/* Author */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: `${t.logoColor}25`,
                  border: `1px solid ${t.logoColor}40`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1rem",
                }}
              >
                {t.author[0]}
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: "0.95rem" }}>{t.author}</div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.83rem" }}>
                  {t.position} · {t.company}
                </div>
              </div>
              <div
                style={{
                  marginLeft: "auto",
                  padding: "0.25rem 0.75rem",
                  borderRadius: "999px",
                  background: `${t.logoColor}15`,
                  border: `1px solid ${t.logoColor}30`,
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  color: t.logoColor,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                Clutch Verified
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .testimonials-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
