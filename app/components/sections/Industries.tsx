"use client";
import { useState } from "react";

const industries = [
  {
    name: "Web 3, Blockchain",
    tags: ["dApps", "DeFi", "Play2Earn", "IoT"]
  },
  {
    name: "AI & ML",
    tags: ["AI Marketing", "HR & AI", "Crypto AI", "Education AI"]
  },
  {
    name: "SaaS",
    tags: ["CRM", "HR", "AI", "ERP", "Automation tools"]
  },
  {
    name: "Fintech",
    tags: ["Banking", "Trading", "Exchanges", "IoT"]
  },
  {
    name: "Healthcare",
    tags: ["Mental health", "Wellness", "Insurance", "Fitness"]
  }
];

export default function Industries() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      id="industries"
      style={{
        position: "relative",
        background: "transparent",
        paddingTop: "clamp(4rem, 7vw, 7rem)",
        paddingBottom: "clamp(4rem, 7vw, 7rem)",
        overflow: "hidden",
      }}
    >
      {/* Bottom right blue/teal gradient */}
      <div aria-hidden style={{
        position: "absolute",
        bottom: "-10%",
        right: "-5%",
        width: "60%",
        height: "80%",
        pointerEvents: "none",
        background: "radial-gradient(ellipse at 80% 80%, rgba(20, 160, 200, 0.12) 0%, transparent 65%)",
        zIndex: 0,
      }} />

      <div style={{
        maxWidth: "1440px",
        margin: "0 auto",
        padding: "0 clamp(1rem, 3vw, 2rem)",
        position: "relative",
        zIndex: 1,
      }}>

        {/* Top Header Row */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "clamp(3rem, 6vw, 6rem)",
          gap: "2rem",
        }}>
          {/* Left Title */}
          <div style={{ display: "flex", gap: "1rem", maxWidth: "600px" }}>
            <span style={{
              fontSize: "0.85rem",
              fontWeight: 600,
              color: "rgba(255,255,255,0.4)",
              marginTop: "0.5rem",
              fontFamily: "monospace"
            }}>
              {`{/}`}
            </span>
            <h2 style={{
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#fff",
              margin: 0,
            }}>
              Our experience<br />
              matches <span className="font-serif-italic" style={{ color: "#fff", fontStyle: "italic", fontWeight: 600 }}>your market</span>
            </h2>
          </div>

          {/* Right Description */}
          <div style={{ maxWidth: "420px", marginTop: "1rem" }}>
            <p style={{
              fontSize: "0.85rem",
              fontWeight: 600,
              lineHeight: 1.6,
              color: "rgba(255, 255, 255, 0.8)",
              margin: 0,
            }}>
              navoq product designers craft custom solutions that balance your business value with seamless user experience. Only proven industry methods that work.
            </p>
          </div>
        </div>

        {/* Bottom Content Row */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.3fr", // laptop vs list
          gap: "clamp(2rem, 5vw, 6rem)",
          alignItems: "flex-end", // Align both columns to the bottom
        }} className="industries-columns">

          {/* Left Laptop Mockup */}
          <div style={{
            background: "#151515",
            borderRadius: "24px",
            overflow: "hidden",
            display: "flex",
            alignItems: "flex-end", // ensure image touches the bottom of its container
            justifyContent: "center",
            width: "100%",
            maxWidth: "380px", // reduced size
            margin: "0 auto", // centers it horizontally if column is wider
            border: "1px solid rgba(255,255,255,0.04)"
          }}>
            <img
              src="https://cdn.prod.website-files.com/65647bbe0d57c8abad78e939/689486c1689a168b1eb53830_experience-image.jpg"
              alt="navoq Digital Product Experience"
              style={{ width: "100%", height: "auto", objectFit: "contain", display: "block" }}
            />
          </div>

          {/* Right Industry List */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {industries.map((ind, i) => {
              const isHovered = hoveredIdx === i;

              return (
                <div
                  key={ind.name}
                  onMouseEnter={() => setHoveredIdx(i)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "1rem 0rem", // reduced padding for a tighter, sleeker row
                    paddingRight: "0",
                    cursor: "pointer",
                    background: isHovered ? "#d0f601" : "transparent",
                    borderTop: i === 0 ? "none" : (isHovered ? "1px solid transparent" : "1px solid rgba(255,255,255,0.06)"),
                    borderTopLeftRadius: isHovered ? "40px" : "0px",
                    borderBottomLeftRadius: isHovered ? "40px" : "0px",
                    transition: "all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)",
                    marginLeft: isHovered ? "-1.5rem" : "0",
                    paddingLeft: isHovered ? "1.5rem" : "0",
                  }}
                >
                  {/* Left Name & Arrow */}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>

                    {/* Animated Arrow */}
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: isHovered ? "20px" : "0px",
                      opacity: isHovered ? 1 : 0,
                      overflow: "hidden",
                      transition: "all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)",
                    }}>
                      <svg width="18" height="18" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0 }}>
                        <path d="M2 10L10 2M10 2H4M10 2V8" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>

                    <h3 style={{
                      fontSize: "clamp(1.2rem, 2vw, 1.6rem)", // made text smaller
                      fontWeight: 600,
                      letterSpacing: "-0.01em",
                      color: isHovered ? "#000" : "rgba(255,255,255,0.45)",
                      margin: 0,
                      transition: "color 0.3s ease",
                      whiteSpace: "nowrap",
                    }}>
                      {ind.name}
                    </h3>
                  </div>

                  {/* Right Tags */}
                  <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "flex-end",
                    gap: "0.35rem",
                    paddingLeft: "2rem",
                    paddingRight: isHovered ? "0.5rem" : "0", // push away from the right edge slightly when hovered
                  }}>
                    {ind.tags.map(tag => (
                      <span key={tag} style={{
                        padding: "0.25em 0.85em", // tighter padding for pill
                        borderRadius: "20px",
                        fontSize: "0.6rem", // smaller tag font
                        fontWeight: 600,
                        backgroundColor: isHovered ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.03)",
                        color: isHovered ? "rgba(0,0,0,0.8)" : "rgba(255,255,255,0.4)",
                        transition: "all 0.3s ease",
                        whiteSpace: "nowrap",
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .industries-columns {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
