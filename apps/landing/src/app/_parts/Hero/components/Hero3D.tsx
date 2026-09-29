"use client";

import { motion, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";
import { useWindowSize } from "usehooks-ts";
import Image from "next/image";
import { logoImg } from "~/assets/images";
import Button from "~/components/Button";
import { calculateBottom } from "~/utils";
import { heroCopy, heroIntroClassName, heroTitleClassName } from "../heroCopy";
import Scene from "./Scene";
const Hero3D = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll({ axis: "y" });
  const { width = 0, height = 0 } = useWindowSize();
  const heightRatio = height / 600;
  const scrollYProgress = useTransform(
    scrollY,
    [0, heightRatio * 2000 - height - 100],
    [0, 1]
  );

  const imageOpacity = useTransform(
    scrollYProgress,
    [0, 0.05, 1],
    [heightRatio, 0, 0]
  );
  const imageTranslateY = useTransform(
    scrollYProgress,
    [0, 0.05, 1],
    [0, -30, -30]
  );
  const firstTextOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.45, 1],
    [1, 1, 0, 0]
  );
  const firstTextTranslateY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.45, 1],
    [0, -90, -90, -90]
  );
  const secondTextOpacity = useTransform(
    scrollYProgress,
    [0, 0.45, 0.55, 1],
    [0, 0, 1, 1]
  );
  const secondTextTranslateY = useTransform(
    scrollYProgress,
    [0, 0.45, 0.5, 1],
    [0, 0, 0, -200]
  );
  const firstTextVisibility = useTransform(firstTextOpacity, (opacity) =>
    opacity > 0.05 ? "visible" : "hidden"
  );
  const secondTextVisibility = useTransform(secondTextOpacity, (opacity) =>
    opacity > 0.05 ? "visible" : "hidden"
  );

  const sSecondTextTranslateY = useSpring(secondTextTranslateY, {
    damping: 60,
    stiffness: 1000,
    bounce: 0,
    mass: 1,
  });

  const [imgBottom, setImgBottom] = useState(0);
  useEffect(() => {
    setImgBottom(calculateBottom(height));
  }, [height]);

  return (
    <div className="flex flex-col w-full h-full " ref={scrollContainerRef}>
      <div style={{ height: 2000 * heightRatio }}>
        <motion.div className="sticky top-16 flex justify-center">
          <Scene key={`${width}-${height}`} scrollYProgress={scrollYProgress} />
          {imgBottom !== -1 && (
            <motion.div
              style={{
                opacity: imageOpacity,
                scale: imageOpacity,
                translateY: imageTranslateY,
                translateX: "-160px",
                bottom: imgBottom,
              }}
              className="absolute left-1/2 "
            >
              <Image
                src={logoImg}
                alt="Kylix"
                height={320}
                priority
                sizes="(min-width: 700px) 320px, 160px"
              />
            </motion.div>
          )}
          {/* FIRST Text START */}
          <motion.div
            style={{
              opacity: firstTextOpacity,
              visibility: firstTextVisibility,
              translateY: firstTextTranslateY,
            }}
            className="absolute top-[20%] flex flex-col gap-2 justify-center items-center z-50"
          >
            <h1 className={heroTitleClassName}>
              <span className="text-primary-500">{heroCopy.titleLead}</span>
              <span className="text-white">{heroCopy.titleRest}</span>
            </h1>
            <p className={heroIntroClassName}>{heroCopy.intro}</p>
            <div className="z-50 flex gap-4">
              <Button href={heroCopy.primary.href} color="secondary">
                {heroCopy.primary.label}
              </Button>
              <Button
                href={heroCopy.secondary.href}
                color="white"
                variant="outline"
              >
                {heroCopy.secondary.label}
              </Button>
            </div>
          </motion.div>
          {/* FIRST Text END */}

          {/* ---------------------- */}

          {/* SECOND Text START */}
          <motion.div
            style={{
              opacity: secondTextOpacity,
              visibility: secondTextVisibility,
              translateY: sSecondTextTranslateY,
            }}
            className="absolute top-[35%] flex flex-col gap-2 justify-center items-center z-40"
          >
            <h2 className={heroTitleClassName}>
              <span className="text-primary-500">{heroCopy.secondLead}</span>
              <span className="text-white">{heroCopy.secondRest}</span>
            </h2>
            <p className={heroIntroClassName}>{heroCopy.secondIntro}</p>
            <div className="z-50 flex gap-4">
              <Button href={heroCopy.secondCta.href} color="secondary">
                {heroCopy.secondCta.label}
              </Button>
            </div>
          </motion.div>
          {/* SECOND Text END */}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero3D;
