"use client";

import { ChangeEvent, FormEvent, ReactElement, useState } from "react";
import { createContact } from "~/api/contact";
import Button from "~/components/Button";
import Section from "~/components/Section";
import { waitingListSectionId } from "~/data/ids";
import { isEmailAddress } from "~/utils";

function messageFor(code: string): string {
  switch (code) {
    case "invalid_email":
      return "Enter a valid email address.";
    case "already_registered":
      return "That email is already on the list.";
    case "rate_limited":
      return "Too many attempts. Wait a minute and try again.";
    case "unavailable":
      return "The list is closed right now.";
    default:
      return "We couldn't add you. Try again in a minute.";
  }
}

export default function WaitingList(): ReactElement {
  const [email, setEmail] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
    setError("");
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    if (isPending) return;

    const nextEmail = email.trim();
    if (!isEmailAddress(nextEmail)) {
      setError(messageFor("invalid_email"));
      setIsSuccess(false);
      return;
    }

    setIsPending(true);
    setError("");
    setIsSuccess(false);

    try {
      await createContact(nextEmail);
      setIsSuccess(true);
      setEmail("");
    } catch (err) {
      const code = err instanceof Error ? err.message : "failed";
      setError(messageFor(code));
      setIsSuccess(false);
    } finally {
      setIsPending(false);
    }
  };

  const noteId = "list-note";
  const errorId = "list-error";

  return (
    <div className="flex w-full justify-center lg:max-w-[1900px]">
      <Section
        heading={{
          left: "Join",
          right: "the list",
        }}
        contentClassName="gap-8 rounded-2xl border border-primary-900 py-9 backdrop-blur-md md:py-12 lg:py-16"
        className="mb-44"
        description="One email. We write when a testnet or mainnet date exists."
        id={waitingListSectionId}
      >
        <form
          className="flex w-full max-w-xl flex-col"
          onSubmit={onSubmit}
          noValidate
        >
          <div className="flex h-full items-center justify-center gap-2.5">
            <div className="relative h-full w-full rounded-lg">
              <label htmlFor="list-email" className="sr-only">
                Email address
              </label>
              <input
                id="list-email"
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                autoCapitalize="none"
                autoCorrect="off"
                spellCheck={false}
                required
                value={email}
                disabled={isPending}
                onChange={onChangeHandler}
                placeholder="Email address"
                aria-invalid={Boolean(error)}
                aria-describedby={error ? `${noteId} ${errorId}` : noteId}
                className="relative h-full w-full rounded-md border border-secondary-400 bg-transparent px-4 py-2 text-secondary-100 outline-hidden placeholder:text-secondary-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 disabled:opacity-60"
              />
            </div>
            <Button
              color="secondary"
              type="submit"
              disabled={isPending}
              aria-busy={isPending}
            >
              {isPending ? "Joining" : "Join"}
            </Button>
          </div>
          {error && (
            <p id={errorId} role="alert" className="mt-3 text-sm text-red-400">
              {error}
            </p>
          )}
          {isSuccess && (
            <p role="status" className="mt-3 text-sm text-primary-300">
              You are on the list. We will write when there is a date.
            </p>
          )}
          <p
            id={noteId}
            className="mt-6 text-center text-xs font-normal leading-5 tracking-wide text-secondary-200"
          >
            We use this address for launch notes. Read the{" "}
            <a
              href="/privacy"
              className="text-secondary-100 underline decoration-primary-500/50 underline-offset-4 hover:text-white"
            >
              privacy note
            </a>
            .
          </p>
        </form>
      </Section>
    </div>
  );
}
