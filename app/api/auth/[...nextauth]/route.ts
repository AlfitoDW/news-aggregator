// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import type { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    // session callback: attach token.id into session.user.id safely
    async session({ session, token }) {
      if (!session.user) session.user = {} as any;
      if (token?.id) {
        // ensure we don't break if session.user is undefined
        (session.user as any).id = token.id as string;
      }
      return session;
    },

    // jwt callback: when a user signs in, copy user.id into token.id
    async jwt({ token, user }) {
      if (user && (user as any).id) {
        token.id = (user as any).id;
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);

// Export the handler for both GET and POST so Next.js recognizes the route
export { handler as GET, handler as POST };
