// Shared by the intro placeholder and the 3D hero so the copy does not shift when the 3D loads.
// The dark text-shadow keeps the copy legible where it crosses the jar's glowing rim.
export const heroTitleClassName =
  "flex w-full flex-col items-center justify-center gap-2.5 text-balance text-center font-heading text-4xl font-bold tracking-[0.02em] [text-shadow:0_2px_24px_rgb(3_4_4/0.9)] sm:flex-row md:text-5xl lg:text-6xl";

export const heroIntroClassName =
  "w-full max-w-xl text-pretty text-center text-sm font-normal leading-6 text-secondary-100 [text-shadow:0_1px_16px_rgb(3_4_4/0.95)] md:text-base";

export const heroCopy = {
  titleLead: "The new DeFi",
  titleRest: "on Polkadot Hub",
  intro:
    "Supply DOT or USDC, borrow against collateral, or bid for liquidated collateral. One Hub state. No wrapped asset.",
  primary: { label: "Join the list", href: "#waiting-list" },
  secondary: { label: "How it works", href: "#how-it-works" },
  secondLead: "Collateral that",
  secondRest: "pays the debt",
  secondIntro:
    "A self-repaying loan puts collateral into a yield-bearing position and uses that yield to pay the loan down.",
  secondCta: { label: "See the mechanism", href: "#markets-trends" },
} as const;
