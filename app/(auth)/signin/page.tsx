"use client"

import SignInForm from "./SignInForm";
import Image from "next/image";

export default function SignInPage() {
  return (
    <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
      {/* Left Form */}
      <div className="p-8 md:p-12 flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Welcome Back 👋🏻
        </h1>
        <p className="text-gray-500 mb-8">
          Dapatkan berita terkini dari berbagai sumber terpercaya
        </p>

        <SignInForm/>

        <p className="text-sm text-gray-500 mt-6">
          Dengan Login, kamu menyetujui{" "}
          <span className="text-gray-800 cursor-pointer">
            Terms & Privacy Policy
          </span>
        </p>
      </div>

      {/* Right - Visual */}
      <div className="hidden md:relative md:flex  from-indigo-500 to-purple-600">
        <Image
          src="/illustrations/news-aggregator-auth2.png"
          alt="News Aggregator Illustration"
          fill
          className="object-cover"
          priority
        />
      </div>


    </div>
  );
}
