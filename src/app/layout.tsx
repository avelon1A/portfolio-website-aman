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
  title: "Aman Toppo — Mobile Engineer",
  description:
    "Portfolio of Aman Toppo, a Mobile Engineer specializing in Android development, Kotlin ecosystem, and cross-platform mobile technologies.",
  keywords: [
    "Aman Toppo",
    "Mobile Engineer",
    "Android Developer",
    "Kotlin",
    "Jetpack Compose",
    "Cross-Platform",
    "Portfolio",
  ],
  openGraph: {
    title: "Aman Toppo — Mobile Engineer",
    description:
      "Portfolio of Aman Toppo, a Mobile Engineer specializing in Android development and cross-platform mobile technologies.",
    type: "website",
  },
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
