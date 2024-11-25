import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const space_mono = Space_Mono({
  weight: ["400", "700"],
  style: "normal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Winston Tandi",
  description: "Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col px-8 max-w-5xl mx-auto h-screen ${space_mono.className}`}
      >
        <Header />
        <main className="mt-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
