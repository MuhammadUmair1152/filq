"use client";
import { useState } from "react";

import ButtonPrimary from "../ui/ButtonPrimary";

const posts = [
  {
    id: "post-1",
    tags: ["Branding", "Fintech"],
    title: "Global Branding in Enterprise SaaS and Fintech with Unified Identity",
    image: "https://cdn.prod.website-files.com/658162679bc86c0ec2f2732b/69cfa0aa088f3ce4d7010cb6_Blog%20Cover%20_%20What%20a%20Good%20Website%20Conversion%20Rate%20Means%20When%20Your%20Buyer%20Is%20a%20Committee.avif",
    authorName: "Vlad Gavriluk",
    authorImage: "https://cdn.prod.website-files.com/65647bbe0d57c8abad78e939/6895a2239015bdd04d190600_vlad-purple.png",
    date: "24.04.2026",
  },
  {
    id: "post-2",
    tags: ["Branding"],
    title: "Stages of Branding for Organizations With More Than One Decision Maker",
    image: "https://cdn.prod.website-files.com/658162679bc86c0ec2f2732b/69e6205c851896455f5fcbc7_Blog%20Cover%20_%20Stages%20of%20Branding%20for%20Organizations%20With%20More%20Than%20One%20Decision%20Maker.avif",
    authorName: "Vlad Gavriluk",
    authorImage: "https://cdn.prod.website-files.com/65647bbe0d57c8abad78e939/6895a2239015bdd04d190600_vlad-purple.png",
    date: "20.04.2026",
  },
  {
    id: "post-3",
    tags: ["Branding", "Design Audit"],
    title: "Brand SWOT Analysis for Companies That Cannot Afford Blind Spots",
    image: "https://cdn.prod.website-files.com/658162679bc86c0ec2f2732b/69d8d13ee4f4fb15cb6c27be_Blog%20Cover%20_%20Brand%20SWOT%20Analysis%20for%20Companies%20That%20Cannot%20Afford%20Blind%20Spots.avif",
    authorName: "Vlad Gavriluk",
    authorImage: "https://cdn.prod.website-files.com/65647bbe0d57c8abad78e939/6895a2239015bdd04d190600_vlad-purple.png",
    date: "10.04.2026",
  }
];

// SVG Cutout Component
function SvgCorner({ className }: { className: string }) {
  return (
    <div className={className} style={{ position: "absolute", width: "24px", height: "24px", pointerEvents: "none", zIndex: 5 }}>
      <svg viewBox="0 0 230 230" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
        <path d="M230 0V230C208.672 80.6892 154.524 33.6222 0 0H230Z" fill="#0b0b0d" />
      </svg>
    </div>
  );
}

export default function BlogGrid() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="blog" style={{ position: "relative", paddingTop: "clamp(3rem, 6vw, 6rem)", paddingBottom: "clamp(4rem, 8vw, 8rem)" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(1rem, 3vw, 2rem)", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem", gap: "2rem" }}>
          <div style={{ display: "flex", gap: "10rem" }}>
            <span style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.15em", color: "rgba(255,255,255,0.7)" }}>BLOG</span>
            <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.7rem)", fontWeight: 600, lineHeight: 1.15, letterSpacing: "-0.01em", maxWidth: "500px", color: "#fff", margin: 0 }}>
              Get real <em className="font-serif-italic" style={{ color: "#fff", fontStyle: "italic", fontWeight: 600 }}>growth insights</em> and proven tactics for digital success
            </h2>
          </div>
          {/* Read more articles button */}
          <ButtonPrimary text="Read more articles" href="#blog" />
        </div>

        {/* Cards Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.25rem" }}>
          {posts.map((post, i) => {
            const isHovered = hoveredIdx === i;

            return (
              <article
                key={post.id}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{ position: "relative", cursor: "pointer", transition: "all 0.3s ease", display: "flex", flexDirection: "column", gap: "1.25rem" }}
              >
                {/* Image Container with Custom Cutout effect on Hover */}
                <div style={{ position: "relative", borderRadius: "24px", overflow: "hidden", aspectRatio: "1.4", background: "#f5f5f5" }}>

                  <img
                    src={post.image}
                    alt={post.title}
                    style={{
                      width: "100%", height: "100%", objectFit: "cover",
                      transition: "transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)",
                      transform: isHovered ? "scale(1.05)" : "scale(1)"
                    }}
                  />

                  {/* Hover Tags Overlay Container (top right corner replacement) */}
                  <div style={{
                    position: "absolute",
                    top: 0, right: 0, // Pull flush to the corner! Wait, it was -2. 0 is correct
                    padding: "0 0 1.25rem 1.25rem", // shape grows inwards seamlessly
                    background: "#0b0b0d", // matches site background to look like a cutout
                    borderBottomLeftRadius: "26px",
                    opacity: isHovered ? 1 : 0,
                    transform: isHovered ? "translate(0, 0)" : "translate(20px, -20px)",
                    visibility: isHovered ? "visible" : "hidden",
                    transition: "all 0.35s cubic-bezier(0.2, 0.8, 0.2, 1)",
                    display: "flex", gap: "0.5rem", zIndex: 2
                  }}>
                    {/* SVGs that smooth out the corner (concave effect) */}
                    <SvgCorner className="cutout-corner-left" />
                    <SvgCorner className="cutout-corner-bottom" />

                    {post.tags.map(tag => (
                      <span key={tag} style={{
                        padding: "0.5rem 1.25rem",
                        borderRadius: "30px",
                        background: "rgba(255,255,255,0.08)",
                        color: "rgba(255,255,255,0.9)",
                        fontSize: "0.85rem",
                        fontWeight: 500,
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Info */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem", padding: "0 0.5rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <img src={post.authorImage} alt={post.authorName} style={{ width: "24px", height: "24px", borderRadius: "50%", objectFit: "cover" }} />
                      <span style={{ fontSize: "0.9rem", fontWeight: 700, color: "#fff" }}>{post.authorName}</span>
                    </div>
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "rgba(255,255,255,0.6)" }}>{post.date}</span>
                  </div>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 600, color: "#fff", lineHeight: 1.4, margin: 0, transition: "color 0.3s ease" }}>
                    {post.title}
                  </h3>
                </div>

              </article>
            );
          })}
        </div>

      </div>

      <style>{`
         .cutout-corner-left {
            left: -23.5px; /* Exactly line up with the edge */
            top: 0;
            transform: scaleX(-1);
         }
         .cutout-corner-bottom {
            right: 0;
            bottom: -23.5px;
            transform: scaleY(-1);
         }
      `}</style>
    </section>
  );
}
