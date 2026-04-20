"use client";

const posts = [
  {
    id: "post-1",
    tag: "Design",
    readTime: "5 min read",
    title: "How to design AI interfaces that users actually trust",
    excerpt:
      "As AI products proliferate, the biggest differentiator isn't the model — it's the interface. Here's how to design for trust.",
    color: "#3B78FF",
    emoji: "🧠",
    author: "Design Team",
    date: "Apr 2025",
  },
  {
    id: "post-2",
    tag: "Strategy",
    readTime: "7 min read",
    title: "The ROI of design: why investing in UX is your best business decision",
    excerpt:
      "We analyzed 50+ client projects and found a consistent pattern: great design isn't a cost, it's compounding returns.",
    color: "#D9FF00",
    emoji: "📈",
    author: "Vladislav G.",
    date: "Mar 2025",
  },
  {
    id: "post-3",
    tag: "Web3",
    readTime: "6 min read",
    title: "Designing for Web3: solving onboarding without sacrificing decentralization",
    excerpt:
      "The biggest friction in Web3 isn't the technology — it's the experience. Here's how leading products are solving it.",
    color: "#783BFF",
    emoji: "⛓️",
    author: "Product Team",
    date: "Feb 2025",
  },
];

export default function BlogGrid() {
  return (
    <section
      id="blog"
      className="section-spacing"
      style={{}}
    >
      <div className="container-site">
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "1.5rem",
            marginBottom: "3rem",
          }}
        >
          <div>
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
              Our Blog
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 1.18,
                marginTop: "1rem",
                maxWidth: "480px",
              }}
            >
              Latest insights from the{" "}
              <em className="font-serif-italic" style={{ fontWeight: 400 }}>
                design frontier
              </em>
            </h2>
          </div>
          <a href="#blog" className="btn-ghost" id="blog-see-all">
            See All Articles
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {posts.map((post) => (
            <article
              key={post.id}
              className="card"
              style={{
                overflow: "hidden",
                cursor: "pointer",
                transition: "transform var(--transition-base), border-color var(--transition-base)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
                (e.currentTarget as HTMLElement).style.borderColor = `${post.color}33`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border-card)";
              }}
            >
              {/* Thumbnail */}
              <div
                style={{
                  height: "180px",
                  background: `linear-gradient(135deg, ${post.color}20 0%, rgba(255,255,255,0.02) 100%)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "4rem",
                  borderBottom: "1px solid var(--border-card)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <span style={{ filter: "saturate(0) brightness(1.4)", opacity: 0.6 }}>
                  {post.emoji}
                </span>
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: `radial-gradient(circle at 50% 50%, ${post.color}15 0%, transparent 70%)`,
                  }}
                />
              </div>

              {/* Content */}
              <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span
                    className="tag-pill"
                    style={{ borderColor: `${post.color}33`, color: post.color }}
                  >
                    {post.tag}
                  </span>
                  <span style={{ color: "var(--text-muted-alt)", fontSize: "0.78rem" }}>
                    {post.readTime}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    lineHeight: 1.4,
                    color: "var(--text-primary)",
                  }}
                >
                  {post.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.65,
                  }}
                >
                  {post.excerpt}
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: "0.75rem",
                    borderTop: "1px solid var(--border-card)",
                    marginTop: "0.25rem",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <div
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        background: `${post.color}25`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        color: post.color,
                      }}
                    >
                      {post.author[0]}
                    </div>
                    <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                      {post.author}
                    </span>
                  </div>
                  <span style={{ fontSize: "0.78rem", color: "var(--text-muted-alt)" }}>
                    {post.date}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
