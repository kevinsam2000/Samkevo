import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mahanium Charity Organization",
  description:
    "Empowering communities through education, healthcare, and disaster relief.",
  metadataBase: new URL("https://mahanium.example.org"),
  openGraph: {
    title: "Mahanium Charity Organization",
    description:
      "Empowering communities through education, healthcare, and disaster relief.",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahanium Charity Organization",
    description:
      "Empowering communities through education, healthcare, and disaster relief.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen flex flex-col bg-background text-foreground">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
