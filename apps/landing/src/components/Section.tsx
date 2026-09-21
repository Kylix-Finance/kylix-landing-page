import { ComponentProps, ReactElement, ReactNode } from "react";
import { cn } from "~/utils";

interface Props extends Omit<ComponentProps<"section">, "children"> {
  children: ReactNode;
  heading?: {
    right?: string;
    left?: string;
  };
  description?: string;
  contentClassName?: string;
}

export default function Section({
  children,
  description,
  heading,
  contentClassName,
  className,
  ...rest
}: Props): ReactElement {
  return (
    <section
      {...rest}
      className={cn(
        "relative h-full w-full scroll-mt-32 lg:max-w-[1900px]",
        className
      )}
    >
      <div
        className={cn(
          "relative z-[1] flex h-full w-full flex-col items-center justify-center gap-24 px-8 py-10 md:px-16 md:py-20 lg:px-32 lg:py-44",
          contentClassName
        )}
      >
        <div className="flex h-full w-full flex-col items-center justify-center gap-4">
          {heading && (heading.left || heading.right) && (
            <h2 className="flex w-full flex-col items-center justify-center gap-2.5 text-balance text-center font-heading text-4xl font-bold sm:flex-row md:text-5xl lg:text-6xl">
              {heading.left && (
                <span className="text-primary-500">{heading.left}</span>
              )}
              {heading.right && (
                <span className="text-white">{heading.right}</span>
              )}
            </h2>
          )}
          {description && (
            <p className="max-w-2xl text-pretty text-center text-sm font-normal leading-6 text-secondary-100 md:text-base">
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
