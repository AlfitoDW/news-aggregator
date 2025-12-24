"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Home, Newspaper, Info, PanelRight } from "lucide-react";
import { usePathname } from "next/navigation";

const menu = [
  { name: "Home", icon: Home, href: "/" },
  { name: "News", icon: Newspaper, href: "/news" },
  { name: "About", icon: Info, href: "/about" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Desktop width sync
  useEffect(() => {
    const width = collapsed ? "5rem" : "16rem";
    document.documentElement.style.setProperty("--sidebar-width", width);
  }, [collapsed]);

  return (
    <>
      {/* BACKDROP (MOBILE) */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 z-40 h-screen
          bg-zinc-900 text-white border-r border-zinc-800
          transition-all duration-300

          ${collapsed ? "w-20" : "w-64"}

          /* MOBILE */
          md:translate-x-0
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-zinc-800">
          {!collapsed && (
            <h1 className="text-lg font-semibold tracking-tight">
              NewsPanel
            </h1>
          )}

          {/* COLLAPSE (DESKTOP ONLY) */}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="hidden md:flex p-2 rounded-md hover:bg-zinc-800"
          >
            <PanelRight size={20} />
          </button>
        </div>

        {/* NAV */}
        <nav className="flex flex-col gap-2 mt-4 px-3">
          {menu.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`
                  flex items-center gap-3 px-3 py-2 rounded-lg transition
                  ${active ? "bg-zinc-700" : "hover:bg-zinc-800"}
                `}
              >
                <Icon size={20} />
                {!collapsed && <span>{item.name}</span>}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* MOBILE TRIGGER (DIPANGGIL DARI NAVBAR) */}
      <button
        id="open-sidebar"
        onClick={() => setMobileOpen(true)}
        className="hidden"
      />
    </>
  );
}
