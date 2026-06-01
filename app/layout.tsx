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
  title: "Shubham. R. Beldar. K. | Civil Engineer Portfolio",
  description:
    "Portfolio of Shubham. R. Beldar. K. — Materials and QA engineer with experience in concrete, asphalt, pavements, research, and civil construction delivery.",
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
