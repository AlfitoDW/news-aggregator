// components/Avatar.tsx
import Image from "next/image";

export default function Avatar({ src, size = 96 }) {
  return (
    <div
      style={{ width: size, height: size }}
      className="rounded-full overflow-hidden border"
    >
      <Image
        src={src || "/avatar.png"}
        alt="Avatar"
        width={size}
        height={size}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
