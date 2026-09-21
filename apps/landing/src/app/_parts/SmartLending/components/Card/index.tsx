import Link from "next/link";
import { ArrowRight } from "~/assets/svgs";
import { SmartLending } from "~/types";

const Card = ({ to, description, heading }: SmartLending) => {
  return (
    <Link
      href={to}
      className="h-72 w-full rounded-3xl bg-gradient-to-br from-white/20 via-transparent p-0.5 transition-colors duration-200 hover:from-primary-500/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-500 lg:h-[411px]"
    >
      <div className="relative w-full h-full rounded-3xl p-7 overflow-hidden bg-secondary-500">
        <div
          className="absolute inset-0 rounded-3xl"
          style={{
            background: `radial-gradient(circle at bottom, #56DDB490 0%, rgba(17, 23, 61, 0) 70%)`,
          }}
        />
        <div
          className="absolute inset-0 rounded-3xl"
          style={{
            background: `radial-gradient(circle at bottom right, #56DDB490 0%, rgba(17, 23, 61, 0) 70%)`,
          }}
        />

        <div className="flex flex-col justify-between text-white w-full h-full relative z-10">
          <p className="text-sm lg:text-base font-light leading-6">
            {description}
          </p>
          <div className="flex justify-between items-center">
            <h3 className="font-heading text-3xl leading-tight md:text-4xl md:font-bold lg:text-5xl">
              {heading}
            </h3>
            <ArrowRight />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
