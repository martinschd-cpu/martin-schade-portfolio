---
name: Portfolio positioning (since 2026-10)
description: Why the site is a portfolio, not a job/mandate search page — check before changing copy, SEO or the contact form.
---

In Oct 2026 Martin took a permanent job, so the site was repositioned from "Interim Head of Product" (mandate search) to a portfolio: product leader for B2B platforms, marketplaces and AI, open for talks, podcasts and mentoring.

- **Employer stays neutral:** the new employer/role is deliberately not mentioned anywhere (hero, track record, meta).
- **Unpaid but open to paid:** offering is free exchange/visibility; wording leaves room for paid keynotes/workshops/mentoring ("finden wir einen passenden Rahmen"). Don't reintroduce interim/freelance mandate language.
- **Audience:** founders, event organizers/podcast hosts, product managers.
- **Tone:** "Du" across the home page, form, toasts, cookie banner and the confirmation email; legal pages (Impressum, Datenschutz) stay formal "Sie".
- **Hero slides = Martin's four core theses** (data provenance for AI, 5→50 customers, stakeholder management over requirement specs, willingness to pay). They are his own statements — don't reword without asking.
- **Impressum:** Martin has a registered Gewerbe (not freier Beruf), cites § 5 DDG; no USt-IdNr. listed (not confirmed yet).
- **Beiträge section:** `translations.ts` → `home.beitraege.items` (title/teaser/url per LinkedIn post, both languages). Cards render only when the array is non-empty; the LinkedIn button always shows. Own articles may be added later.
- `public/opengraph.jpg` is a 1200×630 screenshot of the DE hero — regenerate it when the hero copy changes.
