"use client";

export default function BannerCTA() {
  return (
    <section
      id="about"
      className="section-spacing"
      style={{ borderTop: "1px solid var(--border-subtle)" }}
    >
      <div className="container-site">
        <div
          className="card card-lg"
          style={{
            padding: "clamp(2rem, 5vw, 3.5rem)",
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "2rem",
            alignItems: "center",
            background: "var(--bg-card)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Background glow */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              right: "-10%",
              top: "-30%",
              width: "400px",
              height: "400px",
              background:
                "radial-gradient(circle, rgba(217,255,0,0.08) 0%, transparent 60%)",
              pointerEvents: "none",
            }}
          />

          <div style={{ position: "relative", zIndex: 1 }}>
            <span
              className="pill"
              style={{
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                fontSize: "0.72rem",
                marginBottom: "1.5rem",
                display: "inline-flex",
              }}
            >
              From the founders
            </span>
            <h2
              style={{
                fontSize: "clamp(1.6rem, 3.5vw, 2.75rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 1.22,
                maxWidth: "520px",
                marginBottom: "1.25rem",
              }}
            >
              We don't just design — we build products that{" "}
              <em className="font-serif-italic" style={{ fontWeight: 400 }}>
                drive real revenue
              </em>
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--text-muted)",
                lineHeight: 1.7,
                maxWidth: "480px",
                marginBottom: "2rem",
              }}
            >
              Every project starts with a deep understanding of your users and
              your business goals. We obsess over the details so your product
              doesn't just look great — it converts and retains.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
              <a href="#contact" className="btn-lime" id="banner-cta-book-call">
                Book a Call
                <span className="btn-lime-icon">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M2 12L12 2M12 2H5M12 2V9"
                      stroke="var(--accent-lime)"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div style={{ display: "flex" }}>
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      style={{ color: "#F5B731", fontSize: "1rem" }}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
                  5.0 on Clutch · 97% satisfaction
                </span>
              </div>
            </div>
          </div>

          {/* Founder avatar */}
          <div
            style={{
              position: "relative",
              zIndex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.75rem",
            }}
            className="banner-avatar"
          >
            <div
              style={{
                width: "clamp(120px, 14vw, 200px)",
                height: "clamp(120px, 14vw, 200px)",
                borderRadius: "var(--radius-card-lg)",
                background:
                  "linear-gradient(145deg, rgba(217,255,0,0.3) 0%, rgba(59,120,255,0.2) 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "4rem",
                border: "2px solid rgba(217,255,0,0.2)",
              }}
            >
              👤
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontWeight: 600, fontSize: "0.9rem" }}>
                Vladislav Gavriluk
              </div>
              <div
                style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}
              >
                Founder & CEO
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .banner-avatar { display: none !important; }
        }
      `}</style>
    </section>
  );
}
