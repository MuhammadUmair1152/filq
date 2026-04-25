"use client";

import ButtonPrimary from "../ui/ButtonPrimary";

const AwardData = [
  {
    logo: "https://cdn.prod.website-files.com/65647bbe0d57c8abad78e939/686ce8bdada34499f43945a8_clutch.avif",
    title: "89+ Reviews",
    subtitle: "on Clutch",
  },
  {
    logo: "https://cdn.prod.website-files.com/65647bbe0d57c8abad78e939/686ce899a6ba3323880a0383_upwork.avif",
    title: "Top Rated Plus Agency",
    subtitle: "on Upwork",
  },
  {
    logo: "https://cdn.prod.website-files.com/65647bbe0d57c8abad78e939/686ce8bd27bd0ca6f84fc300_dribble.avif",
    title: "Top 50 Trending team",
    subtitle: "on Dribbble",
  },
  {
    logo: "https://cdn.prod.website-files.com/65647bbe0d57c8abad78e939/686ce8bdaa0d9d5de42edc48_behance.avif",
    title: "Projects are Featured",
    subtitle: "on Behance platform",
  }
];

export default function BannerCTA() {
  return (
    <section id="banner-cta" style={{ position: "relative", background: "transparent", paddingTop: "0.5rem", paddingBottom: "clamp(3.5rem, 6vw, 5rem)" }}>

      {/* Container for the White Box */}
      <div style={{ maxWidth: "1250px", margin: "0 auto", padding: "0 clamp(1rem, 3vw, 2rem)", position: "relative", zIndex: 1 }}>

        {/* Outer Glow (All sides background blur) */}
        <div aria-hidden style={{
          position: "absolute",
          top: "40%", left: "50%", transform: "translate(-50%, -50%)",
          width: "90%", height: "80%",
          background: "radial-gradient(ellipse at center, rgba(170, 40, 255, 0.4) 0%, rgba(130, 20, 255, 0.15) 50%, transparent 70%)",
          filter: "blur(60px)",
          zIndex: 0,
          pointerEvents: "none"
        }} />

        {/* The White Box */}
        <div style={{
          position: "relative",
          zIndex: 2,
          background: "#fff",
          borderRadius: "32px",
          padding: "clamp(4rem, 8vw, 7rem) clamp(1rem, 4vw, 2rem)",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden", // To contain the inner right gradient
          boxShadow: "0 20px 40px rgba(0,0,0,0.1)" // Subtle physical shadow
        }}>

          {/* Inner RIGHT Purplish Gradient - Darkened */}
          <div aria-hidden style={{
            position: "absolute",
            top: 0, bottom: 0, right: 0,
            width: "50%",
            background: "linear-gradient(270deg, rgba(190, 130, 255, 0.55) 0%, rgba(220, 180, 255, 0.1) 65%, rgba(255, 255, 255, 0) 100%)",
            pointerEvents: "none",
            zIndex: 1
          }} />

          <div style={{ position: "relative", zIndex: 2 }}>
            <h2 style={{
              fontSize: "clamp(2.8rem, 6vw, 4.8rem)",
              fontWeight: 600,
              color: "#161616",
              lineHeight: 1.05,
              letterSpacing: "-0.015em",
              maxWidth: "650px",
              margin: "0 auto",
              marginBottom: "1.2rem"
            }}>
              Ready to scale<br />your business?
            </h2>
            <p style={{
              fontSize: "0.95rem",
              color: "#3d3d3d",
              fontWeight: 500,
              maxWidth: "480px",
              margin: "0 auto",
              marginBottom: "3rem",
              lineHeight: 1.5
            }}>
              Book a free consultation to get clarity, direction, and expert advice you can implement right away.
            </p>

            {/* Book a Call Button (Hero Style but with black hover) */}
            <ButtonPrimary text="Book a Call" href="#contact" variant="lime-black-hover" />
          </div>
        </div>

        {/* Bottom Awards Section */}
        <div style={{
          marginTop: "clamp(3.5rem, 6vw, 6rem)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "2.5rem",
          padding: "0 clamp(1rem, 4vw, 4rem)",
          justifyItems: "center"
        }}>
          {AwardData.map((award, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "1rem" }}>
              <img
                src={award.logo}
                alt={award.subtitle}
                style={{ height: "60px", objectFit: "contain" }}
              />
              <div style={{ marginTop: "0.2rem" }}>
                <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "#fff", marginBottom: "0.2rem", letterSpacing: "0.01em" }}>{award.title}</div>
                <div style={{ fontSize: "0.85rem", fontWeight: 500, color: "rgba(255,255,255,0.6)" }}>{award.subtitle}</div>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
