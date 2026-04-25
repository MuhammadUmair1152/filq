"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Works", href: "#works" },
  { label: "Services", href: "#services", hasDropdown: true },
  { label: "Industries", href: "#industries", hasDropdown: true },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "#blog" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        background: scrolled ? "rgba(8, 8, 10, 0.5)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid transparent",
      }}
    >
      <div style={{
        maxWidth: "1360px",
        margin: "0 auto",
        padding: "0 clamp(1rem, 3vw, 2.5rem)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: scrolled ? "64px" : "76px",
        gap: "1rem",
        transition: "height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      }}>
        {/* Logo */}
        <Link href="/" style={{
          textDecoration: "none",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          zIndex: 10
        }}>
          <img
            src="/logos/NavoqFinalLogo-04white.png"
            alt="Navoq Logo"
            className="logo-desktop"
            style={{
              height: scrolled ? "12rem" : "15rem",
              width: "auto",
              objectFit: "contain",
              transition: "height 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
            }}
          />
          <img
            src="/logos/NavoqWhiatepng.png"
            alt="Navoq Logo Mobile"
            className="logo-mobile"
            style={{
              height: "68px",
              width: "auto",
              objectFit: "contain",
              display: "none"
            }}
          />
        </Link>



        {/* Desktop Nav / Mobile CTA Center */}
        <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
          <nav className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: "0" }}>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  padding: "0.35rem 0.9rem",
                  fontSize: "0.9375rem",
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.72)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.72)")}
              >
                {link.label}
                {link.hasDropdown && (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ opacity: 0.6 }}>
                    <path d="M3.5 5.5L7 9L10.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </Link>
            ))}
          </nav>
          
          {/* Mobile Center CTA */}
          <a
            href="#contact"
            className="contact-btn nav-mobile-cta"
            style={{ display: "none", transform: "scale(0.8)" }}
          >
            Contact Us
            <span className="contact-icon-bg">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>

        </div>


        {/* Desktop CTA + Hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexShrink: 0, zIndex: 10 }}>
          <a
            href="#contact"
            className="nav-desktop contact-btn"
            id="nav-contact-cta"
          >
            Contact Us
            <span className="contact-icon-bg">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="nav-hamburger"
            aria-label="Toggle menu"
            style={{
              background: "none", border: "none", cursor: "pointer",
              padding: "6px", display: "none",
              flexDirection: "column", gap: "5px",
            }}
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: "block", width: "22px", height: "2px",
                background: "#fff", borderRadius: "2px",
                transition: "transform 0.25s, opacity 0.25s",
                transform: menuOpen
                  ? i === 0 ? "translateY(7px) rotate(45deg)"
                    : i === 2 ? "translateY(-7px) rotate(-45deg)" : "none"
                  : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: "rgba(8,8,10,0.97)",
          backdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "1.25rem 1.5rem 1.5rem",
        }}>
          <nav style={{ display: "flex", flexDirection: "column", gap: "0.1rem", marginBottom: "1.25rem" }}>
            {navLinks.map(link => (
              <Link key={link.label} href={link.href} onClick={() => setMenuOpen(false)}
                style={{
                  padding: "0.75rem 0.5rem",
                  fontSize: "1rem", fontWeight: 400,
                  color: "rgba(255,255,255,0.72)",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}
              >{link.label}</Link>
            ))}
          </nav>
          <a href="#contact" style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            gap: "0.6rem", padding: "0.75rem 1.5rem",
            borderRadius: "999px", background: "#fff", color: "#0a0a0a",
            fontWeight: 600, fontSize: "0.9375rem", textDecoration: "none",
          }}>
            Contact Us
            <span style={{ width: "26px", height: "26px", borderRadius: "50%", background: "#0a0a0a", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M2 10L10 2M10 2H4M10 2V8" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
          </a>
        </div>
      )}

      <style>{`
        .contact-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.55rem 1.1rem 0.55rem 1.4rem;
          border-radius: 999px;
          background: #fff;
          color: #0a0a0a;
          font-weight: 600;
          font-size: 0.9375rem;
          text-decoration: none;
          transition: transform 0.15s;
          white-space: nowrap;
          overflow: hidden;
          z-index: 1;
        }
        .contact-btn::before {
          content: "";
          position: absolute;
          right: 1.1rem;
          top: 50%;
          width: 28px;
          height: 28px;
          background: #c6ff00;
          border-radius: 50%;
          transform: translate(0, -50%) scale(0);
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: -1;
        }
        .contact-btn:hover::before {
          transform: translate(0, -50%) scale(15);
        }
        .contact-btn:hover {
          transform: translateY(-1px);
        }
        .contact-icon-bg {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #0a0a0a;
          color: #fff;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: color 0.3s;
        }


        
        @media (max-width: 860px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
          .logo-desktop { display: none !important; }
          .logo-mobile { display: block !important; }
          .nav-mobile-cta { display: inline-flex !important; }
        }


      `}</style>
    </header>
  );
}
