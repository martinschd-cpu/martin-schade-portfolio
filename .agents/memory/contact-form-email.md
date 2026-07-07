---
name: Contact form email delivery
description: How the portfolio's contact form sends email, which provider is used, and why.
---

The portfolio contact form (artifacts/portfolio, section id="kontakt") submits to `POST /api/contact` on the api-server artifact, which sends the message as an email via SMTP (`nodemailer`) to the site owner's configured recipient address, with `Reply-To` set to the submitter's email address. A confirmation email is also sent back to the submitter.

**History:** originally sent via the Gmail connector (Replit integration). Replaced with a plain SMTP mailer during the 2026-07-06 Railway migration (commit `267ca7d`) because the Replit connector wasn't portable off Replit. `artifacts/api-server/src/lib/gmail.ts` was deleted; `artifacts/api-server/src/lib/mailer.ts` is now the only send path.

**Config:** required env vars are `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS`; optional `SMTP_PORT` (default 587), `SMTP_FROM` (default `SMTP_USER`), `CONTACT_RECIPIENT` (default `martin.schd@gmail.com`). If any of the three required vars is missing, `getTransporter()` throws and the route returns HTTP 502 with `"Nachricht konnte nicht gesendet werden"` — this exact symptom was diagnosed on 2026-07-07 as missing SMTP vars in Railway.

**How to apply:** If asked to change the recipient address, add a second delivery channel, or debug "contact form isn't arriving", start at `artifacts/api-server/src/routes/contact.ts` and `artifacts/api-server/src/lib/mailer.ts`. A 502 from `/api/contact` means the SMTP env vars are missing or wrong in the deploy target (Railway) — check there first, not the code.
