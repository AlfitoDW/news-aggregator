"use client";

import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import SearchDialog from "./search/SearchDialog";
import  { Search } from "lucide-react";

export default function Navbar() {
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  
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

        {/* SEARCH */}
        <div className="w-full max-w-sm">
          <SearchDialog
            trigger={
              <button
                className="
                  flex items-center justify-between
                  w-full
                  px-4 py-2
                  rounded-full
                  border
                  bg-white
                  text-sm text-gray-500
                  hover:bg-gray-50
                  focus:outline-none
                "
              >
                {/* LEFT */}
                <div className="flex items-center gap-2">
                  <Search size={16} className="text-gray-400" />
                  <span>Search</span>
                </div>

                {/* RIGHT (shortcut hint) */}
              </button>
            }
          />
        </div>

        {/* MENU */}
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-black">
            Beranda
          </Link>
          <Link href="/news" className="hover:text-black">
            Berita
          </Link>
          <Link href="/about" className="hover:text-black">
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
              <button
  onClick={() => setOpen(!open)}
  className="relative w-9 h-9 rounded-full overflow-hidden border border-gray-800"
>
  <Image
    src={session.user?.image || "/avatar.png"}
    alt="Profile"
    fill
    sizes="36px"
    className="object-cover object-center"
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
