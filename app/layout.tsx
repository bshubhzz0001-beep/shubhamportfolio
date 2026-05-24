import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Er. Shubham Rajendra Beldar Kumawat | Civil Engineer Portfolio",
  description:
    "Portfolio of Er. Shubham Rajendra Beldar Kumawat — Graduate Civil Engineer (UTS), site & QA/QC experience, patents, publications, and infrastructure projects in Australia and India.",
  keywords: [
    "Civil Engineering",
    "Material Engineering",
    "Transportation Engineering",
    "Research",
    "Patents",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
