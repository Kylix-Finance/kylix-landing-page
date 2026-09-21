"use client";

import { ReactElement } from "react";
import Image from "next/image";
import { motion, useReducedMotion, Variants } from "framer-motion";
import Button from "~/components/Button";
import { marketTrendsData } from "~/data";

const variants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

interface Props {
  id: number;
}

export default function Card({ id }: Props): ReactElement | null {
  const reduceMotion = useReducedMotion();
  const currentSlide = marketTrendsData.items.find((item) => item.id === id);
  if (!currentSlide) return null;
  const tabbed = marketTrendsData.items.length > 1;
  const primaryAction = currentSlide.actions?.primary;
  const secondaryAction = currentSlide.actions?.secondary;

  return (
    <motion.div
      id={tabbed ? `market-panel-${currentSlide.id}` : undefined}
      role={tabbed ? "tabpanel" : undefined}
      aria-labelledby={tabbed ? `market-tab-${currentSlide.id}` : undefined}
      className="flex flex-col items-center justify-between gap-16 md:flex-row"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
      transition={{ duration: reduceMotion ? 0 : 0.3 }}
    >
      <div className="order-2 flex flex-col gap-8 md:order-1">
        <div className="flex flex-col gap-8">
          {currentSlide.items.map((item) => (
            <div className="flex flex-col gap-1" key={item.title}>
              <h3 className="text-2xl font-bold leading-8 text-white">
                {item.title}
              </h3>
              <p className="text-base font-normal leading-6 text-secondary-100">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        {(primaryAction || secondaryAction) && (
          <div className="flex items-center gap-2.5">
            {primaryAction && (
              <Button
                onClick={primaryAction.action}
                variant="primary"
                color="secondary"
              >
                {primaryAction.label}
              </Button>
            )}
            {secondaryAction && (
              <Button
                onClick={secondaryAction.action}
                variant="outline"
                color="white"
              >
                {secondaryAction.label}
              </Button>
            )}
          </div>
        )}
      </div>
      <figure className="relative order-1 w-full">
        <Image
          className="ml-auto h-auto w-full max-w-[644px]"
          width={644}
          height={384}
          src={currentSlide.image}
          alt={currentSlide.imageAlt}
        />
        {currentSlide.imageNote && (
          <figcaption className="mt-3 text-right text-xs text-secondary-200">
            {currentSlide.imageNote}
          </figcaption>
        )}
      </figure>
    </motion.div>
  );
}
