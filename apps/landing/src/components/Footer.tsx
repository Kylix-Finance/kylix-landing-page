import { ReactElement } from "react";
import Link from "next/link";
import Image from "next/image";
import { kylixCircleImg } from "~/assets/images";
import { footerData } from "~/data/footer";

function isExternal(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://");
}

export default function Footer(): ReactElement {
  const year = new Date().getFullYear();

  return (
    <footer className="relative flex w-full flex-col justify-center text-white">
      <div className="footer-top-border" />
      <div className="footer-bg h-full w-full px-5 py-12 lg:px-36">
        <div className="mb-10 flex w-full flex-col justify-between lg:flex-row">
          <div className="mb-10 flex flex-col items-center justify-center gap-7 lg:mb-0 lg:items-start">
            <Image src={kylixCircleImg} alt="" width={141} height={106} />
            <div className="flex items-center justify-center gap-3">
              {footerData.left.map(({ icon: Icon, link, name }) => (
                <Link
                  key={name}
                  href={link}
                  aria-label={name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
                >
                  <Icon width={24} height={24} aria-hidden />
                </Link>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-3">
            {footerData.right.map((column) => (
              <div
                className="flex flex-col gap-5 p-2 lg:gap-8"
                key={column.title}
              >
                <p className="text-xl font-semibold leading-8 text-white lg:text-2xl">
                  {column.title}
                </p>
                <ul className="flex flex-col gap-1.5 lg:gap-2.5">
                  {column.items.map((item) => (
                    <li key={item.link}>
                      <Link
                        href={item.link}
                        target={isExternal(item.link) ? "_blank" : undefined}
                        rel={
                          isExternal(item.link)
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="w-fit text-sm font-normal leading-8 text-secondary-100 transition-colors duration-150 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-xs font-normal leading-5 text-secondary-200 lg:text-sm">
          © {year} Kylix Finance
        </p>
      </div>
    </footer>
  );
}
