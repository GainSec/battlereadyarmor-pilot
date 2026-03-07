import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-orbitron",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const defaultOpenGraphImage = siteUrl
  ? new URL("/bra-dash-proper.png", siteUrl).toString()
  : undefined;

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: "BRA | Pilot",
  description:
    "BRA pilot site for AI-assisted offensive security under mechanical control.",
  openGraph: {
    title: "BRA | Pilot",
    description:
      "Direct offensive workflows through a controlled command interface built for operators, pentesters, hackers and cybersecurity professionals. Made by GainSec",
    images: defaultOpenGraphImage ? [defaultOpenGraphImage] : undefined,
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
      <body className={`${orbitron.variable} text-black antialiased`}>{children}</body>
    </html>
  );
}
