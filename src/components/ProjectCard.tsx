type Props = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  github: string;
  notion?: string;
  period?: string;
  team?: string;
  label?: string;
  align?: "left" | "right";
};

export default function ProjectCard({ title, description, tags, github, notion, period, team, label, align = "left" }: Props) {
  const isRight = align === "right";

  return (
    <div style={{ position: "relative", display: "flex", justifyContent: isRight ? "flex-end" : "flex-start" }}>
      {label && (
        <div style={{
          position: "absolute", top: "-14px",
          [isRight ? "right" : "left"]: "24px",
          background: "#1d9e75", color: "white",
          fontSize: "12px", fontWeight: 600,
          padding: "5px 14px", borderRadius: "99px",
          whiteSpace: "nowrap", zIndex: 2,
        }}>
          {label}
        </div>
      )}

      <div style={{
        width: "85%", border: "1px solid #1e3a2a", borderRadius: "12px",
        padding: "1.5rem 1.75rem", background: "rgba(13,20,15,0.6)",
        transition: "border-color 0.2s",
      }}
        onMouseEnter={e => (e.currentTarget.style.borderColor = "#1d9e75")}
        onMouseLeave={e => (e.currentTarget.style.borderColor = "#1e3a2a")}
      >
        {(period || team) && (
          <p style={{ fontSize: "12px", color: "#555", marginBottom: "0.75rem" }}>
            {period}{period && team ? ` · ${team}` : team}
          </p>
        )}

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "0.75rem" }}>
          {tags.map((t) => (
            <span key={t} style={{ fontSize: "11px", padding: "3px 10px", border: "1px solid #2a3a2a", borderRadius: "99px", color: "#aaa" }}>{t}</span>
          ))}
        </div>

        {/* 제목 — Notion 있으면 Notion으로, 없으면 GitHub으로 */}
        <a
          href={notion || github}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <h3 style={{ fontSize: "16px", fontWeight: 600, color: "#1d9e75", marginBottom: "0.6rem", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px" }}>
            {title}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1d9e75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.6, flexShrink: 0 }}>
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </h3>
        </a>

        <p style={{ fontSize: "14px", color: "#666", lineHeight: 1.7, margin: 0, whiteSpace: "pre-line" }}>{description}</p>

        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "1rem" }}>
          <a href={github} target="_blank" rel="noopener noreferrer"
            style={{ fontSize: "12px", color: "#555", textDecoration: "none" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#1d9e75")}
            onMouseLeave={e => (e.currentTarget.style.color = "#555")}>
            GitHub →
          </a>
        </div>
      </div>
    </div>
  );
}