import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./utils/icons/font-awesome";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adrian De Ro ",
  description: "Welcome to my Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
