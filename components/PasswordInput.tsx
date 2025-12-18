"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface PasswordInputProps {
  name?: string;
  label?: string;
  placeholder?: string;
}

export default function PasswordInput({
  name = "password",
  label = "Password",
  placeholder = "••••••••",
}: PasswordInputProps) {
  const [show, setShow] = useState(false);

  return (
    <div>
      <label className="text-sm font-medium text-gray-700 ml-1">{label}</label>

      <div className="relative mt-1">
        <input
          name={name}
          type={show ? "text" : "password"}
          required
          placeholder={placeholder}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 pr-11
                     focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute inset-y-0 right-3 flex items-center text-gray-500
                     hover:text-gray-700"
        >
          {show ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
    </div>
  );
}
