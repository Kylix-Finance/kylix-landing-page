import { NextResponse } from "next/server";
import { isEmailAddress } from "~/utils";

const WINDOW_MS = 60_000;
const MAX_ATTEMPTS = 5;
const attempts = new Map<string, { count: number; resetAt: number }>();

type ContactError =
  | "invalid_email"
  | "already_registered"
  | "unavailable"
  | "rate_limited"
  | "failed";

function jsonError(error: ContactError, status: number): NextResponse {
  return NextResponse.json({ error }, { status });
}

function clientAddress(request: Request): string {
  const forwarded = request.headers
    .get("x-forwarded-for")
    ?.split(",")[0]
    ?.trim();
  if (forwarded) return forwarded;
  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

function isLimited(key: string): boolean {
  const now = Date.now();
  const current = attempts.get(key);
  if (!current || current.resetAt < now) {
    if (attempts.size > 1000) {
      for (const [storedKey, value] of attempts) {
        if (value.resetAt < now) attempts.delete(storedKey);
      }
    }
    attempts.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  current.count += 1;
  return current.count > MAX_ATTEMPTS;
}

function readListId(): number | null {
  const raw = process.env.WAITLIST_LIST_ID ?? "2";
  const parsed = Number(raw);
  if (!Number.isInteger(parsed) || parsed <= 0) return null;
  return parsed;
}

function errorMessage(payload: unknown): string {
  if (
    typeof payload !== "object" ||
    payload === null ||
    !("message" in payload)
  ) {
    return "";
  }
  return typeof payload.message === "string" ? payload.message : "";
}

export async function POST(request: Request): Promise<NextResponse> {
  if (isLimited(clientAddress(request))) {
    return jsonError("rate_limited", 429);
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return jsonError("invalid_email", 400);
  }

  const email =
    typeof body === "object" &&
    body !== null &&
    "email" in body &&
    typeof body.email === "string"
      ? body.email.trim()
      : "";

  if (!isEmailAddress(email)) {
    return jsonError("invalid_email", 400);
  }

  const apiKey = process.env.WAITLIST_KEY;
  const listId = readListId();
  if (!apiKey || listId === null) {
    return jsonError("unavailable", 503);
  }

  try {
    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      signal: AbortSignal.timeout(8_000),
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        email,
        listIds: [listId],
        updateEnabled: false,
      }),
    });

    if (response.ok) {
      return NextResponse.json({ ok: true }, { status: 201 });
    }

    let payload: unknown = null;
    try {
      payload = await response.json();
    } catch {
      payload = null;
    }

    if (errorMessage(payload).toLowerCase().includes("already")) {
      return jsonError("already_registered", 409);
    }

    return jsonError("failed", 502);
  } catch {
    return jsonError("failed", 502);
  }
}
