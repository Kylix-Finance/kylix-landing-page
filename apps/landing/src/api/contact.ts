export async function createContact(email: string): Promise<void> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12_000);
  let code = "failed";
  try {
    const response = await fetch("/api/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
      signal: controller.signal,
    });
    if (response.ok) return;

    const data: unknown = await response.json();
    if (
      typeof data === "object" &&
      data !== null &&
      "error" in data &&
      typeof data.error === "string"
    ) {
      code = data.error;
    }
  } catch {
    code = "failed";
  } finally {
    clearTimeout(timeout);
  }

  throw new Error(code);
}
