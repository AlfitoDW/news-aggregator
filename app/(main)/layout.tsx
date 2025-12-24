// app/(main)/layout.tsx
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Content */}
      <div
        className="
          flex flex-col min-h-screen
          transition-all duration-300
          md:ml-[var(--sidebar-width,16rem)]
        "
      >
        <Navbar />

        <main className="flex-1 px-4 sm:px-6 py-6">
          {children}
        </main>

        <Footer />
      </div>
    </div>
  );
}
