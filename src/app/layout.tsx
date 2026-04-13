import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "김성연 | Developer", template: "%s | 김성연" },
  description: "Game · AI · Front-end 개발자 김성연의 포트폴리오",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}