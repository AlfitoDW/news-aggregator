// app/(main)/layout.tsx
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Content */}
      <div
        className="flex flex-col flex-1 transition-all duration-300"
        style={{
          marginLeft: "var(--sidebar-width, 16rem)",
        }}
      >
        <Navbar />

        <main className="flex-1 px-6 py-8">
          {children}
        </main>

        <Footer />
      </div>
    </div>
  );
}
