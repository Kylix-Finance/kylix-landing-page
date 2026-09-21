"use client";

import { ReactElement, useEffect, useRef } from "react";
import Image from "next/image";

export default function BackGround(): ReactElement {
  const spot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = spot.current;
    if (!node || !window.matchMedia("(hover: hover)").matches) return;

    let frame = 0;
    let x = 0;
    let y = 0;

    // Pointer events fire faster than frames; write the CSS vars once per frame.
    const apply = (): void => {
      frame = 0;
      node.style.setProperty("--mx", `${x}px`);
      node.style.setProperty("--my", `${y}px`);
    };

    const onMove = (event: PointerEvent): void => {
      x = event.clientX;
      y = event.clientY;
      if (!frame) frame = requestAnimationFrame(apply);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="atmosphere" aria-hidden>
      <div className="atmosphere-bloom atmosphere-bloom-a" />
      <div className="atmosphere-bloom atmosphere-bloom-b" />
      <div className="atmosphere-bloom atmosphere-bloom-c" />
      <div className="atmosphere-silk">
        <Image
          src="/assets/images/section-bg.png"
          alt=""
          fill
          sizes="100vw"
          quality={70}
          draggable={false}
          className="object-cover object-center"
        />
      </div>
      <div className="atmosphere-streak" />
      <div className="atmosphere-vignette" />
      <div ref={spot} className="atmosphere-spot" />
      <div className="atmosphere-grain" />
    </div>
  );
}
