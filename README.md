# Portfolio

> 한국어 소개는 [아래](#korean)를 참고하세요.

Personal portfolio site for Seong-yeon Kim —  
a developer working across **Game**, **AI/ML**, and **Front-end**,  
building everything from VR experiences to explainable AI systems.

🔗 **[Live Site](https://portfolio-lalunrus-projects.vercel.app)**

---

## Tech Stack

| | |
|---|---|
| Framework | Next.js 14 (App Router) |
| Animation | Framer Motion |
| Styling | Tailwind CSS |
| Deployment | Vercel |
| Language | TypeScript |

---

## Features

**Space-themed UI**
Dark space background with canvas-based twinkling star field, floating UFO animation, and an Earth-like planet rendered in pure CSS.

**Scroll Animations**
Section elements fade and slide into view on scroll using Framer Motion's `whileInView` with stagger effects.

**Project Cards**
Alternating left/right layout with period, team size, tech tags, and GitHub links — inspired by timeline-style portfolio designs.

**Marquee Skills Banner**
Infinite scrolling skill strip between Hero and content sections.

**MDX Project Detail Pages**
Each project links to a dedicated detail page rendered from MDX with static generation (`generateStaticParams`).

---

## Projects Featured

| Project | Stack | Type |
|---|---|---|
| Line 0 — VR Horror Adventure | Unity, C#, GLSL, URP | Team |
| Beyond the Door of Memory — 2D Adventure | Unity, C# | Team |
| NPR Shaders | GLSL, Unity URP | Solo |
| XAI Network Intrusion Detection | Python, XGBoost, SHAP, LIME | Solo (Thesis) |
| Malicious URL Classification | Python, TensorFlow, LSTM | Solo |
| AssetMind — Finance Web Service | Tailwind, Storybook, Figma | Team |
| Smart Plant Monitor | Python, Raspberry Pi, C | Team |

---

## Getting Started

```bash
git clone https://github.com/lalunru/portfolio.git
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

<a name="korean"></a>
## 한국어 요약

Game · AI · Front-end를 넘나드는 개발자 김성연의 개인 포트폴리오 사이트입니다.

**핵심 구현**
- Canvas 기반 별 반짝임 애니메이션 + CSS만으로 구현한 지구 오브젝트
- Framer Motion `whileInView` stagger 애니메이션
- MDX 기반 프로젝트 상세 페이지 정적 생성
- 무한 스크롤 기술 스택 배너 (Marquee)
- 좌우 번갈아 등장하는 프로젝트 카드 레이아웃
