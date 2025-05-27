import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Devleon's Portfolio",
  icons: {
    icon: "/devleon.jpg",
    shortcut: "/devleon.jpg",
    apple: "/devleon.jpg",
  },
  description: "Modern & minimalistic portfolio of Devleon",
  keywords: [
    "Devleon",
    "Portfolio",
    "Web Developer",
    "Software Engineer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "HTML Developer",
    "CSS Developer",
    "Tailwind CSS Developer",]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
