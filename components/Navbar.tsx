"use client";

import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 🔥 klik di luar dropdown → close
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white shadow-sm">
      <div className="text-gray-600 container mx-auto flex justify-between items-center px-4 py-3">
        {/* LOGO */}
        <Link href="/" className="text-xl font-bold text-blue-600">
          News<span className="text-gray-800">Aggregator</span>
        </Link>

        {/* MENU */}
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-blue-600">
            Beranda
          </Link>
          <Link href="/news" className="hover:text-blue-600">
            Berita
          </Link>
          <Link href="/about" className="hover:text-blue-600">
            Tentang
          </Link>

          {/* AUTH */}
          {status === "loading" ? null : !session ? (
            <Link
              href="/signin"
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            >
              Sign In
            </Link>
          ) : (
            <div className="relative" ref={dropdownRef}>
              {/* AVATAR */}
              <button onClick={() => setOpen(!open)}>
                <Image
                  src={session.user?.image || "/avatar.png"}
                  alt="Profile"
                  width={36}
                  height={36}
                  className="rounded-full border border-gray-900"
                />
              </button>

              {/* DROPDOWN */}
              <div
                className={`
                  absolute right-0 mt-2 w-40 rounded-lg border bg-white shadow-md text-sm
                  origin-top-right transition-all duration-200
                  ${
                    open
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95 pointer-events-none"
                  }
                `}
              >
                <Link
                  href="/profile"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 hover:bg-gray-100 rounded-lg"
                >
                  Profile
                </Link>

                <button
                  onClick={() => {
                    setOpen(false);
                    signOut({ callbackUrl: "/" });
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600 rounded-lg"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
