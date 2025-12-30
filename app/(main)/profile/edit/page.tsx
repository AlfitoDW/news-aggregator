import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import EditProfileForm from "./edit-form";
import Avatar from "@/components/Avatar";

export default async function EditProfilePage() {
  const session = await getServerSession(authOptions);
  
  

  if (!session || !session.user) {
    redirect("/signin");
  }

  const user = session.user;

  return (
    <div className="text-gray-600 min-h-screen bg-gray-50 py-10">
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-sm p-6">
        <h1 className="text-xl font-semibold mb-6">Edit Profile</h1>

        <div className="flex justify-center mb-6">
            <Avatar src={user.image} size={96} />
        </div>

        <EditProfileForm user={session.user} />
      </div>
    </div>
  );
}
