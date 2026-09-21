"use client";

import { ReactElement, useState } from "react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import Section from "~/components/Section";
import { marketTrendsData } from "~/data";
import Card from "./components/Card";

export default function MarketTrends(): ReactElement {
  const [currentSlide, setCurrentSlide] = useState(
    marketTrendsData.items[0]?.id ?? 0
  );
  const hasTabs = marketTrendsData.items.length > 1;

  return (
    <Section
      heading={marketTrendsData.heading}
      description={marketTrendsData.description}
      id={marketTrendsData.id}
    >
      <div className="flex w-full flex-col gap-12 rounded-md border border-secondary-400 bg-[#DBC5F510] px-8 pb-8 pt-4">
        {hasTabs && (
          <div
            role="tablist"
            aria-label="Mechanics"
            className="hide-scrollbar flex overflow-x-auto overflow-y-hidden border-b-[3px] border-[#23262F]"
          >
            {marketTrendsData.items.map((item) => {
              const selected = currentSlide === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  id={`market-tab-${item.id}`}
                  aria-selected={selected}
                  aria-controls={`market-panel-${item.id}`}
                  onClick={() => setCurrentSlide(item.id)}
                  className={clsx(
                    "relative shrink-0 whitespace-nowrap px-4 py-2 text-sm leading-4 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500",
                    selected
                      ? "font-bold text-white"
                      : "font-normal text-secondary-100"
                  )}
                >
                  {item.label}
                  {selected && (
                    <motion.span
                      layout
                      layoutId="underline"
                      className="absolute bottom-0 left-0 h-1 w-full rounded-full bg-primary-500"
                    />
                  )}
                </button>
              );
            })}
          </div>
        )}
        <AnimatePresence mode="wait">
          <Card key={currentSlide} id={currentSlide} />
        </AnimatePresence>
      </div>
    </Section>
  );
}
