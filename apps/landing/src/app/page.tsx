import HeroWrapper from "./_parts/Hero/HeroWrapper";

import SmartLending from "./_parts/SmartLending";
import MarketTrends from "./_parts/MarketTrends";
import SupportedAssetsAndAPY from "./_parts/SupportedAssetsAndAPY";
import HowItWorks from "./_parts/HowItWorks";
import SecurityAndAudits from "./_parts/SecurityAndAudits";
import FeaturedPartners from "./_parts/FeaturedPartners";
import { mergeMetadata } from "@repo/shared";
import { Metadata } from "next";
import WaitingList from "./_parts/WaitingList";

export const metadata: Metadata = mergeMetadata(
  {
    title: "Native Lending for Polkadot Hub",
    description:
      "Kylix is a lending protocol built natively on Polkadot Hub, managing over-collateralized loans with best-in-class capital efficiency.",
  },
  "Kylix Finance"
);

export default function page() {
  return (
    <div className="flex flex-col items-center">
      <HeroWrapper />
      <FeaturedPartners />
      <SmartLending />
      <MarketTrends />
      <SupportedAssetsAndAPY />
      <HowItWorks />
      <SecurityAndAudits />
      <WaitingList />
    </div>
  );
}
