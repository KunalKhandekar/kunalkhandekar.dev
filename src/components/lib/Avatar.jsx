"use client";

import { useState } from "react";
import Image from "next/image";

function Avatar({ url, size = "size-9" }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className={`${size} rounded-full overflow-hidden cursor-pointer relative shrink-0`}
    >
      {/* Shimmer loader */}
      {isLoading && (
        <div className="absolute inset-0 animate-none bg-gray-200 dark:bg-gray-700" />
      )}

      <Image
        alt="Avatar"
        src={url}
        width={100}
        height={100}
        className="object-cover w-full h-full"
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}

export default Avatar;
