---
name: Contact form email delivery
description: How the portfolio's contact form sends email, which provider is used, and why.
---

The portfolio contact form (artifacts/portfolio, section id="kontakt") submits to `POST /api/contact` on the api-server artifact, which sends the message as an email via SMTP (`nodemailer`) to the site owner's configured recipient address, with `Reply-To` set to the submitter's email address. A confirmation email is also sent back to the submitter. **Working in production as of 2026-07-08.**

**History:** originally sent via the Gmail connector (Replit integration). Replaced with a plain SMTP mailer during the 2026-07-06 Railway migration (commit `267ca7d`) because the Replit connector wasn't portable off Replit. `artifacts/api-server/src/lib/gmail.ts` was deleted; `artifacts/api-server/src/lib/mailer.ts` is now the only send path. `family: 4` was added to the transport options (commit `aa2e80e`, 2026-07-08) to force IPv4 — kept as a harmless safeguard, though it turned out not to be the actual fix (see below).

**Config:** required env vars are `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS`; optional `SMTP_PORT` (default 587), `SMTP_FROM` (default `SMTP_USER`), `CONTACT_RECIPIENT`. **Production values (2026-07-08):** `SMTP_HOST=smtp.gmail.com`, `SMTP_USER=ms@martin-schade.de` (a Google Workspace mailbox, not IONOS — smtp.gmail.com is correct for Workspace too), `SMTP_PASS` = a Gmail App Password generated from *that* Google account (myaccount.google.com/apppasswords, logged in as ms@martin-schade.de), `CONTACT_RECIPIENT=ms@martin-schade.de`.

**Debugging history (2026-07-08), full chain of root causes found in order:**
1. `SMTP is not configured` 502 — SMTP_PASS wasn't set in Railway at all yet.
2. `ETIMEDOUT`/`Connection timeout` on connect, even with valid Gmail SMTP env vars — **Railway's Hobby plan blocks all outbound SMTP ports (25/465/587)** at the network level to protect its IP reputation (confirmed via Railway's community forum). A Resend/HTTPS-API rewrite was drafted as a workaround, then explicitly reverted per user decision. **The actual fix was upgrading the Railway plan** (Pro+), which unblocks outbound SMTP — don't reintroduce Resend/any HTTP email API here unless asked again.
3. After the plan upgrade, connection succeeded but auth failed: `535-5.7.8 Username and Password not accepted (BadCredentials)` — the Gmail App Password in `SMTP_PASS` was stale/wrong.
4. Root cause of the credential mismatch: **Railway dashboard variable edits require clicking the confirm checkmark on the field AND the top-level "Deploy" button** — typing a new value into the field alone does not save or apply it. This bit twice in this session (once for the initial SMTP_PASS, once for a SMTP_USER rename). Always verify with `railway variables` (via CLI, from the linked project directory) that a value actually changed before assuming a fix landed.
5. Also swapped `SMTP_USER` from `martin.schd@gmail.com` to `ms@martin-schade.de` (the intended production sender/recipient identity) — this requires the App Password to be generated from the `ms@martin-schade.de` Google account specifically, not from `martin.schd@gmail.com`.

**How to apply:** If asked to change the recipient address, add a second delivery channel, or debug "contact form isn't arriving", start at `artifacts/api-server/src/routes/contact.ts` and `artifacts/api-server/src/lib/mailer.ts`. A 502 with `"SMTP is not configured..."` means env vars are missing; `ETIMEDOUT` means check the Railway plan tier; `BadCredentials`/535 means the App Password doesn't match `SMTP_USER`'s Google account, or a Railway dashboard edit wasn't actually saved/deployed — verify with `railway variables` before re-diagnosing the code.
