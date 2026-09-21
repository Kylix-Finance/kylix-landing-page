import { ReactElement } from "react";
import Image from "next/image";
import { logoImg } from "~/assets/images";
import Button from "~/components/Button";
import { heroCopy, heroIntroClassName, heroTitleClassName } from "./heroCopy";

// Where Hero3D will replace this intro (>=700x600, motion allowed), reserve its
// 2000/600 x 100vh scroll height and pin the copy, so the swap causes no layout shift.
export default function HeroIntro(): ReactElement {
  return (
    <div className="w-full motion-safe:[@media(min-width:700px)_and_(min-height:600px)]:h-[333.333vh]">
      <section className="sticky top-0 flex min-h-[100dvh] w-full flex-col items-center justify-center overflow-x-clip px-6 pb-16 pt-28 motion-safe:[@media(min-width:700px)_and_(min-height:600px)]:justify-start motion-safe:[@media(min-width:700px)_and_(min-height:600px)]:pt-[calc(4rem+20vh)]">
        <div className="z-10 flex w-full max-w-3xl flex-col items-center gap-6 text-center">
          <h1 className={heroTitleClassName}>
            <span className="text-primary-500">{heroCopy.titleLead}</span>
            <span className="text-white">{heroCopy.titleRest}</span>
          </h1>
          <p className={heroIntroClassName}>{heroCopy.intro}</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href={heroCopy.primary.href} color="secondary">
              {heroCopy.primary.label}
            </Button>
            <Button
              href={heroCopy.secondary.href}
              color="white"
              variant="outline"
            >
              {heroCopy.secondary.label}
            </Button>
          </div>
        </div>
        <Image
          src={logoImg}
          alt="Kylix"
          priority
          sizes="(min-width: 700px) 320px, 160px"
          className="mt-10 h-auto w-40 md:w-52"
        />
      </section>
    </div>
  );
}
