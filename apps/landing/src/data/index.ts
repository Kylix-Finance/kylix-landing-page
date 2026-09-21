import {
  Asset,
  FeaturedPartners,
  HowItsWork,
  MarketTrend,
  NavItem,
  Security,
  SmartLending,
  Section,
} from "~/types";
import {
  BorrowImage,
  Check,
  Focus,
  Shield,
  DecentralizedFutures,
  HarbourIndustrialCapital,
  HercleFinancial,
  Pendulum,
  Polimec,
} from "~/assets/svgs";

export const smartLendingData: Section<SmartLending> = {
  id: "smart-lending",
  header: "Native Polkadot Hub lending",
  heading: {
    left: "One Platform.",
    right: "Natively Polkadot Hub.",
  },
  description:
    "Experience capital-efficient Lending built natively for Polkadot Hub, designed specifically to maximize capital efficiency.",
  items: [
    {
      to: "/",
      heading: "CAPITAL EFFICIENCY",
      description:
        "Kylix Finance is a decentralized, trustless lending protocol that allows users to lend, borrow and earn natively on Polkadot Hub. The Kylix protocol allows users to lend and borrow assets at extremely competitive rates using an innovative architectural tech solution.",
    },
    {
      to: "/",
      heading: "ONE-PLATFORM",
      description:
        "Kylix stores the entire state of the protocol natively on Polkadot Hub. The unified state storage ensures consistency and avoids issues related to asynchronicity and race conditions.",
    },
  ],
};

// NOTE: asset list is a placeholder — confirm final supported assets before launch.
// USDT omitted: no icon asset available yet at apps/landing/public/assets/images/assets — add it once the icon exists.
export const supportedAssetsData: Section<Asset> = {
  header: "Supported Assets",
  heading: { left: "Supported ", right: " ASSETS" },
  description: "Lend, Borrow and Earn natively on Polkadot Hub:",
  id: "supported-assets-and-apy",
  items: [
    {
      // eslint-disable-next-line @cspell/spellchecker
      src: "/assets/images/assets/polkdot.png",
      alt: "DOT",
      isLaunched: true,
    },
    {
      src: "/assets/images/assets/usdc.png",
      alt: "USDC",
      isLaunched: true,
    },
  ],
};
export const howItsWorksData: Section<HowItsWork> = {
  header: "Why Kylix?",
  heading: {
    left: "Why",
    right: "Kylix Finance?",
  },
  description: "",
  id: "how-it-works",
  items: [
    {
      id: "deposit",
      heading: "NATIVE POLKADOT HUB LENDING",
      description:
        "Deposit, lend and earn interest on your assets, natively on Polkadot Hub. Make your assets work for you!",
    },
    {
      id: "convert",
      heading: "DEPOSIT AND BORROW ",
      description:
        "Borrow, secure with collateral, and settle debts natively on Polkadot Hub.",
    },
    {
      id: "borrow",
      heading: "LIQUIDATE AND EARN",
      description:
        "Earn interest on your deposits and loans. Earn rewards for providing liquidity. Earn assets below market prices by participating in the collateral marketplace.",
      image: BorrowImage,
    },
  ],
};
export const securityAndAuditsData: Section<Security> = {
  header: "Roadmap",
  heading: {
    left: "COMING",
    right: "SOON",
  },
  description:
    "Working hard to bring you the best features, paired with top-notch security.",
  id: "security-and-audits",
  items: [
    {
      heading: "Work in progress...",
      description:
        "Building and Testing. We are committed to protocol security to avoid faulty protocol states, including always ensuring the liquidity of your assets, preventing liquidation spirals and slashing faulty oracles.",
      icon: Shield,
    },
    {
      heading: "Testnet Ready Q1 2025",
      description:
        "We will be announcing the Testnet launch date soon. Stay tuned and sign up for our newsletter to be the first to participate in our private beta testing.",
      icon: Focus,
    },
    {
      heading: "Live in Q2 2025",
      description:
        "We will go live in March 2025. We look forward to seeing you on board, and in the meantime, please follow us on our social media channels to keep up to date.",
      icon: Check,
    },
  ],
};

export const marketTrendsData: Section<MarketTrend> = {
  header: "Unique Features",
  heading: {
    left: "Unique",
    right: "Features",
  },
  description:
    "Unique and advanced lending products and services to benefit the DeFi ecosystem.",
  id: "markets-trends",
  items: [
    {
      id: 0,
      label: "A New Lending Protocol",
      image: "/assets/images/market-trends/0.png",
      items: [
        {
          title: "Built Natively for Polkadot Hub",
          description:
            "Kylix Finance is a lending protocol built natively on Polkadot Hub, with no bridging or wrapped tokens required.",
        },
        {
          title: "Power up next-generation Lending",
          description:
            "Become a liquidator with our Collateral Liquidation Marketplace, lend without risk with Self-Repaying Loans, enjoy Collateral Scoring and new Lending Pools powered by new generation interest rate formulas.",
        },
        {
          // eslint-disable-next-line @cspell/spellchecker
          title: "Autonomous Rewards and a Deflationary Tokenomic.",
          description:
            "An automated treasury that distributes rewards to incentivize lenders to provide liquidity and automatically burns the native token to apply deflationary pressure to the network as borrowing volume increases.",
        },
      ],
      // actions: {
      //   primary: {
      //     label: "Learn More",
      //     action: () => {
      //       console.log("Lending: Learn More clicked");
      //     },
      //   },
      //   secondary: {
      //     label: "Get Started",
      //     action: () => {
      //       console.log("Lending: Get Started clicked");
      //     },
      //   },
      // },
    },
  ],
};
export const featuredPartnersData: Section<FeaturedPartners> = {
  header: "Featured partners",
  id: "featured-partners",
  heading: {
    left: "Proudly Supported By",
  },
  items: [
    {
      link: "/",
      // eslint-disable-next-line @cspell/spellchecker
      name: "Decentralised Future",
      icon: DecentralizedFutures,
    },
    {
      link: "/",
      // eslint-disable-next-line @cspell/spellchecker
      name: "Hercle",
      icon: HercleFinancial,
    },
    {
      link: "/",
      name: "Harbour Industrial Capital",
      icon: HarbourIndustrialCapital,
    },
    {
      link: "/",
      name: "Pendulum",
      icon: Pendulum,
    },
    {
      link: "/",
      // eslint-disable-next-line @cspell/spellchecker
      name: "Polimec",
      icon: Polimec,
    },
    // {
    //   link: "/",
    //   name: "BlockDeep",
    //   icon: StakeHouse,
    // },
  ],
};
export const navItems: NavItem[] = [
  smartLendingData.header && {
    label: smartLendingData.header,
    link: `/#${smartLendingData.id}`,
  },
  marketTrendsData.header && {
    label: marketTrendsData.header,
    link: `/#${marketTrendsData.id}`,
  },
  supportedAssetsData.header && {
    label: supportedAssetsData.header,
    link: `/#${supportedAssetsData.id}`,
  },
  howItsWorksData.header && {
    label: howItsWorksData.header,
    link: `/#${howItsWorksData.id}`,
  },
  securityAndAuditsData.header && {
    label: securityAndAuditsData.header,
    link: `/#${securityAndAuditsData.id}`,
  },
  featuredPartnersData.header && {
    label: featuredPartnersData.header,
    link: `/#${featuredPartnersData.id}`,
  },
].filter((item): item is NavItem => !!item);
