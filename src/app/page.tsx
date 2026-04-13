"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import StarField from "@/components/StarField";
import MarqueeSkills from "@/components/MarqueeSkills";
import ProjectCard from "@/components/ProjectCard";

const projects = [
    {
    slug: "asset-mind", title: "AssetMind — 금융자산관리 웹 서비스", tags: ["Tailwind", "Storybook", "Figma", "Vercel", "Agile"],
    github: "https://github.com/ASSETMIND/AssetMind", period: "2026.01 ~ 진행 중", team: "4인 팀 프로젝트", label: "웹 프론트엔드", align: "right" as const,
    description: `Figma 디자인부터 Tailwind CSS 구현까지 UI 개발을 전담한 금융자산관리 웹 서비스입니다.
Storybook으로 컴포넌트를 독립적으로 문서화하여 팀 내 재사용성과 개발 효율을 높였습니다.
Agile/Scrum 방식으로 스프린트를 운영하고, GitHub Issue와 PR에 P0/P1 우선순위 태깅을 도입했습니다.
Vercel을 활용한 CI/CD 파이프라인으로 PR마다 프리뷰 배포 환경을 구성했습니다.
6월 완료를 목표로 현재 개발 진행 중입니다.`,
  },
  {
    slug: "line-0", title: "Line 0 — VR 공포 어드벤처", tags: ["Unity", "C#", "VR", "GLSL", "URP"],
    github: "https://github.com/lalunru/unity-vr-game-project", period: "2025", team: "팀 프로젝트", label: "VR 게임 개발", align: "left" as const,
    description: `Meta Quest 2 환경에서 구동되는 1인칭 VR 공포 어드벤처 게임입니다.
팀 내 텍스처 제작 및 셰이더 머티리얼 전담으로, URP 파이프라인에 맞는 커스텀 머티리얼을 설계했습니다.
VR 멀미 최적화를 위해 실시간 조명을 Baked 라이트맵으로 전환하여 GPU 부하를 절감했습니다.
물리 기반 그랩 시스템의 손 떨림 문제를 발견하고 터치 기반 인터랙션으로 교체해 안정성을 높였습니다.
XR Interaction Toolkit을 활용한 VR 인터랙션 설계 및 Quest 2 타겟 72fps 안정화를 달성했습니다.`,
  },
  {
    slug: "memory-door", title: "기억의 문 너머 — 2D 감성 어드벤처", tags: ["Unity", "C#", "2D", "Game"],
    github: "https://github.com/lalunru/unity-2d-adventure-memory", period: "2025", team: "팀 프로젝트", label: "2D 게임 개발", align: "right" as const,
    description: `PC 환경의 Unity 2D 기반 감성 어드벤처 게임으로, 주인공 캐릭터 스프라이트를 직접 드로잉했습니다.
플레이어의 선택지 상태값을 기반으로 한 다중 엔딩 분기 시스템을 설계 및 구현했습니다.
AI 추적 몬스터의 경로 탐색 알고리즘을 구현하여 긴장감 있는 추격 시퀀스를 제작했습니다.
암전 + 아이템 랜덤 재배치 방식의 동적 환경 알고리즘으로 매 플레이마다 다른 경험을 제공합니다.
카메라 쉐이크 효과를 활용한 시각적 피드백 시스템으로 몰입감을 강화했습니다.`,
  },
  {
    slug: "npr-shaders", title: "NPR Shaders — 비사실적 렌더링 셰이더", tags: ["GLSL", "Unity", "Shader", "URP"],
    github: "https://github.com/lalunru/npr-shaders", period: "2026", team: "개인 프로젝트", label: "셰이더 개발", align: "left" as const,
    description: `GLSL 및 Unity URP 환경에서 비사실적 렌더링(NPR) 셰이더를 직접 구현한 개인 프로젝트입니다.
Cross-Hatching 셰이더로 펜 드로잉 느낌의 렌더링을 구현하고, Shadertoy에 라이브 데모를 공개했습니다.
Toon Shading + Rim Light 조합으로 애니메이션풍 캐릭터 렌더링 파이프라인을 구성했습니다.
Shadertoy에서 구현한 GLSL 코드를 Unity URP ShaderGraph로 이식하는 가이드를 문서화했습니다.
셰이더 최적화(GPU Instancing, SRP Batcher 호환)를 통해 실시간 렌더링 성능을 확보했습니다.`,
  },
  {
    slug: "xai-ids", title: "XAI 기반 네트워크 침입 탐지 시스템", tags: ["Python", "XGBoost", "SHAP", "LIME", "XAI"],
    github: "https://github.com/lalunru/XAI-Network-Intrusion-Detection-System", period: "2025", team: "개인 프로젝트 (졸업논문)", label: "AI / XAI", align: "right" as const,
    description: `UNSW-NB15 데이터셋을 활용한 XGBoost 기반 네트워크 침입 탐지 시스템 졸업논문 프로젝트입니다.
XGBoost 모델로 F1-Score 0.95, ROC-AUC 0.97을 달성하여 높은 탐지 정확도를 확보했습니다.
SHAP(SHapley Additive exPlanations)으로 모델의 전역적 특성 중요도를 시각화했습니다.
LIME(Local Interpretable Model-agnostic Explanations)으로 개별 예측에 대한 근거를 설명했습니다.
단순 성능 지표를 넘어 모델의 판단 근거를 해석 가능하게 만드는 XAI 연구에 집중했습니다.`,
  },
  {
    slug: "malicious-url", title: "악성 URL 분류 딥러닝 모델", tags: ["Python", "TensorFlow", "Keras", "LSTM", "DL"],
    github: "https://github.com/lalunru/Malicious-URL-Classification", period: "2025", team: "개인 프로젝트", label: "딥러닝", align: "left" as const,
    description: `URL 문자열 패턴과 수작업 특성을 결합한 멀티 인풋 딥러닝 분류 모델입니다.
LSTM으로 URL 문자 시퀀스의 패턴을 학습하고, 9개의 수작업 특성과 결합한 멀티 인풋 신경망을 설계했습니다.
Benign, Phishing, Malware, Defacement 4개 클래스 분류에서 전체 정확도 92%를 달성했습니다.
특히 Defacement 클래스에서 F1-Score 0.99를 기록하여 높은 탐지 성능을 확인했습니다.
TensorFlow/Keras 기반으로 모델 구조 설계부터 학습, 평가까지 전 과정을 단독 수행했습니다.`,
  },
  {
    slug: "plant-monitor", title: "반려식물 스마트 모니터링 시스템", tags: ["Python", "Raspberry Pi", "IoT", "Embedded", "C"],
    github: "https://github.com/lalunru/smart-plant-monitor", period: "2025", team: "팀 프로젝트", label: "임베디드", align: "left" as const,
    description: `Raspberry Pi 기반으로 온습도 센서와 카메라 모듈을 통합한 반려식물 모니터링 시스템입니다.
온습도 센서 데이터의 노이즈 필터링 알고리즘을 구현하여 측정값의 안정성을 확보했습니다.
카메라 모듈과 센서의 동시 구동 시 발생하는 타이밍 충돌 문제를 분석하고 최적화했습니다.
Python과 C를 혼용하여 하드웨어 제어 레이어와 데이터 처리 레이어를 분리 설계했습니다.
실시간 데이터 수집 및 임계값 기반 알림 시스템으로 식물 관리 자동화를 구현했습니다.`,
  },
];

const skillGroups = [
  { title: "Game / XR", items: ["Unity 2D/3D", "C#", "XR Interaction Toolkit", "Meta Quest 2", "GLSL 셰이더"] },
  { title: "AI / ML", items: ["Python", "TensorFlow/Keras", "scikit-learn", "XGBoost", "SHAP", "LIME"] },
  { title: "Front-end", items: ["Figma", "Tailwind CSS", "Storybook", "Next.js", "Vercel"] },
  { title: "Embedded / Tools", items: ["Raspberry Pi", "C", "Git/GitHub", "Agile/Scrum"] },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: "easeOut" },
  }),
};

const SectionTitle = ({ text }: { text: string }) => (
  <motion.h2
    initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }} transition={{ duration: 0.6 }}
    style={{ fontFamily: "sans-serif", fontSize: "clamp(48px, 8vw, 88px)", fontWeight: 800, color: "white", marginBottom: "3rem", letterSpacing: "-0.02em" }}
  >
    {text}<span style={{ color: "#1d9e75" }}>.</span>
  </motion.h2>
);

export default function Home() {
  return (
    <>
      <StarField />
      <Header />

      {/* ── HERO ── */}
      <section style={{ position: "relative", zIndex: 1, minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", overflow: "hidden" }}>

        {/* 지구 */}
        <div style={{
          position: "absolute", left: "50%", top: "50%",
          transform: "translate(-50%, -50%)",
          width: "min(480px, 55vw)", height: "min(480px, 55vw)",
          borderRadius: "50%",
          background: "radial-gradient(circle at 35% 35%, #1a6b9e, #0d3d6b 50%, #071e35)",
          border: "1px solid #1a4a6e",
          zIndex: 0,
          overflow: "hidden",
        }}>
          {/* 대륙 느낌 얼룩들 */}
          <div style={{ position: "absolute", top: "20%", left: "15%", width: "30%", height: "20%", borderRadius: "40%", background: "rgba(34,139,74,0.35)", transform: "rotate(-20deg)" }} />
          <div style={{ position: "absolute", top: "45%", left: "55%", width: "25%", height: "18%", borderRadius: "40%", background: "rgba(34,139,74,0.3)", transform: "rotate(15deg)" }} />
          <div style={{ position: "absolute", top: "60%", left: "20%", width: "20%", height: "15%", borderRadius: "40%", background: "rgba(34,139,74,0.25)", transform: "rotate(-10deg)" }} />
          <div style={{ position: "absolute", top: "15%", left: "60%", width: "18%", height: "22%", borderRadius: "40%", background: "rgba(34,139,74,0.28)", transform: "rotate(30deg)" }} />
          {/* 구름 느낌 */}
          <div style={{ position: "absolute", top: "30%", left: "10%", width: "80%", height: "8%", borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />
          <div style={{ position: "absolute", top: "55%", left: "5%", width: "60%", height: "6%", borderRadius: "50%", background: "rgba(255,255,255,0.03)" }} />
        </div>

        <div style={{ position: "relative", zIndex: 1, padding: "0 2rem" }}>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p style={{ fontSize: "clamp(56px, 10vw, 120px)", fontWeight: 800, lineHeight: 0.95, letterSpacing: "-0.02em", margin: 0, color: "#1d9e75" }}>KIM</p>
            <p style={{ fontSize: "clamp(56px, 10vw, 120px)", fontWeight: 800, lineHeight: 0.95, letterSpacing: "-0.02em", margin: 0, color: "white" }}>SEONG</p>
            <p style={{ fontSize: "clamp(56px, 10vw, 120px)", fontWeight: 800, lineHeight: 0.95, letterSpacing: "-0.02em", margin: "0 0 2rem", color: "#1d9e75" }}>YEON</p>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.6 }}>
            <p style={{ fontSize: "clamp(13px, 1.8vw, 17px)", color: "#888", letterSpacing: "0.2em", textTransform: "uppercase", margin: "0 0 1.5rem" }}>
              Game · AI · Front-end Developer
            </p>
            <div style={{ display: "flex", gap: "1rem" }}>
              <a href="#about" style={{ padding: "10px 24px", background: "#0f6e56", color: "white", borderRadius: "8px", fontSize: "13px", fontWeight: 600, textDecoration: "none" }}>About →</a>
              <a href="https://github.com/lalunru" target="_blank" rel="noopener noreferrer" style={{ padding: "10px 24px", border: "1px solid #1a3a2a", color: "#aaa", borderRadius: "8px", fontSize: "13px", textDecoration: "none" }}>GitHub</a>
            </div>
          </motion.div>
        </div>

        <motion.div animate={{ y: [0, -12, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          style={{ position: "absolute", top: "15%", right: "8%", fontSize: "clamp(80px, 11vw, 120px)", zIndex: 2 }}>🛸</motion.div>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
          style={{ position: "absolute", bottom: "20%", right: "20%", zIndex: 2, opacity: 0.8 }}>
          <div style={{ position: "relative", display: "inline-block" }}>
            <div style={{
              width: "clamp(60px, 8vw, 90px)", height: "clamp(60px, 8vw, 90px)",
              borderRadius: "50%",
              background: "radial-gradient(circle at 35% 35%, #c0392b, #7b241c 60%, #4a0f0f)",
              border: "1px solid rgba(231,76,60,0.3)",
              position: "relative", overflow: "hidden",
            }}>
              <div style={{ position: "absolute", top: "40%", left: 0, right: 0, height: "15%", background: "rgba(0,0,0,0.2)", borderRadius: "50%" }} />
              <div style={{ position: "absolute", top: "60%", left: 0, right: 0, height: "10%", background: "rgba(0,0,0,0.15)", borderRadius: "50%" }} />
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── MARQUEE ── */}
      <div style={{ position: "relative", zIndex: 1, borderTop: "1px solid #0f2a1a", borderBottom: "1px solid #0f2a1a" }}>
        <MarqueeSkills />
      </div>

      {/* ── ABOUT ── */}
      <section id="about" style={{ position: "relative", zIndex: 1, padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <SectionTitle text="About" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p style={{ fontSize: "20px", color: "white", fontWeight: 600, marginBottom: "1rem" }}>
                안녕하세요, 기술과 사용자 경험의 경계를 잇는 김성연입니다.
              </p>
              <p style={{ fontSize: "16px", color: "#aaa", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                Unity · C# 기반 게임 개발부터 설명 가능한 AI(XAI)를 적용한 ML 파이프라인, 그리고 Figma와 Tailwind를 활용한 모듈화된 UI 디자인 시스템 구축까지 폭넓게 경험했습니다.
              </p>
              <p style={{ fontSize: "16px", color: "#aaa", lineHeight: 1.8 }}>
                Claude Code 등 새로운 기술을 빠르게 습득하여 작업 효율을 높이고, 팀 안에서 맡은 영역을 끝까지 책임지며 완성도를 높이는 것을 중요하게 생각합니다. 기술적 깊이와 디자인 감각을 바탕으로 최적의 결과물을 만들어내는 개발자로 성장하고자 합니다.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
              <div style={{ border: "1px solid #1a3a2a", borderRadius: "12px", padding: "1.5rem" }}>
                <p style={{ fontSize: "12px", color: "#555", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>Contact</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {[
                    { label: "GitHub", href: "https://github.com/lalunru" },
                    { label: "Email", href: "mailto:aa40272446@gmail.com" },
                  ].map((l) => (
                    <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                      style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px", background: "#0a1a0f", borderRadius: "8px", color: "#aaa", textDecoration: "none", fontSize: "14px" }}
                      onMouseEnter={e => { e.currentTarget.style.background = "#0f2a1a"; e.currentTarget.style.color = "white"; }}
                      onMouseLeave={e => { e.currentTarget.style.background = "#0a1a0f"; e.currentTarget.style.color = "#aaa"; }}>
                      {l.label} <span>→</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" style={{ position: "relative", zIndex: 1, padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <SectionTitle text="Skills" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
            {skillGroups.map((g, i) => (
              <motion.div key={g.title} custom={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                style={{ border: "1px solid #1a3a2a", borderRadius: "12px", padding: "1.5rem" }}>
                <h3 style={{ fontSize: "13px", fontWeight: 600, color: "#1d9e75", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>{g.title}</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {g.items.map((item) => (
                    <li key={item} style={{ fontSize: "14px", color: "#aaa", display: "flex", alignItems: "center", gap: "8px" }}>
                      <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#0f6e56", flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" style={{ position: "relative", zIndex: 1, padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <SectionTitle text="Projects" />
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {projects.map((p, i) => (
              <motion.div key={p.slug} custom={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <ProjectCard {...p} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ position: "relative", zIndex: 1, borderTop: "1px solid #0f2a1a", padding: "2rem", textAlign: "center" }}>
        <p style={{ fontSize: "13px", color: "#444" }}>© 2026 김성연</p>
      </footer>
    </>
  );
}