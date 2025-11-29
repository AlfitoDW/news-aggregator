// components/Sidebar.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Home, Newspaper, Info, Menu } from "lucide-react";
import { usePathname } from "next/navigation";

const menu = [
  { name: "Home", icon: Home, href: "/" },
  { name: "News", icon: Newspaper, href: "/news" },
  { name: "About", icon: Info, href: "/about" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  // set CSS variable on mount and whenever collapsed changes
  useEffect(() => {
    const width = collapsed ? "5rem" : "16rem"; // w-20 = 5rem, w-64 = 16rem
    // set on root so layout can read it: fallback if not set uses 16rem
    document.documentElement.style.setProperty("--sidebar-width", width);
    // optional: also set a small body padding-left fallback for no-js case
    document.body.style.setProperty("--sidebar-width", width);

    return () => {
      // cleanup: optional reset (keeps last state if you prefer)
      // document.documentElement.style.removeProperty("--sidebar-width");
    };
  }, [collapsed]);

  return (
    <aside
      aria-expanded={!collapsed}
      className={`
        h-screen fixed top-0 left-0
        bg-zinc-900 text-white border-r border-zinc-800
        flex flex-col transition-all duration-300
        ${collapsed ? "w-20" : "w-64"}
      `}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-zinc-800">
        {!collapsed && <h1 className="text-xl font-bold">NewsPanel</h1>}

        {/* Collapse Button */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-md hover:bg-zinc-800 transition"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2 mt-4 px-3">
        {menu.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition
              ${active ? "bg-zinc-700" : "hover:bg-zinc-800"}`}
            >
              <Icon size={20} />
              {!collapsed && <span>{item.name}</span>}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
