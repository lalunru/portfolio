"use client";

const skills = [
  "Unity", "C#", "Python", "TensorFlow", "XGBoost", "GLSL", "Tailwind CSS",
  "Figma", "Storybook", "Raspberry Pi", "Git", "Next.js", "SHAP", "LIME",
  "Framer Motion", "XR Interaction Toolkit", "Keras", "scikit-learn",
];

export default function MarqueeSkills() {
  const doubled = [...skills, ...skills];

  return (
    <div style={{ overflow: "hidden", width: "100%", padding: "1rem 0" }}>
      <div style={{
        display: "flex", gap: "2.5rem",
        animation: "marquee 28s linear infinite",
        width: "max-content",
      }}>
        {doubled.map((s, i) => (
          <span key={i} style={{
            fontSize: "13px", fontWeight: 500,
            color: i % 3 === 0 ? "#7f77dd" : "#555",
            whiteSpace: "nowrap", letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}>
            {s} <span style={{ color: "#2a2a3a", marginLeft: "0.5rem" }}>✦</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}