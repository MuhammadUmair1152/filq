"use client";
import { useState } from "react";

const tabs = [
  {
    idx: 0,
    id: "mojo",
    logoActive: "https://cdn.prod.website-files.com/65647bbe0d57c8abad78e939/69440f312ad48bb045a488fb_mojo-logo-alt.avif",
    bgColor: "#c6ff00",
    textColor: "#0b0b0b",
    quote: (
      <>
        "I was impressed with the <span className="font-serif-italic" style={{ fontWeight: 500 }}>high levels of detail</span> and polish for all the features."
      </>
    ),
    authorName: "Jimmy Hosang",
    authorRole: "Founder & CEO",
    authorImg: "https://cdn.prod.website-files.com/65647bbe0d57c8abad78e939/6887368554c171dcae10f1c7_Jimmy%20Hosang.png",
  },
  {
    idx: 1,
    id: "tixbase",
    logoActive: "https://cdn.prod.website-files.com/65647bbe0d57c8abad78e939/6895d1cfe2d97bf73bc5579b_tixbase.svg",
    bgColor: "#CAC1FF",
    textColor: "#0b0b0b",
    quote: (
      <>
        "Their professionalism, dedication, responsiveness, <span className="font-serif-italic" style={{ fontWeight: 500 }}>and determination are commendable."</span>
      </>
    ),
    authorName: "Emil Ljesnjanin",
    authorRole: "Founder & CEO",
    authorImg: "https://cdn.prod.website-files.com/65647bbe0d57c8abad78e939/68873685635da2664f9b3f02_Emil%20Ljesnjanin.png",
  },
  {
    idx: 2,
    id: "myso",
    logoActive: "https://cdn.prod.website-files.com/65647bbe0d57c8abad78e939/67f3cf655008b32a35ea3b25_myso-logo-white.svg",
    bgColor: "#562B9C", // deep purple
    textColor: "#ffffff",
    quote: (
      <>
        <span className="font-serif-italic" style={{ fontWeight: 500 }}>"Their expertise and guidance were instrumental. </span>They demonstrated their commitment to creating a product that resonated with our target audience, which led to improved user satisfaction."
      </>
    ),
    authorName: "Aetienne Sardon",
    authorRole: "Founder, MYSO Finance",
    authorImg: "https://cdn.prod.website-files.com/65647bbe0d57c8abad78e939/6887368518e6f05a58a01257_Aetienne%20Sardon.avif",
  },
  {
    idx: 3,
    id: "enzyme",
    logoActive: "https://cdn.prod.website-files.com/65647bbe0d57c8abad78e939/6895d230b5dac976bdfe353e_enzyme.svg",
    bgColor: "#C5BEFE", // distinct lavender for enzyme
    textColor: "#0b0b0b",
    quote: (
      <>
        "Working with navoq is really smooth in terms of <span className="font-serif-italic" style={{ fontWeight: 500 }}>communication and workflow"</span>
      </>
    ),
    authorName: "Stephane Heip",
    authorRole: "CMO, Enzyme",
    authorImg: "https://cdn.prod.website-files.com/65647bbe0d57c8abad78e939/688736856658f3949025bfde_Stephane%20Heip.png",
  }
];

function CircleButton({ onClick, direction, dark }: { onClick: () => void, direction: "left" | "right", dark: boolean }) {
  const iconColor = dark ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.7)";
  const iconColorHover = dark ? "rgba(0,0,0,1)" : "rgba(255,255,255,1)";
  const bgColor = dark ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.1)";
  const bgColorHover = dark ? "rgba(0,0,0,0.12)" : "rgba(255,255,255,0.2)";

  return (
    <button
      onClick={onClick}
      style={{
        width: "48px",
        height: "48px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: bgColor,
        border: "none",
        cursor: "pointer",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = bgColorHover;
        const svgPath = e.currentTarget.querySelector("path");
        if (svgPath) svgPath.style.stroke = iconColorHover;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = bgColor;
        const svgPath = e.currentTarget.querySelector("path");
        if (svgPath) svgPath.style.stroke = iconColor;
      }}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        {direction === "left" ? (
          <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: "stroke 0.3s" }} />
        ) : (
          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: "stroke 0.3s" }} />
        )}
      </svg>
    </button>
  );
}

export default function VerifiedReviews() {
  const [activeTab, setActiveTab] = useState(3); // Start with Enzyme (idx 3) based on screenshots

  const activeData = tabs[activeTab];

  return (
    <section
      id="reviews"
      style={{
        position: "relative",
        background: "transparent",
        paddingTop: "clamp(4rem, 7vw, 7rem)",
        paddingBottom: "clamp(4rem, 7vw, 7rem)",
        overflow: "hidden",
      }}
    >
      <div style={{
        maxWidth: "1440px",
        margin: "0 auto",
        padding: "0 clamp(1rem, 3vw, 2rem)",
        position: "relative",
        zIndex: 1,
      }}>

        {/* Section Header */}
        <div style={{
          position: "relative",
          marginBottom: "clamp(3rem, 5vw, 5rem)",
          textAlign: "center",
        }}>
          {/* Label — top left */}
          <span style={{
            position: "absolute",
            top: "0.2rem",
            left: 0,
            fontSize: "0.62rem",
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.3)",
            whiteSpace: "nowrap",
          }}>
            VERIFIED REVIEWS
          </span>

          {/* Heading — centered */}
          <h2 style={{
            fontSize: "clamp(1.8rem, 4vw, 3.5rem)",
            fontWeight: 600,
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
            color: "#fff",
            margin: "0 auto",
            maxWidth: "760px",
            paddingTop: "1.5rem",
          }}>
            Join 250+ companies<br />
            <span className="font-serif-italic" style={{ color: "#fff", fontStyle: "italic", fontWeight: 600 }}>who&apos;ve built and scaled</span>{" "}
            with<br />
            our navoq team
          </h2>
        </div>

        {/* Main Content Area: Left Tabs + Right Card */}
        <div style={{
          display: "flex",
          gap: "1rem",
          alignItems: "stretch", // both columns equal height
          minHeight: "440px", // fixed height so it doesn't jump
        }} className="reviews-layout">

          {/* Left Column: Tabs */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            width: "320px",
            flexShrink: 0,
          }} className="reviews-tabs-wrapper">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.idx;
              return (
                <div
                  key={tab.id}
                  onClick={() => setActiveTab(tab.idx)}
                  className="review-tab"
                  style={{
                    background: isActive ? "#26262a" : "#1a1a1c",
                    border: "1px solid",
                    borderColor: isActive ? "rgba(255,255,255,0.06)" : "transparent",
                    borderRadius: "20px",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "all 0.4s ease",
                    opacity: isActive ? 1 : 0.4,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '1';
                    if (!isActive) {
                      e.currentTarget.style.background = "#202024";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.03)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.opacity = '0.4';
                      e.currentTarget.style.background = "#1a1a1c";
                      e.currentTarget.style.borderColor = "transparent";
                    }
                  }}
                >
                  <img src={tab.logoActive} alt={tab.id} style={{ maxWidth: "150px", maxHeight: "40px", objectFit: "contain" }} />
                </div>
              );
            })}
          </div>

          {/* Right Column: Review Card */}
          <div style={{
            flex: 1,
            borderRadius: "20px",
            background: activeData.bgColor,
            color: activeData.textColor,
            padding: "clamp(2rem, 4vw, 4.5rem)",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            transition: "background 0.5s ease, color 0.5s ease",
            overflow: "hidden",
            minHeight: "440px",
          }}>

            {/* Top right Navigation */}
            <div style={{
              position: "absolute",
              top: "2.5rem",
              right: "2.5rem",
              display: "flex",
              gap: "0.75rem",
              zIndex: 10,
            }} className="review-arrows-wrapper">
              <CircleButton
                onClick={() => setActiveTab(p => p > 0 ? p - 1 : tabs.length - 1)}
                direction="left"
                dark={activeData.textColor === "#0b0b0b"}
              />
              <CircleButton
                onClick={() => setActiveTab(p => p < tabs.length - 1 ? p + 1 : 0)}
                direction="right"
                dark={activeData.textColor === "#0b0b0b"}
              />
            </div>

            {/* Main Quote */}
            <div style={{ maxWidth: "880px", position: "relative", zIndex: 2, paddingRight: "10rem", marginTop: "1rem" }} className="review-quote-container">
              {/* Fade in wrapper for quote */}
              <div key={activeData.idx} style={{
                animation: "fade-in 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)",
                fontSize: "clamp(1.4rem, 2.5vw, 2.3rem)",
                lineHeight: 1.35,
                fontWeight: 400,
                letterSpacing: "-0.015em",
              }}>
                {activeData.quote}
              </div>
            </div>

            {/* Bottom Section */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", zIndex: 2, position: "relative" }}>

              {/* Author info */}
              <div key={`author-${activeData.idx}`} style={{ display: "flex", alignItems: "center", gap: "1.25rem", animation: "fade-in 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)" }}>
                <img src={activeData.authorImg} alt={activeData.authorName} style={{ width: "64px", height: "64px", borderRadius: "50%", objectFit: "cover" }} />
                <div>
                  <h4 style={{ fontSize: "1.2rem", fontWeight: 700, margin: 0, marginBottom: "0.2rem", fontStyle: "italic", fontFamily: "var(--font-outfit), serif" }}>
                    {activeData.authorName}
                  </h4>
                  <p style={{ fontSize: "0.85rem", opacity: 0.7, margin: 0, fontWeight: 500, letterSpacing: "0.02em" }}>
                    {activeData.authorRole}
                  </p>
                </div>
              </div>

              {/* Rating Section */}
              <div style={{ display: "flex", alignItems: "flex-end", gap: "0.75rem" }}>
                <span style={{ fontSize: "3.5rem", fontWeight: 700, lineHeight: 0.85, letterSpacing: "-0.04em" }}>5.0</span>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", paddingBottom: "0.2rem" }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.05em" }}>Clutch</span>
                  <div style={{ display: "flex", gap: "3px" }}>
                    {[1, 2, 3, 4, 5].map(i => (
                      <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M8 1l1.8 3.7L14 5.3l-3 2.9.7 4.1L8 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.6L8 1z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(12px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @media (max-width: 1100px) {
          .reviews-layout {
            flex-direction: column-reverse;
          }
          .reviews-tabs-wrapper {
            width: 100% !important;
            flex-direction: row !important;
            height: 90px;
          }
          .review-quote-container {
            padding-right: 0px !important;
            max-width: 100% !important;
            margin-top: 5rem !important; /* clear space for nav arrows */
            margin-bottom: 3rem !important;
          }
        }
        @media (max-width: 768px) {
          .review-arrows-wrapper {
            top: 1.5rem !important;
            right: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
