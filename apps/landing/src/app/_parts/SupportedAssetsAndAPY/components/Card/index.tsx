import { ReactElement } from "react";
import Image from "next/image";
import { Asset } from "~/types";

export default function Card({ isLaunched, src, symbol }: Asset): ReactElement {
  return (
    <div className="rounded-md bg-gradient-to-br from-white/20 via-transparent p-0.5">
      <div className="relative flex aspect-square flex-col items-center justify-center rounded-md bg-gradient-to-tl from-white/5 to-transparent p-6 backdrop-blur-3xl">
        <Image src={src} alt="" width={112} height={112} draggable={false} />
        <p className="mt-4 text-sm font-medium text-white">{symbol}</p>
        {!isLaunched && (
          <p className="absolute bottom-4 text-xs text-secondary-100">
            Not listed yet
          </p>
        )}
      </div>
    </div>
  );
}
