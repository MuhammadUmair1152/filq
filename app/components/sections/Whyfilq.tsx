"use client";
import { useRef, useEffect, useState } from "react";
import Stats from "./Stats";

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
        fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)", /* Smaller font for list item */
        fontWeight: 500, /* Adjusted from 600 to pair with smaller physical size */
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
      background: "transparent",
      overflow: "hidden",
      paddingTop: "clamp(5rem, 10vw, 9rem)",
      paddingBottom: "1rem", /* Removed huge bottom padding to glue to stats */
    }}>
      {/* Blue radial glow */}
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 90% 90% at 50% 50%, rgba(10, 70, 240, 0.45) 0%, rgba(0, 30, 150, 0.15) 45%, transparent 75%)",
      }} />

      <div style={{
        maxWidth: "1360px",
        margin: "0 auto",
        padding: "0 clamp(1rem, 3vw, 2.5rem)",
        position: "relative",
        zIndex: 1,
        display: "grid",
        gridTemplateColumns: "minmax(150px, 1fr) 2.2fr", /* Enforces the rigid right-shifted alignment seen in the image */
        gap: "clamp(2rem, 4vw, 5rem)",
        alignItems: "start",
      }} className="why-grid">

        {/* Left — label */}
        <div
          ref={titleRef}
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "translateX(0)" : "translateX(-20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
            marginTop: "-1.5rem", /* Physically pull it up visually */
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
              fontSize: "clamp(2.4rem, 3vw, 3rem)", /* Finetuned heading size from Image 8 */
              fontWeight: 600,
              letterSpacing: "-0.015em",
              lineHeight: 1.15,
              color: "#fff",
              marginBottom: "3rem", /* Added more margin to push the list items down slightly, matching image */
              opacity: titleVisible ? 1 : 0,
              transform: titleVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.6s ease 0.05s, transform 0.6s ease 0.05s",
            }}
          >
            <em style={{
              fontFamily: "var(--font-baskerville), 'Libre Baskerville', Georgia, serif",
              fontStyle: "italic",
              fontWeight: 200,
              color: "#fff", /* White instead of purple as per screenshot */
            }}>
              navoq
            </em>
            {" "}is your perfect
            <br />
            choice in terms of
          </h2>

          {/* Items */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
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
      <Stats />
    </section>
  );
}
