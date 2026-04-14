"use client";
import { useRef, useEffect, useState } from "react";

const items = [
  { label: "Hiring system with immediate start" },
  { label: "Guaranteed on-time deliverables" },
  { label: "Flexible collaboration & fixed monthly rate" },
];

function CodeBraces({ color = "rgba(255,255,255,0.3)" }: { color?: string }) {
  return (
    <span style={{
      fontFamily: "monospace",
      fontSize: "0.85rem",
      color,
      letterSpacing: "-0.08em",
      lineHeight: 1,
      userSelect: "none",
      flexShrink: 0,
    }}>
      {"{/}"}
    </span>
  );
}

function AnimatedItem({ label, index }: { label: string; index: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        alignItems: "center",
        gap: "1.5rem",
        padding: "1.75rem 0",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${index * 0.1 + 0.1}s, transform 0.6s ease ${index * 0.1 + 0.1}s`,
        cursor: "default",
      }}
    >
      <CodeBraces color={hovered ? "rgba(198,255,0,0.7)" : "rgba(255,255,255,0.3)"} />
      <span style={{
        fontSize: "clamp(1rem, 2vw, 1.3rem)",
        fontWeight: 600,
        color: hovered ? "#ffffff" : "rgba(255,255,255,0.75)",
        letterSpacing: "-0.015em",
        transition: "color 0.2s",
      }}>
        {label}
      </span>
    </div>
  );
}

export default function Whyfilq() {
  const titleRef = useRef<HTMLDivElement>(null);
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTitleVisible(true); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section style={{
      position: "relative",
      background: "#08080a",
      overflow: "hidden",
      paddingBlock: "clamp(5rem, 10vw, 9rem)",
    }}>
      {/* Blue radial glow */}
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(40,20,160,0.55) 0%, transparent 70%)",
      }} />

      <div style={{
        maxWidth: "1360px",
        margin: "0 auto",
        padding: "0 clamp(1rem, 3vw, 2.5rem)",
        position: "relative",
        zIndex: 1,
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gap: "clamp(2rem, 6vw, 8rem)",
        alignItems: "start",
      }} className="why-grid">

        {/* Left — label */}
        <div
          ref={titleRef}
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "translateX(0)" : "translateX(-20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
            paddingTop: "0.25rem",
          }}
        >
          <span style={{
            fontSize: "0.72rem",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.4)",
            whiteSpace: "nowrap",
          }}>
            RESULTS
          </span>
        </div>

        {/* Right — heading + items */}
        <div>
          <h2
            style={{
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              fontWeight: 700,
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
              color: "#fff",
              marginBottom: "1rem",
              opacity: titleVisible ? 1 : 0,
              transform: titleVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.6s ease 0.05s, transform 0.6s ease 0.05s",
            }}
          >
            <em style={{
              fontFamily: "var(--font-baskerville), 'Libre Baskerville', Georgia, serif",
              fontStyle: "italic",
              fontWeight: 400,
              color: "#a78bfa",
            }}>
              filq
            </em>
            {" "}is your perfect choice{" "}
            <br />
            in terms of
          </h2>

          {/* Items */}
          <div style={{ marginTop: "1rem" }}>
            {items.map((item, i) => (
              <AnimatedItem key={item.label} label={item.label} index={i} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .why-grid { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
        }
      `}</style>
    </section>
  );
}
