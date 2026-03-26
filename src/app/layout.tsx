import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import GlassMouseEffect from "@/components/GlassMouseEffect";
import ThemeProvider from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aman Toppo — Mobile Engineer",
  description: "Portfolio of Aman Toppo, Mobile Engineer specializing in Android, Kotlin, KMP, and open source developer tools.",
  keywords: ["Aman Toppo", "Mobile Engineer", "Android", "Kotlin", "Jetpack Compose", "KMP", "Network Logger"],
  openGraph: {
    title: "Aman Toppo — Mobile Engineer",
    description: "Android & KMP developer building scalable mobile apps and open source tools.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <GlassMouseEffect />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
