"use client";

import { ReactElement } from "react";
import dynamic from "next/dynamic";
import { useReducedMotion } from "framer-motion";
import { useWindowSize } from "usehooks-ts";
import HeroIntro from "./HeroIntro";

const Hero3D = dynamic(() => import("./components/Hero3D"), {
  ssr: false,
  loading: () => <HeroIntro />,
});

export default function Hero(): ReactElement {
  const reduceMotion = useReducedMotion();
  const { height = 0, width = 0 } = useWindowSize();
  const desktop = height >= 600 && width >= 700;

  if (reduceMotion !== false || !desktop) {
    return <HeroIntro />;
  }

  return <Hero3D />;
}
