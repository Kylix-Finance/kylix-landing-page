"use client";

import dynamic from "next/dynamic";
import HeroIntro from "./HeroIntro";

const Hero = dynamic(() => import("./index"), {
  ssr: false,
  loading: () => <HeroIntro />,
});

export default Hero;
