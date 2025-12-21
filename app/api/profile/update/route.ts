import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import cloudinary from "@/lib/cloudinary";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await req.formData();
  const name = formData.get("name") as string;
  const avatar = formData.get("avatar") as File | null;

  let imageUrl: string | undefined = undefined;

  
  if (avatar && avatar.size > 0) {
    const buffer = Buffer.from(await avatar.arrayBuffer());

    const uploadResult = await new Promise<any>((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          folder: "avatars",
          public_id: session.user.id, // overwrite avatar lama
          overwrite: true,
          resource_type: "image",
        },
        (error, result) => {
          if (error) reject(error);
          resolve(result);
        }
      ).end(buffer);
    });

    imageUrl = uploadResult.secure_url;
  }

  
  const updatedUser = await prisma.user.update({
    where: { id: session.user.id },
    data: {
      name,
      ...(imageUrl && { image: imageUrl }),
    },
  });

  return NextResponse.json({
    success: true,
    user: {
      name: updatedUser.name,
      image: updatedUser.image, 
    },
  });
}
