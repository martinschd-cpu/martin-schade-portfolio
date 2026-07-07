// SMTP mailer (nodemailer) — sends contact form emails via any SMTP provider.
// Required env: SMTP_HOST, SMTP_USER, SMTP_PASS. Optional: SMTP_PORT (default 587), SMTP_FROM (default SMTP_USER).
import nodemailer, { type Transporter } from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";

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
    // Force IPv4: some container platforms (e.g. Railway) have broken IPv6
    // routing, and smtp.gmail.com's AAAA record causes ETIMEDOUT otherwise.
    // `family` is a documented nodemailer option missing from @types/nodemailer.
    family: 4,
  } as SMTPTransport.Options);
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
