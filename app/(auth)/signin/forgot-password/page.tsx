"use client";

import { useState } from "react";

export default function ForgotPasswordPage() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const email = new FormData(e.currentTarget).get("email");

    // TODO: panggil API reset password
    console.log("Reset password for:", email);

    setLoading(false);
  }

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">
        Forgot Password 🔐
      </h1>
      <p className="text-gray-500 mb-6">
        Masukkan email kamu, kami akan kirim link reset password.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2
                       focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-indigo-600 py-2.5 text-white font-semibold
                     hover:bg-indigo-700 transition disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send Reset Link"}
        </button>
      </form>

      <p className="text-sm text-gray-500 mt-6 text-center">
        Kembali ke{" "}
        <a
          href="/signin"
          className="text-indigo-600 hover:underline"
        >
          Sign In
        </a>
      </p>
    </div>
  );
}
