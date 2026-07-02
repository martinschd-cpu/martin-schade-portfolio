---
name: Contact form email delivery
description: How the portfolio's contact form sends email, which provider is used, and why.
---

The portfolio contact form (artifacts/portfolio, section id="kontakt") submits to `POST /api/contact` on the api-server artifact, which sends the message as an email via the Gmail connector (Replit integration, connector id `google-mail`) to `martin.schd@gmail.com`, with `Reply-To` set to the submitter's email address.

**Why Gmail (not Resend/SMTP):** user was offered Resend, IONOS SMTP, and Gmail. Resend integration auth was dismissed by the user; user explicitly chose to connect Gmail via Replit integration instead of entering IONOS SMTP credentials manually.

**How to apply:** If asked to change the recipient address, add a second delivery channel, or debug "contact form isn't arriving", start at `artifacts/api-server/src/routes/contact.ts` and `artifacts/api-server/src/lib/gmail.ts`. The Gmail send uses the `@replit/connectors-sdk` proxy pattern — tokens are handled automatically, never cache the connectors client across requests longer than necessary.
