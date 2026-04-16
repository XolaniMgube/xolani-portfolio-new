import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Xolani Mgube — Frontend Developer",
  description:
    "Johannesburg-based frontend developer building fast, purposeful web experiences for businesses that care about their users.",
  openGraph: {
    title: "Xolani Mgube — Frontend Developer",
    description: "Building things for the web that actually work.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600&family=Lora:ital,wght@0,400;0,500;1,400&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
