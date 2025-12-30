"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function ResetPasswordClient() {
  const params = useSearchParams();
  const router = useRouter();
  const token = params.get("token");

  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const res = await fetch("/api/auth/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, password }),
    });

    setLoading(false);

    if (!res.ok) {
      setError("Token invalid atau expired");
      return;
    }

    router.push("/signin");
  }

  return (
    <div className="text-gray-600 w-full max-w-md bg-white rounded-xl shadow p-8">
      <h1 className="text-2xl font-bold mb-2">Reset Password</h1>
      <p className="text-gray-500 mb-6">Masukkan password baru kamu</p>

      {error && (
        <div className="text-red-600 bg-red-50 border border-red-200 rounded-lg p-3 text-sm mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="password"
          required
          placeholder="New password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500"
        />

        <button
          disabled={loading}
          className="w-full bg-indigo-600 text-white py-2.5 rounded-lg font-semibold hover:bg-indigo-700 disabled:opacity-60"
        >
          {loading ? "Resetting..." : "Reset Password"}
        </button>
      </form>
    </div>
  );
}
