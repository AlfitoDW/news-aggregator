"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignInForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);

    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false, // 🔥 PENTING
    });

    setLoading(false);

    if (res?.error) {
      setError("Email atau password salah");
      return;
    }

    // sukses login
    window.location.href = "/";
  }

  return (
    <div className="text-gray-600 space-y-6">
      {/* ERROR MESSAGE */}
      {error && (
        <div className="rounded-lg bg-red-50 border border-red-200 text-red-600 px-4 py-2 text-sm">
          {error}
        </div>
      )}

      {/* EMAIL LOGIN */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-700">Email</label>
          <input
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2
                       focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Password</label>
          <input
            name="password"
            type="password"
            required
            placeholder="••••••••"
            className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2
                       focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-gray-600">
            <input type="checkbox" className="rounded border-gray-300" />
            Remember me
          </label>

          <Link
            href="/signin/forgot-password"
            className="text-indigo-600 hover:underline"
          >
            Forgot password?
          </Link>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-indigo-600 py-2.5 text-white
                     font-semibold hover:bg-indigo-700 transition
                     disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>

      {/* DIVIDER */}
      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-gray-200" />
        <span className="text-xs text-gray-400">OR</span>
        <div className="h-px flex-1 bg-gray-200" />
      </div>

      {/* GOOGLE */}
      <button
        onClick={() => signIn("google", { callbackUrl: "/" })}
        className="w-full flex items-center justify-center gap-3
                   border border-gray-300 rounded-lg py-2.5
                   hover:bg-gray-50 transition font-medium"
      >
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google"
          className="w-5 h-5"
        />
        Sign in with Google
      </button>

      {/* SIGN UP LINK */}
      <p className="text-center text-sm text-gray-500">
        Belum punya akun?{" "}
        <Link
          href="/signup"
          className="text-indigo-600 font-medium hover:underline"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
}
