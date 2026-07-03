import { useLanguage } from "@/lib/language-context";

interface LanguageSwitcherProps {
  variant?: "dark" | "light";
}

export default function LanguageSwitcher({ variant = "dark" }: LanguageSwitcherProps) {
  const { language, setLanguage, t } = useLanguage();

  const activeClass = variant === "dark" ? "text-white" : "text-[#1A1815]";
  const inactiveClass = variant === "dark" ? "text-[#B8C2D4] hover:text-white" : "text-[#1A1815]/50 hover:text-[#1A1815]";

  return (
    <div
      className="flex items-center gap-1 font-mono text-sm"
      role="group"
      aria-label={t.common.langSwitchLabel}
      data-testid="language-switcher"
    >
      <button
        type="button"
        onClick={() => setLanguage("de")}
        className={`px-1 transition-colors ${language === "de" ? activeClass + " font-semibold" : inactiveClass}`}
        aria-pressed={language === "de"}
        data-testid="button-lang-de"
      >
        DE
      </button>
      <span className={variant === "dark" ? "text-[#B8C2D4]" : "text-[#1A1815]/40"}>/</span>
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`px-1 transition-colors ${language === "en" ? activeClass + " font-semibold" : inactiveClass}`}
        aria-pressed={language === "en"}
        data-testid="button-lang-en"
      >
        EN
      </button>
    </div>
  );
}
