import { fonts } from "~/assets/fonts";
import "./globals.css";
import { mergeMetadata } from "@repo/shared";
import { Metadata } from "next";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
// import { BackGround } from "@repo/ui";

export const metadata: Metadata = mergeMetadata(
  {
    title: {
      default: "Kylix Finance",
      template: "%s | Kylix Finance",
    },
    description:
      "Kylix is a lending protocol built natively on Polkadot Hub, managing over-collateralized loans with best-in-class capital efficiency.",
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
      className={`${fonts.migha.variable} ${fonts.poppins.variable}`}
      lang="en"
    >
      <body className="font-body bg-secondary-500 relative w-full h-full flex flex-col">
        {/* <BackGround /> */}
        <Header />
        <div className="flex-1 min-h-64 pt-16 flex flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
