"use client";
import { useRef, useEffect, useState } from "react";

const services = [
  {
    category: "Branding",
    items: ["Pitch Deck", "Brand Identity", "Logo Design", "Graphic Design", "Brand Naming", "Brand Strategy"],
  },
  {
    category: "Design",
    items: ["UI/UX Design", "Web Design", "Mobile App Design", "Website Redesign", "SaaS Design", "Design System"],
  },
  {
    category: "Development",
    items: ["Web Development", "MVP Development", "WebFlow Development", "Landing Page", "No-Code / Webflow", "Frontend Dev"],
  },
];

function DiagonalArrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, opacity: 0.4 }}>
      <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ServiceItem({ label }: { label: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <li
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 0",
        borderBottom: "1px solid rgba(0,0,0,0.08)",
        color: hovered ? "#0a0a0a" : "#3a3a3a",
        fontSize: "0.95rem",
        fontWeight: 500,
        cursor: "pointer",
        transition: "color 0.2s",
        listStyle: "none",
      }}
    >
      {label}
      <span style={{ color: hovered ? "#0a0a0a" : "#9ca3af", transition: "color 0.2s" }}>
        <DiagonalArrow />
      </span>
    </li>
  );
}

export default function ServicesGrid() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
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
      ref={ref}
      id="services"
      style={{
        background: "transparent",
        paddingBlock: "clamp(1rem, 3vw, 2rem)",
        paddingBottom: "1.5rem", 
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Blue glow - Updated for more blue, less purple */}
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(10, 60, 240, 0.45) 0%, transparent 70%)",
      }}/>

      <div style={{
        maxWidth: "1360px",
        margin: "0 auto",
        padding: "6rem clamp(1rem, 3vw, 2.5rem) 0 clamp(1rem, 3vw, 2.5rem)", /* Added top padding 6rem */
        position: "relative",
        zIndex: 1,
      }}>
        {/* 'SERVICES' corner label */}
        <div style={{
          position: "absolute",
          top: "1rem",
          left: "clamp(1rem, 3vw, 2.5rem)",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.7s ease",
        }}>
          <span style={{
            fontSize: "0.72rem",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.6)",
            whiteSpace: "nowrap",
          }}>
            SERVICES
          </span>
        </div>

        {/* Heading */}
        <h2
          style={{
            fontSize: "clamp(2.2rem, 5vw, 4.5rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.08,
            color: "#fff",
            textAlign: "center",
            marginBottom: "clamp(2rem, 4vw, 3.5rem)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          Digital Product Design &amp;{" "}
          <br className="hide-mobile" />
          Development{" "}
          <em style={{
            fontFamily: "var(--font-baskerville), 'Libre Baskerville', Georgia, serif",
            fontStyle: "italic",
            fontWeight: 400,
          }}>
            Services We Offer
          </em>
        </h2>

        {/* WHITE CARD CONTAINER */}
        <div style={{
          background: "#f0f0f2",
          borderRadius: "28px",
          padding: "clamp(1.25rem, 3vw, 2rem)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "clamp(0.75rem, 2vw, 1.25rem)",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(32px)",
          transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
        }}>
          {services.map((col) => (
            <div
              key={col.category}
              style={{
                background: "#e4e4e8",
                borderRadius: "20px",
                padding: "1.75rem 1.5rem",
              }}
            >
              <h3 style={{
                fontSize: "1.15rem",
                fontWeight: 700,
                color: "#0a0a0a",
                marginBottom: "0.5rem",
                letterSpacing: "-0.01em",
              }}>
                {col.category}
              </h3>
              <ul style={{ margin: 0, padding: 0 }}>
                {col.items.map(item => (
                  <ServiceItem key={item} label={item} />
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* BOTTOM BANNER */}
        <div className="svc-banner" style={{
          marginTop: "1.5rem",
          background: "#161616",
          borderRadius: "24px",
          padding: "1rem 1.5rem 1rem 1rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1.5rem",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(32px)",
          transition: "opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s",
        }}>
          {/* Left info */}
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
            {/* Avatar block */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div style={{ position: "relative", width: "48px", height: "48px" }}>
                <img 
                  src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&q=80&w=150&h=150" 
                  alt="Founder" 
                  style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover" }} 
                />
                <div style={{ position: "absolute", bottom: "-2px", right: "-2px", background: "#fff", borderRadius: "50%", padding: "2px" }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="#0077b5"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ color: "#fff", fontWeight: 600, fontSize: "0.95rem" }}>Vladislav Gavriluk</span>
                <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.75rem" }}>Founder & CEO</span>
              </div>
            </div>
            {/* Banner Statement */}
            <div style={{
              color: "#e5e7eb",
              fontSize: "1.05rem",
              fontWeight: 500,
              maxWidth: "400px",
              lineHeight: 1.4,
            }}>
              Grow revenue and maximize ROI with our product design and development services.
            </div>
          </div>

          {/* Book a Call CTA */}
          <a
            href="#contact"
            className="svc-call-btn"
          >
            <span className="svc-call-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="svc-call-arrow">
                <path d="M4 16L16 4M16 4H6M16 4V14" stroke="#0a0a0a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span className="svc-call-text">
              Book a Call
            </span>
          </a>
        </div>
      </div>

      <style>{`
        /* Service CTA Styles */
        .svc-call-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          text-decoration: none;
          box-shadow: 0 4px 30px rgba(196,255,0,0.15);
          transition: all 0.3s ease;
          border-radius: 99px;
        }
        .svc-call-icon {
          width: 54px;
          height: 54px;
          background: #c6ff00;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border-radius: 50% 50% 0 50%;
          transition: all 0.3s ease;
        }
        .svc-call-text {
          padding: 0 1.75rem;
          height: 54px;
          display: inline-flex;
          align-items: center;
          background: #c6ff00;
          font-weight: 700;
          font-size: 1rem;
          color: #0a0a0a;
          letter-spacing: -0.01em;
          white-space: nowrap;
          border-radius: 99px;
          transition: all 0.3s ease;
        }
        .svc-call-arrow {
          transform: rotate(90deg);
          transition: all 0.3s ease;
        }
        
        .svc-call-btn:hover {
          box-shadow: 0 8px 40px rgba(255,255,255,0.25);
          transform: translateY(-2px);
        }
        .svc-call-btn:hover .svc-call-icon {
          border-radius: 0 50% 50% 50%;
          background: #fff;
        }
        .svc-call-btn:hover .svc-call-text {
          background: #fff;
        }
        .svc-call-btn:hover .svc-call-arrow {
          transform: rotate(-45deg);
        }

        @media (max-width: 860px) {
          .svc-banner {
            flex-direction: column;
            align-items: flex-start;
          }
        }
        @media (max-width: 640px) {
          .hide-mobile { display: none; }
        }
      `}</style>
    </section>
  );
}
