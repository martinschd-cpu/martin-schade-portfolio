// Gmail integration (connector: google-mail) — sends contact form emails via the Gmail API proxy.
import { ReplitConnectors } from "@replit/connectors-sdk";

const connectors = new ReplitConnectors();

function encodeEmail(params: {
  to: string;
  from: string;
  subject: string;
  text: string;
  replyTo?: string;
}): string {
  const lines = [
    `To: ${params.to}`,
    `From: ${params.from}`,
    params.replyTo ? `Reply-To: ${params.replyTo}` : undefined,
    `Subject: =?UTF-8?B?${Buffer.from(params.subject, "utf-8").toString("base64")}?=`,
    "MIME-Version: 1.0",
    "Content-Type: text/plain; charset=UTF-8",
    "",
    params.text,
  ].filter((line): line is string => line !== undefined);

  const raw = lines.join("\r\n");

  return Buffer.from(raw, "utf-8")
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

export async function sendGmailMessage(params: {
  to: string;
  from: string;
  subject: string;
  text: string;
  replyTo?: string;
}): Promise<void> {
  const raw = encodeEmail(params);

  const response = await connectors.proxy(
    "google-mail",
    "/gmail/v1/users/me/messages/send",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ raw }),
    },
  );

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new Error(
      `Gmail send failed with status ${response.status}: ${body}`,
    );
  }
}
