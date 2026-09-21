import { ReactElement } from "react";
import type { Metadata } from "next";
import Button from "~/components/Button";

export const metadata: Metadata = {
  title: "Page not found",
  description: "That address is not a page on the Kylix site.",
};

export default function NotFound(): ReactElement {
  return (
    <div className="flex min-h-[70dvh] w-full flex-col items-center justify-center gap-6 px-6 text-center">
      <h1 className="text-balance font-heading text-4xl text-white sm:text-5xl">
        This page is not here
      </h1>
      <p className="max-w-md text-pretty text-secondary-100">
        The address does not match a page on this site. The protocol notes and
        the email list are on the home page.
      </p>
      <Button href="/" color="secondary">
        Back to home
      </Button>
    </div>
  );
}
