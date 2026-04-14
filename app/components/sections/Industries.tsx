"use client";

const industries = [
  {
    name: "Web3 / Blockchain",
    icon: "⛓️",
    color: "#D9FF00",
    tags: ["dApps", "DeFi", "NFT Platforms", "DAOs", "Smart Contracts", "Crypto Wallets"],
    desc: "We understand the unique challenges of decentralized products — onboarding non-crypto users, complex transaction flows, and building trust.",
  },
  {
    name: "AI & Machine Learning",
    icon: "🤖",
    color: "#3B78FF",
    tags: ["LLM Interfaces", "AI Dashboards", "Data Visualization", "Chatbots", "ML Pipelines", "Model Ops"],
    desc: "Turning complex AI capabilities into delightfully simple interfaces that users actually want to use — without hiding the power.",
  },
  {
    name: "SaaS Platforms",
    icon: "☁️",
    color: "#783BFF",
    tags: ["CRM Systems", "Analytics", "Team Collaboration", "B2B Portals", "Admin Panels", "Onboarding"],
    desc: "SaaS is our bread and butter. We design scalable design systems and UX flows that reduce churn and boost expansion revenue.",
  },
  {
    name: "Fintech",
    icon: "💳",
    color: "#59FFD6",
    tags: ["Trading Platforms", "Banking Apps", "Payment Systems", "Lending", "Insurance Tech", "RegTech"],
    desc: "Financial products require the perfect balance of trust, compliance, and modern UX. We navigate that complexity fluently.",
  },
];

export default function Industries() {
  return (
    <section
      id="industries"
      className="section-spacing"
      style={{ borderTop: "1px solid var(--border-subtle)" }}
    >
      <div className="container-site">
        {/* Header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <span
            className="pill"
            style={{
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              fontSize: "0.72rem",
              marginBottom: "1.25rem",
              display: "inline-flex",
            }}
          >
            Industries & Expertise
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.18,
              marginTop: "1rem",
              maxWidth: "560px",
            }}
          >
            Deep expertise in the industries that{" "}
            <em className="font-serif-italic" style={{ fontWeight: 400 }}>
              matter most
            </em>
          </h2>
        </div>

        {/* Industry grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="card"
              style={{
                padding: "2rem",
                transition: "transform var(--transition-base), border-color var(--transition-base)",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLDivElement).style.borderColor = `${industry.color}33`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border-card)";
              }}
            >
              {/* Icon + name */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "14px",
                    background: `${industry.color}15`,
                    border: `1px solid ${industry.color}25`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.4rem",
                  }}
                >
                  {industry.icon}
                </div>
                <h3
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                  }}
                >
                  {industry.name}
                </h3>
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.65,
                  marginBottom: "1.25rem",
                }}
              >
                {industry.desc}
              </p>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {industry.tags.map((tag) => (
                  <span
                    key={tag}
                    className="tag-pill"
                    style={{ borderColor: `${industry.color}28`, color: industry.color }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
