// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
        <Sidebar />

        {/* Wrapper Konten: margin-left menggunakan CSS variable */}
        <div
          className="min-h-screen flex flex-col transition-all duration-300"
          style={{
            // fallback to 16rem if variable not set: `var(--sidebar-width, 16rem)`
            marginLeft: "var(--sidebar-width, 16rem)",
          }}
        >
          {/* Navbar di dalam konten */}
          <Navbar />

          {/* Main */}
          <main className="flex-1 px-6 py-8">{children}</main>

          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
