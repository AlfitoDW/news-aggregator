"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
      }),
      headers: { "Content-Type": "application/json" },
    });

    setLoading(false);

    if (res.ok) {
      router.push("/signin");
    } else {
      alert("Sign up gagal");
    }
  }

  return (
    <div className="text-gray-600 w-full max-w-5xl bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
      
      {/* Left */}
      <div className="p-8 md:p-12 flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Create Account 🚀
        </h1>
        <p className="text-gray-500 mb-8">
          Daftar untuk membaca berita dari berbagai sumber
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Full Name"
            required
            className="w-full rounded-lg border px-4 py-2"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="w-full rounded-lg border px-4 py-2"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            className="w-full rounded-lg border px-4 py-2"
          />

          <button
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-2.5 rounded-lg font-semibold"
          >
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-6 text-center">
          Already have an account?{" "}
          <a href="/signin" className="text-indigo-600 hover:underline">
            Sign in
          </a>
        </p>
      </div>

      {/* Right Visual */}
      <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600">
        <img
          src="/illustrations/news-aggregator-auth2.png"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
