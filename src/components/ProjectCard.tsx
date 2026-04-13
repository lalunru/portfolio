import Link from "next/link";

type Props = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  github: string;
  period?: string;
  team?: string;
  label?: string;
  align?: "left" | "right";
};

export default function ProjectCard({ slug, title, description, tags, github, period, team, label, align = "left" }: Props) {
  const isRight = align === "right";

  return (
    <div style={{ position: "relative", display: "flex", justifyContent: isRight ? "flex-end" : "flex-start" }}>
      {/* 프로젝트 라벨 뱃지 */}
      {label && (
        <div style={{
          position: "absolute",
          top: "-14px",
          [isRight ? "right" : "left"]: "24px",
          background: "#1d9e75",
          color: "white",
          fontSize: "12px",
          fontWeight: 600,
          padding: "5px 14px",
          borderRadius: "99px",
          whiteSpace: "nowrap",
          zIndex: 2,
        }}>
          {label}
        </div>
      )}

      <div style={{
        width: "85%",
        border: "1px solid #1e3a2a",
        borderRadius: "12px",
        padding: "1.5rem 1.75rem",
        position: "relative",
        background: "rgba(13,20,15,0.6)",
        transition: "border-color 0.2s",
      }}
        onMouseEnter={e => (e.currentTarget.style.borderColor = "#1d9e75")}
        onMouseLeave={e => (e.currentTarget.style.borderColor = "#1e3a2a")}
      >
        {/* 기간 + 팀 */}
        {(period || team) && (
          <p style={{ fontSize: "12px", color: "#555", marginBottom: "0.75rem", letterSpacing: "0.05em" }}>
            {period}{period && team ? ` · ${team}` : team}
          </p>
        )}

        {/* 태그 */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "0.75rem" }}>
          {tags.map((t) => (
            <span key={t} style={{
              fontSize: "11px", padding: "3px 10px",
              border: "1px solid #2a3a2a", borderRadius: "99px", color: "#aaa",
            }}>{t}</span>
          ))}
        </div>

        {/* 제목 */}
        <Link href={`/projects/${slug}`} style={{ textDecoration: "none" }}>
          <h3 style={{ fontSize: "16px", fontWeight: 600, color: "#1d9e75", marginBottom: "0.6rem", cursor: "pointer" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#5dcaa5")}
            onMouseLeave={e => (e.currentTarget.style.color = "#1d9e75")}
          >{title}</h3>
        </Link>

        {/* 설명 */}
        <p style={{ fontSize: "14px", color: "#666", lineHeight: 1.7, margin: 0 }}>{description}</p>

        {/* GitHub 링크 아이콘 */}
        <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.75rem", marginTop: "1rem" }}>
          <a href={github} target="_blank" rel="noopener noreferrer"
            style={{ fontSize: "20px", textDecoration: "none", opacity: 0.5, transition: "opacity 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "0.5")}
          >⌥</a>
        </div>
      </div>
    </div>
  );
}