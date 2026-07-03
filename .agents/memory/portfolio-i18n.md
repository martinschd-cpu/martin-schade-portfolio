---
name: Portfolio DE/EN i18n approach
description: How language switching is implemented in artifacts/portfolio — check before adding more languages or new pages.
---

The portfolio site uses a hand-rolled i18n setup, not a library (no react-i18next/lingui). Rationale: only two languages, client-side only, no need for pluralization/ICU features.

- Dictionary: `src/lib/translations.ts` — plain object literal (not `as const`, to avoid literal-type mismatches between the `de`/`en` branches during typecheck).
- State: `src/lib/language-context.tsx` — React context, persists to `localStorage` key `portfolio_language`, falls back to `navigator.language` on first visit, sets `document.documentElement.lang` as a side effect.
- Every page component and `CookieBanner` call `useLanguage()` and read strings from `t.<page>...`; `useDocumentHead` title/description are passed from the active language's `meta` block so they update reactively.

**Why:** initial attempt with `translations = {...} as const` made TS treat the `de` and `en` string literals as distinct incompatible types on the shared `Translations` type — removing `as const` (keeping the file plain, still statically typed via inference) fixed it while keeping structural typing intact.

**How to apply:** when adding new user-facing text anywhere in the portfolio, add both `de` and `en` keys to `translations.ts` in the matching nested shape rather than hardcoding strings in components. When adding a third language, this hand-rolled context can be upgraded to a library if it gets high maintenance cost.
