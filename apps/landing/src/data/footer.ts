import { Discord, Telegram, Twitter } from "~/assets/svgs";
import { Footer } from "~/types";
import { getContentData } from "~/utils/mdx";

function pageLink(
  slug: string,
  fallback: string
): { label: string; link: string } {
  const page = getContentData(slug);
  const title = typeof page?.title === "string" ? page.title.trim() : "";
  return {
    label: title.length > 0 ? title : fallback,
    link: `/${slug}`,
  };
}

export const footerData: Footer = {
  left: [
    {
      name: "X",
      link: "https://x.com/kylixfinance",
      icon: Twitter,
    },
    {
      name: "Discord",
      link: "https://discord.gg/UkRcWaTh5p",
      icon: Discord,
    },
    {
      name: "Telegram",
      link: "https://t.me/kylix_finance_parachain",
      icon: Telegram,
    },
  ],
  right: [
    {
      title: "About",
      items: [pageLink("vision", "Vision"), pageLink("faq", "FAQ")],
    },
    {
      title: "Resources",
      items: [
        {
          label: "Whitepaper",
          link: "https://docsend.com/view/f7xa65w29ckkpz2j",
        },
        pageLink("privacy", "Privacy"),
      ],
    },
    {
      title: "Socials",
      items: [
        {
          label: "X",
          link: "https://x.com/kylixfinance",
        },
        {
          label: "Discord",
          link: "https://discord.gg/UkRcWaTh5p",
        },
        {
          label: "Telegram",
          link: "https://t.me/kylix_finance_parachain",
        },
      ],
    },
  ],
};
