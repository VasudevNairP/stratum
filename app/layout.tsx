import type { Metadata } from "next";
import "./globals.css";
import ClientProvider from "@/components/ClientProvider";

export const metadata: Metadata = {
  title: "STRATUM — Sustainable Performance Footwear · 100% Recycled & Circular",
  description:
    "Architected for Earth. Engineered for Motion. Sustainable performance footwear crafted from 94% recycled ocean plastics and carbon-negative sugarcane bio-foam. Zero-compromise comfort, durability, and circular renewal.",
  keywords: [
    "sustainable shoes",
    "recycled footwear",
    "ocean plastic sneakers",
    "sugarcane bio-foam",
    "circular design",
    "comfortable walking shoes",
    "STRATUM",
  ],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col bg-[#F7F7F6] text-[#121212] selection:bg-[#121212] selection:text-[#F7F7F6]">
        <ClientProvider>
          {children}
        </ClientProvider>
      </body>
    </html>
  );
}
