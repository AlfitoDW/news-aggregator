"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function EditProfileForm({ user }: { user: any }) {
  const { update } = useSession();
  const router = useRouter();

  const [name, setName] = useState(user.name || "");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const res = await fetch("/api/profile/update", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    await update({
      user: {
        name: data.user.name,
        image: data.user.image,
      },
    });

    setLoading(false);
    router.refresh();
    router.push("/profile");
  }

  return (
    <div className="min-h-screen py-10">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-6">
        
        {/* HEADER */}
        <div className="border-b pb-6 mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">
            Edit Profile
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Perbarui informasi akun Anda
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Nama
            </label>
            <input
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              value={user.email}
              disabled
              className="w-full rounded-lg px-3 py-2 text-sm bg-gray-100 text-gray-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Avatar
            </label>
            <input
              type="file"
              name="avatar"
              accept="image/*"
              className="text-sm file:mr-4 file:px-4 file:py-2
                         file:rounded-lg file:border-0
                         file:text-sm file:bg-black
                         file:text-white hover:file:bg-gray-600"
            />
          </div>

          {/* ACTIONS */}
          <div className="pt-6 border-t flex justify-end gap-3">
            <button
              type="button"
              onClick={() => router.push("/profile")}
              className="px-4 py-2 rounded-lg text-sm bg-gray-100 text-gray-700 hover:bg-gray-200"
            >
              Kembali
            </button>

            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 rounded-lg text-sm bg-black text-white hover:bg-gray-600 disabled:opacity-50"
            >
              {loading ? "Menyimpan..." : "Simpan"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
