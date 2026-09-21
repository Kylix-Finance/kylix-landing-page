import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { ComponentPropsWithoutRef, ReactElement, ReactNode } from "react";

type Variant = "primary" | "outline";
type Tone = "primary" | "secondary" | "white";

type CommonProps = {
  variant?: Variant;
  color?: Tone;
  className?: string;
  children: ReactNode;
};

type ButtonProps = CommonProps &
  Omit<
    ComponentPropsWithoutRef<"button">,
    "color" | "className" | "children"
  > & {
    href?: undefined;
  };

type AnchorProps = CommonProps &
  Omit<ComponentPropsWithoutRef<"a">, "color" | "className" | "children"> & {
    href: string;
  };

type Props = ButtonProps | AnchorProps;

function buttonClassName(
  variant: Variant,
  color: Tone,
  className?: string
): string {
  const textColor: Record<Tone, string> = {
    primary: "text-secondary-500",
    secondary: "text-secondary-500",
    white: "text-white",
  };

  const byVariant: Record<Variant, string> = {
    primary: `bg-primary-500 hover:bg-primary-400 ${textColor[color]}`,
    outline: `border border-secondary-300 bg-transparent hover:bg-white/10 ${textColor[color]}`,
  };

  return twMerge(
    clsx(
      "inline-flex items-center justify-center rounded-lg px-4 py-2 font-medium transition-colors duration-200",
      "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500",
      "active:translate-y-px disabled:cursor-not-allowed disabled:opacity-60",
      byVariant[variant]
    ),
    className
  );
}

function isLink(props: Props): props is AnchorProps {
  return typeof props.href === "string";
}

export default function Button(props: Props): ReactElement {
  const variant = props.variant ?? "primary";
  const color = props.color ?? "secondary";
  const className = buttonClassName(variant, color, props.className);

  if (isLink(props)) {
    const {
      href,
      children,
      variant: _variant,
      color: _color,
      className: _className,
      ...rest
    } = props;
    const external = /^https?:\/\//.test(href);

    return (
      <a
        href={href}
        className={className}
        {...rest}
        {...(external
          ? {
              target: rest.target ?? "_blank",
              rel: rest.rel ?? "noopener noreferrer",
            }
          : {})}
      >
        {children}
      </a>
    );
  }

  const {
    children,
    variant: _variant,
    color: _color,
    className: _className,
    href: _href,
    type,
    ...rest
  } = props;

  return (
    <button type={type ?? "button"} className={className} {...rest}>
      {children}
    </button>
  );
}
