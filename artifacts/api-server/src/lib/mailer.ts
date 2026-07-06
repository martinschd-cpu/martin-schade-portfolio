// SMTP mailer (nodemailer) — sends contact form emails via any SMTP provider.
// Required env: SMTP_HOST, SMTP_USER, SMTP_PASS. Optional: SMTP_PORT (default 587), SMTP_FROM (default SMTP_USER).
import nodemailer, { type Transporter } from "nodemailer";

const smtpHost = process.env["SMTP_HOST"];
const smtpPort = Number(process.env["SMTP_PORT"] ?? 587);
const smtpUser = process.env["SMTP_USER"];
const smtpPass = process.env["SMTP_PASS"];
const smtpFrom = process.env["SMTP_FROM"] ?? smtpUser;

let transporter: Transporter | undefined;

function getTransporter(): Transporter {
  if (!smtpHost || !smtpUser || !smtpPass) {
    throw new Error(
      "SMTP is not configured: SMTP_HOST, SMTP_USER and SMTP_PASS are required",
    );
  }
  transporter ??= nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: { user: smtpUser, pass: smtpPass },
  });
  return transporter;
}

export async function sendMail(params: {
  to: string;
  subject: string;
  text: string;
  replyTo?: string;
}): Promise<void> {
  await getTransporter().sendMail({
    from: smtpFrom,
    to: params.to,
    subject: params.subject,
    text: params.text,
    replyTo: params.replyTo,
  });
}
