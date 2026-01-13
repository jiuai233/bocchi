import type { Metadata } from "next";
import { Geist, Geist_Mono, Rubik_Glitch } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rubikGlitch = Rubik_Glitch({
  variable: "--font-rubik-glitch",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bocchi the Rock - Fan Site",
  description: "A fan site dedicated to Kessoku Band and Hitori Gotoh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rubikGlitch.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
