/* eslint-disable @cspell/spellchecker */
import { FAQSectionProps } from "~/app/faq/_parts/Section";

export const faqData: FAQSectionProps[] = [
  {
    heading: "Basics",
    data: [
      {
        title: "What is Kylix?",
        description:
          "Kylix Finance is a lending protocol built natively on Polkadot Hub, designed to manage over-collateralized loans with best-in-class capital efficiency.\n\nKylix combines self-repaying loans, a polynomial interest rate model, and a queue-based liquidation marketplace to maximize returns for lenders and minimize risk for the protocol. Everything is recorded natively on Polkadot Hub.",
      },
      {
        title: "Why build on Polkadot Hub?",
        description:
          "Polkadot Hub gives Kylix a secure, scalable foundation with native smart contract support, without the operational overhead of running and securing a separate chain.\n\nBuilding natively on Polkadot Hub lets Kylix focus entirely on capital efficiency and risk management, instead of on cross-chain infrastructure.",
      },
      {
        title: "Which problems are you trying to solve?",
        description:
          "The fundamental problem in today's DeFi lending ecosystem isn't the lack of protocols—it's the absence of capital efficiency and intelligent risk management. Users typically face static interest rate models, idle collateral, and inefficient liquidation processes that destroy value.\n\nDeFi lending platforms also face challenges like inefficient collateral liquidation systems and a lack of incentive mechanisms to bootstrap and maintain stable liquidity.",
      },
    ],
  },
  {
    heading: "The Protocol",
    data: [
      {
        title: "Which assets are supported by Kylix?",
        description:
          "Kylix initially supports DOT, USDC and USDT natively on Polkadot Hub (asset list to be confirmed before launch). The selection of supported assets is based on business decision, oracle availability and market preference.",
      },
      {
        title: "How are liquidations executed?",
        description:
          "The Kylix marketplace uses a queue-based system to handle liquidations. Assets are made available for purchase by community members through a bidding process, starting with the smallest discount. If bid liquidity is insufficient, Kylix executes asset swaps over multiple paths through partnerships with external market makers.",
      },
      {
        title: "What are self-repaying loans, and how do they benefit users?",
        description:
          "Self-repaying loans are a specialized financial instrument where deposited collateral is converted into an interest-bearing asset that generates income automatically used to cover the debt. This structure allows borrowers to leverage assets supported by liquid staking platforms to hold a loan with negative interest rates.",
      },
      {
        title: "What exactly are polynomial interest rates, and why used?",
        description:
          "Kylix Finance has implemented an innovative interest rate model for its lending pools, designed to incentivize liquidity providers even when market utilization rates are low.",
      },
      {
        title: "How is Kylix legally incorporated?",
        description:
          "Kylix Finance is registered as a Foundation to fulfill regulations, with the name Kylix Labs LLC, in Saint Vincent and the Grenadines. This legal configuration allows us to issue the Kylix native utility token.",
      },
      {
        title: "Will Kylix be audited before launch?",
        description:
          "Yes, it will be audited and reviewed by several audit companies, including PAL (Polkadot Assurance Legion), and leverage the security benefits of the vCISO initiative. Kylix will only be released after rigorous auditing and private testing.",
      },
      {
        title: "Will a new token be issued for Kylix?",
        description:
          "The development team will issue a new utility token called $KLX, with an initial market cap of 1B and a perpetual inflation mode of 5% PA. Please refer to the tokenomics outlined in the Kylix whitepaper.",
      },
      {
        title: "What’s the reason for the native KLX token?",
        description:
          "KLX is a utility token that secures the protocol. Validators need KLX to validate and are rewarded in KLX. Borrowing and liquidation on the platform result in automatic fee collection by the Kylix treasury, which is used to reward validators and burn tokens, creating deflationary pressure.",
      },
      {
        title: "How do users get the token to use the network?",
        description:
          "Participants in the Polimec Round can acquire KLX tokens through a private sale. The network also provides a public faucet offering minimal KLX tokens to cover transaction fees.",
      },
      {
        title: "Can I contact you?",
        description:
          "Feel free to write an email to info@kylix.finance, follow us on our X space x.com/KylixFinance, or join our Discord server at https://discord.gg/UkRcWaTh5p.",
      },
    ],
  },
];
