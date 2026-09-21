"use client";

import { ReactElement, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { XIcon, Menu } from "~/assets/svgs";
import { kylixWordmarkImg } from "~/assets/images";
import Link from "next/link";
import { navItems } from "~/data";
import { useLockBodyScroll } from "~/hooks/useLockBodyScroll";

const navLinkClass =
  "rounded-xs text-sm font-medium leading-5 text-white hover:text-primary-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-500";

export default function Header(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);

  const toggleMenu = (): void => setIsOpen((prev) => !prev);
  useLockBodyScroll({ isLocked: isOpen });

  useEffect(() => {
    if (isOpen) closeRef.current?.focus();
    else if (wasOpen.current) menuRef.current?.focus();
    wasOpen.current = isOpen;
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const renderedNavItems = navItems.map(({ label, link }) => (
    <Link
      key={link}
      href={link}
      className={navLinkClass}
      onClick={() => setIsOpen(false)}
    >
      {label}
    </Link>
  ));

  return (
    <>
      <header className="fixed top-0 z-20 w-full py-4 text-white">
        <div className="mx-6 flex items-center justify-between gap-6 rounded-2xl border border-primary-900 bg-gradient-to-r from-[#11121439] to-[#0C0D0F45] px-8 py-4 backdrop-blur-3xl">
          <Link href="/" aria-label="Kylix Finance, home" className="shrink-0">
            <Image
              src={kylixWordmarkImg}
              alt=""
              width={75}
              height={30}
              priority
            />
          </Link>
          <nav
            aria-label="Primary"
            className="hidden items-center gap-8 lg:flex"
          >
            {renderedNavItems}
          </nav>
          <button
            ref={menuRef}
            type="button"
            className="rounded-md text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 lg:hidden"
            onClick={toggleMenu}
            aria-label="Open menu"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed left-0 top-0 z-30 flex h-dvh w-screen flex-col bg-secondary-900/70 text-white lg:hidden"
          >
            <div className="flex h-full w-full flex-col gap-6 bg-secondary-500 p-6">
              <div className="flex items-center justify-between">
                <Image src={kylixWordmarkImg} alt="" width={75} height={30} />
                <button
                  ref={closeRef}
                  type="button"
                  onClick={toggleMenu}
                  aria-label="Close menu"
                  className="rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
                >
                  <XIcon className="h-6 w-6" />
                </button>
              </div>
              <div className="flex flex-col gap-4">{renderedNavItems}</div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
