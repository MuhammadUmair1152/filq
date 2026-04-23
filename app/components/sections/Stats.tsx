"use client";
import { useRef, useEffect, useState } from "react";

const stats = [
  {
    value: "+170%",
    label: "Engagement Rate",
    desc: "Intuitive flows that turn clicks into leads",
    chips: [
      { text: "WordPress.com", bg: "#fff", color: "#000", pos: { top: "-15%", left: "-10%", transform: "rotate(-8deg)" } },
      { text: "Galaxy ✦",     bg: "#fff", color: "#000", pos: { top: "-30%", left: "40%", transform: "rotate(4deg)" } },
      { text: "Flair ⬡",      bg: "#7c3aed", color: "#fff", pos: { top: "-10%", left: "80%", transform: "rotate(8deg)" } },
    ],
  },
  {
    value: "4.6x",
    label: "Revenue Growth After Redesign",
    desc: "Product improvements that scale business impact",
    chips: [
      { text: "$1.5 M  GT Protocol",  bg: "#1a1a2e", color: "#fff", pos: { top: "-10%", left: "-5%", transform: "rotate(-5deg)" } },
      { text: "$2.3 M  Mojo CX",      bg: "#059669", color: "#fff", pos: { top: "-35%", left: "30%", transform: "rotate(2deg)" } },
      { text: "$2.4 M  Myso Finance", bg: "#1a1a2e", color: "#fff", pos: { top: "-15%", left: "65%", transform: "rotate(6deg)" } },
    ],
  },
  {
    value: "-37%",
    label: "Churn Across SaaS Clients",
    desc: "Better onboarding, better UX, fewer cancellations",
    chips: [
      { text: "📊", bg: "transparent", color: "#fff", pos: { top: "-35%", left: "45%", transform: "scale(1.5) rotate(-10deg)", shadow: "none" } },
      { text: "👩🏼‍💼👨🏽‍💻 12K SAVED",  bg: "#fff", color: "#000", pos: { top: "-10%", left: "50%", transform: "rotate(4deg)" } },
    ],
  },
];

function Chip({ text, bg, color, delay, pos }: { text: string; bg: string; color: string; delay: string; pos: any }) {
  return (
    <span style={{
      position: "absolute",
      ...pos,
      display: "inline-flex",
      alignItems: "center",
      padding: pos.shadow === "none" ? "0" : "0.4rem 1rem",
      borderRadius: "999px",
      background: bg,
      color,
      fontSize: pos.shadow === "none" ? "1.5rem" : "0.75rem",
      fontWeight: 700,
      whiteSpace: "nowrap",
      boxShadow: pos.shadow === "none" ? "none" : "0 8px 30px rgba(0,0,0,0.3)",
      animation: `chipFloat 4s ease-in-out infinite alternate`,
      animationDelay: delay,
      border: pos.shadow === "none" ? "none" : bg === "#fff" ? "1px solid rgba(0,0,0,0.1)" : "1px solid rgba(255,255,255,0.12)",
      zIndex: 10,
    }}>
      {text}
    </span>
  );
}

function StatBlock({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        paddingRight: "0", /* Remove padding to keep strict centering */
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s ease ${index * 0.12}s, transform 0.7s ease ${index * 0.12}s`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center", /* Centered */
        textAlign: "center", /* Centered */
        paddingTop: "2rem", /* Space for hovering chips */
      }}
    >
      {/* Value with floating chips relative to it */}
      <div style={{ position: "relative", display: "inline-block", marginBottom: "1rem" }}>
        {stat.chips.map((chip, i) => (
          <Chip key={i} {...chip} delay={`${i * 0.5}s`} />
        ))}
        <div style={{
          fontSize: "clamp(4rem, 8vw, 7.5rem)",
          fontWeight: 700,
          letterSpacing: "-0.04em",
          color: "#d1d5db", /* Solid light gray */
          lineHeight: 0.95,
          userSelect: "none",
        }}>
          {stat.value}
        </div>
      </div>

      {/* Labels */}
      <div style={{ marginTop: "0.25rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{
          fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
          fontWeight: 700,
          color: "#fff",
          marginBottom: "0.4rem",
        }}>
          {stat.label}
        </div>
        <div style={{
          fontSize: "0.85rem",
          color: "rgba(255,255,255,0.45)",
          lineHeight: 1.5,
          maxWidth: "240px", /* Constrain width for a nicer centered look */
        }}>
          {stat.desc}
        </div>
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <section style={{
      position: "relative",
      background: "transparent",
      overflow: "hidden",
      paddingBottom: "clamp(5rem, 10vw, 9rem)",
      paddingTop: "1rem", /* drastically reduced from 4rem so it blends with Results */
    }}>
      {/* Blue glow */}
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 70% 60% at 80% 50%, rgba(10, 60, 240, 0.45) 0%, transparent 65%)",
      }}/>

      <div style={{
        maxWidth: "1360px",
        margin: "0 auto",
        padding: "0 clamp(1rem, 3vw, 2.5rem)",
        position: "relative",
        zIndex: 1,
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: "clamp(1.5rem, 4vw, 3rem)",
        paddingTop: "3rem",
      }}>
        {stats.map((stat, i) => (
          <StatBlock key={stat.value} stat={stat} index={i} />
        ))}
      </div>

      <style>{`
        @keyframes chipFloat {
          from { transform: translateY(0) rotate(-1deg); }
          to   { transform: translateY(-8px) rotate(1deg); }
        }
      `}</style>
    </section>
  );
}
