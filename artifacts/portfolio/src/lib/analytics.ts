const GA_MEASUREMENT_ID = "G-6SHQLNFE56";
const GA_SCRIPT_ID = "ga4-script";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Dynamically injects the gtag.js script and initializes GA4.
 * Must only be called after the user has given cookie consent
 * (either just now via the CookieBanner, or previously via localStorage).
 * Safe to call multiple times — it no-ops if already loaded.
 */
export function loadGoogleAnalytics(): void {
  if (typeof document === "undefined") return;
  if (document.getElementById(GA_SCRIPT_ID)) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  };

  const script = document.createElement("script");
  script.id = GA_SCRIPT_ID;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID);
}
