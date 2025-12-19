import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { writeFile } from "fs/promises";
import path from "path";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await req.formData();

  const name = formData.get("name") as string;
  const avatar = formData.get("avatar") as File | null;

  let imageUrl = undefined;

  if (avatar && avatar.size > 0) {
    const bytes = await avatar.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const fileName = `${session.user.id}-${Date.now()}-${avatar.name}`;
    const uploadPath = path.join(process.cwd(), "public/uploads", fileName);

    await writeFile(uploadPath, buffer);

    imageUrl = `/uploads/${fileName}`;
  }

  const user = await prisma.user.update({
    where: { id: session.user.id },
    data: {
      name,
      ...(imageUrl && { image: imageUrl }),
    },
  });

  return NextResponse.json({ 
    success: true,
    user: {
        name : user.name,
        image: user.image ,
    },
  });
}
