"use client";

import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    await fetch("/api/auth/forgot-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    setLoading(false);
    setSuccess(true);
  }

  return (
    <div className="text-gray-600 w-full max-w-md bg-white rounded-xl shadow p-8">
      <h1 className="text-2xl font-bold mb-2">Forgot Password</h1>
      <p className="text-gray-500 mb-6">
        Masukkan email untuk menerima link reset password
      </p>

      {success ? (
        <div className="text-green-600 text-sm bg-green-50 border border-green-200 rounded-lg p-3">
          Jika email terdaftar, link reset sudah dikirim.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
          />

          <button
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-2.5 rounded-lg font-semibold hover:bg-indigo-700 disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send reset link"}
          </button>
        </form>
      )}
    </div>
  );
}
