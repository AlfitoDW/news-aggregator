"use client";

import { signIn } from "next-auth/react";

export default function SignInForm() {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-8">
      <h1 className="text-2xl font-bold text-center mb-2 text-gray-500">
        Sign in to News Aggregator
      </h1>

      <p className="text-sm text-gray-500 text-center mb-6">
        Dapatkan berita terkini dari berbagai sumber
      </p>

      <button
        onClick={() => signIn("google", { callbackUrl: "/" })}
        className="w-full flex items-center justify-center gap-3 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-100 transition text-black"
      >
        <svg
          className="h-5 w-5"
          viewBox="0 0 48 48"
        >
          <path
            fill="#EA4335"
            d="M24 9.5c3.54 0 6.7 1.22 9.19 3.61l6.85-6.85C35.9 2.38 30.47 0 24 0 14.64 0 6.39 5.38 2.44 13.22l7.98 6.2C12.3 13.09 17.67 9.5 24 9.5z"
          />
          <path
            fill="#4285F4"
            d="M46.1 24.5c0-1.64-.15-3.21-.43-4.73H24v9.01h12.4c-.54 2.9-2.18 5.36-4.66 7.03l7.28 5.65c4.26-3.94 6.69-9.75 6.69-16.96z"
          />
          <path
            fill="#FBBC05"
            d="M10.42 28.42c-.5-1.49-.79-3.08-.79-4.72s.29-3.23.79-4.72l-7.98-6.2C.88 15.65 0 19.72 0 23.7s.88 8.05 2.44 11.92l7.98-6.2z"
          />
          <path
            fill="#34A853"
            d="M24 48c6.48 0 11.93-2.13 15.91-5.81l-7.28-5.65c-2.02 1.35-4.61 2.15-8.63 2.15-6.33 0-11.7-3.59-13.58-8.72l-7.98 6.2C6.39 42.62 14.64 48 24 48z"
          />
        </svg>
        Sign in with Google
      </button>
    </div>
  );
}
