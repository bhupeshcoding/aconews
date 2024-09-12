// app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css"; // Make sure you have this CSS file for styling
import Header from "@/components/Header"; // Import the Header component
import { Footer } from "@/components/Footer"; // Import the Footer component

const geistSans = localFont({
  src: "./fonts/GeistVF.woff", // Adjust the path if your font file is located elsewhere
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff", // Adjust the path if your font file is located elsewhere
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header /> {/* Render the Header */}
        {children}
        <Footer /> {/* Render the Footer */}
      </body>
    </html>
  );
}
