import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import Avatar from "@/components/Avatar";


export default async function ProfilePage() {
const session = await getServerSession(authOptions);

if (!session || !session.user?.id) {
    redirect("/signin");
  }

const accounts = await prisma.account.findMany({
  where: {
    userId: session.user.id,
  }
})

const provider =
  accounts.find((a) => a.provider === "google")?.provider ||
  accounts[0]?.provider ||
  "credentials";

  const user = session.user;

  return (
    <div className="min-h-screen py-10">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-6">
        {/* HEADER */}
        <div className="flex items-center gap-6 border-b pb-6">
          <Avatar src={user.image} size={96}/>

          <div>
            <h1 className="text-2xl font-semibold text-gray-800">
              {user?.name || "User"}
            </h1>
            <p className="text-gray-500">{user?.email}</p>
            <p className="text-sm text-gray-400 mt-1">
            </p>
          </div>
        </div>

        {/* ACCOUNT INFO */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Informasi Akun
          </h2>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Nama</span>
              <span className="text-gray-800">{user?.name}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Email</span>
              <span className="text-gray-800">{user?.email}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Role</span>
              <span className="text-gray-800">User</span>
            </div>
          </div>
        </div>

        {/* ACTIONS */}
        <div className="mt-8 border-t pt-6 flex justify-end gap-3">
          <form action="/" method="post">
            <button
              type="submit"
              className="px-4 py-2 rounded-lg text-sm bg-black text-white hover:bg-gray-600"
            >
              Beranda
            </button>
          </form>

          <a 
            href="/profile/edit"
            className="px-4 py-2 rounded-lg bg-black text-white text-sm hover:bg-gray-600"
          >
            Edit Profile
          </a>
        </div>
      </div>
    </div>
  );
}
