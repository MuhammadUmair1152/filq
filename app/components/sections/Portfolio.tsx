"use client";
import { useState } from "react";

const cases = [
  {
    id: "case-1",
    tags: ["SaaS", "UI/UX Design", "Web App"],
    title: "FinFlow — Financial Management Platform",
    raised: "$4.2M raised",
    review:
      "filq transformed our complex financial data into an intuitive, beautiful experience. User engagement increased by 240% post-launch.",
    reviewer: "James Carter, CPO at FinFlow",
    rating: 5,
    accentColor: "#3B78FF",
    stats: [
      { value: "+240%", label: "User Engagement" },
      { value: "-42%", label: "Support Tickets" },
    ],
    gradient: "linear-gradient(145deg, rgba(59,120,255,0.15) 0%, rgba(120,59,255,0.1) 100%)",
  },
  {
    id: "case-2",
    tags: ["Web3", "Branding", "Mobile App"],
    title: "ChainVault — DeFi Portfolio Tracker",
    raised: "$7.8M raised",
    review:
      "The team nailed our Web3 aesthetic without compromising usability. Our users love the new onboarding flow — conversions up 3x.",
    reviewer: "Mia Thompson, CEO at ChainVault",
    rating: 5,
    accentColor: "#D9FF00",
    stats: [
      { value: "3x", label: "Conversion Rate" },
      { value: "+180%", label: "Retention" },
    ],
    gradient: "linear-gradient(145deg, rgba(217,255,0,0.1) 0%, rgba(59,120,255,0.08) 100%)",
  },
  {
    id: "case-3",
    tags: ["AI/ML", "Dashboard", "Design System"],
    title: "NexusAI — Intelligent Analytics Suite",
    raised: "$12M raised",
    review:
      "filq built a design system that scales with our AI product. Our dev team ships 60% faster thanks to their component library.",
    reviewer: "David Kim, CTO at NexusAI",
    rating: 5,
    accentColor: "#FF59D6",
    stats: [
      { value: "60%", label: "Faster Dev" },
      { value: "+310%", label: "Revenue Growth" },
    ],
    gradient: "linear-gradient(145deg, rgba(255,89,214,0.1) 0%, rgba(120,59,255,0.12) 100%)",
  },
  {
    id: "case-4",
    tags: ["Fintech", "Mobile", "UX Audit"],
    title: "PaySwift — Cross-Border Payments App",
    raised: "$5.5M raised",
    review:
      "The UX overhaul cut our onboarding time in half. filq's research-driven approach found problems we didn't even know we had.",
    reviewer: "Sophie Martin, Product Lead at PaySwift",
    rating: 5,
    accentColor: "#59FFD6",
    stats: [
      { value: "-50%", label: "Onboarding Time" },
      { value: "+195%", label: "App Store Rating" },
    ],
    gradient: "linear-gradient(145deg, rgba(89,255,214,0.1) 0%, rgba(59,120,255,0.1) 100%)",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {[...Array(count)].map((_, i) => (
        <span key={i} style={{ color: "#F5B731", fontSize: "0.85rem" }}>★</span>
      ))}
    </div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState(0);
  const c = cases[active];

  return (
    <section
      id="works"
      className="section-spacing"
      style={{ borderTop: "1px solid var(--border-subtle)" }}
    >
      <div className="container-site">
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "1.5rem",
            marginBottom: "3rem",
          }}
        >
          <div>
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
              Our Cases
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 1.18,
                marginTop: "1rem",
                maxWidth: "480px",
              }}
            >
              Products we've launched for{" "}
              <em className="font-serif-italic" style={{ fontWeight: 400 }}>
                ambitious founders
              </em>
            </h2>
          </div>
          <a href="#contact" className="btn-ghost" id="portfolio-see-all">
            See All Cases
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Case selector tabs */}
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            flexWrap: "wrap",
            marginBottom: "2rem",
          }}
        >
          {cases.map((cs, i) => (
            <button
              key={cs.id}
              onClick={() => setActive(i)}
              style={{
                padding: "0.5rem 1.25rem",
                borderRadius: "var(--radius-pill)",
                border: `1px solid ${i === active ? cs.accentColor + "55" : "var(--border-subtle)"}`,
                background: i === active ? cs.accentColor + "15" : "transparent",
                color: i === active ? "var(--text-primary)" : "var(--text-muted)",
                fontSize: "0.85rem",
                fontWeight: 500,
                cursor: "pointer",
                transition: "all var(--transition-base)",
                fontFamily: "inherit",
              }}
            >
              {cs.tags[0]}
            </button>
          ))}
        </div>

        {/* Active case card */}
        <div
          className="card card-lg"
          style={{
            background: c.gradient,
            border: `1px solid ${c.accentColor}22`,
            padding: "clamp(1.5rem, 4vw, 2.5rem)",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
            alignItems: "center",
            minHeight: "400px",
            transition: "all var(--transition-slow)",
          }}
        >
          {/* Left: info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {/* Tags */}
            <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
              {c.tags.map((tag) => (
                <span key={tag} className="tag-pill" style={{ borderColor: `${c.accentColor}33`, color: c.accentColor }}>
                  {tag}
                </span>
              ))}
            </div>

            <h3
              style={{
                fontSize: "clamp(1.3rem, 2.5vw, 1.9rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 1.25,
              }}
            >
              {c.title}
            </h3>

            <span
              className="pill"
              style={{ alignSelf: "flex-start", borderColor: `${c.accentColor}44`, color: c.accentColor, fontWeight: 600 }}
            >
              💰 {c.raised}
            </span>

            {/* Review */}
            <blockquote
              style={{
                borderLeft: `3px solid ${c.accentColor}`,
                paddingLeft: "1rem",
                margin: 0,
              }}
            >
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.7, fontStyle: "italic" }}>
                &ldquo;{c.review}&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginTop: "0.75rem" }}>
                <StarRating count={c.rating} />
                <span style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>
                  {c.reviewer}
                </span>
              </div>
            </blockquote>
          </div>

          {/* Right: mock visual */}
          <div
            style={{
              borderRadius: "var(--radius-card)",
              background: `${c.accentColor}12`,
              border: `1px solid ${c.accentColor}25`,
              minHeight: "280px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "1.5rem",
              padding: "2rem",
            }}
          >
            {/* Mock browser chrome */}
            <div
              style={{
                width: "100%",
                maxWidth: "340px",
                borderRadius: "14px",
                background: "rgba(0,0,0,0.4)",
                border: `1px solid ${c.accentColor}30`,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "6px",
                  padding: "10px 14px",
                  borderBottom: `1px solid ${c.accentColor}20`,
                  background: "rgba(0,0,0,0.3)",
                }}
              >
                {["#FF5F57", "#FFBD2E", "#28C840"].map((col) => (
                  <div key={col} style={{ width: "10px", height: "10px", borderRadius: "50%", background: col }} />
                ))}
              </div>
              <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div style={{ height: "12px", borderRadius: "6px", background: `${c.accentColor}30`, width: "60%" }} />
                <div style={{ height: "8px", borderRadius: "4px", background: "rgba(255,255,255,0.08)", width: "80%" }} />
                <div style={{ height: "8px", borderRadius: "4px", background: "rgba(255,255,255,0.05)", width: "50%" }} />
                <div style={{ height: "50px", borderRadius: "10px", background: `${c.accentColor}15`, marginTop: "0.5rem" }} />
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
                  <div style={{ height: "35px", borderRadius: "8px", background: `${c.accentColor}20` }} />
                  <div style={{ height: "35px", borderRadius: "8px", background: "rgba(255,255,255,0.05)" }} />
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div style={{ display: "flex", gap: "1.5rem" }}>
              {c.stats.map((stat) => (
                <div key={stat.label} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "1.6rem", fontWeight: 800, color: c.accentColor, letterSpacing: "-0.02em" }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "2px" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation dots */}
        <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center", marginTop: "1.5rem" }}>
          {cases.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to case ${i + 1}`}
              style={{
                width: i === active ? "24px" : "8px",
                height: "8px",
                borderRadius: "4px",
                background: i === active ? "var(--accent-lime)" : "rgba(255,255,255,0.2)",
                border: "none",
                cursor: "pointer",
                transition: "all var(--transition-base)",
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          #works .card { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
