"use client";
import { useRef, useEffect, useState } from "react";

const teamAvatars = [
  "https://i.pravatar.cc/150?u=1",
  "https://i.pravatar.cc/150?u=2",
  "https://i.pravatar.cc/150?u=3",
  "https://i.pravatar.cc/150?u=4",
  "https://i.pravatar.cc/150?u=5",
];

function CodeBraces({ color = "rgba(255,255,255,0.3)" }: { color?: string }) {
  return (
    <span style={{
      fontFamily: "monospace",
      fontSize: "0.8rem",
      color,
      letterSpacing: "-0.08em",
      lineHeight: 1,
      userSelect: "none",
      flexShrink: 0,
      display: "block",
      marginBottom: "0.6rem"
    }}>
      {"{/}"}
    </span>
  );
}

export default function AboutUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [hoveredAvatar, setHoveredAvatar] = useState<number | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="about-us-section"
      style={{
        position: "relative",
        background: "#08080a",
        paddingTop: "clamp(6rem, 12vw, 10rem)",
        paddingBottom: "clamp(6rem, 12vw, 12rem)",
        overflow: "hidden",
      }}
    >
      {/* Heavy Blue Glow on the left */}
      <div 
        aria-hidden 
        style={{
          position: "absolute",
          top: "0",
          left: "-10%",
          width: "80%",
          height: "100%",
          pointerEvents: "none",
          background: "radial-gradient(ellipse at 15% 45%, rgba(45, 95, 255, 0.18) 0%, transparent 65%)",
          opacity: visible ? 1 : 0,
          transition: "opacity 1.5s ease",
        }} 
      />

      <div style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "0 clamp(1.5rem, 5vw, 4rem)",
        position: "relative",
        zIndex: 1,
      }}>
        
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.25fr 0.75fr",
          gap: "clamp(1rem, 3vw, 4rem)",
          alignItems: "start",
        }} className="about-main-grid">
          
          {/* Left Column: Heading & Text */}
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 1s cubic-bezier(0.2, 0.8, 0.2, 1)",
          }}>
            <span style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)",
              display: "block",
              marginBottom: "2.5rem",
            }}>
              ABOUT US
            </span>

            <h2 style={{
              fontSize: "clamp(2.8rem, 6.4vw, 5.8rem)",
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: "-0.045em",
              color: "#fff",
              marginBottom: "6rem",
              maxWidth: "850px",
              paddingRight: "2rem",
            }}>
              Digital design experts who fuel <span className="font-serif-italic" style={{ color: "#c6ff00", fontWeight: 700, fontStyle: "italic" }}>growth</span>
            </h2>

            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "clamp(2rem, 5vw, 5rem)",
            }} className="about-text-blocks">
              <div style={{ maxWidth: "260px" }}>
                <CodeBraces />
                <p style={{
                  fontSize: "0.9rem",
                  lineHeight: 1.5,
                  color: "rgba(255,255,255,0.6)",
                  fontWeight: 500,
                  margin: 0
                }}>
                  Your digital design and development agency for high-impact results
                </p>
              </div>
              <div style={{ maxWidth: "260px" }}>
                <CodeBraces color="rgba(255,255,255,0.3)"/>
                <p style={{
                  fontSize: "0.9rem",
                  lineHeight: 1.5,
                  color: "rgba(255,255,255,0.6)",
                  fontWeight: 500,
                  margin: 0
                }}>
                  A global team that understands your market, users, and how to make products win
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Tight 55+ Cluster */}
          <div style={{
            position: "relative",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            paddingTop: "6rem",
            opacity: visible ? 1 : 0,
            transform: visible ? "scale(1)" : "scale(0.96)",
            transition: "all 1s cubic-bezier(0.2, 0.8, 0.2, 1) 0.2s",
          }}>
            <div style={{ position: "relative", width: "100%", maxWidth: "320px", height: "320px" }}>
              
              {/* Backing Number 55+ (Gigantic & Extra Bold) */}
              <div style={{
                position: "absolute",
                top: "55%",
                left: "65%",
                transform: "translate(-50%, -50%)",
                fontSize: "clamp(12rem, 24vw, 18rem)",
                fontWeight: 900,
                color: "rgba(255,255,255,0.12)",
                lineHeight: 0.7,
                letterSpacing: "-0.09em",
                userSelect: "none",
                zIndex: 1,
                whiteSpace: "nowrap"
              }}>
                55+
              </div>

              {/* Sub-label */}
              <div style={{
                position: "absolute",
                top: "85%",
                left: "65%",
                transform: "translateX(-50%)",
                fontSize: "0.78rem",
                fontWeight: 600,
                color: "rgba(255,255,255,0.3)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                zIndex: 5,
                whiteSpace: "nowrap"
              }}>
                Team members
              </div>

              {/* High-Density Avatar Cluster */}
              {teamAvatars.map((src, i) => {
                const positions = [
                  { top: "0%", left: "5%",    size: "82px" },   // Top left
                  { top: "8%", left: "45%",   size: "88px" },   // top Mid
                  { top: "35%", left: "80%",  size: "80px" },   // Overlapping '+'
                  { top: "38%", left: "20%",  size: "92px" },   // Overlapping '5' left
                  { top: "72%", left: "44%",  size: "86px" },   // Bottom mid
                ];
                const pos = positions[i];
                
                return (
                  <div 
                    key={src}
                    onMouseEnter={() => setHoveredAvatar(i)}
                    onMouseLeave={() => setHoveredAvatar(null)}
                    style={{
                      position: "absolute",
                      top: pos.top,
                      left: pos.left,
                      width: pos.size,
                      height: pos.size,
                      borderRadius: "50%",
                      overflow: "hidden",
                      border: "3px solid #08080a",
                      boxShadow: hoveredAvatar === i ? "0 0 50px rgba(198, 255, 0, 0.45)" : "0 12px 30px rgba(0,0,0,0.6)",
                      transform: `translate(-50%, -50%) scale(${hoveredAvatar === i ? 1.25 : 1})`,
                      transition: "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                      zIndex: hoveredAvatar === i ? 20 : 10,
                      cursor: "pointer",
                      background: "#111",
                      animation: `clusterFloat 4s ease-in-out infinite alternate`,
                      animationDelay: `${i * 0.2}s`,
                    }}
                  >
                    <img 
                      src={src} 
                      alt={`Team member ${i+1}`}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Improved Footer Row */}
        <div style={{
          marginTop: "clamp(8rem, 16vw, 15rem)",
          paddingTop: "4rem",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: "4rem",
          opacity: visible ? 1 : 0,
          transition: "opacity 1.2s ease 0.6s",
        }} className="about-footer-refined">
          
          {/* Client Logos - Lowercase matched where appropriate */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "clamp(2.5rem, 5.5vw, 5rem)",
            flexWrap: "wrap",
          }} className="about-logos">
            {["WordPress.com", "interprefy", "PLAYERS HEALTH", "Blockworks"].map((name) => (
              <span key={name} style={{
                fontSize: "clamp(1.1rem, 1.7vw, 1.35rem)",
                fontWeight: 800,
                color: "rgba(255,255,255,0.25)",
                letterSpacing: "-0.04em",
                cursor: "default",
                transition: "all 0.3s ease",
                fontFamily: "var(--font-outfit), sans-serif",
                textTransform: name==="PLAYERS HEALTH" ? "uppercase" : "none"
              }} onMouseEnter={e => {
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.transform = "translateY(-3px)";
              }} onMouseLeave={e => {
                e.currentTarget.style.color = "rgba(255,255,255,0.25)";
                e.currentTarget.style.transform = "translateY(0)";
              }}>
                {name}
              </span>
            ))}
          </div>

          {/* Stats with Clean Divider */}
          <div style={{
            display: "flex",
            gap: "5rem",
            alignItems: "flex-start",
            paddingLeft: "4.5rem",
            borderLeft: "1px solid rgba(255,255,255,0.08)",
          }} className="about-stat-row">
            <div>
              <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.35)", marginBottom: "0.8rem", fontWeight: 600 }}>Our clients raised</div>
              <div style={{ fontSize: "2.6rem", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em", lineHeight: 0.9 }}>$1B+</div>
            </div>
            <div>
              <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.35)", marginBottom: "0.8rem", fontWeight: 600 }}>Unicorns</div>
              <div style={{ fontSize: "2.6rem", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em", lineHeight: 0.9 }}>3 clients</div>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @keyframes clusterFloat {
          from { transform: translate(-50%, -50%) translateY(0) rotate(0deg); }
          to   { transform: translate(-50%, -50%) translateY(-10px) rotate(1deg); }
        }
        @media (max-width: 1100px) {
          .about-main-grid { grid-template-columns: 1fr !important; gap: 6rem !important; }
          .about-footer-refined { justify-content: flex-start !important; }
          .about-stat-row { border-left: none !important; padding-left: 0 !important; gap: 4rem !important; margin-top: 2rem; }
        }
        @media (max-width: 640px) {
          .about-text-blocks { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .about-stat-row { flex-direction: column !important; align-items: flex-start !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}
