"use client";
import { useState } from "react";
import Link from "next/link";

const footerLinks = {
  Main: [
    { label: "Works", href: "#works" },
    { label: "Services", href: "#services" },
    { label: "Industries", href: "#industries" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" },
    { label: "Blog", href: "#blog" },
  ],
  Services: [
    { label: "UI/UX Design", href: "#services" },
    { label: "Branding", href: "#services" },
    { label: "Web Development", href: "#services" },
    { label: "Mobile Apps", href: "#services" },
    { label: "No-Code", href: "#services" },
    { label: "Design Systems", href: "#services" },
  ],
  Industries: [
    { label: "SaaS", href: "#industries" },
    { label: "AI & ML", href: "#industries" },
    { label: "Web3 / Blockchain", href: "#industries" },
    { label: "Fintech", href: "#industries" },
  ],
  Socials: [
    { label: "LinkedIn", href: "#" },
    { label: "Behance", href: "#" },
    { label: "Dribbble", href: "#" },
    { label: "Twitter / X", href: "#" },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer
      id="contact"
      style={{
        borderTop: "1px solid var(--border-subtle)",
        paddingTop: "5rem",
        paddingBottom: "2.5rem",
        background: "var(--bg-primary)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "200px",
          background:
            "radial-gradient(ellipse at top, rgba(217,255,0,0.06) 0%, transparent 80%)",
          pointerEvents: "none",
        }}
      />

      <div className="container-site" style={{ position: "relative", zIndex: 1 }}>
        {/* CTA banner */}
        <div
          className="card card-lg"
          style={{
            padding: "clamp(2rem, 5vw, 3.5rem)",
            marginBottom: "5rem",
            background: "linear-gradient(145deg, rgba(217,255,0,0.08) 0%, rgba(59,120,255,0.06) 100%)",
            border: "1px solid rgba(217,255,0,0.15)",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          <span
            className="pill"
            style={{ textTransform: "uppercase", letterSpacing: "0.08em", fontSize: "0.72rem" }}
          >
            Let&apos;s work together
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.75rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              maxWidth: "600px",
            }}
          >
            Ready to build something{" "}
            <em
              className="font-serif-italic"
              style={{ fontWeight: 400, color: "var(--accent-lime)" }}
            >
              extraordinary?
            </em>
          </h2>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "1rem",
              maxWidth: "440px",
              lineHeight: 1.65,
            }}
          >
            Book a free strategy call with our team. We&apos;ll review your
            product, discuss your goals, and outline a clear path forward.
          </p>

          {/* Email form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            style={{
              display: "flex",
              gap: "0.75rem",
              flexWrap: "wrap",
              justifyContent: "center",
              width: "100%",
              maxWidth: "500px",
            }}
          >
            <input
              id="footer-email-input"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                flex: "1 1 220px",
                padding: "0.875rem 1.25rem",
                borderRadius: "var(--radius-pill)",
                border: "1px solid var(--border-subtle)",
                background: "var(--bg-card)",
                color: "var(--text-primary)",
                fontSize: "0.9rem",
                outline: "none",
                fontFamily: "inherit",
              }}
            />
            <button
              type="submit"
              id="footer-email-submit"
              className="btn-lime"
              style={{ flexShrink: 0 }}
            >
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
            </button>
          </form>
        </div>

        {/* Footer columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr repeat(4, 1fr)",
            gap: "2rem",
            marginBottom: "4rem",
          }}
          className="footer-grid"
        >
          {/* Brand column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Link
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.55rem",
                textDecoration: "none",
              }}
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <polygon points="14,2 26,24 2,24" fill="none" stroke="#F5F7FF" strokeWidth="2" strokeLinejoin="round" />
                <polygon points="14,8 20,20 8,20" fill="rgba(217,255,0,0.8)" />
              </svg>
              <span style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
                filq
              </span>
            </Link>
            <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.65, maxWidth: "260px" }}>
              A digital product design and development agency helping founders turn ideas into market-ready products.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem", marginTop: "0.5rem" }}>
              <span style={{ fontSize: "0.78rem", color: "var(--text-muted-alt)" }}>📍 Kyiv, Ukraine</span>
              <span style={{ fontSize: "0.78rem", color: "var(--text-muted-alt)" }}>📍 Warsaw, Poland</span>
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <h4
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--text-muted-alt)",
                  marginBottom: "0.25rem",
                }}
              >
                {category}
              </h4>
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    transition: "color var(--transition-fast)",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-primary)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)")
                  }
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
            paddingTop: "1.5rem",
            borderTop: "1px solid var(--border-subtle)",
          }}
        >
          <span style={{ fontSize: "0.825rem", color: "var(--text-muted-alt)" }}>
            © {new Date().getFullYear()} filq. All rights reserved.
          </span>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontSize: "0.825rem",
                  color: "var(--text-muted-alt)",
                  textDecoration: "none",
                  transition: "color var(--transition-fast)",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted-alt)")
                }
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
