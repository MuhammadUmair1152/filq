"use client";

const casesData = [
  {
    id: "myso",
    tags: ["Web 3.0", "$2.4M raised", "🇺🇸"],
    heading: "MYSO Finance raised $2.4M and reached 85% user engagement with our design",
    review: {
      stars: 5,
      text: "Arounda excels with meticulous attention to detail, commitment to excellence, and creative problem-solving. Their inventive solutions captivate visually and significantly enhance the user experience.",
      author: "Aetienne Sarlon",
      role: "Founder, MYSO Finance",
      avatar: "https://i.pravatar.cc/100?u=myso"
    },
    images: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200&h=800",
      "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=1200&h=800",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200&h=800"
    ]
  },
  {
    id: "mojo",
    tags: ["AI", "Digital Voice Analysing Tool", "🇬🇧"],
    heading: "MOJO-CX by TMAC streamlines contact centers with AI-powered coaching and prompts.",
    review: {
      stars: 5,
      text: "I was impressed with the high levels of detail and polish for all the features.",
      author: "Jimmy Hosang",
      role: "Founder & CEO",
      avatar: "https://i.pravatar.cc/100?u=mojo"
    },
    images: [
      "https://picsum.photos/seed/mojo1/1200/800",
      "https://picsum.photos/seed/mojo2/1200/800",
      "https://picsum.photos/seed/mojo3/1200/800"
    ]
  },
  {
    id: "enzyme",
    tags: ["UI/UX", "Crypto", "🇫🇷"],
    heading: "Enzyme is a DeFi platform that helps businesses and developers easily create and manage tokenized financial products.",
    review: {
      stars: 5,
      text: "Working with Arounda is really smooth in terms of communication and workflow.",
      author: "Stephane Heip",
      role: "CMO, Enzyme",
      avatar: "https://i.pravatar.cc/100?u=enzyme"
    },
    images: [
      "https://picsum.photos/seed/enzyme1/1200/800",
      "https://picsum.photos/seed/enzyme2/1200/800",
      "https://picsum.photos/seed/enzyme3/1200/800"
    ]
  }
];

export default function Cases() {
  return (
    <section id="cases" style={{ background: "transparent", paddingTop: "6rem", paddingBottom: "0rem" }}>
      <div style={{ maxWidth: "1360px", margin: "0 auto", padding: "0 clamp(1rem, 3vw, 3.5rem)", position: "relative" }}>

        {/* Global Label - Added some breathing room back */}
        <div style={{ marginBottom: "5rem" }}>
          <span style={{
            fontSize: "0.72rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            color: "rgba(255,255,255,0.6)",
            textTransform: "uppercase"
          }}>
            OUR CASES
          </span>
        </div>

        {casesData.map((c, idx) => (
          <div key={c.id} id={`case-${idx}`} style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.35fr", /* Narrowed the image column to reduce image size */
            gap: "clamp(2rem, 5vw, 6rem)",
            position: "relative",
            paddingTop: idx === 0 ? "0" : "8rem",
          }}>

            {/* LEFT COLUMN - STICKY */}
            <div style={{ position: "relative" }}>
              <div style={{
                position: "sticky",
                top: "100px", /* Moved higher up */
                display: "flex",
                flexDirection: "column",
                paddingBottom: "8rem",
              }}>
                {/* Removed local label from here */}

                {/* Tags */}
                <div style={{ display: "flex", gap: "0.5rem", marginBottom: "2rem", flexWrap: "wrap", marginTop: idx > 0 ? "2rem" : 0 }}>
                  {c.tags.map(t => (
                    <span key={t} style={{
                      border: "1px solid rgba(255,255,255,0.15)",
                      borderRadius: "99px",
                      padding: "6px 14px",
                      fontSize: "0.85rem",
                      color: "#fff",
                      background: "rgba(255,255,255,0.03)"
                    }}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Heading */}
                <h3 style={{
                  fontSize: "clamp(1.8rem, 2.5vw, 2.8rem)",
                  fontWeight: 600,
                  color: "#fff",
                  lineHeight: 1.2,
                  marginBottom: "3rem",
                  letterSpacing: "-0.01em"
                }}>
                  {c.heading}
                </h3>

                {/* Review + Nav Buttons */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                      <span style={{ fontWeight: 700, color: "#fff", fontSize: "1.1rem" }}>Clutch</span>
                      <span style={{ color: "#c6ff00", letterSpacing: "3px", fontSize: "1.1rem" }}>★★★★★</span>
                    </div>
                    <p style={{
                      color: "#fff",
                      fontSize: "1rem",
                      lineHeight: 1.6,
                      fontWeight: 500,
                      marginBottom: "2rem",
                      maxWidth: "90%"
                    }}>
                      {c.review.text}
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                      <img src={c.review.avatar} alt={c.review.author} style={{ width: "48px", height: "48px", borderRadius: "50%" }} />
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <span style={{ color: "#fff", fontWeight: 600, fontSize: "0.95rem" }}>{c.review.author}</span>
                        <span style={{
                          color: "rgba(255,255,255,0.45)",
                          fontSize: "0.8rem",
                          fontStyle: "italic",
                          fontFamily: "var(--font-baskerville)",
                          marginTop: "2px"
                        }}>
                          {c.review.role}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Nav Buttons */}
                  <div style={{ display: "flex", flexDirection: "row", gap: "0.75rem" }} className="case-nav">
                    <button
                      onClick={() => {
                        const lenis = (window as any).lenis;
                        const targetElement = document.getElementById(`case-${idx - 1}`);
                        if (targetElement) {
                          if (lenis && typeof lenis.scrollTo === "function") {
                            // Using Lenis for a slow, premium glide
                            lenis.scrollTo(targetElement, { 
                              duration: 2,
                              easing: (t: number) => 1 - Math.pow(1 - t, 4)
                            });
                          } else {
                            // Native fallback (will be fast, but doesn't crash)
                            targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
                          }
                        }
                      }}
                      disabled={idx === 0}
                      className="nav-btn"
                      aria-label="Previous case"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                    </button>
                    <button
                      onClick={() => {
                        const lenis = (window as any).lenis;
                        const targetElement = document.getElementById(`case-${idx + 1}`);
                        if (targetElement) {
                          if (lenis && typeof lenis.scrollTo === "function") {
                            // Using Lenis for a slow, premium glide
                            lenis.scrollTo(targetElement, { 
                              duration: 2,
                              easing: (t: number) => 1 - Math.pow(1 - t, 4)
                            });
                          } else {
                            // Native fallback (will be fast, but doesn't crash)
                            targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
                          }
                        }
                      }}
                      disabled={idx === casesData.length - 1}
                      className="nav-btn"
                      aria-label="Next case"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* RIGHT COLUMN - SCROLLING IMAGES */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}> {/* Reduced gap between images */}
              {c.images.map((img, i) => (
                <div key={i} style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "4/3",
                  background: "rgba(255,255,255,0.02)",
                  borderRadius: "28px",
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.05)"
                }}>
                  <img src={img} alt={`Case graphic ${i}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              ))}
            </div>

          </div>
        ))}

        {/* Explore all cases CTA */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
          <a href="#portfolio" className="cases-explore-btn" aria-label="Explore all cases">
            <span className="cases-explore-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="cases-explore-arrow">
                <path d="M4 16L16 4M16 4H6M16 4V14" stroke="#0a0a0a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span className="cases-explore-text">Explore all cases</span>
          </a>
        </div>
      </div>

      <style>{`
        .nav-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%; /* Changed to perfect circle */
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .nav-btn:hover:not(:disabled) {
          background: rgba(198, 255, 0, 0.15);
          border-color: #c6ff00;
          color: #c6ff00;
          transform: scale(1.05);
        }
        .nav-btn:disabled {
          opacity: 0.2;
          cursor: not-allowed;
        }
        .nav-btn:active:not(:disabled) {
          transform: scale(0.95);
        }

        .cases-explore-btn {
          display: inline-flex;
          align-items: center;
          gap: 0;
          text-decoration: none;
          box-shadow: 0 4px 30px rgba(196,255,0,0.25);
          transition: all 0.3s ease;
          border-radius: 99px;
        }
        .cases-explore-icon {
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
        .cases-explore-text {
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
        .cases-explore-arrow {
          transform: rotate(90deg);
          transition: all 0.3s ease;
        }
        .cases-explore-btn:hover {
          box-shadow: 0 8px 40px rgba(255,255,255,0.25);
          transform: translateY(-2px);
        }
        .cases-explore-btn:hover .cases-explore-icon {
          border-radius: 0 50% 50% 50%;
          background: #fff;
        }
        .cases-explore-btn:hover .cases-explore-text {
          background: #fff;
        }
        .cases-explore-btn:hover .cases-explore-arrow {
          transform: rotate(-45deg);
        }

        @media (max-width: 900px) {
          /* Stack layout for mobile */
          #cases > div > div {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          #cases [style*="position: sticky"] {
            position: relative !important;
            top: auto !important;
            padding-bottom: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
