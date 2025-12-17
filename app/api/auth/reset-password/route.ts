import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  const { token, password } = await req.json();

  if (!token || !password) {
    return NextResponse.json({ error: "Invalid data" }, { status: 400 });
  }

  const resetToken = await prisma.passwordResetToken.findUnique({
    where: { token },
  });

  if (!resetToken || resetToken.expiresAt < new Date()) {
    return NextResponse.json({ error: "Token expired" }, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.user.update({
    where: { email: resetToken.email },
    data: { password: hashedPassword },
  });

  // hapus token setelah dipakai
  await prisma.passwordResetToken.delete({
    where: { token },
  });

  return NextResponse.json({ success: true });
}
