import { ReactElement } from "react";
import { mergeMetadata } from "@repo/shared";
import { Metadata } from "next";
import Hero from "./_parts/Hero/HeroWrapper";
import FeaturedPartners from "./_parts/FeaturedPartners";
import HowItWorks from "./_parts/HowItWorks";
import MarketTrends from "./_parts/MarketTrends";
import SecurityAndAudits from "./_parts/SecurityAndAudits";
import SmartLending from "./_parts/SmartLending";
import SupportedAssetsAndAPY from "./_parts/SupportedAssetsAndAPY";
import WaitingList from "./_parts/WaitingList";

export const metadata: Metadata = mergeMetadata(
  {
    title: "Lending on Polkadot Hub",
    description:
      "Supply DOT or USDC, borrow against collateral, or bid for liquidated collateral. Kylix records over-collateralized loans on Polkadot Hub.",
  },
  "Kylix Finance"
);

export default function Page(): ReactElement {
  return (
    <div className="flex w-full flex-col items-center">
      <Hero />
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
