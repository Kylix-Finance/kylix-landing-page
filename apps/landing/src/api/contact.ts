export async function createContact(email: string): Promise<void> {
  let response: Response;
  try {
    response = await fetch("/api/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
  } catch {
    throw new Error("failed");
  }

  if (response.ok) return;

  let code = "failed";
  try {
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
  }

  throw new Error(code);
}
