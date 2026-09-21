import { fonts } from "~/assets/fonts";
import "./globals.css";
import { mergeMetadata } from "@repo/shared";
import { Metadata } from "next";
import Footer from "~/components/Footer";
import BackGround from "~/components/BackGround";
import Header from "~/components/Header";
export const metadata: Metadata = mergeMetadata(
  {
    title: {
      default: "Kylix Finance",
      template: "%s | Kylix Finance",
    },
    description:
      "Over-collateralized lending on Polkadot Hub. Supply, borrow, or liquidate DOT and USDC.",
    twitter: {
      site: "@kylixfinance",
    },
  },
  "Kylix Finance"
);
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fonts.migha.variable} ${fonts.body.variable}`}
    >
      <body className="font-body relative flex h-full w-full flex-col bg-secondary-500 antialiased">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-primary-500 focus:px-4 focus:py-2 focus:font-medium focus:text-secondary-500"
        >
          Skip to content
        </a>
        <BackGround />
        <Header />
        <main id="content" className="flex w-full flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
