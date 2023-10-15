import "./globals.css";
import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kenneth Pauletti",
  description: "Kenneth Pauletti",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={spaceMono.className + " overflow-hidden"}>{children}</body>
    </html>
  );
}
