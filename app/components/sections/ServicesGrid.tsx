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
        background: "#08080a",
        paddingBlock: "clamp(1rem, 3vw, 2rem)",
        paddingBottom: "clamp(5rem, 10vw, 9rem)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Blue glow */}
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(40,20,160,0.5) 0%, transparent 65%)",
      }}/>

      <div style={{
        maxWidth: "1360px",
        margin: "0 auto",
        padding: "0 clamp(1rem, 3vw, 2.5rem)",
        position: "relative",
        zIndex: 1,
      }}>
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
      </div>

      <style>{`
        @media (max-width: 640px) {
          .hide-mobile { display: none; }
        }
      `}</style>
    </section>
  );
}
