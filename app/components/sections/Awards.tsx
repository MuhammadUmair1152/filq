"use client";
import { useRef, useEffect, useState } from "react";

const awards = [
  {
    id: "clutch-rating",
    label: "89+ REVIEWS ON CLUTCH",
    isRating: true,
  },
  {
    id: "clutch-design-2025",
    label: "TOP DESIGN COMPANY 2025",
    isRating: false,
    imgUrl: "https://cdn.prod.website-files.com/65647bbe0d57c8abad78e939/690b633d803abc97e1b7eef4_Top%20Design%20company%202025.png"
  },
  {
    id: "clutch-digital-2026",
    label: "TOP DIGITAL DESIGN COMPANY 2026",
    isRating: false,
    imgUrl: "https://cdn.prod.website-files.com/65647bbe0d57c8abad78e939/69ce2371294840e4358c9d7f_top_clutch.co_design_company_2026.svg"
  },
  {
    id: "clutch-global-b2b",
    label: "GLOBAL 100 B2B UI/UX COMPANY BY CLUTCH",
    isRating: false,
    imgUrl: "https://cdn.prod.website-files.com/65647bbe0d57c8abad78e939/6581457483f7e167a86e7933_upwork.svg"
  },
  {
    id: "work-top-rated",
    label: "TOP RATED PLUS AGENCY ON UPWORK",
    isRating: false,
    imgUrl: "https://cdn.prod.website-files.com/65647bbe0d57c8abad78e939/65814574a229aefed9855667_clutch-badge-3.svg"
  },
  {
    id: "champion",
    label: "CHAMPION COMPANY BY CLUTCH",
    isRating: false,
    imgUrl: "https://cdn.prod.website-files.com/65647bbe0d57c8abad78e939/6581457d0583e429584ba88b_dribbble.svg"
  },
  {
    id: "clutch-strategy",
    label: "TOP UX STRATEGY COMPANY BY CLUTCH",
    isRating: false,
    imgUrl: "https://cdn.prod.website-files.com/65647bbe0d57c8abad78e939/6581457d6a28387a23f75e8e_clutch-badge-6.svg"
  },
  {
    id: "goodfirms",
    label: "TOP USER EXPERIENCE TEAM BY GOODFIRMS",
    isRating: false,
    imgUrl: "https://cdn.prod.website-files.com/65647bbe0d57c8abad78e939/6581457da05b970358640f6e_good-firms.svg"
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: "5px", justifyContent: "center" }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 1l1.8 3.7L14 5.3l-3 2.9.7 4.1L8 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.6L8 1z" />
        </svg>
      ))}
    </div>
  );
}

export default function Awards() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="awards"
      style={{
        position: "relative",
        background: "transparent",
        paddingTop: "clamp(4rem, 7vw, 7rem)",
        paddingBottom: "clamp(4rem, 7vw, 7rem)",
        overflow: "hidden",
      }}
    >
      {/* Left blue glow — matches AboutUs */}
      <div aria-hidden style={{
        position: "absolute",
        top: "5%",
        left: "-15%",
        width: "70%",
        height: "90%",
        pointerEvents: "none",
        background: "radial-gradient(ellipse at 15% 40%, rgba(45, 95, 255, 0.16) 0%, transparent 60%)",
        opacity: visible ? 1 : 0,
        transition: "opacity 1.5s ease",
      }} />

      {/* Subtle right glow */}
      <div aria-hidden style={{
        position: "absolute",
        bottom: "0",
        right: "-10%",
        width: "50%",
        height: "60%",
        pointerEvents: "none",
        background: "radial-gradient(ellipse at 80% 80%, rgba(20, 60, 180, 0.10) 0%, transparent 65%)",
        opacity: visible ? 1 : 0,
        transition: "opacity 1.8s ease 0.3s",
      }} />

      <div style={{
        maxWidth: "1440px",
        margin: "0 auto",
        padding: "0 clamp(1rem, 3vw, 2rem)",
        position: "relative",
        zIndex: 1,
      }}>
        {/* Header row */}
        <div style={{
          position: "relative",
          marginBottom: "clamp(3rem, 5vw, 5rem)",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "all 0.9s cubic-bezier(0.2, 0.8, 0.2, 1)",
          textAlign: "center",
        }}>
          {/* Label — top left */}
          <span style={{
            position: "absolute",
            top: "0.2rem",
            left: 0,
            fontSize: "0.62rem",
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.3)",
            whiteSpace: "nowrap",
          }}>
            AWARDS &amp; ACHIEVEMENTS
          </span>

          {/* Heading — centered */}
          <h2 style={{
            fontSize: "clamp(1.6rem, 3.2vw, 3rem)",
            fontWeight: 600,
            lineHeight: 1.2,
            letterSpacing: "-0.025em",
            color: "#fff",
            margin: "0 auto",
            maxWidth: "680px",
            paddingTop: "0.25rem",
          }}>
            While the growth{" "}
            <span className="font-serif-italic" style={{ color: "#fff", fontStyle: "italic", fontWeight: 600 }}>of our clients</span>{" "}
            is what{" "}
            <span className="font-serif-italic" style={{ color: "#fff", fontStyle: "italic", fontWeight: 600 }}>matters</span>{" "}
            most,<br />
            it&apos;s nice to get awards
          </h2>
        </div>

        {/* Awards grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "0.35rem",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(32px)",
          transition: "all 1s cubic-bezier(0.2, 0.8, 0.2, 1) 0.2s",
        }} className="awards-grid">

          {/* === First Card: Rating + Green Expand Hover === */}
          <a href="https://clutch.co" target="_blank" rel="noopener noreferrer" className="award-rating-card" style={{
            background: "#222222",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "20px",
            padding: "2rem 1.5rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            minHeight: "220px",
            position: "relative",
            overflow: "hidden",
            cursor: "pointer",
            transition: "border-color 0.4s",
            textDecoration: "none",
          }}>
            <div className="award-green-blob" style={{
              position: "absolute",
              bottom: "1.5rem",
              left: "1.5rem",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "#c6ff00",
              zIndex: 0,
              transform: "scale(0)",
              transformOrigin: "center center",
              transition: "transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)",
            }} />

            {/* Rating content — stays above the blob */}
            <div style={{ position: "relative", zIndex: 1, textAlign: "center", flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", marginBottom: "2rem" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.55rem", marginBottom: "0.25rem" }}>
                <svg width="22" height="22" viewBox="0 0 22 22">
                  <circle cx="11" cy="11" r="10" fill="#E8282B" />
                  <path d="M11 6l1.5 3.1 3.4.5-2.5 2.4.6 3.4L11 13.8l-3 1.6.6-3.4-2.5-2.4 3.4-.5L11 6z" fill="white" />
                </svg>
                <span className="award-rating-text" style={{ fontSize: "2rem", fontWeight: 700, color: "#ffffff", letterSpacing: "-0.02em", transition: "color 0.4s" }}>5.0</span>
              </div>
              <div className="award-stars-container" style={{ color: "#ffffff", transition: "color 0.4s" }}>
                <StarRating count={5} />
              </div>
            </div>

            {/* Bottom elements: Arrow absolute left, text centered */}
            <div style={{ position: "absolute", bottom: "1.5rem", left: 0, width: "100%", zIndex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg className="award-arrow-icon" width="13" height="13" viewBox="0 0 12 12" fill="none" style={{ position: "absolute", left: "1.5rem", stroke: "rgba(255,255,255,0.7)", transition: "stroke 0.4s" }}>
                <path d="M2 10L10 2M10 2H4M10 2V8" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="award-label" style={{
                fontSize: "0.62rem", fontWeight: 700,
                color: "rgba(255,255,255,0.5)",
                letterSpacing: "0.08em", textTransform: "uppercase",
                transition: "color 0.4s",
              }}>89+ Reviews on Clutch</span>
            </div>
          </a>

          {/* === Other award cards === */}
          {awards.slice(1).map((award, idx) => (
            <div
              key={award.id}
              style={{
                background: "#222222",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "20px",
                padding: "2rem 1.5rem 1.5rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                minHeight: "220px",
                position: "relative",
                transition: "transform 0.4s, background 0.4s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLDivElement).style.background = "#282828";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.background = "#222222";
              }}
            >
              <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
                {award.imgUrl && (
                  <img src={award.imgUrl} alt={award.label} style={{ maxWidth: "120px", maxHeight: "100px", objectFit: "contain" }} />
                )}
              </div>
              <span style={{
                fontSize: "0.65rem",
                fontWeight: 700,
                color: "rgba(255,255,255,0.8)",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                textAlign: "center",
                lineHeight: 1.4,
              }}>
                {award.label}
              </span>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        /* 1st Card Hover States */
        .award-rating-card:hover .award-green-blob {
          transform: scale(20) !important;
        }
        .award-rating-card:hover .award-rating-text {
          color: #0b0b0b !important;
        }
        .award-rating-card:hover .award-stars-container {
          color: #0b0b0b !important;
        }
        .award-rating-card:hover .award-label {
          color: rgba(0,0,0,0.8) !important;
        }
        .award-rating-card:hover .award-arrow-icon {
          stroke: #0b0b0b !important;
        }
        .award-rating-card:hover {
          border-color: rgba(0,0,0,0.1) !important;
        }

        @media (max-width: 1100px) {
          .awards-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .awards-header { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
        }
        @media (max-width: 600px) {
          .awards-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 0.75rem !important; }
          .award-rating-card { padding: 1.5rem 1rem 1rem !important; min-height: 180px !important; }
        }
      `}</style>

    </section>
  );
}
