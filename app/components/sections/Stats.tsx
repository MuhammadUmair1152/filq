"use client";
import { useRef, useEffect, useState } from "react";

const stats = [
  {
    value: "+170%",
    label: "Engagement Rate",
    desc: "Intuitive flows that turn clicks into leads",
    chips: [
      { text: "WordPress.com", bg: "#fff", color: "#000" },
      { text: "Galaxy ✦",     bg: "#1a1a2e", color: "#fff" },
      { text: "Flair ⬡",      bg: "#7c3aed", color: "#fff" },
    ],
  },
  {
    value: "4.6x",
    label: "Revenue Growth After Redesign",
    desc: "Product improvements that scale business impact",
    chips: [
      { text: "$1.5M  GT Protocol",  bg: "#111", color: "#fff" },
      { text: "$2.3M  Mojo CX",      bg: "#059669", color: "#fff" },
      { text: "$2.4M  Myso Finance", bg: "#111", color: "#fff" },
    ],
  },
  {
    value: "-37%",
    label: "Churn Across SaaS Clients",
    desc: "Better onboarding, better UX, fewer cancellations",
    chips: [
      { text: "12K Saved 📊",  bg: "#fff", color: "#000" },
    ],
  },
];

function Chip({ text, bg, color, delay }: { text: string; bg: string; color: string; delay: string }) {
  return (
    <span style={{
      display: "inline-flex",
      alignItems: "center",
      padding: "0.3rem 0.8rem",
      borderRadius: "999px",
      background: bg,
      color,
      fontSize: "0.75rem",
      fontWeight: 600,
      whiteSpace: "nowrap",
      boxShadow: "0 2px 16px rgba(0,0,0,0.4)",
      animation: `chipFloat 3s ease-in-out infinite alternate`,
      animationDelay: delay,
      border: "1px solid rgba(255,255,255,0.12)",
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
        paddingRight: "2rem",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s ease ${index * 0.12}s, transform 0.7s ease ${index * 0.12}s`,
      }}
    >
      {/* Floating chips */}
      <div style={{
        position: "absolute",
        top: "-1.5rem",
        left: "0",
        display: "flex",
        flexDirection: "column",
        gap: "0.4rem",
        zIndex: 2,
      }}>
        {stat.chips.map((chip, i) => (
          <Chip key={chip.text} {...chip} delay={`${i * 0.5}s`} />
        ))}
      </div>

      {/* Giant ghost number */}
      <div style={{
        fontSize: "clamp(4.5rem, 10vw, 9rem)",
        fontWeight: 900,
        letterSpacing: "-0.04em",
        color: "rgba(255,255,255,0.08)",
        lineHeight: 0.9,
        userSelect: "none",
        marginTop: "3rem",
      }}>
        {stat.value}
      </div>

      {/* Labels */}
      <div style={{ marginTop: "0.75rem" }}>
        <div style={{
          fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
          fontWeight: 700,
          color: "#fff",
          marginBottom: "0.3rem",
        }}>
          {stat.label}
        </div>
        <div style={{
          fontSize: "0.85rem",
          color: "rgba(255,255,255,0.45)",
          lineHeight: 1.5,
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
      background: "#08080a",
      overflow: "hidden",
      paddingBlock: "clamp(4rem, 8vw, 7rem)",
      borderTop: "1px solid rgba(255,255,255,0.06)",
    }}>
      {/* Blue glow */}
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 70% 60% at 80% 50%, rgba(40,20,180,0.5) 0%, transparent 65%)",
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
