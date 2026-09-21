import { ReactElement } from "react";
import Image from "next/image";
import { featuredPartnersData } from "~/data";

export default function FeaturedPartners(): ReactElement {
  return (
    <section
      id={featuredPartnersData.id}
      aria-labelledby="backers-heading"
      className="relative z-10 flex w-full scroll-mt-32 flex-col items-center justify-center gap-10 lg:max-w-[1900px]"
    >
      <h2
        id="backers-heading"
        className="text-xl font-bold text-white lg:text-3xl"
      >
        {featuredPartnersData.heading.left}
      </h2>
      <ul className="flex w-full flex-wrap items-center justify-center gap-x-16 gap-y-10 px-6">
        {featuredPartnersData.items.map(({ logo, link, name }) => (
          <li key={name}>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-24 w-32 flex-col items-center justify-center gap-3 rounded-md opacity-80 transition-opacity duration-200 hover:opacity-100 focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-500 lg:h-32 lg:w-36"
            >
              <Image
                src={logo}
                alt=""
                sizes="64px"
                className="h-10 w-auto lg:h-12"
              />
              <p className="text-center text-sm font-medium leading-5 text-white lg:text-base">
                {name}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
