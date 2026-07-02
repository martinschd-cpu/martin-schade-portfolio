import { useState, useEffect } from "react";
import { Link } from "wouter";

const COOKIE_KEY = "cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem(COOKIE_KEY, "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0a1222] border-t border-[#ffffff22] px-6 py-5 shadow-2xl">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-[#B8C2D4] flex-1 leading-relaxed">
          Diese Website verwendet technisch notwendige Cookies, um den Betrieb sicherzustellen.
          Weitere Informationen finden Sie in unserer{" "}
          <Link href="/datenschutz" className="text-[#60A5FA] hover:underline">
            Datenschutzerklärung
          </Link>
          .
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="px-5 py-2 text-sm font-medium border border-[#ffffff33] text-[#B8C2D4] hover:border-[#60A5FA] hover:text-white transition-colors"
          >
            Ablehnen
          </button>
          <button
            onClick={accept}
            className="px-5 py-2 text-sm font-medium bg-[#60A5FA] text-[#0D1930] hover:bg-[#60A5FA]/90 transition-colors"
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
