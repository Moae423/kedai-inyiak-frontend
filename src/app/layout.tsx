import type { Metadata } from "next";
import "./globals.css";
import { switzer } from "@/lib/font";
import { Toaster } from "@/components/ui/sonner";

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
      <body className={`${switzer.className} antialiased`}>
        <Toaster position="top-center" />
        {children}
      </body>
    </html>
  );
}
