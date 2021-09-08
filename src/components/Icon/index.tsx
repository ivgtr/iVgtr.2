import Image from "next/image";
import React from "react";

export const Icon: React.VFC = () => {
  return (
    <div className="box-border w-28 h-28 p-1 rounded-full bg-gray-700 dark:bg-gray-100 transition-shadow shadow-md overflow-hidden">
      <div className="rounded-full w-full h-full overflow-hidden">
        <Image
          src="/icon.png"
          alt="伊吹風子"
          width={360}
          height={360}
          className="hover:animate-spin"
        />
      </div>
    </div>
  );
};
