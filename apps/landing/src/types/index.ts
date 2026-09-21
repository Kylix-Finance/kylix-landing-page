import { ComponentType, SVGProps } from "react";
import { StaticImageData } from "next/image";
export interface Section<T> {
  id: string;
  heading: {
    left?: string;
    right?: string;
  };
  header?: string;
  description?: string;
  items: T[];
}

export type SmartLending = {
  to: string;
  description: string;
  heading: string;
};
export type Icon = ComponentType<SVGProps<SVGSVGElement>>;
export type HowItsWork = {
  id: string;
  heading: string;
  description: string;
  image?: Icon;
};

export type Security = {
  heading: string;
  description: string;
  icon: Icon;
};

export type MarketTrendItem = {
  title: string;
  description: string;
};

export type MarketTrend = {
  id: number;
  label: string;
  image: string;
  imageAlt: string;
  imageNote?: string;
  items: MarketTrendItem[];
  actions?: {
    primary?: {
      label: string;
      action: () => void;
    };
    secondary?: {
      label: string;
      action: () => void;
    };
  };
};

export type Asset = {
  src: string;
  symbol: string;
  isLaunched: boolean;
};

export type SocialMedia = {
  name: string;
  link: string;
  icon: Icon;
};

export type FeaturedPartners = {
  link: string;
  name: string;
  logo: StaticImageData;
};
export type FooterItem = {
  title: string;
  items: {
    label: string;
    link: string;
  }[];
};

export type NavItem = {
  label: string;
  link: string;
};
export interface Footer {
  left: SocialMedia[];
  right: FooterItem[];
}
