import { waitingListSectionId } from "./ids";
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
import { BorrowImage, Check, Focus, Shield } from "~/assets/svgs";
import {
  decentralizedFuturesLogo,
  harbourIndustrialCapitalLogo,
  hercleLogo,
} from "~/assets/images";

export const smartLendingData: Section<SmartLending> = {
  id: "smart-lending",
  header: "Protocol",
  heading: {
    left: "One book",
    right: "on Polkadot Hub",
  },
  description:
    "Supply, borrow and liquidation are written to one Hub state. There is no bridge receipt and no wrapped stand-in.",
  items: [
    {
      to: "/#how-it-works",
      heading: "Capital at work",
      description:
        "Collateral does not sit still. A self-repaying loan moves it into a yield-bearing position and uses that yield to pay the debt down.",
    },
    {
      to: "/#markets-trends",
      heading: "One state",
      description:
        "The protocol state lives in Polkadot Hub storage. A position updates there, so there is no second chain to wait on.",
    },
  ],
};

// USDT stays off this list until an icon exists and the market is confirmed.
export const supportedAssetsData: Section<Asset> = {
  header: "Assets",
  heading: { left: "Launch", right: "markets" },
  description:
    "DOT and USDC first. A further asset is added only after an oracle and a listing decision. USDT is not listed yet.",
  id: "supported-assets-and-apy",
  items: [
    {
      src: "/assets/images/assets/dot.png",
      symbol: "DOT",
      isLaunched: true,
    },
    {
      src: "/assets/images/assets/usdc.png",
      symbol: "USDC",
      isLaunched: true,
    },
  ],
};

export const howItsWorksData: Section<HowItsWork> = {
  header: "Why Kylix",
  heading: {
    left: "Three",
    right: "roles",
  },
  description:
    "One pool. Lenders, borrowers and liquidators use it differently.",
  id: "how-it-works",
  items: [
    {
      id: "deposit",
      heading: "Supply",
      description:
        "Deposit DOT or USDC and earn the pool rate. You can withdraw only what the pool still has available.",
    },
    {
      id: "convert",
      heading: "Borrow",
      description:
        "Post collateral, draw the loan and repay on Hub. The position has to stay over-collateralized.",
    },
    {
      id: "borrow",
      heading: "Liquidate",
      description:
        "Past the threshold, collateral is sold through a queue. Bids fill from the smallest discount. If the queue cannot cover the debt, the rest is swapped with an external market maker.",
      image: BorrowImage,
    },
  ],
};

export const securityAndAuditsData: Section<Security> = {
  header: "Roadmap",
  heading: {
    left: "Before",
    right: "mainnet",
  },
  description:
    "Each step finishes before the next one gets a public date. There is no launch date yet.",
  id: "security-and-audits",
  items: [
    {
      heading: "In build",
      description:
        "The pool, the rate curve and the liquidation queue are in development and internal testing. A position that would break the collateral rules is rejected.",
      icon: Shield,
    },
    {
      heading: "Audit, then beta",
      description:
        "A private beta starts after an external review. The plan includes Polkadot Assurance Legion and the vCISO programme. Reports are published when they exist.",
      icon: Focus,
    },
    {
      heading: "Testnet, then mainnet",
      description:
        "Private beta, then a public testnet, then mainnet. The list at the bottom of this page is how you hear the date.",
      icon: Check,
    },
  ],
};

export const marketTrendsData: Section<MarketTrend> = {
  header: "Mechanics",
  heading: {
    left: "What is",
    right: "different",
  },
  description: "Three parts of the protocol, not a longer feature list.",
  id: "markets-trends",
  items: [
    {
      id: 0,
      label: "Lending",
      image: "/assets/images/market-trends/0.png",
      imageAlt:
        "Sample Kylix dashboard with made-up totals for value locked, price and treasury. Not live data.",
      imageNote: "Sample screen. These figures are not live.",
      items: [
        {
          title: "Hub assets, not wrapped ones",
          description:
            "DOT and USDC stay Polkadot Hub assets. Kylix does not wrap them and does not ask you to bridge in.",
        },
        {
          title: "A rate that pays before the pool is full",
          description:
            "Many curves stay near zero until utilization is high, so lenders leave. The polynomial curve pays earlier, then rises faster as the pool fills.",
        },
        {
          title: "A queue, not a dump",
          description:
            "Liquidated collateral is offered to bidders. The smallest discount fills first. Whatever the queue cannot cover is swapped with an external market maker.",
        },
      ],
    },
  ],
};

export const featuredPartnersData: Section<FeaturedPartners> = {
  header: "Backers",
  id: "featured-partners",
  heading: {
    left: "Supported by",
  },
  items: [
    {
      link: "https://wiki.polkadot.com/learn/decentralized-futures/",
      name: "Decentralized Futures",
      logo: decentralizedFuturesLogo,
    },
    {
      link: "https://hercle.com/",
      name: "Hercle",
      logo: hercleLogo,
    },
    {
      link: "https://www.harbourindustrial.com/",
      name: "Harbour Industrial Capital",
      logo: harbourIndustrialCapitalLogo,
    },
  ],
};

export const navItems: NavItem[] = [
  {
    label: smartLendingData.header ?? "Protocol",
    link: `/#${smartLendingData.id}`,
  },
  {
    label: marketTrendsData.header ?? "Mechanics",
    link: `/#${marketTrendsData.id}`,
  },
  {
    label: supportedAssetsData.header ?? "Assets",
    link: `/#${supportedAssetsData.id}`,
  },
  {
    label: howItsWorksData.header ?? "Why Kylix",
    link: `/#${howItsWorksData.id}`,
  },
  {
    label: securityAndAuditsData.header ?? "Roadmap",
    link: `/#${securityAndAuditsData.id}`,
  },
  {
    label: "Join",
    link: `/#${waitingListSectionId}`,
  },
];
