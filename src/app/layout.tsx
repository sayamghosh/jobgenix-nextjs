// app/layout.tsx
import type { Metadata } from "next";
import {  Sora } from "next/font/google";
import "./globals.css";
import Navbar from "../components/shared/Navbar";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jobgenix",
  description: "Get job ready the Jobgenix way",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} antialiased font-sora`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
