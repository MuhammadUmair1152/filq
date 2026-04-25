"use client";
import { useState } from "react";
import Link from "next/link";

const navColumns = [
  {
    title: "Branding services",
    links: ["Pitch Deck", "Brand Identity", "Logo Design", "Graphic Design", "Rebranding"]
  },
  {
    title: "Design services",
    links: ["UI/UX Design", "Web Design", "Mobile App Design", "Website Redesign", "UX/UI Audit"]
  },
  {
    title: "Development services",
    links: ["Web Development", "MVP Development", "Webflow Development", "Landing page", "Mobile Development"]
  },
  {
    title: "Solutions",
    links: ["MVP Design", "Product Redesign", "Team Extension"]
  }
];

const extraNavColumns = [
  {
    title: "Industries",
    links: ["Web 3, Blockchain", "SaaS", "Fintech", "AI & ML", "Healthcare & Wellness"]
  },
  {
    title: "Company",
    links: ["Works", "About", "Blog", "Referral", "Contact"]
  }
];

const awards = [
  {
    img: "https://cdn.prod.website-files.com/65647bbe0d57c8abad78e939/65c3616d82357f3618bdde07_i3.svg",
    hoverImg: "https://cdn.prod.website-files.com/65647bbe0d57c8abad78e939/65c4858bdac9f1cb144a6e1d_clutch-hover.svg",
    title: "89+ Reviews",
    subtitle: "on Clutch"
  },
  {
    img: "https://cdn.prod.website-files.com/65647bbe0d57c8abad78e939/65c3616c91b10474b72f6355_i1.svg",
    hoverImg: "https://cdn.prod.website-files.com/65647bbe0d57c8abad78e939/65c4858b14af8ba83d32b992_dribbble-hover.svg",
    title: "Top 50 Trending team",
    subtitle: "on Dribbble"
  },
  {
    img: "https://cdn.prod.website-files.com/65647bbe0d57c8abad78e939/66bcbb2b636b691bf30a5f5f_i6-v2.webp",
    hoverImg: "https://cdn.prod.website-files.com/65647bbe0d57c8abad78e939/65c4858ba677c0698671062c_clutch-hover-alt.svg",
    title: "Global 100 B2B",
    subtitle: "UI/UX Company"
  },
  {
    img: "https://cdn.prod.website-files.com/65647bbe0d57c8abad78e939/65c3616e39ba3a003c448666_i5.svg",
    hoverImg: "https://cdn.prod.website-files.com/65647bbe0d57c8abad78e939/65c4858caad8a72b40e21cb9_webflow-hover.svg",
    title: "Professional partner",
    subtitle: "by Webflow"
  },
  {
    img: "https://cdn.prod.website-files.com/65647bbe0d57c8abad78e939/66bcb832d75fbd8297f35301_goodfirms.svg",
    hoverImg: "https://cdn.prod.website-files.com/65647bbe0d57c8abad78e939/65c4858ca0c64ede722bca9c_goodfirms-hover.svg",
    title: "Top User Experience",
    subtitle: "team by GoodFirms"
  },
  {
    img: "https://cdn.prod.website-files.com/65647bbe0d57c8abad78e939/65c3616d8d592da85d28ee76_i2.svg",
    hoverImg: "https://cdn.prod.website-files.com/65647bbe0d57c8abad78e939/65c4858bb942d8194465c59b_behance-hover.svg",
    title: "Projects are Featured",
    subtitle: "on Behance platform"
  }
];

const locations = [
  {
    country: "United States", code: "US", flag: "🇺🇸",
    line1: "21255 Burbank Boulevard, Los", line2: "Angeles, CA 91367"
  },
  {
    country: "United Kingdom", code: "GB", flag: "🇬🇧",
    line1: "125 Kingsway, London, England", line2: "WC2B 6NH"
  },
  {
    country: "Netherlands", code: "NL", flag: "🇳🇱",
    line1: "38-40 Lincolnweg, Amsterdam,", line2: "Noord Holland 1033 SN"
  },
  {
    country: "Australia", code: "AU", flag: "🇦🇺",
    line1: "1 Sussex Street, Barangaroo,", line2: "Sydney, NSW 2000"
  },
  {
    country: "United Arab Emirates", code: "AE", flag: "🇦🇪",
    line1: "Level 1, Yas Mall, Yas Island, Abu", line2: "Dhabi"
  },
  {
    country: "Romania", code: "RO", flag: "🇷🇴",
    line1: "27 Park Herastrau, Bucharest", line2: ""
  }
];

const socials = [
  "https://cdn.prod.website-files.com/65647bbe0d57c8abad78e939/6967e29e29cc1efad567bb1a_inst.svg", // Insta
  "https://cdn.prod.website-files.com/65647bbe0d57c8abad78e939/6967e3ae115c52d58d6e07cf_drbl.svg", // Dribbble
  "https://cdn.prod.website-files.com/65647bbe0d57c8abad78e939/6967e3ae1c63338fca9e637d_clutch.svg", // Clutch
  "https://cdn.prod.website-files.com/65647bbe0d57c8abad78e939/6967e3aee5b50517a8bbcf25_behun.svg", // Behance
  "https://cdn.prod.website-files.com/65647bbe0d57c8abad78e939/6967e4f3175637ec7d4916c4_linkedin.svg", // LinkedIn
  "https://cdn.prod.website-files.com/65647bbe0d57c8abad78e939/6967e4f31e0d6446080aef75_x.svg", // X
  "https://cdn.prod.website-files.com/65647bbe0d57c8abad78e939/6967e4f350aeecbe6aacec6f_m.svg", // Medium
];

export default function Footer() {
  const [openServices, setOpenServices] = useState(false);
  const [openLocations, setOpenLocations] = useState(false);
  const [hoverAward, setHoverAward] = useState<number | null>(null);

  return (
    <footer style={{ background: "#080b0f", paddingTop: "5rem", paddingBottom: "2rem", borderTop: "1px solid rgba(255,255,255,0.05)", fontFamily: "sans-serif" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(1rem, 3vw, 2rem)" }}>

        {/* UPPER GRID */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "3rem", marginBottom: "4rem" }}>

          {/* Col 1: Brand & Contact */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <Link href="/" style={{ textDecoration: "none" }}>
              <img src="https://cdn.prod.website-files.com/65647bbe0d57c8abad78e939/65c0ca586cea1861e08b11cd_navoq-logo.svg" alt="navoq Logo" style={{ height: "24px" }} />
            </Link>

            <div>
              <h4 style={{ fontSize: "0.85rem", fontWeight: 700, color: "#fff", marginBottom: "0.8rem", letterSpacing: "0.02em" }}>Offices</h4>
              <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.6, margin: 0 }}>
                Estonia, Tallinn<br />Telliskivi tn 57
              </p>
            </div>

            <div>
              <h4 style={{ fontSize: "0.85rem", fontWeight: 700, color: "#fff", marginBottom: "0.8rem", letterSpacing: "0.02em" }}>Drop us a line</h4>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "copy" }}>
                <span style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>info@navoq.agency</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                </svg>
              </div>
            </div>
          </div>

          {/* Col 2-5: Nav Links (Top Row) */}
          {navColumns.map(col => (
            <div key={col.title}>
              <h4 style={{ fontSize: "0.85rem", fontWeight: 700, color: "#fff", marginBottom: "1.2rem", letterSpacing: "0.02em" }}>{col.title}</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                {col.links.map(link => (
                  <li key={link}>
                    <a href="#" className="footer-link" style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", textDecoration: "none", transition: "color 0.2s" }}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Extra offset for the lower Nav Links (Industries/Company) which sit below Branding/Design */}
          {extraNavColumns.map(col => (
            <div key={col.title}>
              <h4 style={{ fontSize: "0.85rem", fontWeight: 700, color: "#fff", marginBottom: "1.2rem", letterSpacing: "0.02em" }}>{col.title}</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                {col.links.map(link => (
                  <li key={link}>
                    <a href="#" className="footer-link" style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", textDecoration: "none", transition: "color 0.2s" }}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* AWARDS GRID (6 Items) */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "1rem",
          marginBottom: "3rem"
        }}>
          {awards.map((award, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoverAward(i)}
              onMouseLeave={() => setHoverAward(null)}
              style={{
                position: "relative",
                background: "#161618",
                borderRadius: "16px",
                padding: "2rem 1rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                cursor: "pointer",
                transition: "all 0.3s ease",
                border: "1px solid rgba(255,255,255,0.02)",
                overflow: "hidden"
              }}
            >
              {/* The Hover Reveal Background Image */}
              <img
                src={award.hoverImg}
                alt=""
                style={{
                  position: "absolute",
                  top: "50%", left: "50%",
                  transform: "translate(-50%, -50%)",
                  opacity: hoverAward === i ? 1 : 0,
                  transition: "opacity 0.4s ease, transform 0.4s ease",
                  width: "100%", height: "100%", // Fit naturally instead of blowing up to 120%
                  objectFit: "cover",
                  pointerEvents: "none", // Prevent hover flicker
                  mixBlendMode: "screen", // Blend the bright reds beautifully into the black background
                  zIndex: 0
                }}
              />
              {/* Foreground content */}
              <img src={award.img} alt={award.subtitle} style={{ height: "45px", objectFit: "contain", marginBottom: "1rem", position: "relative", zIndex: 1 }} />
              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#fff", marginBottom: "0.15rem", letterSpacing: "0.01em" }}>{award.title}</div>
                <div style={{ fontSize: "0.75rem", fontWeight: 500, color: "rgba(255,255,255,0.5)" }}>{award.subtitle}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ACCORDIONS */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "4rem" }}>

          {/* Show more services */}
          <div style={{ background: "#161618", borderRadius: "16px", overflow: "hidden" }}>
            <button
              onClick={() => setOpenServices(!openServices)}
              style={{
                width: "100%", padding: "1.5rem 1.7rem", background: "transparent", border: "none",
                display: "flex", alignItems: "center", gap: "1rem", cursor: "pointer", color: "rgba(255,255,255,0.9)",
                fontWeight: 700, fontSize: "0.95rem"
              }}
            >
              <svg
                width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#c6ff00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                style={{ transform: openServices ? "rotate(180deg)" : "rotate(90deg)", transition: "transform 0.3s ease" }}
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
              <span style={{ color: openServices ? "#c6ff00" : "inherit", transition: "color 0.2s" }}>Show more services</span>
            </button>
            <div style={{
              height: openServices ? "auto" : 0,
              opacity: openServices ? 1 : 0,
              padding: openServices ? "0 1.7rem 2rem 1.7rem" : "0 1.7rem",
              transition: "all 0.3s ease",
              overflow: "hidden"
            }}>
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "1.5rem" }}>
                <h4 style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", marginBottom: "1rem" }}>Additional Services Placeholder</h4>
              </div>
            </div>
          </div>

          {/* Show all locations */}
          <div style={{ background: "#161618", borderRadius: "16px", overflow: "hidden" }}>
            <button
              onClick={() => setOpenLocations(!openLocations)}
              style={{
                width: "100%", padding: "1.5rem 1.7rem", background: "transparent", border: "none",
                display: "flex", alignItems: "center", gap: "1rem", cursor: "pointer", color: "rgba(255,255,255,0.9)",
                fontWeight: 700, fontSize: "0.95rem"
              }}
            >
              <svg
                width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                style={{ transform: openLocations ? "rotate(180deg)" : "rotate(90deg)", transition: "transform 0.3s ease" }}
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
              <span>Show all locations</span>
            </button>
            <div style={{
              height: openLocations ? "auto" : 0,
              opacity: openLocations ? 1 : 0,
              padding: openLocations ? "0 1.7rem 2rem 1.7rem" : "0 1.7rem",
              transition: "all 0.3s ease",
              overflow: "hidden"
            }}>
              <div style={{
                borderTop: "1px solid rgba(255,255,255,0.05)",
                paddingTop: "2rem",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1.5rem"
              }}>
                {locations.map((loc) => (
                  <div key={loc.code} style={{ background: "#212124", borderRadius: "12px", padding: "1.5rem", position: "relative" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.8rem" }}>
                      <span style={{ color: "#fff", fontWeight: 700, fontSize: "1rem" }}>{loc.country}</span>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.85rem", fontWeight: 600 }}>{loc.code}</span>
                        <span style={{ fontSize: "1.2rem" }}>{loc.flag}</span>
                      </div>
                    </div>
                    <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem", margin: 0, lineHeight: 1.5 }}>
                      {loc.line1}<br />{loc.line2}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM METADATA ROW */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "2rem", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "2rem" }}>

          <div style={{ display: "flex", gap: "1.5rem" }}>
            <a href="#" className="footer-link-bottom">Privacy Policy</a>
            <a href="#" className="footer-link-bottom">Cookie Policy</a>
            <a href="#" className="footer-link-bottom">Editorial Policy</a>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            {socials.map((src, idx) => (
              <a key={idx} href="#" style={{ transition: "opacity 0.2s" }} onMouseEnter={e => e.currentTarget.style.opacity = "0.7"} onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
                <img src={src} alt="social icon" style={{ height: "18px", opacity: 0.6 }} />
              </a>
            ))}
          </div>

          <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8rem", fontWeight: 500 }}>
            © 2016-{new Date().getFullYear()} navoq
          </span>

        </div>
      </div>

      <style>{`
        .footer-link:hover {
          color: #c6ff00 !important;
        }
        .footer-link-bottom {
          color: rgba(255,255,255,0.5);
          font-size: 0.8rem;
          font-weight: 500;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-link-bottom:hover {
          color: #fff;
        }
      `}</style>
    </footer>
  );
}
