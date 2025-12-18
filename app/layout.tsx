// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Providers from "./provider";

export const metadata: Metadata = {
  title: "News Aggregator",
  description: "Platform berita terkini dari berbagai sumber",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="bg-gray-50 text-gray-900">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
