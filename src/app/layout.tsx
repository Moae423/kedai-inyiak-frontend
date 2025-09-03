import type { Metadata } from "next";
import "./globals.css";
import { switzer } from "@/lib/font";

export const metadata: Metadata = {
  title: "Kedai Inyiak App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${switzer.className} antialiased`}>{children}</body>
    </html>
  );
}
