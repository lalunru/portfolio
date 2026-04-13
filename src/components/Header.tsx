"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      padding: "0 2rem", height: "64px",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      background: "linear-gradient(to bottom, rgba(13,15,26,0.9) 0%, transparent 100%)",
    }}>
      <Link href="/" style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "0.15em", color: "#888", textDecoration: "none", textTransform: "uppercase" }}>
        KSY
      </Link>
      <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        {["#projects", "#skills", "#about"].map((href, i) => (
          <Link key={href} href={href} style={{ fontSize: "13px", color: "#888", textDecoration: "none" }}
            onMouseEnter={e => (e.currentTarget.style.color = "white")}
            onMouseLeave={e => (e.currentTarget.style.color = "#888")}>
            {["Projects", "Skills", "About"][i]}
          </Link>
        ))}
        <a href="/resume.pdf" download={true} style={{
          fontSize: "12px", padding: "6px 16px",
          border: "1px solid #333", borderRadius: "99px",
          color: "#aaa", textDecoration: "none", letterSpacing: "0.05em",
        }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = "#7f77dd"; e.currentTarget.style.color = "white"; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = "#333"; e.currentTarget.style.color = "#aaa"; }}>
          Resume
        </a>
      </nav>
    </header>
  );
}