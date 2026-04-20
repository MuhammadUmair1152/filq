"use client";

export default function BannerCTA() {
  return (
    <section id="about" style={{ position: "relative", background: "#06080c", padding: "clamp(4.5rem, 8vw, 7rem) 0" }}>
      {/* Left blue/green-ish glow like reference */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(70% 60% at 20% 44%, rgba(65, 194, 255, 0.38) 0%, rgba(74, 122, 255, 0.28) 34%, rgba(36, 84, 180, 0.12) 50%, transparent 72%)",
          filter: "blur(4px)",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: "0 0 -16% 0",
          pointerEvents: "none",
          // background:
          //   "linear-gradient(112deg, transparent 26%, rgba(100, 188, 255, 0.12) 40%, rgba(83, 112, 255, 0.22) 52%, rgba(56, 90, 230, 0.14) 62%, transparent 78%)",
          mixBlendMode: "screen",
          filter: "blur(18px)",
        }}
      />

      <div className="container-site" style={{ position: "relative", zIndex: 1 }}>
        <span style={{ fontSize: "0.7rem", letterSpacing: "0.1em", color: "rgba(255,255,255,0.56)", fontWeight: 600 }}>
          ABOUT US
        </span>

        <div
          className="about-top-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "clamp(2rem, 5vw, 5rem)",
            alignItems: "start",
            marginTop: "1.25rem",
          }}
        >
          <div>
            <h2 style={{ fontSize: "clamp(2.2rem, 5vw, 4.1rem)", lineHeight: 1.03, letterSpacing: "-0.02em", maxWidth: "620px" }}>
              Digital design
              <br />
              experts who
              <br />
              fuel{" "}
              <em className="font-serif-italic" style={{ color: "#c6ff00", fontWeight: 400 }}>
                growth
              </em>
            </h2>
          </div>

          <div style={{ position: "relative", minHeight: "220px" }}>
            {[
              { left: "8%", top: "6%", src: "https://i.pravatar.cc/120?img=14" },
              { left: "52%", top: "12%", src: "https://i.pravatar.cc/120?img=33" },
              { left: "20%", top: "38%", src: "https://i.pravatar.cc/120?img=47" },
              { left: "44%", top: "30%", src: "https://i.pravatar.cc/120?img=12" },
              { left: "66%", top: "36%", src: "https://i.pravatar.cc/120?img=55" },
            ].map((a, i) => (
              <img
                key={i}
                src={a.src}
                alt="Team member"
                style={{
                  position: "absolute",
                  left: a.left,
                  top: a.top,
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  border: "2px solid rgba(255,255,255,0.22)",
                  objectFit: "cover",
                }}
              />
            ))}
            <div style={{ position: "absolute", right: "18%", bottom: "20%", textAlign: "center" }}>
              <div style={{ fontSize: "clamp(3.4rem, 7vw, 5.4rem)", fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1 }}>
                55+
              </div>
              <div style={{ color: "rgba(255,255,255,0.62)", fontSize: "0.85rem" }}>Team members</div>
            </div>
          </div>
        </div>

        <div className="about-info-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginTop: "2.25rem" }}>
          <p style={{ fontSize: "0.92rem", color: "rgba(255,255,255,0.72)", lineHeight: 1.6 }}>
            <span style={{ display: "block", fontFamily: "monospace", color: "rgba(255,255,255,0.34)", marginBottom: "0.35rem" }}>{"{/}"}</span>
            Your digital design and development agency for high-impact results
          </p>
          <p style={{ fontSize: "0.92rem", color: "rgba(255,255,255,0.72)", lineHeight: 1.6 }}>
            <span style={{ display: "block", fontFamily: "monospace", color: "rgba(255,255,255,0.34)", marginBottom: "0.35rem" }}>{"{/}"}</span>
            A global team that understands your market, users, and how to make products win
          </p>
        </div>

        <div style={{ height: "1px", background: "rgba(255,255,255,0.12)", marginTop: "2.5rem" }} />

        <div
          className="about-bottom-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr",
            alignItems: "center",
            gap: "2rem",
            paddingTop: "1.5rem",
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1.4rem", color: "rgba(255,255,255,0.78)", fontWeight: 600 }}>
            {["WordPress.com", "interprefy", "PLAYERS HEALTH", "Blockworks"].map((item) => (
              <span key={item} style={{ fontSize: "1rem", opacity: 0.9 }}>{item}</span>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", borderLeft: "1px solid rgba(255,255,255,0.12)", paddingLeft: "1.5rem" }}>
            <div>
              <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.8rem", marginBottom: "0.35rem" }}>Our clients raised</div>
              <div style={{ fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.02em" }}>$1B+</div>
            </div>
            <div>
              <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.8rem", marginBottom: "0.35rem" }}>Unicorns</div>
              <div style={{ fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.02em" }}>3 clients</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-top-grid,
          .about-bottom-grid,
          .about-info-grid {
            grid-template-columns: 1fr !important;
          }
          .about-bottom-grid {
            gap: 1.25rem !important;
          }
          .about-bottom-grid > div:last-child {
            border-left: none !important;
            border-top: 1px solid rgba(255,255,255,0.12);
            padding-left: 0 !important;
            padding-top: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
